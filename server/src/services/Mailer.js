const nodemailer = require('nodemailer');
const path = require('path');
const EmailTemplate = require('email-templates').EmailTemplate
const config = require('../config/config');
const { user, pass } = config;


class Mailer{
  constructor(data){
    this.user = user
    this.pass = pass
    this.local = data.local
    this.templateName = data.templateName    
    this.createTransport = this.createTransport.bind(this)
    this.sendEmail = this.sendEmail.bind(this) 
    this.loadTemplate = this.loadTemplate.bind(this) 

    this.createTransport()    
  }

  createTransport() {
    this.transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user:this.user,
        pass:this.pass,
      },
    });
  }

  async sendEmail() {
    try {

    await this.loadTemplate()
    const {email, subject, html, text} = this.local
    await this.transport.sendMail({
      to:email,
      subject,
      html,
      text
    }) 
    return null 
      
    } catch (error) {
      console.log(error)
      return error.message
    }
    
  }

  async loadTemplate() {
    let template = new EmailTemplate(path.join(__dirname,'..','templates', this.templateName))
    const result =  await template.render(this.local)
    this.local.html = result.html
    this.local.text = result.text
    this.local.subject = result.subject
  }


}

module.exports = Mailer


