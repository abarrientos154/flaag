<template>
  <div>
    <q-carousel
        v-model="slide1"
        style="height: 850px; width: 100%"
        navigation
        infinite
        :autoplay="autoplay1"
        @mouseenter="autoplay1 = false"
        @mouseleave="autoplay1 = true"
        >
        <q-carousel-slide :name="index + 1" :img-src="!img.caso ? baseuPublicidad + img.fileName : img.fileName"  v-for="(img, index) in slPrincipal" :key="index">
            <div class="absolute-center bg-transparent q-mx-md" style="width: 100%">
                <div class="text-h3 text-bold text-black q-mb-md">¿Tienes hambre? Estás en el lugar correcto</div>
                <div class="row items-center">
                    <q-input class="col-6 q-mt-md" color="black" bg-color="white" filled bottom-slots v-model="tienda" placeholder="Ingresa el nombre de una tienda">
                        <template v-slot:prepend>
                            <q-icon name="store" color="black" />
                        </template>
                        <template v-slot:append>
                            <q-btn :label="tienda.length ? 'Borrar' : ''" @click="tienda.length ? tienda = '' : ''" no-caps flat />
                        </template>
                    </q-input>
                    <q-btn class="col-2 q-ml-sm q-py-sm" size="md" color="black" label="Buscar" no-caps />
                </div>
            </div>
        </q-carousel-slide>
    </q-carousel>

    <q-carousel
      v-model="slide2"
      ref="carousel2"
      :autoplay="autoplay2"
      @mouseenter="autoplay2 = false"
      @mouseleave="autoplay2 = true"
      swipeable
      animated
      infinite
      height="330px"
      class="bg-transparent q-my-md"
    >
      <q-carousel-slide :name="index + 1" v-for="(value, name, index) in slLogos" :key="index" class="column no-wrap">
        <div class="row fit justify-around items-center no-wrap">
          <div v-for="(img, index2) in value" :key="index2" style="height: 200px">
            <q-avatar size="180px"><img :src="img.perfil ? baseuLogos + img._id : 'noimg.png'" ></q-avatar>
            <div class="text-center text-weight-bold q-mt-sm" style="width: 180px">{{img.nombreEmpresa}}</div>
          </div>
        </div>
      </q-carousel-slide>

      <template v-slot:control>
        <q-carousel-control
          position="top-right"
          :offset="[18, 18]"
          class="q-gutter-xs"
        >
          <q-btn flat no-caps dense text-color="black" class="q-mr-md"><u>Ver todos</u></q-btn>
          <q-btn push round dense color="grey-4" text-color="black" icon="arrow_left" @click="$refs.carousel2.previous()" />
          <q-btn push round dense color="grey-4" text-color="black" icon="arrow_right" @click="$refs.carousel2.next()" />
        </q-carousel-control>
      </template>
    </q-carousel>
    <q-separator />

    <q-carousel
      v-model="slide3"
      ref="carousel3"
      animated
      infinite
      height="330px"
      class="bg-transparent q-my-md"
    >
      <q-carousel-slide :name="index + 1" v-for="(value, name, index) in slPublicidad1" :key="index" class="column no-wrap">
        <div class="row fit justify-around items-center no-wrap">
          <q-card clickable v-ripple class="shadow-11" v-for="(card, index2) in value" :key="index2">
              <q-img :src="!card.caso ? baseuPublicidad + card.fileName : card.fileName" style="height: 200px; width: 360px" />
          </q-card>
        </div>
      </q-carousel-slide>

      <template v-slot:control>
        <q-carousel-control
          position="top-right"
          :offset="[18, 18]"
          class="q-gutter-xs"
        >
          <q-btn flat no-caps dense text-color="black" class="q-mr-md"><u>Ver todos</u></q-btn>
          <q-btn push round dense color="grey-4" text-color="black" icon="arrow_left" @click="$refs.carousel3.previous()" />
          <q-btn push round dense color="grey-4" text-color="black" icon="arrow_right" @click="$refs.carousel3.next()" />
        </q-carousel-control>
      </template>
    </q-carousel>
    <q-separator />

    <q-carousel
      v-model="slide4"
      ref="carousel4"
      animated
      infinite
      height="360px"
      class="bg-transparent q-my-md"
    >
      <q-carousel-slide :name="index + 1" v-for="(value, name, index) in slNuevo" :key="index" class="column no-wrap">
        <div class="text-h5 text-bold q-ml-md">Lo nuevo en Flaag</div>
        <div class="row fit justify-around items-center no-wrap">
          <q-card class="shadow-11" v-for="(card, index2) in value" :key="index2" style="width: 250px">
            <q-img :src="!card.caso ? baseuProducto + card.images[0] : card.images[0]" style="height: 120px; width: 250px" />

            <q-card-section>
              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis">{{card.nombre}}</div>
              </div>
              <div class="row no-wrap justify-end q-mt-md">
                <q-chip v-if="!card.oferta" icon="attach_money" color="amber" class="text-caption">
                  <div class="q-mr-md">{{card.valor}}</div>
                </q-chip>
                <q-chip v-if="card.oferta" icon="attach_money" color="positive" class="text-caption">
                  <div class="q-mr-md text-strike">{{card.valor}}</div>
                  -
                  <div class="q-ml-md text-bold">{{card.ofertaVal}}</div>
                </q-chip>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </q-carousel-slide>

      <template v-slot:control>
        <q-carousel-control
          position="top-right"
          :offset="[18, 18]"
          class="q-gutter-xs"
        >
          <q-btn flat no-caps dense text-color="black" class="q-mr-md"><u>Ver todos</u></q-btn>
          <q-btn push round dense color="grey-4" text-color="black" icon="arrow_left" @click="$refs.carousel4.previous()" />
          <q-btn push round dense color="grey-4" text-color="black" icon="arrow_right" @click="$refs.carousel4.next()" />
        </q-carousel-control>
      </template>
    </q-carousel>
    <q-separator />

    <q-carousel
      v-model="slide5"
      ref="carousel5"
      animated
      infinite
      height="330px"
      class="bg-transparent q-my-md"
    >
      <q-carousel-slide :name="index + 1" v-for="(value, name, index) in slPublicidad2" :key="index" class="column no-wrap">
        <div class="row fit justify-around items-center no-wrap">
          <q-card clickable v-ripple class="shadow-11" v-for="(card, index2) in value" :key="index2">
              <q-img :src="!card.caso ? baseuPublicidad + card.fileName : card.fileName" style="height: 200px; width: 360px" />
          </q-card>
        </div>
      </q-carousel-slide>

      <template v-slot:control>
        <q-carousel-control
          position="top-right"
          :offset="[18, 18]"
          class="q-gutter-xs"
        >
          <q-btn flat no-caps dense text-color="black" class="q-mr-md"><u>Ver todos</u></q-btn>
          <q-btn push round dense color="grey-4" text-color="black" icon="arrow_left" @click="$refs.carousel5.previous()" />
          <q-btn push round dense color="grey-4" text-color="black" icon="arrow_right" @click="$refs.carousel5.next()" />
        </q-carousel-control>
      </template>
    </q-carousel>
    <q-separator />

    <q-carousel
      v-model="slide6"
      ref="carousel6"
      animated
      infinite
      height="360px"
      class="bg-transparent q-my-md"
    >
      <q-carousel-slide :name="index + 1" v-for="(value, name, index) in slTienda" :key="index" class="column no-wrap">
        <div class="text-h5 text-bold q-ml-md">Tienda</div>
        <div class="row fit justify-around items-center no-wrap">
          <q-card class="shadow-11" v-for="(card, index2) in value" :key="index2" style="width: 250px">
            <q-img :src="!card.caso ? baseuProducto + card.images[0] : card.images[0]" style="height: 120px; width: 250px" />

            <q-card-section>
              <div class="row no-wrap items-center">
                <div class="col text-subtitle2 ellipsis">{{card.nombre}}</div>
              </div>
              <div class="row no-wrap justify-end q-mt-md">
                <q-chip v-if="!card.oferta" icon="attach_money" color="amber" class="text-caption">
                  <div class="q-mr-md">{{card.valor}}</div>
                </q-chip>
                <q-chip v-if="card.oferta" icon="attach_money" color="positive" class="text-caption">
                  <div class="q-mr-md text-strike">{{card.valor}}</div>
                  -
                  <div class="q-ml-md text-bold">{{card.ofertaVal}}</div>
                </q-chip>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </q-carousel-slide>

      <template v-slot:control>
        <q-carousel-control
          position="top-right"
          :offset="[18, 18]"
          class="q-gutter-xs"
        >
          <q-btn flat no-caps dense text-color="black" class="q-mr-md"><u>Ver todos</u></q-btn>
          <q-btn push round dense color="grey-4" text-color="black" icon="arrow_left" @click="$refs.carousel6.previous()" />
          <q-btn push round dense color="grey-4" text-color="black" icon="arrow_right" @click="$refs.carousel6.next()" />
        </q-carousel-control>
      </template>
    </q-carousel>
    <q-separator />
  </div>
