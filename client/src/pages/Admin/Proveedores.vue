<template>
    <div class="q-my-xl">
        <div class="text-h5 estilo-titulos text-center text-weight-bold q-mx-md q-my-xl">Emprendedores</div>

        <div class="row justify-around">
            <div class="col-4 row justify-center q-mb-xl" v-for="(card, index) in proveedores" :key="index">
                <q-card class="shadow-11" style="width: 330px">
                    <q-img :src="card.perfil ? baseu + card._id : 'noimg.png'" style="width: 330px; height: 200px" @click="$router.push('/perfil_proveedor/' + card._id)" />

                    <q-card-section>
                        <div class="row no-wrap items-center">
                            <div class="col text-h6 ellipsis">{{card.nombreEmpresa}}</div>
                            <div class="col-auto q-pt-xs row items-center">
                                <q-toggle
                                    @input="disableEnable(card._id, card.enable)"
                                    v-model="card.enable"
                                    checked-icon="lock_open"
                                    unchecked-icon="lock"
                                    :color="card.enable ? 'green-14' : 'red'"
                                    keep-color
                                />
                            </div>
                        </div>
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                        <div class="row" style="width:100%">
                            <q-icon class="col-1" name="room" color="blak" style="font-size: 1.3rem;"/>
                            <div class="q-pl-xs text-grey-9 text-subtitle2">{{card.direccionFisica ? card.direccionFisica : 'Dirección'}}</div>
                        </div>
                        <div class="row" style="width:100%">
                            <q-icon class="col-1" name="email" color="blak" style="font-size: 1.3rem;"/>
                            <div class="q-pl-xs text-grey-9 text-subtitle2">{{card.email}}</div>
                        </div>
                        <div class="row" style="width:100%">
                            <q-icon class="col-1" name="phone" color="blak" style="font-size: 1.3rem;"/>
                            <div class="q-pl-xs text-grey-9 text-subtitle2">{{card.telefono}}</div>
                        </div>
                    </q-card-section>

                    <q-separator />

                    <q-card-actions>
                        <q-btn flat round icon="event" />
                        <div>Abierto</div>
                    </q-card-actions>
                </q-card>
            </div>
        </div>
    </div>
</template>

<script>
import env from '../../env'
export default {
  data () {
    return {
      baseu: '',
      proveedores: []
    }
  },
  mounted () {
    this.getData()
    this.baseu = env.apiUrl + '/perfil_img/'
  },
  methods: {
    getData () {
      this.$api.get('proveedores').then(res => {
        if (res) {
          this.proveedores = res
        }
      })
    },
    disableEnable (id, enable) {
      this.$api.post('proveedor_enable/' + id, { enable: enable }).then(res => {
        if (res) {
          this.getData()
        }
      })
    }
  }
}
</script>

<style>
.estilo-titulos {
  background-color: #fff599;
  width: 300px;
  border-radius: 12px
}
</style>
