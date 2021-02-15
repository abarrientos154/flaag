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
          <q-input v-model.number="form.cantidad" label="Cantidad" outlined type="number"
          />
        </div>
        <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6 q-pa-sm">
          <q-input v-model.number="form.valor" label="Valor" outlined type="number"
          />
        </div>
      </div>
      <div class="column shadow-3 q-mt-md">
        <div class="text-center text-grey-6 q-mt-lg">Imagenes de la Tienda</div>
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
    </q-card>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      form: {
      },
      images: [],
      imagesSubir: [],
      img: null
    }
  },
  computed: {
  },
  mounted () {
  },
  methods: {
    insertarImagen () {
      this.images.push(this.img)
      this.imagesSubir.push(URL.createObjectURL(this.img))
      this.img = null
      console.log(this.images, 'asasdsd')
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
