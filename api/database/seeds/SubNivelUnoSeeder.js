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
  {
    id: 1,
    categoria_id: 1,
    nombre: 'Perfumes Dama 100ml',
    proveedor_id: 1
  },
  {
    id: 2,
    categoria_id: 1,
    nombre: 'Perfumes Varon 100ml',
    proveedor_id: 1
  },
  {
    id: 3,
    categoria_id: 2,
    nombre: 'Bandanas',
    proveedor_id: 1
  },
  {
    id: 4,
    categoria_id: 2,
    nombre: 'Sonajeros',
    proveedor_id: 1
  },
  {
    id: 5,
    categoria_id: 2,
    nombre: 'vestidos Beba',
    proveedor_id: 1
  },
  {
    id: 6,
    categoria_id: 2,
    nombre: 'Chupetes para frutas',
    proveedor_id: 1
  },
  {
    id: 7,
    categoria_id: 2,
    nombre: 'Tutos',
    proveedor_id: 1
  },
  {
    id: 8,
    categoria_id: 2,
    nombre: 'Mordedores con sonajeros',
    proveedor_id: 1
  },
  {
    id: 9,
    categoria_id: 3,
    nombre: 'Gafas',
    proveedor_id: 1
  },
  {
    id: 10,
    categoria_id: 3,
    nombre: 'Bolsos de Verano',
    proveedor_id: 1
  },
  {
    id: 11,
    categoria_id: 3,
    nombre: 'Bolsas Pegables',
    proveedor_id: 1
  },
  {
    id: 12,
    categoria_id: 3,
    nombre: 'Mochilas Pegables',
    proveedor_id: 1
  },
  {
    id: 13,
    categoria_id: 3,
    nombre: 'Bananos',
    proveedor_id: 1
  },
  {
    id: 14,
    categoria_id: 3,
    nombre: 'Cinturones',
    proveedor_id: 1
  },
  {
    id: 15,
    categoria_id: 3,
    nombre: 'Billeteras',
    proveedor_id: 1
  },
  {
    id: 16,
    categoria_id: 3,
    nombre: 'Buzos',
    proveedor_id: 1
  },
  {
    id: 17,
    categoria_id: 3,
    nombre: 'Jokeys',
    proveedor_id: 1
  },
  {
    id: 18,
    categoria_id: 3,
    nombre: 'Bisuteria',
    proveedor_id: 1
  },
  {
    id: 19,
    categoria_id: 3,
    nombre: 'Fantasia',
    proveedor_id: 1
  },
  {
    id: 20,
    categoria_id: 3,
    nombre: 'Boxer',
    proveedor_id: 1
  }

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
