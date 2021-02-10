<template>
  <q-layout view="hHh Lpr lff">
    <q-header elevated>
      <q-toolbar class="bg-white q-px-xl q-py-md row justify-between">
        <div>
          <q-btn class="q-mr-md" round dense flat icon="menu" size="1.5em" color="black" @click="drawer = !drawer"/>
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
