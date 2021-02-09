<template>
  <div>
    <div class="bg-primary shadow-3 full-width column justify-center" style="height:80px;border-bottom-left-radius:20px;border-bottom-right-radius:20px;">
      <div class="text-white text-bold text-h6 text-center"> Ingresa tus Datos </div>
      <q-btn color="white" icon="arrow_back" flat round style="position:absolute;top:0px;left:0px" />
    </div>
    <q-card class="q-pa-sm q-ma-sm q-mt-xl" style="border-radius:20px;border:1px solid bg-orange">
      <div class="q-mb-md row justify-center">
        <q-img :src="perfil ? perfilImg : 'noimg.png'" style="width:150px;height:150px;border-radius:100%" >
          <div class="absolute-center bg-transparent text-center" style="width: 100%">
            <div class="absolute-center" style="z-index:1">
              <q-file borderless v-model="perfil" class="button-subir" @input="changePerfil()" accept=".jpg, image/*">
                <q-avatar class="absolute-center cursor-pointer">
                  <q-icon name="cloud_upload" color="white" class="absolute-center" />
                </q-avatar>
              </q-file>
            </div>
          </div>
        </q-img>
      </div>
      <div class="q-pa-sm row justify-center q-gutter-xs">
        <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6">
          <q-input v-model="form.name" label="Nombre" outlined
            error-message="Requerido" :error="$v.form.name.$error" @blur="$v.form.name.$touch()"
          />
        </div>
        <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6">
          <q-input v-model="form.lastName" label="Apellido" outlined
            error-message="Requerido" :error="$v.form.lastName.$error" @blur="$v.form.lastName.$touch()"
          />
        </div>
        <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6">
          <q-input v-model="form.email" label="Email" outlined type="email"
            error-message="Requerido" :error="$v.form.email.$error" @blur="$v.form.email.$touch()"
          />
        </div>
        <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6">
          <q-input :type="isPwd ? 'password' : 'text'" v-model="password" label="Contraseña" outlined
            error-message="ingrese una contraseña valida, minimo de caracteres es de 6" :error="$v.password.$error" @blur="$v.password.$touch()">
            <template v-slot:append>
              <q-icon :name="isPwd ? 'visibility' : 'visibility_off'" class="cursor-pointer q-pa-sm" color="primary" @click="isPwd = !isPwd" />
            </template>
          </q-input>
        </div>
        <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6">
          <q-input :type="isPwd ? 'password' : 'text'" v-model="repeatPassword" label="Confirmar Contraseña" outlined
            error-message="ingrese una contraseña valida, minimo de caracteres es de 6" :error="$v.repeatPassword.$error" @blur="$v.repeatPassword.$touch()">
            <template v-slot:append>
              <q-icon :name="isPwd ? 'visibility' : 'visibility_off'" class="cursor-pointer q-pa-sm" color="primary" @click="isPwd = !isPwd" />
            </template>
          </q-input>
        </div>
        <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6 q-mt-md">
          <q-input v-model="form.direccion" label="Direccion" outlined
          />
        </div>
        <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6 q-mt-md">
          <q-input v-model="form.direccion" label="Direccion" outlined
          />
        </div>
        <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6 q-mt-md">
          <q-input v-model="form.telefono" label="Telefono" outlined
          />
        </div>
      </div>
      <q-card-actions align="center">
        <q-btn color="primary" label="Guardar" push style="width:50%" />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import { required, email, sameAs, maxLength, minLength } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      form: {},
      perfil: null,
      perfilImg: null,
      isPwd: true,
      password: '',
      repeatPassword: ''
    }
  },
  validations: {
    form: {
      name: { required },
      lastName: { required },
      email: { email, required }
    },
    repeatPassword: { sameAsPassword: sameAs('password') },
    password: { required, maxLength: maxLength(256), minLength: minLength(6) }
  },
  methods: {
    registrar () {

    },
    changePerfil () {
      if (this.perfil) { this.perfilImg = URL.createObjectURL(this.perfil) }
    }
  }
}
</script>

<style lang="scss" scoped>
.button-subir {
  text-decoration: none;
  padding: 10px;
  font-weight: 540;
  font-size: 0px;
  color: #0016b0;
  background-color: $primary;
  border-radius: 30px;
  border: 1px solid #7e7e7e;
  height:40px;
  width: 40px;
}
</style>
