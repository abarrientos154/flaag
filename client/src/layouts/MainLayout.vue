<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-white row justify-between">
        <q-btn round dense flat icon="keyboard_backspace" color="primary" @click="$router.go(-1)"/>
        <q-img src="logo-210x47.png" style="width:140px" />
      </q-toolbar>
    </q-header>
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
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>
