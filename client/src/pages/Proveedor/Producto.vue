<template>
  <q-page>
    <q-card class="q-ma-sm q-pa-md">
      <div class="text-h6 text-grey-7"> Nuevo Producto </div>
      <div class="row q-pa-sm justify-around q-mt-md">
        <div class="full-width q-pa-sm">
          <q-input v-model="form.nombre" label="Nombre" outlined
          />
        </div>
        <div class="full-width q-pa-sm">
          <q-input v-model="form.descripcion" label="Descripcion" outlined type="textarea"
          />
        </div>
        <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6 q-pa-sm">
          <q-select v-model.number="form.categoria_id" label="Categoria" outlined :options="categorias" map-options emit-value @input="reiniciarCat(1)"
          option-value="id" option-label="nombre"
          />
        </div>
        <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6 q-pa-sm" v-if="optionNivelUno.length > 0">
          <q-select v-model.number="form.subniveluno_id" label="SubCategoria A" outlined :options="optionNivelUno" map-options emit-value @input="reiniciarCat(2)"
          option-value="id" option-label="nombre"
          />
        </div>
        <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6 q-pa-sm" v-if="optionNivelDos.length > 0">
          <q-select v-model.number="form.subniveldos_id" label="SubCategoria B" outlined :options="optionNivelDos" map-options emit-value @input="reiniciarCat(3)"
          option-value="id" option-label="nombre"
          />
        </div>
        <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6 q-pa-sm" v-if="optionNivelTres.length > 0">
          <q-select v-model.number="form.subniveltres_id" label="SubCategoria B" outlined :options="optionNivelTres" map-options emit-value
          option-value="id" option-label="nombre"
          />
        </div>
        <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6 q-pa-sm">
          <q-input v-model.number="form.cantidad" label="Cantidad" outlined type="number"
          />
        </div>
        <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6 q-pa-sm">
          <q-input v-model.number="form.valor" label="Valor" outlined type="number"
          />
        </div>
      </div>
      <div class="column q-mt-md q-ma-sm" style="border-radius:12px;box-shadow: -2px 2px grey;">
        <div class="text-center text-grey-6 q-mt-lg">Imagenes del producto (hasta 5 imagenes)</div>
        <div class="row full-width q-pa-md items-center">
          <div class="q-gutter-xs row" v-if="images && images.length > 0">
            <q-img v-for="(item, index) in imagesSubir" :key="index" :src="item" style="height:100px;border-radius:12px;width:140px" >
              <q-btn @click="images.splice(index, 1), imagesSubir.splice(index, 1)" flat class="absolute all-pointer-events" size="15px" dense icon="delete" color="negative" style="top: 0px; left: 0px" rounded />
            </q-img>
          </div>
          <div v-if="images.length < 5"  class="column shadow-3 justify-center items-center q-ma-sm q-ml-sm bg-grey-2" style="height:100px;border-radius:12px;width:140px">
            <div class="text-center text-primary q-mb-sm" style="text-decoration: underline">Agregar Imagen</div>
            <q-avatar size="50px">
              <div style="z-index:1">
                <q-file borderless v-model="img" class="button-camera" @input="insertarImagen()" accept=".jpg, image/*">
                  <q-icon name="add" class="absolute-center" size="20px" color="white" />
                </q-file>
              </div>
            </q-avatar>
          </div>
        </div>
      </div>

      <q-card-actions align="center">
        <q-btn label="guardar" @click="guardar()" color="primary" push style="width:50%" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      categorias: [],
      subnivelunoOpciones: [],
      subniveldosOpciones: [],
      subniveltresOpciones: [],
      form: {
      },
      images: [],
      imagesSubir: [],
      img: null
    }
  },
  computed: {
    optionNivelUno () {
      return this.subnivelunoOpciones.filter(v => v.categoria_id === this.form.categoria_id)
    },
    optionNivelDos () {
      return this.subniveldosOpciones.filter(v => v.subniveluno_id === this.form.subniveluno_id)
    },
    optionNivelTres () {
      return this.subniveltresOpciones.filter(v => v.subniveldos_id === this.form.subniveldos_id)
    }
  },
  mounted () {
    this.getCategorias()
  },
  methods: {
    reiniciarCat (ind) {
      if (ind === 1) {
        delete this.form.subniveluno_id
        delete this.form.subniveldos_id
        delete this.form.subniveltres_id
      } else if (ind === 2) {
        delete this.form.subniveldos_id
        delete this.form.subniveltres_id
      } else if (ind === 3) {
        delete this.form.subniveltres_id
      }
    },
    async guardar () {
      var formData = new FormData()
      var files = this.images
      console.log(files, 'afiles')
      if (files.length > 0) {
        for (let i = 0; i < this.images.length; i++) {
          formData.append('files' + i, files[i])
        }
        this.form.cantidadFiles = files.length
      } else { this.form.cantidadFiles = 0 }
      formData.append('dat', JSON.stringify(this.form))
      await this.$api.post('producto', formData, {
        headers: {
          'Content-Type': undefined
        }
      }).then(res => {
        if (res) {
          this.$q.notify({
            message: 'Producto agregado Correctamente',
            color: 'positive'
          })
          this.$router.go(-1)
        }
      })
    },
    insertarImagen () {
      this.images.push(this.img)
      this.imagesSubir.push(URL.createObjectURL(this.img))
      this.img = null
      console.log(this.images, 'asasdsd')
    },
    getCategorias () {
      this.$api.get('categorias_y_sub').then(res => {
        if (res) {
          console.log(res, 'resss')
          this.categorias = res.categoria
          this.subnivelunoOpciones = res.subniveluno
          this.subniveldosOpciones = res.subniveldos
          this.subniveltresOpciones = res.subniveltres
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.button-camera {
  text-decoration: none;
  padding: 10px;
  font-weight: 540;
  font-size: 0px;
  color: white;
  background-color: $primary;
  border-radius: 30px;
  border: 1px solid #6a6a6a;
  height:40px;
  width:40px;
  cursor: pointer;
}
</style>
