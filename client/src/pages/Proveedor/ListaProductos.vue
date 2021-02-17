<template>
  <q-page>
    <q-table title="Treats" :data="data" :columns="columns" row-key="nombre">
      <template v-slot:actions="props">
        <q-tr :props="props">
          <q-td auto-width>
            <q-btn size="sm" color="accent" round dense @click="props.expand = !props.expand" :icon="props.expand ? 'remove' : 'add'" />
          </q-td>
          <q-td
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
          >
            {{ col.value }}
          </q-td>
        </q-tr>
        <q-tr v-show="props.expand" :props="props">
          <q-td colspan="100%">
            <div class="text-left">This is expand slot for row above: {{ props.row.name }}.</div>
          </q-td>
        </q-tr>
      </template>

    </q-table>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      data: [],
      columns: [
        { name: 'nombre', align: 'center', label: 'Nombre', field: 'nombre', sortable: true },
        { name: 'descripcion', label: 'Descripcion', field: 'descripcion', sortable: true },
        { name: 'categoria', label: 'Categoria', field: 'categoria', sortable: true },
        { name: 'cantidad', label: 'Cantidad', field: 'cantidad', sortable: true },
        { name: 'valor', label: 'Valor', field: 'valor', sortable: true }
      ]
    }
  },
  mounted () {
    this.getProductos()
  },
  methods: {
    getProductos () {
      this.$api.get('productos').then(res => {
        if (res) {
          this.data = res
          console.log(res, 'res')
        }
      })
    }
  }
}
</script>

<style>

</style>
