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
                <q-img :src="card.img" style="height: 200px; width: 360px" />
            </q-card>
          </div>

          <div class="q-gutter-xl">
            <div class="text-h5 estilo-titulos text-center text-weight-bold">Primer Carrusel Publicitario</div>
            <q-card clickable v-ripple class="shadow-11" v-for="(card, index) in slPublicidad1" :key="index">
                <q-img :src="card.img" style="height: 200px; width: 360px" />
            </q-card>
          </div>

          <div class="q-gutter-xl">
            <div class="text-h5 estilo-titulos text-center text-weight-bold">Segundo Carrusel Publicitario</div>
            <q-card clickable v-ripple class="shadow-11" v-for="(card, index) in slPublicidad1" :key="index">
                <q-img :src="card.img" style="height: 200px; width: 360px" />
            </q-card>
          </div>
      </div>

      <q-dialog
      v-model="addPublicidad"
        >
        <q-card>
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Close icon</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
        </q-card-section>
      </q-card>
      </q-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      addPublicidad: false,
      slPublicidad1: [
        { img: 'slide1.jpg', ruta: '/', tipo: 'Publicidad1' },
        { img: 'slide2.jpg', ruta: '/', tipo: 'Publicidad1' },
        { img: 'slide3.jpg', ruta: '/', tipo: 'Publicidad1' },
        { img: 'slide4.jpg', ruta: '/', tipo: 'Publicidad1' },
        { img: 'slide5.jpg', ruta: '/', tipo: 'Publicidad1' }
      ]
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style>
.estilo-titulos {
  background-color: #fff599;
  border-radius: 12px
}
</style>
