<template>
  <q-page>
    <div class="text-h5 estilo-titulos text-center text-weight-bold q-mx-md q-my-xl">Productos</div>
    <div class="row justify-around">
      <div class="row justify-around q-mb-lg" v-for="(card, index) in data" :key="index">
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
          <q-card-actions align="between">
            <q-btn label="eliminar" icon="delete" color="negative" @click="confirmEliminar(card._id)" />
            <q-btn label="editar" icon="edit" color="primary" @click="$router.push('/producto/' + card._id)" />
          </q-card-actions>
        </q-card>
      </div>
    </div>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="add" color="primary" label="Nuevo Producto" @click="$router.push('/producto')" />
    </q-page-sticky>
  </q-page>
</template>

<script>
import env from '../../env'
export default {
  data () {
    return {
      data: [],
      proveedor_id: this.$route.params.proveedor_id,
      baseu: ''
    }
  },
  mounted () {
    this.baseu = env.apiUrl + '/producto_files/'
    if (this.$route.params.proveedor_id) {
      this.getProductosByProveedor()
    } else {
      this.getProductos()
    }
  },
  methods: {
    eliminar (id) {
      this.$q.loading.show()
      this.$api.delete('producto/' + id).then(res => {
        this.$q.loading.hide()
        if (res) {
          this.$q.notify({
            message: 'Eliminado Correctamente',
            color: 'positive'
          })
          location.reload()
        }
      })
    },
    confirmEliminar (id) {
      this.$q.dialog({
        title: '¡Atención!',
        message: '¿Esta seguro que Quiere Eliminar Este Producto?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.eliminar(id)
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    },
    getProductos () {
      this.$api.get('productos').then(res => {
        if (res) {
          this.data = res
          console.log(res, 'res')
        }
      })
    },
    getProductosByProveedor () {
      this.$api.get('productos').then(res => {
        if (res) {
          this.data = res
          console.log(res, 'res')
        }
      })
    }

  }
}
</script>

<style>

</style>
