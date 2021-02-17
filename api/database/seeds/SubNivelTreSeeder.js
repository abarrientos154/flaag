'use strict'

/*
|--------------------------------------------------------------------------
| SubNivelTreSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const NivelTres = use("App/Models/SubNivelTre")
const data = [
  {
    id: 1,
    subniveldos_id: 1,
    nombre: '',
    proveedor_id: 1
  }
]

class SubNivelTreSeeder {
  async run () {
    for (let i of data) {
      let cat = await NivelTres.findBy('id', i.id)
      if (!cat) {
        await NivelTres.create(i)
      }
      else {
        cat.id = i.id
        cat.subniveldos_id = i.subniveldos_id
        cat.nombre = i.nombre
        cat.proveedor_id = i.proveedor_id
        await cat.save()
      }
    }
    console.log('Finished Nivel Tres Categorias')
  }
}

module.exports = SubNivelTreSeeder
