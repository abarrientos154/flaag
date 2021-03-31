<template>
  <q-page>
    <q-img :src="user.portada ? baseuImgTiendaPortada : 'noimg.png'" style="height:300px; width:" >
      <div class="full-width full-height">
        <div class="row justify-between bg-transparent" style="width: 100%">
          <q-btn flat round class="q-ma-xs" icon="keyboard_backspace" color="white" @click="$router.go(-1)" />
          <q-btn v-if="login" :color="favorito ? 'red': 'primary' " flat :icon="favorito ? 'favorite' :'favorite_border'" round @click="addFavorito()" />
        </div>
        <div v-if="user.images" class="row absolute-bottom justify-end" style="width:100%">
          <q-scroll-area horizontal style="height: 95px; width: 330px;" class="rounded-borders" >
            <div class="row no-wrap">
              <q-avatar @click="mostrarImg.dialog = true, mostrarImg.imagen = index" rounded v-for="(img, index) in user.images" :key="index" style="width:90px;height:90px" class="q-ml-sm">
                <q-img :src="rutaCargarImgs + img" style="border-radius:12px" />
              </q-avatar>
            </div>
          </q-scroll-area>
        </div>
      </div>
    </q-img>

    <q-item>
      <q-item-section avatar>
        <q-img style="width:150px;height:150px; border-radius: 100%" :src="user.perfil ? baseuImgTienda : user.perfilEstatico ? 'logos/' + user.id.toString() + '.jpeg' : 'noimg.png'" />
      </q-item-section>
      <q-item-section>
        <div class="row items-center" style="width: 100%">
          <q-icon class="col-1" name="store" size="sm" />
          <q-item-label class="col text-bold text-h6 q-ml-xs ellipsis"> {{user.nombreEmpresa ? user.nombreEmpresa : 'Nombre Empresa'}} </q-item-label>
        </div>
        <div class="row items-center" style="width: 100%">
          <q-icon class="col-1" name="perm_identity" size="sm" />
          <q-item-label class="col q-ml-xs ellipsis text-subtitle2"> {{user.rut}} </q-item-label>
        </div>
        <div class="row items-center" style="width: 100%">
          <q-icon class="col-1" name="room" size="sm" />
          <q-item-label class="col q-ml-xs ellipsis text-subtitle2"> {{user.direccionFisica}} dkfjghñdl kfjhnñd xfjhnñdxklfjhd hjfjhxf jhxdghkjfd</q-item-label>
        </div>
        <div class="row items-center" style="width: 100%">
          <q-icon class="col-1" name="payment" size="sm" />
          <q-item-label class="col q-ml-xs ellipsis text-subtitle2"> {{user.metodoPago === '1' ? 'Efectivo' : user.metodoPago === '2' ? 'Transferencia Bancaria' : ''}} </q-item-label>
        </div>
      </q-item-section>
    </q-item>

    <!-- <q-img :src="user.portada ? baseuImgTiendaPortada : 'noimg.png'" style="position:absolute;top:0px;height:220px" />
    <q-btn v-if="login" :color="favorito ? 'red': 'primary' " flat :icon="favorito ? 'favorite' :'favorite_border'" round style="position:absolute;top:5px;right:5px;z-index:1" @click="addFavorito()" />
    <div class="row bg-transparent" style="width: 100%">
      <q-btn flat round class="q-ma-xs" icon="keyboard_backspace" color="primary" @click="$router.go(-1)" />
    </div>
    <div class="column full-width">
      <div class="row justify-between items-center q-mx-xl">
        <div style="width:350px">
          <q-item style="width:350px">
            <q-item-section avatar>
              <img style="width:150px;height:150px" :src="user.perfil ? baseuImgTienda : user.perfilEstatico ? 'logos/' + user.id.toString() + '.jpeg' : 'noimg.png'">
            </q-item-section>
            <q-item-section>
              <div class="row items-center">
                <q-icon name="store" size="sm" />
                <q-item-label class="text-bold text-subtitle2 q-ml-xs"> {{user.nombreEmpresa ? user.nombreEmpresa : 'Nombre Empresa'}} </q-item-label>
              </div>
              <div class="row items-center">
                <q-icon name="perm_identity" size="sm" />
                <q-item-label caption class="q-ml-xs"> {{user.rut}} </q-item-label>
              </div>
              <div class="row items-center">
                <q-icon name="room" size="sm" />
                <q-item-label caption lines="2" class="q-ml-xs"> {{user.direccionFisica}} </q-item-label>
              </div>
            </q-item-section>
          </q-item>
        </div>
        <div class="row q-mt-xl" style="width:330px" v-if="user.images">
          <q-scroll-area horizontal style="height: 95px; width: 100%;" class="rounded-borders" >
            <div class="row no-wrap">
              <q-avatar @click="mostrarImg.dialog = true, mostrarImg.imagen = index" rounded v-for="(img, index) in user.images" :key="index" style="width:90px;height:90px" class="q-ml-sm">
                <q-img :src="rutaCargarImgs + img" style="border-radius:12px" />
              </q-avatar>
            </div>
          </q-scroll-area>
        </div>
      </div>
    </div> -->

    <q-dialog v-if="mostrarImg.dialog" v-model="mostrarImg.dialog">
      <q-img style="width:50%;height:50%" :src="rutaCargarImgs + user.images[mostrarImg.imagen]" />
    </q-dialog>

    <!-- <q-btn v-if="login" :color="favorito ? 'red': 'white' " flat :icon="favorito ? 'favorite' :'favorite_border'" round style="position:absolute;top:5px;right:5px;z-index:1" @click="addFavorito()" />
    <q-img :src="user.perfil ? baseuImgTienda : user.perfilEstatico ? 'logos/' + user.id.toString() + '.jpeg' : 'noimg.png'" style="height:300px; width: 100%" >
      <div class="full-width full-height">
        <div class="row bg-transparent" style="width: 100%">
          <q-btn flat round class="q-ma-xs" icon="keyboard_backspace" color="white" @click="$router.go(-1)" />
        </div>
        <div class="row absolute-center justify-center" style="width:100%">
          <h1 class="text-h4 text-primary text-bold"> {{user.nombreEmpresa ? user.nombreEmpresa : 'Nombre Empresa'}} </h1>
        </div>
      </div>
    </q-img> -->

    <div>
      <q-scroll-area horizontal style="height: 100px; width: 100%;">
        <div class="row no-wrap q-mx-md">
          <div class="q-ml-sm column justify-center" style="height: 100px" v-for="(item, index) in categorias" :key="index">
            <q-btn :label="item.nombre" :color="item.active ? 'primary':'white'" :text-color="item.active ? 'white':'primary'" rounded style="height: 60px; width:200px" @click="activarB(index)" />
          </div>
        </div>
      </q-scroll-area>
    </div>

    <div  v-if="buscar === 0" class="text-h5 estilo-titulos text-center text-weight-bold q-mx-md q-my-xl">Más recientes</div>
    <q-scroll-area
        v-if="buscar === 0"
        horizontal
        class="q-my-md"
        style="height: 590px;"
      >
        <div class="row no-wrap q-py-md q-px-xl q-gutter-xl">
          <div v-for="(card, index) in dataLimit" :key="index" >
            <q-img
              :src="card.images.length > 0 ? baseu + card.images[0] : 'noimgproducto.png'"
              spinner-color="white"
              style="border-radius:12px; height: 320px; width: 240px"
              @click="producto = card, verProducto = true">
            </q-img>
            <div class="q-ma-sm" style="width:240px">
                <div class="row no-wrap items-center">
                  <div class="col text-h6 text-bold ellipsis">{{card.nombre}}</div>
                </div>
                <div class="row no-wrap items-center">
                  <q-icon class="col-1" name="store" color="black" style="font-size: 1.3rem;"></q-icon>
                  <div v-if="!card.caso" class="col q-ml-sm text-subtitle2 ellipsis">{{card.datos_proveedor.nombreEmpresa}}</div>
                </div>
                <div class="row no-wrap items-center" style="width:100%">
                  <q-icon class="col-1" name="description" color="black" style="font-size: 1.3rem;"/>
                  <div class="col q-pl-xs text-grey-9 text-subtitle2 ellipsis">{{card.descripcion}}</div>
                </div>
                <div class="row no-wrap items-center" style="width:100%">
                  <q-icon class="col-1" name="category" color="black" style="font-size: 1.3rem;"/>
                  <div class="col q-pl-xs text-grey-9 text-subtitle2 ellipsis">{{card.categoria_info.nombre}}</div>
                </div>
                <div class="row no-wrap items-center" style="width:100%">
                  <q-icon class="col-1" name="zoom_in" color="black" style="font-size: 1.3rem;"/>
                  <div class="col q-pl-xs text-grey-9 text-subtitle2 ellipsis">{{card.cantidad}}</div>
                </div>
                <div class="row no-wrap items-center">
                  <div v-if="!card.oferta" class="col text-h6 ellipsis">${{formatPrice(card.valor)}}</div>
                  <div v-if="card.oferta" class="col text-h6 ellipsis">$<strike>{{formatPrice(card.valor)}}</strike> - {{formatPrice(card.ofertaVal)}}</div>
                </div>
              </div>

              <div v-if="!login || rol === 2" class="row justify-center">
                <q-btn glossy icon="add_shopping_cart" label="Comprar" color="primary" text-color="black" @click="login ? addCarrito(card) : $router.push('/login')" />
              </div>
          </div>
        </div>
      </q-scroll-area>

      <q-separator  v-if="buscar === 0" color="black" />

    <!-- <div class="row justify-around" v-if="filtrarProCa.length > 0">
      <div class="row justify-around q-mb-lg" v-for="(card, index) in filtrarProCa" :key="index">
        <q-card class="bg-amber-3 shadow-11 bordes" style="width: 330px">
          <q-img :src="card.images.length > 0 ? baseu + card.images[0] : 'noimgproducto.png'" style="width: 322px; height: 200px" @click="producto = card, verProducto = true" />
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
            <div class="row" style="width:100%">
              <q-icon class="col-1" name="zoom_in" color="black" style="font-size: 1.3rem;"/>
              <div class="q-pl-xs text-grey-9 text-subtitle2">{{card.cantidad}}</div>
            </div>
            <div class="row no-wrap items-center">
                <div v-if="!card.oferta" class="col text-subtitle2 ellipsis q-mx-sm">$ . {{card.valor}}</div>
                <div v-if="card.oferta" class="col text-subtitle2 ellipsis q-mx-sm">$ . <strike>{{card.valor}}</strike> - {{card.ofertaVal}}</div>
            </div>
          </q-card-section>

            <q-separator />

          <q-card-actions v-if="!login || rol === 2" align="center">
            <q-btn glossy icon="add_shopping_cart" label="Comprar" color="primary" text-color="black" @click="login ? addCarrito(card) : $router.push('/login')" />
        </q-card-actions>
        </q-card>
      </div>
    </div> -->

    <div class="text-h5 estilo-titulos text-center text-weight-bold q-mx-md q-my-xl">Productos</div>
    <div v-if="filtrarProCa.length > 0" class="row justify-around q-px-md">
      <div v-for="(card, index) in filtrarProCa" :key="index" :class="web ? 'col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 q-my-md column items-center' : 'col-5 q-my-md'" >
        <q-img
          :src="card.images.length > 0 ? baseu + card.images[0] : 'noimgproducto.png'"
          spinner-color="white"
          :style="web ? 'border-radius:12px; height: 320px; width: 240px' : 'border-radius:12px; height: 320px; width: 100%'"
          @click="producto = card, verProducto = true">
        </q-img>
        <div class="q-ma-sm" :style="web ? 'width: 240px' : 'width: 100%'">
          <div class="row no-wrap items-center">
            <div class="col text-h6 text-bold ellipsis">{{card.nombre}}</div>
          </div>
          <div class="row no-wrap items-center">
            <q-icon class="col-1" name="store" color="black" style="font-size: 1.3rem;"></q-icon>
            <div v-if="!card.caso" class="col q-ml-sm text-subtitle2 ellipsis">{{card.datos_proveedor.nombreEmpresa}}</div>
          </div>
          <div class="row no-wrap items-center" style="width:100%">
            <q-icon class="col-1" name="description" color="black" style="font-size: 1.3rem;"/>
            <div class="col q-pl-xs text-grey-9 text-subtitle2 ellipsis">{{card.descripcion}}</div>
          </div>
          <div class="row no-wrap items-center" style="width:100%">
            <q-icon class="col-1" name="category" color="black" style="font-size: 1.3rem;"/>
            <div class="col q-pl-xs text-grey-9 text-subtitle2 ellipsis">{{card.categoria_info.nombre}}</div>
          </div>
          <div class="row no-wrap items-center" style="width:100%">
            <q-icon class="col-1" name="zoom_in" color="black" style="font-size: 1.3rem;"/>
            <div class="col q-pl-xs text-grey-9 text-subtitle2 ellipsis">{{card.cantidad}}</div>
          </div>
          <div class="row no-wrap items-center">
            <div v-if="!card.oferta" class="col text-h6 ellipsis">${{formatPrice(card.valor)}}</div>
            <div v-if="card.oferta" class="col text-h6 ellipsis">$<strike>{{formatPrice(card.valor)}}</strike> - {{formatPrice(card.ofertaVal)}}</div>
          </div>
        </div>

        <div v-if="!login || rol === 2" class="row justify-center" :style="web ? 'width: 240px' : 'width: 100%'">
          <q-btn glossy icon="add_shopping_cart" label="Comprar" color="primary" text-color="black" @click="login ? addCarrito(card) : $router.push('/login')" />
        </div>
      </div>
    </div>

    <div v-else class="row justify-center full-width full-height items-center q-pa-xl">
      <div class="text-h5">
        :( Sin Nada Por Aqui
      </div>
    </div>

    <q-dialog v-model="verProducto">
      <q-card style="width: 400px">
        <q-card-section class="q-pa-none" style="width: 100%;">
          <DetalleProducto :data="producto" lugar="tienda" @compra="addCarrito" />
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-dialog v-model="verCarrito" full-height>
      <q-card style="width: 100%">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h5 text-bold">Carrito</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>
        <q-card-section>
          <q-list bordered>
            <div v-for="(producto, index) in carrito" :key="index">
              <div class="row items-center justify-between q-ma-sm">
                <div class="col-1 q-mr-sm">
                  <q-icon name="shopping_cart" size="md" />
                </div>

                <div class="col">
                  <div class="row no-wrap items-center">
                    <div class="text-subtitle1 ellipsis">{{producto.nombre}}</div>
                  </div>
                  <div class="q-mt-sm">
                    <q-badge class="text-subtitle2" :color="producto.oferta ? 'positive' : 'teal'" :label="!producto.oferta ? '$' + formatPrice(producto.valor) : '$' + formatPrice(producto.ofertaVal)" />
                  </div>
                </div>

                <div class="col-1 row justify-center">
                  <div class="text-weight-bold text-h6">{{producto.cantidad_compra}}</div>
                </div>

                <div class="col-1 q-ml-sm">
                  <q-btn size="12px" flat dense round icon="add" @click="editCantidad(index, true)" />
                  <q-btn size="12px" flat dense round icon="remove" @click="editCantidad(index, false)" />
                </div>
              </div>
              <q-separator />
            </div>
          </q-list>
        </q-card-section>

        <q-card-actions class="absolute-bottom q-my-md" align="center">
            <q-card class="bordes bg-grey-3 q-pa-sm q-my-md q-mx-md shadow-11" style="width: 100%">
                <div class="row justify-around">
                    <div class="text-h4 text-bold text-primary">Total</div>
                    <div class="text-h4 text-bold text-primary">${{formatPrice(totalCarrito)}}</div>
                </div>
            </q-card>
            <q-btn :disable="carrito.length ? false : true" @click="test()" glossy icon="add_shopping_cart" label="Comprar" color="primary" text-color="black" size="xl" style="width: 90%" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-page-sticky v-if="!login || rol === 2" position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="shopping_cart" color="primary" @click="verCarrito = true" >
        <q-tooltip>
          Carrito
        </q-tooltip>
      </q-btn>
    </q-page-sticky>
  </q-page>
</template>

<script>
import DetalleProducto from '../DetalleProducto'
import env from '../../env'
export default {
  components: { DetalleProducto },
  data () {
    return {
      token: '',
      rutaCargarImgs: '',
      baseuImgTiendaPortada: '',
      baseu: '',
      baseuImgTienda: '',
      proveedor_id: '',
      favorito: false,
      verProducto: false,
      verCarrito: false,
      login: true,
      web: true,
      buscar: 0,
      rol: 0,
      limit: 10,
      dataLimit: [],
      data: [],
      carrito: [],
      categorias: [],
      subnivelunoOpciones: [],
      subniveldosOpciones: [],
      subniveltresOpciones: [],
      user: {},
      userLog: {},
      producto: {},
      mostrarImg: {
        dialog: false,
        imagen: 0
      }
    }
  },
  computed: {
    filtrarProCa () {
      if (this.buscar === 0) {
        return this.data
      } else {
        return this.data.filter(v => v.categoria_id === this.buscar)
      }
    },
    totalCarrito () {
      let total = 0
      if (this.carrito.length > 0) {
        for (const i of this.carrito) {
          if (!i.oferta) {
            total = total + (i.valor * i.cantidad_compra)
          } else {
            total = total + (i.ofertaVal * i.cantidad_compra)
          }
        }
      }
      return total
    }
  },
  async mounted () {
    this.web = this.$q.platform.is.desktop
    this.rutaCargarImgs = env.apiUrl + '/tienda_files/'
    this.$q.loading.show({
      message: 'Cargando Datos'
    })
    this.baseu = env.apiUrl + '/producto_files/'
    console.log(this.$route.params)
    if (this.$route.params.token) {
      this.token = this.$route.params.token
      this.response = await this.$api.get('get_info_flow/' + this.token)
      await this.getInfoById(this.response.localData.tienda_id)
      this.proveedor_id = this.response.localData.tienda_id
      console.log(this.response.flow.status, this.response.localData.status)
      if (this.response.flow.status === 2 && this.response.localData.status === 0) {
        await this.aprobado()
      } else {
        await this.getProductosByProveedor(this.response.localData.tienda_id)
        this.$q.notify({
          message: 'Error al procesar la compra',
          color: 'negative'
        })
      }
      console.log(this.token, this.response)
    }
    if (this.$route.params.proveedor_id) {
      this.proveedor_id = this.$route.params.proveedor_id
      this.getInfoById(this.proveedor_id)
      this.getProductosByProveedor(this.proveedor_id)
    }
    if (this.$route.params.producto_id) {
      this.getProducto(this.$route.params.producto_id)
    }
    console.log(this.proveedor_id)
    const value = localStorage.getItem('FLAAG_SESSION_INFO')
    if (!value) {
      this.login = false
    } else {
      this.getInfo()
    }
    if (this.$route.params.proveedor_id && this.login) {
      this.obtenerFavorito()
    }
    this.$q.loading.hide()
  },
  methods: {
    formatPrice (value) {
      const val = (value / 1).toFixed(2).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    },
    addFavorito () {
      if (this.login) {
        if (this.favorito) {
          this.$api.delete('favorito/' + this.proveedor_id).then(res => {
            this.favorito = res
          })
        } else {
          this.$api.post('favorito/' + this.proveedor_id).then(res => {
            this.favorito = res
          })
        }
      }
    },
    obtenerFavorito () {
      this.$api.get('favorito/' + this.proveedor_id).then(res => {
        this.favorito = res
        console.log('FAVORITOOOO', this.favorito)
      })
    },
    aprobado () {
      this.$api.post('comprar_productos', { carrito: this.response.localData.carrito, token: this.token }).then(res => {
        if (res) {
          console.log('carro', this.carrito)
          this.carrito = []
          this.getProductosByProveedor(this.proveedor_id)
          this.verCarrito = false
          this.$q.notify({
            message: 'Compra realizada con exito',
            color: 'positive',
            positive: 'positive'
          })
        }
      })
    },
    async test () {
      this.$q.loading.show({
        message: 'Iniciando Proceso de Pago'
      })
      const params = {
        commerceOrder: Math.floor(Math.random() * (2000 - 1100 + 1)) + 1100,
        subject: 'Compra en Flaag',
        currency: 'CLP',
        amount: this.totalCarrito,
        email: this.userLog.email
      }
      console.log(this.proveedor_id)
      this.$api.post('flow', params).then(async v => {
        if (v) {
          await this.$api.post('store_flow', { token: v.token, tienda_id: this.proveedor_id, user: this.userLog._id, carrito: this.carrito, status: 0 })
          this.$q.loading.hide()
          location.href = v.redirect
        } else {
          /* this.$q.notify({
            message: 'Error al procesar la compra',
            color: 'negative'
          }) */
        }
        this.$q.loading.hide()
      }).catch(v => {
        this.$q.loading.hide()
        this.$q.notify({
          message: 'Error al procesar la compra ' + v.data,
          color: 'negative'
        })
      })
    },
    getInfo () {
      this.$api.get('user_info').then(res => {
        this.userLog = res
        this.rol = res.roles[0]
      })
    },
    editCantidad (index, val) {
      if (val) {
        if (this.carrito[index].cantidad > 0) {
          this.carrito[index].cantidad_compra = this.carrito[index].cantidad_compra + 1
          this.carrito[index].cantidad = this.carrito[index].cantidad - 1
        } else {
          this.$q.dialog({
            title: '¡Atención!',
            message: 'Este producto se agotó de la tienda.'
          }).onOk(() => {

          })
        }
      } else {
        if (this.carrito[index].cantidad_compra > 1) {
          this.carrito[index].cantidad_compra = this.carrito[index].cantidad_compra - 1
          this.carrito[index].cantidad = this.carrito[index].cantidad + 1
        } else {
          this.carrito.splice(index, 1)
        }
      }
    },
    addCarrito (val) {
      if (!this.carrito.find(v => v._id === val._id)) {
        var prod = {
          _id: val._id,
          nombre: val.nombre,
          proveedor_id: val.proveedor_id,
          valor: val.valor,
          oferta: val.oferta,
          cantidad: val.cantidad - 1,
          cantidad_compra: 1
        }
        if (val.oferta) {
          prod.ofertaVal = val.ofertaVal
        }
        this.carrito.push(prod)
        prod = {}
        this.$q.notify({
          message: 'Añadido al carrito',
          color: 'positive',
          positive: 'positive'
        })
      } else {
        this.$q.dialog({
          title: '¡Atención!',
          message: 'Ya añadiste este producto al carrito.'
        }).onOk(() => {

        })
      }
    },
    activarB (ind) {
      const indexActual = this.categorias.findIndex(v => v.active)
      this.categorias[indexActual].active = false
      this.categorias[ind].active = true
      this.buscar = ind
    },
    getProducto (id) {
      this.$api.get('producto/' + id).then(res => {
        if (res) {
          this.addCarrito(res)
          this.verCarrito = true
        }
      })
    },
    getInfoById (id) {
      this.$api.post('user_by_id/' + id).then(res => {
        this.user = res
        this.baseuImgTienda = env.apiUrl + '/perfil_img/' + res._id
        this.baseuImgTiendaPortada = env.apiUrl + '/perfil_img/portada' + res._id
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
    async getProductosByProveedor (id) {
      await this.$api.get('productos/' + id).then(res => {
        if (res) {
          var j = this.limit
          var i = res.length - 1
          console.log(i, 'lenghtttttttttttttttttt', res, 'resssss')
          while (j !== 0) {
            if (res[i]) {
              this.dataLimit.push(res[i])
            }
            j -= 1
            i -= 1
          }
          console.log(this.dataLimit, 'limitdatataaaaaaaa')
          this.data = res
        }
      })
    }

  }
}
</script>

<style scoped lang="scss">
h1 {
  text-shadow: 4px 4px 8px $secondary;
}
.bordes {
  border: 6px solid $primary;
  border-radius: 25px
}
</style>
