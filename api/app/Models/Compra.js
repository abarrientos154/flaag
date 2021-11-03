'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Compra extends Model {
 productos () {
    return this.hasOne('App/Models/Producto', 'producto', '_id')
  }
  compradorInfo () {
    return this.hasOne('App/Models/User', 'comprador', '_id')
  }
  tiendaInfo () {
    return this.hasOne('App/Models/User', 'tienda', '_id')
  }
}

module.exports = Compra
