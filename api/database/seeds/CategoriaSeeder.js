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
  },
  {
    id: 5,
    nombre: 'Oficio= Tecnicas',
    proveedor_id: 2
  },
  {
    id: 6,
    nombre: 'Hogar y Decoraciones',
    proveedor_id: 2
  },
  {
    id: 7,
    nombre: 'Mesa Cocina',
    proveedor_id: 2
  },
  {
    id: 8,
    nombre: 'Indumentaria',
    proveedor_id: 2
  },
  {
    id: 9,
    nombre: 'Accesorio',
    proveedor_id: 2
  },
  {
    id: 10,
    nombre: 'Niños',
    proveedor_id: 2
  },
  {
    id: 11,
    nombre: 'Dama',
    proveedor_id: 2
  },
  {
    id: 12,
    nombre: 'Souvenirs',
    proveedor_id: 2
  },
  {
    id: 13,
    nombre: 'Articulos Útiles',
    proveedor_id: 2
  },
  {
    id: 14,
    nombre: 'Cocineria',
    proveedor_id: 3
  },
  {
    id: 15,
    nombre: 'Eectronica',
    proveedor_id: 3
  },
  {
    id: 16,
    nombre: 'Articulos del Hogar',
    proveedor_id: 3
  },
  {
    id: 17,
    nombre: 'Ejercicios fitness',
    proveedor_id: 3
  },
  {
    id: 18,
    nombre: 'Jardin',
    proveedor_id: 3
  },
  {
    id: 19,
    nombre: 'Uso Personal',
    proveedor_id: 3
  },
  {
    id: 20,
    nombre: 'Vestuario Mujer',
    proveedor_id: 4
  },
  {
    id: 21,
    nombre: 'Vestuario Hombre',
    proveedor_id: 4
  },
  {
    id: 22,
    nombre: 'Vestuario Niños',
    proveedor_id: 4
  },
  {
    id: 23,
    nombre: 'Articulos de Cuidado Personal',
    proveedor_id: 4
  },
  {
    id: 24,
    nombre: 'Tejidos a Mano',
    proveedor_id: 4
  },
  {
    id: 25,
    nombre: 'Paqueteria',
    proveedor_id: 4
  },
  {
    id: 26,
    nombre: 'Articulos para Regalos',
    proveedor_id: 4
  },
  {
    id: 27,
    nombre: 'Marcas de Ropa Interior',
    proveedor_id: 4
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
