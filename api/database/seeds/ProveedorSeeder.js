'use strict'

/*
|--------------------------------------------------------------------------
| ProveedorSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const User = use("App/Models/User")
const userData = [
  {
    id: 1,
    email: 'novedadesantho@flaag.cl',
    password: 'flaag2020',
    nombreEmpresa: 'Novedades Antho',
    rut: '',
    direccionFisica: '',
    telefono: '78240525',
    enable: true,
    delivery: false,
    regiones: false,
    perfil: false,
    dias: [],
    roles: [3],
    images: []
  },
  {
    id: 2,
    email: 'artesaniasmaosaysen@flaag.cl',
    password: 'flaag2020',
    nombreEmpresa: 'Artesanias Locales y Regionales Maos Aysen',
    rut: '13.526.647.-7',
    direccionFisica: '',
    telefono: '984259155',
    enable: true,
    delivery: false,
    regiones: false,
    perfil: false,
    dias: [],
    roles: [3],
    images: []
  },
  {
    id: 3,
    email: 'caroleyojeda@flaag.cl',
    password: 'flaag2020',
    nombreEmpresa: 'Caroley Ojeda',
    rut: '15.302.969.-5',
    direccionFisica: '',
    telefono: '',
    enable: true,
    delivery: false,
    regiones: false,
    perfil: false,
    dias: [],
    roles: [3],
    images: []
  },
  {
    id: 4,
    email: 'elrincondelanonita@flaag.cl',
    password: 'flaag2020',
    nombreEmpresa: 'El Rincón de la Nonita',
    rut: '10.294.604-9',
    direccionFisica: '',
    telefono: '+56991080466',
    enable: true,
    delivery: false,
    regiones: false,
    perfil: false,
    dias: [],
    roles: [3],
    images: []
  },
  {
    id: 5,
    email: 'claudina@flaag.cl',
    password: 'flaag2020',
    nombreEmpresa: 'Claudina',
    rut: '11.986.966-8',
    direccionFisica: '',
    telefono: '990772748',
    enable: true,
    delivery: false,
    regiones: false,
    perfil: false,
    dias: [],
    roles: [3],
    images: []
  },
  {
    id: 6,
    email: 'crismar@flaag.cl',
    password: 'flaag2020',
    nombreEmpresa: 'Crismar',
    rut: '',
    direccionFisica: '',
    telefono: '982512090',
    enable: true,
    delivery: false,
    regiones: false,
    perfil: false,
    dias: [],
    roles: [3],
    images: []
  },
  {
    id: 7,
    email: 'casadelosartesanos@flaag.cl',
    password: 'flaag2020',
    nombreEmpresa: 'Casa de los Artesanos',
    rut: '',
    direccionFisica: '',
    telefono: '+5698021744',
    enable: true,
    delivery: false,
    regiones: false,
    perfil: false,
    dias: [],
    roles: [3],
    images: []
  },
  {
    id: 8,
    email: 'manosaustrales@flaag.cl',
    password: 'flaag2020',
    nombreEmpresa: 'Manos Australes',
    rut: '9643502',
    direccionFisica: '',
    telefono: '935681231',
    enable: true,
    delivery: false,
    regiones: false,
    perfil: false,
    dias: [],
    roles: [3],
    images: []
  },
  {
    id: 9,
    email: 'lasteniarain@flaag.cl',
    password: 'flaag2020',
    nombreEmpresa: 'Lastenia Rain',
    rut: '6.162.989-0',
    direccionFisica: '',
    telefono: '976571451',
    enable: true,
    delivery: false,
    regiones: false,
    perfil: false,
    dias: [],
    roles: [3],
    images: []
  },
  {
    id: 10,
    email: 'mirtacardenas@flaag.cl',
    password: 'flaag2020',
    nombreEmpresa: 'Mirta Cardenas',
    rut: '8.926.093-0',
    direccionFisica: '',
    telefono: '987562710',
    enable: true,
    delivery: false,
    regiones: false,
    perfil: false,
    dias: [],
    roles: [3],
    images: []
  },
  {
    id: 11,
    email: 'pethousesfinesse@flaag.cl',
    password: 'flaag2020',
    nombreEmpresa: 'Pet Houses Finesse',
    rut: '16.533.896-0',
    direccionFisica: '',
    telefono: '937358621',
    enable: true,
    delivery: false,
    regiones: false,
    perfil: false,
    dias: [],
    roles: [3],
    images: []
  },
  {
    id: 12,
    email: 'lmansillaaynol@flaag.cl',
    password: 'flaag2020',
    nombreEmpresa: 'Luz',
    rut: '8.980.721-2',
    direccionFisica: '',
    telefono: '977453840',
    enable: true,
    delivery: false,
    regiones: false,
    perfil: false,
    dias: [],
    roles: [3],
    images: []
  },
  {
    id: 13,
    email: 'elrincontresb@flaag.cl',
    password: 'flaag2020',
    nombreEmpresa: 'El Rincon Tres B',
    rut: '12540685-8 ',
    direccionFisica: '',
    telefono: '58548879',
    enable: true,
    delivery: false,
    regiones: false,
    perfil: false,
    dias: [],
    roles: [3],
    images: []
  },
  {
    id: 14,
    email: 'rangelpatagonia@flaag.cl',
    password: 'flaag2020',
    nombreEmpresa: 'Ramona Argel',
    rut: '8.927.159-2 ',
    direccionFisica: '',
    telefono: '89271592',
    enable: true,
    delivery: false,
    regiones: false,
    perfil: false,
    dias: [],
    roles: [3],
    images: []
  },
  {
    id: 15,
    email: 'vanidosas@flaag.cl',
    password: 'flaag2020',
    nombreEmpresa: 'Vanidosas',
    rut: '16.791.088-2',
    direccionFisica: '',
    telefono: '+56963936500',
    enable: true,
    delivery: false,
    regiones: false,
    perfil: false,
    dias: [],
    roles: [3],
    images: []
  },
  {
    id: 16,
    email: 'katherinediaz@flaag.cl',
    password: 'flaag2020',
    nombreEmpresa: 'Katherine Diaz',
    rut: '18.217.849-7',
    direccionFisica: '',
    telefono: '66851722',
    enable: true,
    delivery: false,
    regiones: false,
    perfil: false,
    dias: [],
    roles: [3],
    images: []
  }
]


class ProveedorSeeder {
  async run () {
    for (let i of userData) {
      let user = await User.findBy('id', i.id)
      if (!user) {
        await User.create(i)
      }
      else {
        user.id = i.id
        user.email = i.email
        user.password = i.password
        user.nombreEmpresa = i.nombreEmpresa
        user.rut = i.rut
        user.direccionFisica = i.direccionFisica
        user.telefono = i.telefono
        user.delivery = i.delivery
        user.regiones = i.regiones
        user.perfil = i.perfil
        user.roles = i.roles
        user.images = i.images
        await user.save()
      }
    }
    console.log('Finished User')
  }
}

module.exports = ProveedorSeeder
