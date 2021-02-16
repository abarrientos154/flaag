'use strict'

/*
|--------------------------------------------------------------------------
| SubNivelDoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const NivelDos = use("App/Models/SubNivelDo")
const data = [
  {
    id: 1,
    subniveluno_id: 1,
    nombre: '',
    proveedor_id: 1
  }
]

class SubNivelDoSeeder {
  async run () {
    for (let i of data) {
      let cat = await NivelDos.findBy('id', i.id)
      if (!cat) {
        await NivelDos.create(i)
      }
      else {
        cat.id = i.id
        cat.subniveluno_id = i.subniveluno_id
        cat.nombre = i.nombre
        cat.proveedor_id = i.proveedor_id
        await cat.save()
      }
    }
    console.log('Finished Nivel Dos Categorias')
  }
}

module.exports = SubNivelDoSeeder
