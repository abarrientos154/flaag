'use strict'

/*
|--------------------------------------------------------------------------
| SubNivelUnoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const NivelUno = use("App/Models/SubNivelUno")
const data = [

]

class SubNivelUnoSeeder {
  async run () {
    for (let i of data) {
      let cat = await NivelUno.findBy('id', i.id)
      if (!cat) {
        await NivelUno.create(i)
      }
      else {
        cat.id = i.id
        cat.categoria_id = i.categoria_id
        cat.nombre = i.nombre
        cat.proveedor_id = i.proveedor_id
        await cat.save()
      }
    }
    console.log('Finished Categorias')
  }
}

module.exports = SubNivelUnoSeeder
