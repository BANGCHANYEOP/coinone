const nodemailer = require('nodemailer') 
const smtpTransport = require('nodemailer-smtp-transport') 
let transporter = nodemailer.createTransport(smtpTransport({ 
    service: 'gmail', 
    auth: { 
    user: 'cksduq594178@gmail.com', 
    pass: 'rkwlak!23' } })) 
let mailOptions = { from: '방찬엽 <cksduq594178@gmail.com>', 
to: 'cksduq0624@naver.com', 
subject: 'Node.js Send Mail Test', 
text: '테스트입니다.' } 
transporter.sendMail(mailOptions, (error, info) => {
 if (error) { return console.log(error) } 
console.log('Message %s sent: %s', info.messageId, info.response) 
})