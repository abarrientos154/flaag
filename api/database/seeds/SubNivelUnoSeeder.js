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
  },
  {
    id: 21,
    categoria_id: 5,
    nombre: 'Articulos y accesorios en fieltro',
    proveedor_id: 2
  },
  {
    id: 22,
    categoria_id: 5,
    nombre: 'Lanas Naturales',
    proveedor_id: 2
  },
  {
    id: 23,
    categoria_id: 5,
    nombre: 'Indumentaria',
    proveedor_id: 2
  },
  {
    id: 24,
    categoria_id: 5,
    nombre: 'Decoración en Telar Mapuche',
    proveedor_id: 2
  },
  {
    id: 25,
    categoria_id: 5,
    nombre: 'Artículos y Decoración en Cuero',
    proveedor_id: 2
  },
  {
    id: 26,
    categoria_id: 5,
    nombre: 'Decoración',
    proveedor_id: 2
  },
  {
    id: 27,
    categoria_id: 5,
    nombre: 'Hogar en Fibras Naturales',
    proveedor_id: 2
  },
  {
    id: 28,
    categoria_id: 5,
    nombre: 'Mesa Cocina en Madera Nativa',
    proveedor_id: 2
  },
  {
    id: 29,
    categoria_id: 5,
    nombre: 'Tejidos a Crochet',
    proveedor_id: 2
  },
  {
    id: 30,
    categoria_id: 5,
    nombre: 'Hilos',
    proveedor_id: 2
  },
  {
    id: 31,
    categoria_id: 6,
    nombre: 'Cuadros en Tecnicas de Cuero',
    proveedor_id: 2
  },
  {
    id: 32,
    categoria_id: 6,
    nombre: 'Cuadros en Telar',
    proveedor_id: 2
  },
  {
    id: 33,
    categoria_id: 6,
    nombre: 'Alfombras',
    proveedor_id: 2
  },
  {
    id: 34,
    categoria_id: 6,
    nombre: 'Canastos',
    proveedor_id: 2
  },
  {
    id: 35,
    categoria_id: 6,
    nombre: 'Pieceras',
    proveedor_id: 2
  },
  {
    id: 36,
    categoria_id: 6,
    nombre: 'Murales',
    proveedor_id: 2
  },
  {
    id: 37,
    categoria_id: 6,
    nombre: 'Tapices',
    proveedor_id: 2
  },
  {
    id: 38,
    categoria_id: 6,
    nombre: 'Joyeros',
    proveedor_id: 2
  },
  {
    id: 39,
    categoria_id: 6,
    nombre: 'Lamparas',
    proveedor_id: 2
  },
  {
    id: 40,
    categoria_id: 7,
    nombre: 'Canastos de Cocina',
    proveedor_id: 2
  },
  {
    id: 41,
    categoria_id: 7,
    nombre: 'Tablas Rusticas de Picar Individuales',
    proveedor_id: 2
  },
  {
    id: 42,
    categoria_id: 7,
    nombre: 'Caminos de Mesa',
    proveedor_id: 2
  },
  {
    id: 43,
    categoria_id: 8,
    nombre: 'Chales',
    proveedor_id: 2
  },
  {
    id: 44,
    categoria_id: 8,
    nombre: 'Echarpes',
    proveedor_id: 2
  },
  {
    id: 45,
    categoria_id: 8,
    nombre: 'Bufandas',
    proveedor_id: 2
  },
  {
    id: 46,
    categoria_id: 8,
    nombre: 'Mantas',
    proveedor_id: 2
  },
  {
    id: 47,
    categoria_id: 8,
    nombre: 'Ponchos',
    proveedor_id: 2
  },
  {
    id: 48,
    categoria_id: 8,
    nombre: 'Ruanas',
    proveedor_id: 2
  },
  {
    id: 49,
    categoria_id: 9,
    nombre: 'Aros',
    proveedor_id: 2
  },
  {
    id: 50,
    categoria_id: 9,
    nombre: 'Collares',
    proveedor_id: 2
  },
  {
    id: 51,
    categoria_id: 9,
    nombre: 'Pulseras',
    proveedor_id: 2
  },
  {
    id: 52,
    categoria_id: 9,
    nombre: 'Sombreros',
    proveedor_id: 2
  },
  {
    id: 53,
    categoria_id: 9,
    nombre: 'Carteras',
    proveedor_id: 2
  },
  {
    id: 54,
    categoria_id: 9,
    nombre: 'Boinas',
    proveedor_id: 2
  },
  {
    id: 55,
    categoria_id: 9,
    nombre: 'Morrales',
    proveedor_id: 2
  },
  {
    id: 56,
    categoria_id: 10,
    nombre: 'Chalecos',
    proveedor_id: 2
  },
  {
    id: 57,
    categoria_id: 10,
    nombre: 'Conjunto Bebe',
    proveedor_id: 2
  },
  {
    id: 58,
    categoria_id: 10,
    nombre: 'Pantunflas',
    proveedor_id: 2
  },
  {
    id: 59,
    categoria_id: 10,
    nombre: 'Zapatitos',
    proveedor_id: 2
  },
  {
    id: 60,
    categoria_id: 11,
    nombre: 'Chales',
    proveedor_id: 2
  },
  {
    id: 61,
    categoria_id: 11,
    nombre: 'Echarpes',
    proveedor_id: 2
  },
  {
    id: 62,
    categoria_id: 11,
    nombre: 'Ponchos',
    proveedor_id: 2
  },
  {
    id: 63,
    categoria_id: 11,
    nombre: 'Boinas',
    proveedor_id: 2
  },
  {
    id: 64,
    categoria_id: 12,
    nombre: 'Llaveros',
    proveedor_id: 2
  },
  {
    id: 65,
    categoria_id: 12,
    nombre: 'Mageticos',
    proveedor_id: 2
  },
  {
    id: 66,
    categoria_id: 12,
    nombre: 'Monederos',
    proveedor_id: 2
  },
  {
    id: 67,
    categoria_id: 13,
    nombre: 'Agendas Personalizadas',
    proveedor_id: 2
  },
  {
    id: 68,
    categoria_id: 13,
    nombre: 'Portalapices',
    proveedor_id: 2
  },
  {
    id: 68,
    categoria_id: 13,
    nombre: 'Lapiceras',
    proveedor_id: 2
  },
  {
    id: 70,
    categoria_id: 13,
    nombre: 'Neceser',
    proveedor_id: 2
  },
  {
    id: 71,
    categoria_id: 13,
    nombre: 'Billeteras',
    proveedor_id: 2
  },
  {
    id: 72,
    categoria_id: 13,
    nombre: 'Porta Celular',
    proveedor_id: 2
  },
  {
    id: 73,
    categoria_id: 13,
    nombre: 'Porta Documentos',
    proveedor_id: 2
  },
  {
    id: 74,
    categoria_id: 13,
    nombre: 'Porta Tarjetas',
    proveedor_id: 2
  },
  {
    id: 77,
    categoria_id: 13,
    nombre: 'Cartera de Mano',
    proveedor_id: 2
  },
  {
    id: 76,
    categoria_id: 13,
    nombre: 'Fundas de Cuchillo',
    proveedor_id: 2
  },
  {
    id: 77,
    categoria_id: 13,
    nombre: 'Joyeros',
    proveedor_id: 2
  },
  {
    id: 78,
    categoria_id: 14,
    nombre: 'Colaciones',
    proveedor_id: 3
  },
  {
    id: 79,
    categoria_id: 14,
    nombre: 'Papas Rellenas',
    proveedor_id: 3
  },
  {
    id: 80,
    categoria_id: 14,
    nombre: 'Milcaos',
    proveedor_id: 3
  },
  {
    id: 81,
    categoria_id: 14,
    nombre: 'Empanadas',
    proveedor_id: 3
  },
  {
    id: 82,
    categoria_id: 14,
    nombre: 'Pie Limón',
    proveedor_id: 3
  },
  {
    id: 83,
    categoria_id: 14,
    nombre: 'Tortas Vaso',
    proveedor_id: 3
  },
  {
    id: 84,
    categoria_id: 14,
    nombre: 'Kuguen',
    proveedor_id: 3
  },
  {
    id: 85,
    categoria_id: 14,
    nombre: 'Torta Yogurt',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 15,
    nombre: 'Cargadores',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 15,
    nombre: 'Equipos de Musica',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 15,
    nombre: 'Alargadores',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 15,
    nombre: 'Audifonos',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 15,
    nombre: 'Power Box',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 15,
    nombre: 'Radio Portatil',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 15,
    nombre: 'Linterna Solar Radio',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 15,
    nombre: 'Foco solar',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 15,
    nombre: 'Luz Selfie',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 15,
    nombre: 'Tripoide para celular',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 15,
    nombre: 'Ampliador de pantalla',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 15,
    nombre: 'Espanta cuco',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 15,
    nombre: 'Aspiradora de Auto',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 16,
    nombre: 'Ollas',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 16,
    nombre: 'Fuentes',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 16,
    nombre: 'Vasos',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 16,
    nombre: 'PLatos',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 16,
    nombre: 'Tazones',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 16,
    nombre: 'Cubiertos',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 16,
    nombre: 'Coladores',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 16,
    nombre: 'Dispensador de Jabón',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 16,
    nombre: 'Organizador de Ollas',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 16,
    nombre: 'Picador Manual',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 16,
    nombre: 'Bases de Utensilios',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 16,
    nombre: 'Batidoras',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 16,
    nombre: 'Sartenes',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 16,
    nombre: 'Filtro Potenciador',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 16,
    nombre: 'Organizador de espacios',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 16,
    nombre: 'Baldes',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 16,
    nombre: 'Basureros',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 16,
    nombre: 'Pesa Gramera',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 16,
    nombre: 'Destapador de Botella',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 16,
    nombre: 'Moldes de Tortas',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 16,
    nombre: 'Filtro Pegable',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 16,
    nombre: 'Hervidores',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 16,
    nombre: 'Colgadores',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 16,
    nombre: 'Botella de Vidrio',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 17,
    nombre: 'Barra de Ejercicios',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 17,
    nombre: 'Smart Fitness Gluteos',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 17,
    nombre: 'Abdominal de Succión',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 17,
    nombre: 'Banda de Resistencia',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 17,
    nombre: 'Cuerda Elastica',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 17,
    nombre: 'Bandas de Ejercicios Body Trimer',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 17,
    nombre: 'Pectoral Multifuncional',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 17,
    nombre: 'Ruedas de Ejercicios Abdominal',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 17,
    nombre: 'Maquina de Ejercicios',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 17,
    nombre: 'Apreta Mano',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 18,
    nombre: 'Macetros',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 18,
    nombre: 'Set Jardinera',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 18,
    nombre: 'Guante Jardinero',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 18,
    nombre: 'Maceteros de Pared',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 18,
    nombre: 'Regadera',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 19,
    nombre: 'Secador de Cabello',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 19,
    nombre: 'Rizador Profesional',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 19,
    nombre: 'Cepillo Alisador',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 19,
    nombre: 'Cortador de Cabello',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 19,
    nombre: 'Corrector de Postura',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 19,
    nombre: 'Masajeador Demoledor',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 19,
    nombre: 'Depilador de Cejas',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 19,
    nombre: 'Blanqueador de Dientes',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 19,
    nombre: 'Espejo Led Touch',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 19,
    nombre: 'Quemador Triple Grasa',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 19,
    nombre: 'Plan 30 Dias',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 19,
    nombre: 'Devorador de Grasa',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 19,
    nombre: 'Pesas',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 19,
    nombre: 'Ventilador Portatil',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 19,
    nombre: 'Mascarillas',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 19,
    nombre: 'Flea Doctor',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 19,
    nombre: 'Dispensador de Pasta Dental',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 19,
    nombre: 'Plancha de Cabello',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 20,
    nombre: 'Ropa Interior',
    proveedor_id: 4
  },
  {
    id: 86,
    categoria_id: 21,
    nombre: 'Ropa Interior',
    proveedor_id: 4
  },
  {
    id: 86,
    categoria_id: 22,
    nombre: 'Ropa Interior',
    proveedor_id: 4
  },
  {
    id: 86,
    categoria_id: 23,
    nombre: 'Cósmetica',
    proveedor_id: 4
  },
  {
    id: 86,
    categoria_id: 23,
    nombre: 'Lociones',
    proveedor_id: 4
  },
  {
    id: 86,
    categoria_id: 23,
    nombre: 'Perfumes',
    proveedor_id: 4
  },
  {
    id: 86,
    categoria_id: 23,
    nombre: 'Estuches',
    proveedor_id: 4
  },
  {
    id: 86,
    categoria_id: 23,
    nombre: 'Pañales de Adulto',
    proveedor_id: 4
  },
  {
    id: 86,
    categoria_id: 23,
    nombre: 'Pañales de Bebe',
    proveedor_id: 4
  },
  {
    id: 86,
    categoria_id: 23,
    nombre: 'Confort',
    proveedor_id: 4
  },
  {
    id: 86,
    categoria_id: 23,
    nombre: 'Alcohol Gel',
    proveedor_id: 4
  },
  {
    id: 86,
    categoria_id: 24,
    nombre: 'Cuellos',
    proveedor_id: 4
  },
  {
    id: 86,
    categoria_id: 24,
    nombre: 'Gorros',
    proveedor_id: 4
  },
  {
    id: 86,
    categoria_id: 24,
    nombre: 'Mitones',
    proveedor_id: 4
  },
  {
    id: 86,
    categoria_id: 24,
    nombre: 'Ropa de niño',
    proveedor_id: 4
  },
  {
    id: 86,
    categoria_id: 24,
    nombre: 'Tejidos a Pedido',
    proveedor_id: 4
  },
  {
    id: 86,
    categoria_id: 25,
    nombre: 'Lanas',
    proveedor_id: 4
  },
  {
    id: 86,
    categoria_id: 25,
    nombre: 'Hilos',
    proveedor_id: 4
  },
  {
    id: 86,
    categoria_id: 25,
    nombre: 'Algodón',
    proveedor_id: 4
  },
  {
    id: 86,
    categoria_id: 26,
    nombre: 'Confiteria Importada',
    proveedor_id: 4
  },
  {
    id: 86,
    categoria_id: 27,
    nombre: 'Flores',
    proveedor_id: 4
  },
  {
    id: 86,
    categoria_id: 27,
    nombre: 'Baziani',
    proveedor_id: 4
  },

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
