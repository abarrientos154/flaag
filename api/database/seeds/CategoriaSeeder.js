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
    nombre: 'Perfumes Alternativos',
    proveedor_id: 1
  },
  {
    id: 2,
    nombre: 'Accesorios de Bebe',
    proveedor_id: 1
  },
  {
    id: 3,
    nombre: 'Accesorios de Dama y Varon',
    proveedor_id: 1
  },
  {
    id: 4,
    nombre: 'Articulos para el cuidado de la piel',
    proveedor_id: 1
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
