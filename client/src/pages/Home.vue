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
        <q-carousel-slide :name="index + 1" :img-src="!img.caso ? baseu + img.fileName : img.fileName"  v-for="(img, index) in slPrincipal" :key="index">
            <div class="absolute-center bg-transparent q-mx-md" style="width: 100%">
                <div class="text-h3 text-bold text-black q-mb-md">¿Tienes hambre? Estás en el lugar correcto</div>
                <div class="row items-center">
                    <q-input class="col-4 q-mt-md" color="black" bg-color="white" filled bottom-slots v-model="direccion" placeholder="Ingresa la dirección de entrega">
                        <template v-slot:prepend>
                            <q-icon name="place" color="black" />
                        </template>
                        <template v-slot:append>
                            <q-btn :label="direccion.length ? 'Borrar' : ''" @click="direccion.length ? direccion = '' : ''" no-caps flat />
                        </template>
                    </q-input>
                    <q-select class="col-3 q-ml-sm" color="black" bg-color="white" filled v-model="selected" :options="options">
                        <template v-slot:prepend>
                            <q-icon :name="selected.icon" color="black" />
                        </template>
                        <template v-slot:option="scope">
                            <q-item
                                v-bind="scope.itemProps"
                                v-on="scope.itemEvents"
                            >
                                <q-item-section avatar>
                                <q-icon :name="scope.opt.icon" />
                                </q-item-section>
                                <q-item-section>
                                <q-item-label v-html="scope.opt.label" />
                                </q-item-section>
                            </q-item>
                        </template>
                    </q-select>
                    <q-btn class="q-ml-sm q-py-sm" size="md" color="black" label="Buscar comida" no-caps />
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
          <div v-for="(img, index2) in value" :key="index2">
            <q-avatar size="180px"><img :src="img.img" ></q-avatar>
            <div class="text-center">{{img.name}}</div>
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
              <q-img :src="!card.caso ? baseu + card.fileName : card.fileName" style="height: 200px; width: 360px" />
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
      height="300px"
      class="bg-transparent q-my-md"
    >
      <q-carousel-slide :name="index + 1" v-for="(value, name, index) in slPublicidad1" :key="index" class="column no-wrap">
        <div class="text-h5 text-bold q-ml-md">Lo nuevo en Flaag</div>
        <div class="row fit justify-around items-center no-wrap">
          <q-card class="shadow-11" v-for="(card, index2) in value" :key="index2">
            <q-img :src="!card.caso ? baseu + card.fileName : card.fileName" style="height: 120px; width: 320px" />

            <q-card-section>
              <div class="row justify-between items-center">
                <div class="text-subtitle2">{{card.tipo}}</div>
                <div class="text-grey text-caption row items-center">
                  <q-icon name="place" />2.5
                </div>
              </div>
            </q-card-section>

            <q-card-section class="q-px-sm q-pt-none">
              <div class="text-caption text-grey">
                {{card.ruta}}
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
              <q-img :src="!card.caso ? baseu + card.fileName : card.fileName" style="height: 200px; width: 360px" />
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
      <q-carousel-slide :name="index + 1" v-for="(value, name, index) in slPublicidad2" :key="index" class="column no-wrap">
        <div class="text-h5 text-bold q-ml-md">Tienda</div>
        <div class="row fit justify-around items-center no-wrap">
          <q-card class="shadow-11" v-for="(card, index2) in value" :key="index2">
            <q-img :src="!card.caso ? baseu + card.fileName : card.fileName" style="height: 120px; width: 250px" />

            <q-card-section>
              <div class="row justify-between items-center">
                <div class="text-subtitle2">{{card.tipo}}</div>
                <div class="text-grey text-caption row items-center">
                  <q-icon name="place" />2.5
                </div>
              </div>
            </q-card-section>

            <q-card-section class="q-px-sm q-pt-none">
              <div class="text-caption text-grey">
                {{card.ruta}}
              </div>
            </q-card-section>

            <q-separator />

            <q-card-actions class="row justify-center">
              <q-btn no-caps push icon="add_shopping_cart" color="primary" text-color="black" label="Añadir al carrito" />
            </q-card-actions>
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
      direccion: '',
      baseu: '',
      slide1: 1,
      slide2: 1,
      slide3: 1,
      slide4: 1,
      slide5: 1,
      slide6: 1,
      autoplay1: true,
      autoplay2: true,
      selected: { label: 'Entregar ahora', value: '1', icon: 'watch_later' },
      options: [{ label: 'Entregar ahora', value: '1', icon: 'watch_later' }, { label: 'Programar para más tarde', value: '2', icon: 'today' }],
      slPrincipal: [],
      slPublicidad1: {},
      arrPublicidad1: [],
      slPublicidad2: {},
      arrPublicidad2: [],
      slLogos: {},
      arrLogos: [
        { img: 'slide1.jpg', name: 'Nombre' },
        { img: 'slide2.jpg', name: 'Nombre' },
        { img: 'slide3.jpg', name: 'Nombre' },
        { img: 'slide4.jpg', name: 'Nombre' },
        { img: 'slide5.jpg', name: 'Nombre' },
        { img: 'slide6.jpg', name: 'Nombre' },
        { img: 'slide7.jpg', name: 'Nombre' },
        { img: 'slide1.jpg', name: 'Nombre' },
        { img: 'slide2.jpg', name: 'Nombre' },
        { img: 'slide3.jpg', name: 'Nombre' },
        { img: 'slide4.jpg', name: 'Nombre' },
        { img: 'slide5.jpg', name: 'Nombre' },
        { img: 'slide6.jpg', name: 'Nombre' },
        { img: 'slide7.jpg', name: 'Nombre' },
        { img: 'slide1.jpg', name: 'Nombre' },
        { img: 'slide2.jpg', name: 'Nombre' }
      ]
    }
  },
  mounted () {
    this.baseu = env.apiUrl + 'publicidad_img/'
    this.getLogos()
    this.getPublicidad()
  },
  methods: {
    getPublicidad () {
      this.$api.get('publicidad').then(res => {
        if (res) {
          this.slPrincipal = res.filter(v => v.tipo === 'principal' && v.enable)
          this.arrPublicidad1 = res.filter(v => v.tipo === 'publicidad1' && v.enable)
          this.arrPublicidad2 = res.filter(v => v.tipo === 'publicidad2' && v.enable)
          if (!this.slPrincipal.length) {
            this.slPrincipal = [{ tipo: 'principal', enable: true, fileName: 'slide3.jpg', caso: true }]
          }
          if (!this.arrPublicidad1.length) {
            this.arrPublicidad1 = [{ tipo: 'principal', enable: true, fileName: 'slide3.jpg', caso: true }]
          }
          if (!this.arrPublicidad2.length) {
            this.arrPublicidad2 = [{ tipo: 'principal', enable: true, fileName: 'slide3.jpg', caso: true }]
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
            }
          }
        }
      })
    },
    getLogos () {
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
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.bordes {
  border-top: 6px solid $primary
}
</style>
