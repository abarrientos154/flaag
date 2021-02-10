"use strict";

const Helpers = use('Helpers')
const mkdirp = use('mkdirp')
const fs = require('fs')
var randomize = require('randomatic');
const User = use("App/Models/User")
const Role = use("App/Models/Role")
const { validate } = use("Validator")

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with users
 */
class UserController {

  async register({ request, response }) {
    let dat = request.only(['dat'])
    dat = JSON.parse(dat.dat)
    const validation = await validate(dat, User.fieldValidationRules())
    if (validation.fails()) {
      response.unprocessableEntity(validation.messages())
    } else if (((await User.where({email: dat.email}).fetch()).toJSON()).length) {
      response.unprocessableEntity([{
        message: 'Correo ya registrado en el sistema!'
      }])
    } else {
      let body = dat
      body.roles = [2]
      const user = await User.create(body)

      const profilePic = request.file('perfil', {
      })
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
      }

      response.send(user)
    }
  }

  async validateEmail({ request, response, params }) {
    if (((await User.where({email: params.email}).fetch()).toJSON()).length) {
      response.unprocessableEntity([{
        message: 'Correo ya registrado en el sistema!',
        error: true
      }])
    } else {
      response.send({error: false})
    }
  }

  async userInfo({ request, response, auth }) {
    const user = (await auth.getUser()).toJSON()
    response.send(user)
  }

  async login({ auth, request }) {
    const { email, password } = request.all();
    let token = await auth.attempt(email, password)
    const user = (await User.findBy('email', email)).toJSON()
    let isUser = false
    token.roles = user.roles.map(roleMap => {
      if (roleMap === 3) {
        isUser = true
      }
      return roleMap
    })
    let userRoles = await Role.whereIn('id', token.roles).fetch()
    let permissions = userRoles.toJSON()
    token.permissions = []
    permissions.forEach(element => {
      element.permissions.forEach(element2 => {
        token.permissions.push(element2)
      })
    })

    token.full_name = user.full_name
    token.last_name = user.last_name
    token.enable = user.enable
    token.email = user.email
    token.verify = user.verify
    let data = {}
    data.FLAAG_SESSION_INFO = token
    return data
  }

}

module.exports = UserController;
