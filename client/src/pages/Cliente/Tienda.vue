<template>
  <q-page>
    <q-img :src="user.perfil ? baseuImgTienda : 'noimg.png'" style="height:300px; width: 100%" >
      <div class="full-width full-height">
        <div class="row absolute-center">
          <h1 class="text-h4 text-primary text-bold"> {{user.nombreEmpresa ? user.nombreEmpresa : 'Nombre Empresa'}} </h1>
        </div>
      </div>
    </q-img>
    <div>
      <q-scroll-area horizontal style="height: 100px; width: 100%;" class="bg-grey-3"
      >
        <div class="row no-wrap q-mx-md">
            <div class="q-ml-sm column justify-center" style="height: 100px" v-for="(item, index) in categorias" :key="index">
                <q-btn :label="item.nombre" :color="item.active ? 'primary':'white'" :text-color="item.active ? 'white':'primary'" rounded style="height: 60px; width:200px" @click="activarB(index)" />
            </div>
        </div>
      </q-scroll-area>
    </div>
    <div class="text-h5 estilo-titulos text-center text-weight-bold q-mx-md q-my-xl">Productos</div>
    <div class="row justify-around" v-if="filtrarProCa.length > 0">
      <div class="row justify-around q-mb-lg" v-for="(card, index) in filtrarProCa" :key="index">
        <q-card class="bg-amber-3 shadow-11 bordes" style="width: 330px">
          <q-img :src="card.images.length > 0 ? baseu + card.images[0] : 'noimgproducto.png'" style="width: 322px; height: 200px" />
          <q-card-section>
            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">{{card.nombre}}</div>
            </div>
          </q-card-section>
          <q-card-section class="q-pt-none">
            <div class="row" style="width:100%">
              <q-icon class="col-1" name="description" color="black" style="font-size: 1.3rem;"/>
              <div class="q-pl-xs text-grey-9 text-subtitle2">{{card.descripcion}}</div>
            </div>
            <div class="row" style="width:100%">
              <q-icon class="col-1" name="category" color="black" style="font-size: 1.3rem;"/>
              <div class="q-pl-xs text-grey-9 text-subtitle2">{{card.categoria_info.nombre}}</div>
            </div>
            <div class="row items-center" style="width:100%">
              <q-icon v-if="!card.oferta" class="col-1" name="attach_money" color="black" style="font-size: 1.3rem;"/>
              <div v-if="!card.oferta" class="q-pl-xs text-grey-9 text-subtitle2" :class="card.oferta ? 'text-strike' : ''" >{{card.valor}}</div>
              <q-chip v-if="card.oferta" icon="attach_money" color="amber" class="text-subtitle2">
                <div class="q-mr-md text-strike">{{card.valor}}</div>
                -
                <div class="q-ml-md">{{card.ofertaVal}}</div>
              </q-chip>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div v-else class="row justify-center full-width full-height items-center q-pa-xl">
      <div class="text-h5">
        :( Sin Nada Por Aqui
      </div>
    </div>
  </q-page>
</template>

<script>
import env from '../../env'
export default {
  data () {
    return {
      baseuImgTienda: '',
      data: [],
      buscar: 0,
      proveedor_id: '',
      baseu: '',
      categorias: [],
      subnivelunoOpciones: [],
      subniveldosOpciones: [],
      subniveltresOpciones: [],
      user: {}
    }
  },
  computed: {
    filtrarProCa () {
      if (this.buscar === 0) {
        return this.data
      } else {
        return this.data.filter(v => v.categoria_id === this.buscar)
      }
    }
  },
  mounted () {
    this.baseu = env.apiUrl + '/producto_files/'
    this.proveedor_id = this.$route.params.proveedor_id
    this.getInfoById(this.proveedor_id)
    this.getProductosByProveedor(this.proveedor_id)
  },
  methods: {
    activarB (ind) {
      const indexActual = this.categorias.findIndex(v => v.active)
      this.categorias[indexActual].active = false
      this.categorias[ind].active = true
      this.buscar = ind
    },
    getInfoById (id) {
      this.$api.post('user_by_id/' + id).then(res => {
        this.user = res
        this.baseuImgTienda = env.apiUrl + '/perfil_img/' + res._id
        this.getCategorias(this.user.id)
      })
    },
    getCategorias (id) {
      this.$api.post('categorias_no_logueado/' + id).then(res => {
        if (res) {
          const cate = res.categoria.map(v => {
            return {
              ...v,
              active: false
            }
          })
          this.categorias.push({
            nombre: 'Todos',
            todos: true
          })
          this.categorias = this.categorias.concat(cate)
          this.categorias[0].active = true
          this.subnivelunoOpciones = res.subniveluno
          this.subniveldosOpciones = res.subniveldos
          this.subniveltresOpciones = res.subniveltres
        }
      })
    },
    getProductosByProveedor (id) {
      this.$api.get('productos/' + id).then(res => {
        if (res) {
          this.data = res
        }
      })
    }

  }
}
</script>

<style lang="scss">
h1 {
  text-shadow: 4px 4px 8px $secondary;
}
</style>
