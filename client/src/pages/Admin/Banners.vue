<template>
  <div>
      <div class="row justify-end q-pa-md">
          <q-btn colo="primary" label="Nuevo" @click="addPublicidad = true" />
      </div>
      <q-separator />

      <div class="row justify-around q-my-xl">
          <div class="q-gutter-xl">
            <div class="text-h5 estilo-titulos text-center text-weight-bold">Carrusel Principal</div>
            <q-card clickable v-ripple class="shadow-11" v-for="(card, index) in slPublicidad1" :key="index">
                <q-img :src="card.img" style="height: 200px; width: 360px">
                    <div class="row justify-end bg-transparent" style="width:100%">
                        <q-toggle
                        v-model="enable"
                        checked-icon="lock_open"
                        unchecked-icon="lock"
                        :color="enable ? 'green-14' : 'red'"
                        keep-color
                        />
                    </div>
                </q-img>
            </q-card>
          </div>

          <div class="q-gutter-xl">
            <div class="text-h5 estilo-titulos text-center text-weight-bold">Carrusel Publicitario</div>
            <q-card clickable v-ripple class="shadow-11" v-for="(card, index) in slPublicidad1" :key="index">
                <q-img :src="card.img" style="height: 200px; width: 360px">
                    <div class="row justify-end bg-transparent" style="width:100%">
                        <q-toggle
                        v-model="enable"
                        checked-icon="lock_open"
                        unchecked-icon="lock"
                        :color="enable ? 'green-14' : 'red'"
                        keep-color
                        />
                    </div>
                </q-img>
            </q-card>
          </div>
      </div>

      <q-dialog
        v-model="addPublicidad"
        >
        <q-card style="width: 100%; height: 90%">
            <q-card-section class="row items-center q-pb-none">
                <div class="text-h6">Nueva Publicidad</div>
                <q-space />
                <q-btn icon="close" flat round dense v-close-popup />
            </q-card-section>

            <q-card-section>
                <div class="q-gutter-sm">
                    <q-radio color="primary" v-model="form.tipo" val="principal" label="Publicidad Principal" />
                    <q-radio color="primary" v-model="form.tipo" val="publicidad1" label="Sector publicitario 1" />
                    <q-radio color="primary" v-model="form.tipo" val="publicidad2" label="Sector publicitario 2" />
                </div>
                 <q-input class="q-mt-md" outlined rounded v-model="form.ruta" placeholder="Ingrese la ruta de la publicidad" :error="$v.form.ruta.$error" error-message="Este campo es requerido" @blur="$v.form.ruta.$touch()" />
            </q-card-section>

            <q-card-section>
                <div class="row justify-between">
                    <div class="col-10">
                        <q-file style="width: 100%" @input="filePublicidad" accept=".jpg, image/*" v-model="publicidadFile" outlined label="CLICK AQUÍ" hint="Ingresa una foto para esta publicidad" :error="$v.publicidadFile.$error" error-message="Este campo es requerido" @blur="$v.publicidadFile.$touch()">
                        </q-file>
                    </div>
                    <div class="col-2 row justify-center">
                        <q-icon size="md" name="close" color="negative" @click="publicidadFile = null, imgPublicidad = ''" class="cursor-pointer" />
                    </div>
                </div>
            </q-card-section>

            <q-separator />

            <q-card-section class="row justify-around">
                <div v-if="imgPublicidad === ''" class="text-subtitle2 text-grey text-center">Carga una imagen para la publicidad</div>
                <div v-else>
                    <q-img
                        :src="imgPublicidad !== '' ? imgPublicidad : 'favicon.ico'"
                        style="width:400px"
                    />
                </div>
            </q-card-section>
        </q-card>
      </q-dialog>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      addPublicidad: false,
      publicidadFile: null,
      imgPublicidad: '',
      enable: false,
      form: {
        tipo: 'principal'
      },
      slPublicidad1: [
        { img: 'slide1.jpg', ruta: '/', tipo: 'Publicidad1' },
        { img: 'slide2.jpg', ruta: '/', tipo: 'Publicidad1' },
        { img: 'slide3.jpg', ruta: '/', tipo: 'Publicidad1' },
        { img: 'slide4.jpg', ruta: '/', tipo: 'Publicidad1' },
        { img: 'slide5.jpg', ruta: '/', tipo: 'Publicidad1' }
      ]
    }
  },
  validations: {
    form: {
      tipo: { required },
      ruta: { required }
    },
    publicidadFile: { required }
  },
  mounted () {
  },
  methods: {
    filePublicidad () {
      var img = ''
      var cc = {}
      cc = this.publicidadFile
      img = URL.createObjectURL(cc)
      this.imgPublicidad = img
    }
  }
}
</script>

<style>
.estilo-titulos {
  background-color: #fff599;
  border-radius: 12px
}
</style>
