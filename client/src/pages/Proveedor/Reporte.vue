<template>
  <q-page>
    <div class="shadow-3 q-ma-sm q-pa-md">
      <div class="text-h5 text-bold q-ma-lg">Reportes</div>
      <div class="row justify-center q-mt-sm">
        <q-chip @click="select(item)" clickable v-for="(item, index) in reportes" :key="index" :color="item === reporte ? 'primary':''"> {{item}} </q-chip>
      </div>
      <list-pro :data="filtrado" :baseu="baseu" :type="2" class="full-width q-mt-lg"/>
    </div>
  </q-page>
</template>

<script>
import env from '../../env'
import moment from 'moment'
import ListPro from '../../components/ReporteProductos'
export default {
  components: {
    ListPro
  },
  data () {
    return {
      baseu: '',
      data: [],
      filtrado: [],
      reporte: 'Todos',
      reportes: ['Todos', 'Semanal', 'Mensual', 'Semestral', 'Anual']
    }
  },
  computed: {
    /* filtrado () {
      return this.data
    } */
  },
  async mounted () {
    this.baseu = env.apiUrl + '/producto_files/'
    await this.traerDatos()
  },
  methods: {
    async traerDatos () {
      await this.$api.get('reportes/2').then(res => {
        this.data = res
        this.filtrado = res
        console.log('data', res)
      })
    },
    select (val) {
      if (val === 'Semanal') {
        this.filtrado = this.data.filter(v => moment(v.created_at).year() === moment().year() && moment(v.created_at).week() === moment().week())
      } else if (val === 'Mensual') {
        this.filtrado = this.data.filter(v => moment(v.created_at).year() === moment().year() && moment(v.created_at).month() === moment().month())
      } else if (val === 'Anual') {
        this.filtrado = this.data.filter(v => moment(v.created_at).year() === moment().year())
      } else if (val === 'Semestral') {
        var monthToday = moment().subtract(6, 'month')
        this.filtrado = this.data.filter(v => moment(v.created_at) >= monthToday)
      } else if (val === 'Todos') {
        this.filtrado = this.data
      }
      this.reporte = val
    }
  }
}
</script>

<style>

</style>
