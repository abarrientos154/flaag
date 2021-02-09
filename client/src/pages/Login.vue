<template>
  <q-layout>
    <q-page-container class="fondo">
      <q-page class="row justify-center items-center">
        <q-card class="shadow-3 card-border q-ma-md responsive-web">
          <q-card-section>
            <div class="col column items-center justify-center">
                <div class="row justify-center">
                  <img src="icons/favicon-128x128.png" alt="logo" style="width: 50%;height:50%">
                </div>

                <div>
                  <div class="text-h6 text-grey-9" style="text-align: center">FLAAG</div>
                </div>
            </div>
            <q-form @submit="onSubmit" class="q-gutter-sm q-ma-sm">
              <div>
                <q-input class="text-bold input-style q-pl-sm" type="email" v-model="form.email" label="Correo electrónico">
                  <template v-slot:prepend>
                    <q-icon color="primary" name="mail"></q-icon>
                  </template>
                </q-input>
              </div>

              <div>
                <q-input class="text-bold input-style q-pl-sm q-pr-sm" :type="isPwd ? 'password' : 'text'" v-model="form.password" label="Contraseña">
                  <template v-slot:prepend>
                    <q-icon color="primary" name="vpn_key"></q-icon>
                  </template>
                  <template v-slot:append>
                    <q-icon :name="isPwd ? 'visibility' : 'visibility_off'" class="cursor-pointer" color="primary" @click="isPwd = !isPwd"/>
                  </template>
                </q-input>
              </div>

              <div class="text-center q-ma-sm">
                <q-btn push color="primary" class="button-login q-mt-sm" label="Iniciar Sesion" :loading="loading" type="submit">
                  <template v-slot:loading>
                    <q-spinner-hourglass class="on-left" />
                    Cargando...
                  </template>
                </q-btn>
              </div>
              <q-separator inset class="q-mt-lg q-mb-lg" />
            </q-form>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      form: {},
      isPwd: true,
      loading: false
    }
  },
  methods: {
    ...mapMutations('generals', ['login']),
    onSubmit () {
      this.$q.loading.show({
        message: 'Iniciando sesión'
      })
      this.$api.post('login', this.form).then(res => {
        if (res) {
          const client = res.FLAAG_SESSION_INFO.roles.find(value => value === 1)
          if (client) {
            this.login(res)
            this.$router.push('index')
          } else {
            this.login(res)
            this.$router.push('index')
          }
        } else {
          console.log('hubo un error')
        }
      })
      this.$q.loading.hide()
    }
  }
}
</script>
<style lang="css" scoped>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
}
.gray {
  color: rgb(0, 0, 0);
}
</style>
