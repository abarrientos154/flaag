<template>
  <div style="height:100%">
      <q-img :src="baseu + perfile" spinner-color="white" style="height: 250px; width: 100%;">
        <div class="row no-wrap justify-between" style="width:100%">
            <div class="col text-h6 text-white text-weight-bolder ellipsis">{{data.datos_proveedor.nombreEmpresa}}</div>
            <q-btn no-caps flat icon="store" label="Ir" color="white" @click="rol !== 1 ? $router.push('/tienda/' + data.datos_proveedor._id) : $router.push('/proveedor/' + data.datos_proveedor._id)" />
        </div>
        <div class="row absolute-bottom" style="width:100%">
          <q-icon class="col-1" name="room" color="blak" style="font-size: 1.5rem;"/>
          <div class="q-pl-md q-pt-xs text-caption">{{data.datos_proveedor.direccionFisica}}</div>
        </div>
      </q-img>

      <q-card class="q-pa-sm bg-primary shadow-up-3 q-my-sm" style="border-top-left-radius:25px;border-top-right-radius:25px;border-bottom-left-radius:25px;border-bottom-right-radius:25px">
          <q-item>
            <q-item-section>
              <q-item-label class="text-h6 text-weight-bolder">{{data.nombre}}</q-item-label>
            </q-item-section>
          </q-item>
          <q-scroll-area
          horizontal
          style="height: 110px;"
        >
          <div class="row no-wrap" style="width: 100%">
            <q-card @click="perfile = img" v-for="(img, index) in data.images" class="bg-secondary q-mt-xs q-mr-sm" style="border-radius:12px;width: 100px" :key="index">
              <q-img :src="data.images ? baseu + img : 'noimg.png'" spinner-color="white" style="height: 100px; width: 100px" />
            </q-card>
          </div>
        </q-scroll-area>
      </q-card>

      <q-card class="bordes bg-grey-3 q-pa-md shadow-11" style="border-top-left-radius:25px;border-top-right-radius:25px;border-bottom-left-radius:25px;border-bottom-right-radius:25px;min-height:240px">
        <div class="q-pa-md">{{data.descripcion}}</div>
      </q-card>

      <div v-if="rol !== 1" class="row justify-center q-pa-sm q-mt-md">
        <q-btn glossy icon="add_shopping_cart" label="Comprar" color="primary" text-color="black" style="width:80%" @click="login ? addCarrito() : $router.push('/login')" />
      </div>
  </div>
</template>

<script>
import env from '../env'
export default {
  props: ['data', 'lugar'],
  data () {
    return {
      baseu: '',
      perfile: '',
      rol: 0,
      login: true
    }
  },
  mounted () {
    this.baseu = env.apiUrl + '/producto_files/'
    this.perfile = this.data.images[0]
    const value = localStorage.getItem('FLAAG_SESSION_INFO')
    if (!value) {
      this.login = false
    } else {
      this.getInfo()
    }
  },
  methods: {
    addCarrito () {
      if (this.lugar === 'tienda') {
        this.$emit('compra', this.data)
      } else {
        this.$router.push('/tienda/' + this.data.proveedor_id + '/' + this.data._id)
      }
    },
    getInfo () {
      this.$api.get('user_info').then(res => {
        if (res) {
          this.rol = res.roles[0]
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.bordes {
  border: 6px solid $primary
}
</style>
