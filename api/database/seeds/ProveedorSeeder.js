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
    delivery: false,
    regiones: false,
    perfil: false,
    dias: [],
    roles: [3]
  },
  {
    id: 2,
    email: 'artesaniasmaosa@flaag.cl',
    password: 'flaag2020',
    nombreEmpresa: 'Novedades Antho',
    rut: '000000',
    direccionFisica: 'En chile',
    telefono: '041254545445',
    delivery: false,
    regiones: false,
    perfil: false,
    dias: [],
    roles: [3]
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
        await user.save()
      }
    }
    console.log('Finished User')
  }
}

module.exports = ProveedorSeeder
