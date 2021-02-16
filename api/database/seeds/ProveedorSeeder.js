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
    email: 'artesaniasmaosaysen@flaag.cl',
    password: 'flaag2020',
    nombreEmpresa: 'Artesanias Locales y Regionales Maos Aysen',
    rut: '13.526.647.-7',
    direccionFisica: '',
    telefono: '984259155',
    delivery: false,
    regiones: false,
    perfil: false,
    dias: [],
    roles: [3]
  },
  {
    id: 3,
    email: 'caroleyojeda@flaag.cl',
    password: 'flaag2020',
    nombreEmpresa: 'Caroley Ojeda',
    rut: '15.302.969.-5',
    direccionFisica: '',
    telefono: '',
    delivery: false,
    regiones: false,
    perfil: false,
    dias: [],
    roles: [3]
  },
  {
    id: 4,
    email: 'elrincondelanonita@flaag.cl',
    password: 'flaag2020',
    nombreEmpresa: 'El Rincón de la Nonita',
    rut: '10.294.604-9',
    direccionFisica: '',
    telefono: '+56991080466',
    delivery: false,
    regiones: false,
    perfil: false,
    dias: [],
    roles: [3]
  }


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
