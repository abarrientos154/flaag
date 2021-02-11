<template>
  <q-layout view="hHh Lpr lff">
    <q-header elevated>
      <q-toolbar class="bg-white q-px-xl q-py-md row justify-between">
        <div>
          <q-btn class="q-mr-md" round dense flat icon="menu" size="1em" color="black" @click="drawer = !drawer"/>
          <q-img src="logo-210x47.png" style="width:140px" />
        </div>
        <q-btn rounded no-caps class="text-black text-subtitle1" color="grey-4" label="Iniciar Sesión" @click="$router.push('/login')" />
      </q-toolbar>
    </q-header>

    <q-drawer
        v-model="drawer"
        :width="400"
        :breakpoint="500"
        overlay
        bordered
        content-class="bg-grey-3"
      >
        <q-scroll-area class="fit">
          <q-list>

            <template v-for="(item, index) in menu">
              <q-item :key="index" clickable v-ripple>
                <q-item-section avatar>
                  <q-icon :name="item.icon" />
                </q-item-section>
                <q-item-section>
                  {{ item.label }}
                </q-item-section>
              </q-item>
              <q-separator :key="'sep' + index" />
            </template>

          </q-list>
        </q-scroll-area>
      </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer>
        <q-toolbar class="bg-black text-white q-py-xl column">
          <div class="row justify-between" style="width: 100%">
            <div class="col-6">
              <q-img src="logo-210x47.png" style="width:140px" />
            </div>
            <div class="col-6 row justify-around">
              <div class="column q-gutter-sm">
                <div class="text-bold">Acerca de Flaag</div>
                <a class="text-white">Lee nuestro Blog</a>
                <a class="text-white">Crear una cuenta de negocios</a>
                <a class="text-white">Agrega tu restaurante</a>
                <a class="text-white">Regístrate para realizar entregas</a>
              </div>
              <div class="column q-gutter-sm">
                <div class="text-bold">Obtén ayuda</div>
                <a class="text-white">Lee las Preguntas frecuentes</a>
                <a class="text-white">Conoce todas las ciudades</a>
                <a class="text-white">Ver todos los países</a>
                <a class="text-white">Restaurantes cerca de mí</a>
                <a class="text-white">Ahorra en tu primer pedido</a>
                <div class="row">
                  <q-icon name="g_translate" />
                  <div class="q-pl-md">Español</div>
                </div>
              </div>
            </div>
          </div>
          <q-separator dark inset class="q-my-md"/>
          <div class="row justify-between" style="width: 100%">
            <div class="col-4 row q-gutter-md q-ml-sm">
              <q-btn round flat color="white" icon="facebook" />
              <q-btn round flat color="white" icon="facebook" />
              <q-btn round flat color="white" icon="facebook" />
            </div>
            <div class="col-7 q-mr-md">
              <div class="row q-gutter-md justify-end">
                <a class="text-white">Políticas de privacidad</a>
                <a class="text-white">Términos</a>
                <a class="text-white">Tarifas</a>
              </div>
            </div>
          </div>
          <div class="row justify-end q-gutter-md q-mt-md" style="width: 100%">
            <div>reCAPTCHA y Google protegen este sitio. Se aplican la Política de privacidad y los Térmios del servicio</div>
            <div>@ 2021 Flaag Technologies inc</div>
          </div>
        </q-toolbar>
      </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
      drawer: false,
      menu: [
        {
          icon: 'inbox',
          label: 'Inbox',
          ruta: ''
        },
        {
          icon: 'send',
          label: 'Outbox',
          ruta: ''
        },
        {
          icon: 'delete',
          label: 'Trash',
          ruta: ''
        },
        {
          icon: 'error',
          label: 'Spam',
          ruta: ''
        }
      ]
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>
