'use strict'

/*
|--------------------------------------------------------------------------
| CategoriaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Categoria = use("App/Models/Categoria")
const categoriaData = [
  {
    id: 1,
    nombre: '',
    proveedor_id: ''
  }
]

class CategoriaSeeder {
  async run () {
    for (let i of categoriaData) {
      let cat = await Categoria.findBy('id', i.id)
      if (!cat) {
        await Categoria.create(i)
      }
      else {
        cat.id = i.id
        cat.nombre = i.nombre
        cat.proveedor_id = i.proveedor_id
        await cat.save()
      }
    }
    console.log('Finished Categorias')
  }
}

module.exports = CategoriaSeeder
