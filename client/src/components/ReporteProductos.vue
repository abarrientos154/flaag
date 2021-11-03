<template>
  <q-page>
    <div v-if="data.length > 0" class="row justify-around full-width q-gutter-sm">
      <q-card class="column card-style q-mb-md" style="width:200px;height:290px" v-for="(card, index) in data" :key="index">
        <q-img :src="card.images.length > 0 ? baseu + card.images[0] : 'noimgproducto.png'" style="width: 100%; height: 100px" />
        <div class="row items-center no-wrap q-pl-sm">
          <div class="text-bold q-pr-sm">{{card.nombre}}</div>
          <q-badge color="primary" text-color="white" :label="`x${card.cantidad}`" style="width:auto" />
        </div>
        <div class="row items-center no-wrap q-pl-xs">
          <q-icon :name="type == 1 ? 'store' : 'person'" color="primary" size="20px" />
          <div class="q-pl-sm q-pt-sm">{{type === 1 ? card.tienda ? card.tienda.nombreEmpresa : '' : card.comprador ? card.comprador.name + ' ' + card.comprador.lastName : ''}}</div>
        </div>
        <div class="row items-start no-wrap q-pl-xs" style="width:100%">
          <q-icon name="room" color="primary" size="20px" />
          <div class="q-pl-sm ellipsis">{{type === 1 ? card.tienda ? card.tienda.direccionFisica : '' : card.comprador ? card.comprador.direccion : ''}}</div>
        </div>
        <div class="row items-center no-wrap q-pl-xs" style="width:100%">
          <q-icon name="email" color="primary" size="20px" />
          <div class="q-pl-sm ellipsis">{{type === 1 ? card.tienda ? card.tienda.email2 : '' : card.comprador ? card.comprador.email : ''}}</div>
        </div>
        <div class="row items-center no-wrap q-pl-xs">
          <q-icon name="phone" color="primary" size="20px" />
          <div class="q-pl-sm">{{type === 1 ? card.tienda ? card.tienda.telefono : '' : card.comprador ? card.comprador.telefono : ''}}</div>
        </div>

        <div class="row no-wrap items-center q-pl-xs">
          <q-icon name="attach_money" color="primary" size="20px" />
          <div :class="card.oferta ? 'text-strike text-grey-6':'text-primary text-bold'"> {{card.valor}} </div>
          <div v-if="card.oferta" class="text-primary text-bold"> {{card.ofertaVal}} </div>
        </div>

        <div class="row items-center text-primary no-wrap text-h6 q-pl-sm">
          <div class="text-black text-subtitle1 q-pr-sm text-bold">Total:</div>
          <div v-if="!card.oferta"> {{(card.valor * card.cantidad)}} </div>
          <div v-else> {{(card.ofertaVal * card.cantidad)}} </div>
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  props: ['baseu', 'data', 'type']
}
</script>

<style lang="scss" scoped>
.card-style {
  border-radius: 12px;
}
</style>
