'use strict'

/*
|--------------------------------------------------------------------------
| PermissionSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Permission = use("App/Models/Permission")
const permissionData = [
  {
    id: 1,
    name: "Bienvenida",
    description: "Bienvenida",
  },
  {
    id: 2,
    name: "Admin Bienvenida",
    description: "Administra las publicidades del inicio y el perfil de los proveedores",
  },
  {
    id: 3,
    name: "Perfil Proveedor",
    description: "Editar Perfil Proveedor",
  }
]

class PermissionSeeder {
  async run() {
    for (let i in permissionData) {
      let permission = await Permission.findBy('id', permissionData[i].id)
      if (!permission) {
        await Permission.create(permissionData[i])
      } else {
        permission.name = permissionData[i].name
        permission.id = permissionData[i].id
        permission.description = permissionData[i].description
        await permission.save()
      }
    }
    console.log('Finished Permission')
  }
}

module.exports = PermissionSeeder
