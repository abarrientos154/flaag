'use strict'

const Helpers = use('Helpers')
const mkdirp = use('mkdirp')
const User = use("App/Models/User")
const { validate } = use("Validator")
const fs = require('fs')
const { request } = require('http')
var randomize = require('randomatic');


/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with uploads
 */
class UploadController {
  async tiendaFiles ({ params, response }) {
    let dir = params.file
    response.download(Helpers.appRoot('storage/uploads/proveedor_images') + `/${dir}`)
  }

  async perfilImg ({ params, response, auth }) {
    let dir = params.file
    console.log(dir, 'dirrrrrrrrrr')
    response.download(Helpers.appRoot('storage/uploads/perfil') + `/${dir}`)
  }

  async subirPerfil ({ request, response, auth }) {
    let user = await auth.getUser()
    let id = user._id.toString()
    var profilePic = request.file('perfil', {
    })
    if (profilePic) {
      if (Helpers.appRoot('storage/uploads/perfil')) {
        await profilePic.move(Helpers.appRoot('storage/uploads/perfil'), {
          name: user._id.toString(),
          overwrite: true
        })
      } else {
        mkdirp.sync(`${__dirname}/storage/Excel`)
      }

      if (!profilePic.moved()) {
        return profilePic.error()
      } else {
        console.log(id, 'iddddddddd')
        user = await User.query().where('_id', id.toString()).update({perfil: true})
        response.send(user)
      }
    }
  }
  async subirImgTienda ({ request, response, auth }) {
    let codeFile = randomize('Aa0', 30)
    let user = await auth.getUser()
    var profilePic = request.file('files', {
    })
    if (profilePic) {
      if (Helpers.appRoot('storage/uploads/proveedor_images')) {
        await profilePic.move(Helpers.appRoot('storage/uploads/proveedor_images'), {
          name: codeFile,
          overwrite: true
        })
      } else {
        mkdirp.sync(`${__dirname}/storage/Excel`)
      }

      if (!profilePic.moved()) {
        return profilePic.error()
      } else {
        let proveedor = await User.find(user._id)
        if (proveedor.images) {
          proveedor.images.push(codeFile)
        } else {
          proveedor.images = []
          proveedor.images.push(codeFile)
        }
        await proveedor.save()
        console.log(proveedor, 'proveedor buscar')
        response.send(proveedor)
      }
    }
  }
  async eliminarImgTienda ({ params, response, auth }) {
    const dir = params.file
    await fs.unlinkSync(Helpers.appRoot(`storage/uploads/proveedor_images/${dir}`))
    let user = await auth.getUser()
    let provider = await User.find(user._id)
    let i = provider.images.indexOf(dir)
    provider.images.splice(i, 1)
    await provider.save()
    response.send(provider)
  }
}

module.exports = UploadController