</template>

<script>
import env from '../env'
export default {
  data () {
    return {
      tienda: '',
      baseuPublicidad: '',
      baseuProducto: '',
      baseuLogos: '',
      slide1: 1,
      slide2: 1,
      slide3: 1,
      slide4: 1,
      slide5: 1,
      slide6: 1,
      autoplay1: true,
      autoplay2: true,
      slPrincipal: [],
      slPublicidad1: {},
      arrPublicidad1: [],
      slPublicidad2: {},
      arrPublicidad2: [],
      slTienda: {},
      arrTienda: [],
      slNuevo: {},
      arrNuevo: [],
      slLogos: {},
      arrLogos: []
    }
  },
  mounted () {
    this.baseuPublicidad = env.apiUrl + '/publicidad_img/'
    this.baseuProducto = env.apiUrl + '/producto_files/'
    this.baseuLogos = env.apiUrl + '/perfil_img/'
    this.getLogos()
    this.getPublicidad()
    this.getTienda()
  },
  methods: {
    getTienda () {
      this.$api.get('all_productos').then(res => {
        if (res) {
          this.arrTienda = res
          if (!this.arrTienda.length) {
            this.arrTienda = [{ nombre: 'Nombre Producto', descripcion: 'Descripcion', images: ['nopublicidad.jpg'], valor: 0, caso: true }]
          }
          var largo = this.arrTienda.length - 1
          for (let i = 0; i < 25; i++) {
            if (largo >= 0) {
              this.arrNuevo.push(this.arrTienda[largo])
              largo = largo - 1
            }
          }
          // arreglar el slide
          var arr = []
          var cc = 1
          for (let i = 0; i < this.arrNuevo.length; i++) {
            if (arr.length < 4) {
              arr.push(this.arrNuevo[i])
              if (i === this.arrNuevo.length - 1) {
                this.slNuevo['slideN' + cc] = arr
              }
            } else {
              this.slNuevo['slideN' + cc] = arr
              cc = cc + 1
              arr = []
              arr.push(this.arrNuevo[i])
              if (i === this.arrNuevo.length - 1) {
                this.slNuevo['slideN' + cc] = arr
              }
            }
          }
          arr = []
          cc = 1
          for (let i = 0; i < this.arrTienda.length; i++) {
            if (arr.length < 4) {
              arr.push(this.arrTienda[i])
              if (i === this.arrTienda.length - 1) {
                this.slTienda['slideT' + cc] = arr
              }
            } else {
              this.slTienda['slideT' + cc] = arr
              cc = cc + 1
              arr = []
              arr.push(this.arrTienda[i])
              if (i === this.arrTienda.length - 1) {
                this.slTienda['slideT' + cc] = arr
              }
            }
          }
        }
      })
    },
    getPublicidad () {
      this.$api.get('publicidad').then(res => {
        if (res) {
          this.slPrincipal = res.filter(v => v.tipo === 'principal' && v.enable)
          this.arrPublicidad1 = res.filter(v => v.tipo === 'publicidad1' && v.enable)
          this.arrPublicidad2 = res.filter(v => v.tipo === 'publicidad2' && v.enable)
          if (!this.slPrincipal.length) {
            this.slPrincipal = [{ tipo: 'principal', enable: true, fileName: 'nopublicidad.jpg', caso: true }]
          }
          if (!this.arrPublicidad1.length) {
            this.arrPublicidad1 = [{ tipo: 'principal', enable: true, fileName: 'nopublicidad.jpg', caso: true }]
          }
          if (!this.arrPublicidad2.length) {
            this.arrPublicidad2 = [{ tipo: 'principal', enable: true, fileName: 'nopublicidad.jpg', caso: true }]
          }
          // arreglar los slides
          var arr = []
          var cc = 1
          for (let i = 0; i < this.arrPublicidad1.length; i++) {
            if (arr.length < 3) {
              arr.push(this.arrPublicidad1[i])
              if (i === this.arrPublicidad1.length - 1) {
                this.slPublicidad1['slideP' + cc] = arr
              }
            } else {
              this.slPublicidad1['slideP' + cc] = arr
              cc = cc + 1
              arr = []
              arr.push(this.arrPublicidad1[i])
              if (i === this.arrPublicidad1.length - 1) {
                this.slPublicidad1['slideP' + cc] = arr
              }
            }
          }
          arr = []
          cc = 1
          for (let i = 0; i < this.arrPublicidad2.length; i++) {
            if (arr.length < 3) {
              arr.push(this.arrPublicidad2[i])
              if (i === this.arrPublicidad2.length - 1) {
                this.slPublicidad2['slideP' + cc] = arr
              }
            } else {
              this.slPublicidad2['slideP' + cc] = arr
              cc = cc + 1
              arr = []
              arr.push(this.arrPublicidad2[i])
              if (i === this.arrPublicidad2.length - 1) {
                this.slPublicidad2['slideP' + cc] = arr
              }
            }
          }
        }
      })
    },
    getLogos () {
      this.$api.get('proveedores').then(res => {
        if (res) {
          this.arrLogos = res.filter(v => v.status === 1)
          // arreglar el slide
          var arr = []
          var cc = 1
          for (let i = 0; i < this.arrLogos.length; i++) {
            if (arr.length < 6) {
              arr.push(this.arrLogos[i])
              if (i === this.arrLogos.length - 1) {
                this.slLogos['slideL' + cc] = arr
              }
            } else {
              this.slLogos['slideL' + cc] = arr
              cc = cc + 1
              arr = []
              arr.push(this.arrLogos[i])
              if (i === this.arrLogos.length - 1) {
                this.slLogos['slideL' + cc] = arr
              }
            }
          }
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.bordes {
  border-top: 6px solid $primary
}
</style>
