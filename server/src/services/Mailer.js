const nodemailer = require('nodemailer')
const path = require('path')
const EmailTemplate = require('email-templates')
const config = require('../config/config')
const { user, pass } = config

class Mailer {
  constructor(data) {
    this.user = user
    this.pass = pass
    this.local = data.local
    this.templateName = data.templateName
    this.createTransport = this.createTransport.bind(this)
    this.sendEmail = this.sendEmail.bind(this)

    this.createTransport()
  }

  createTransport() {
    this.transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: this.user,
        pass: this.pass,
      },
    })
  }

  async sendEmail() {
    try {
      const email = new EmailTemplate({
        views: {
          options: {
            extension: 'hbs',
          },
        },
      })

      const html = await email.render(
        path.join(__dirname, '..', 'templates', `${this.templateName}/html`),
        this.local,
      )
      const subject = await email.render(
        path.join(__dirname, '..', 'templates', `${this.templateName}/subject`),
        this.local,
      )
      const text = await email.render(
        path.join(__dirname, '..', 'templates', `${this.templateName}/text`),
        this.local,
      )

      await this.transport.sendMail({
        to: this.local.email,
        html,
        subject,
        text,
      })

      return null
    } catch (error) {
      // console.log(error)
      return error.message
    }
  }
}

module.exports = Mailer
