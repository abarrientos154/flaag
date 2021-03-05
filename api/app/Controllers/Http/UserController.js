"use strict";

const Helpers = use('Helpers')
const mkdirp = use('mkdirp')
const fs = require('fs')
var randomize = require('randomatic');
const Flow = require('flowcl-node-api-client')
const User = use("App/Models/User")
const Role = use("App/Models/Role")
const Floww = use("App/Models/Flow")
const { validate } = use("Validator")
const Env = use('Env')
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with users
 */
class UserController {

  async editarP ({ request, response, auth }) {
    const userL = (await auth.getUser()).toJSON()
    let body = request.only(User.fillableProveedor)
    let id = request.only('_id')
    if (userL.roles[0] !== 1) {
      body.status = 2
      let user = await User.query().where('_id', userL._id.toString()).update(body)
      response.send(user)
    } else {
      body.status = 1
      let prov = await User.query().where({_id: id._id}).update(body)
      response.send(prov)
    }
  }

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

  async userById({ params, response, auth }) {
    const user = await User.query().where({_id: params.id}).first()
    response.send(user)
  }

  async proveedores ({ request, response, auth }) {
    let emprendedores = (await User.query().where({roles: [3]}).fetch()).toJSON()
    response.send(emprendedores)
  }

  async proveedorStatus({ params, request, response }) {
    let dat = request.all()
    let enable = await User.query().where({_id: params.id}).update({status: dat.status})
    response.send(enable)
  }
  async flow({ request, response }) {
    let dat = request.all()
    var config = {
       apiKey: Env.get('FLOW_APIKEY'),
       secretKey: Env.get('FLOW_SECRETKEY'),
       apiURL: Env.get('FLOW_APIURL'),
       baseURL: Env.get('FLOW_BASEURL')
    }
    const params = {
        commerceOrder: Math.floor(Math.random() * (2000 - 1100 + 1)) + 1100,
        subject: 'Pago de prueba',
        currency: 'CLP',
        amount: dat.amount,
        email: dat.email,
        paymentMethod: 9,
        urlConfirmation: config.baseURL + '/php/respuesta_flow.php',
        urlReturn: config.baseURL + '/php/respuesta_flow.php',
      }
    //console.log(params,config)
    const serviceName = 'payment/create'
    try {
        //console.log(Flow)
        // Instancia la clase FlowApi
        const flowApi = new Flow.default(config)
        // Ejecuta el servicio
        var respon = await flowApi.send(serviceName, params, 'POST')
        // Prepara url para redireccionar el browser del pagador
        var redirect = respon.url + '?token=' + respon.token
        console.log(`location: ${redirect}`)
        response.send({redirect, token:respon.token})
      } catch (error) {
        console.log(error)
        response.unprocessableEntity(error.message)
      }
  }
  async store_flow ({request, response}) {
    let dat = request.all()
    Floww.create(dat)
  }
  async flowResponse ({params, response}) {
    let dat = params.token
    var config = {
       apiKey: Env.get('FLOW_APIKEY'),
       secretKey: Env.get('FLOW_SECRETKEY'),
       apiURL: Env.get('FLOW_APIURL'),
       baseURL: Env.get('FLOW_BASEURL')
    }
    const paramss = {
       token: dat
      }
    const serviceName = 'payment/getStatus'
    console.log(dat,'floww')
    try {
        //console.log(Flow)
        // Instancia la clase FlowApi
        const flowApi = new Flow.default(config)
        // Ejecuta el servicio
        var respon = await flowApi.send(serviceName, paramss, 'get')
        // Prepara url para redireccionar el browser del pagador
        //var redirect = respon.url + '?token=' + respon.token
        console.log(`location: ${respon}`)
        const infoLocal = (await Floww.query().where({token: dat}).fetch()).toJSON()
        response.send({flow:respon , localData: infoLocal[0]})
      } catch (error) {
        console.log(error)
        response.unprocessableEntity(error.message)
      }
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
