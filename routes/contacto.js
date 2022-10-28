<<<<<<< HEAD
var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contacto');
});



router.post('/', async (req, res, next) => {

  console.log(req.body)

  var nombre = req.body.nombre;
  var apellido = req.body.apellido;
  var mail = req.body.mail;
  var comentario = req.body.comentario;
  var telefono = req.body.telefono;
  

  var obj = {
    to: 'gonzalouteyral01@gmail.com',
    subject: 'Contacto desde la web',
    html: nombre + " " + apellido + " se contacto a traves de tu pagina y quiere saber mas info de este correo: " + mail + ". <br> Además, hizo el siguiente comentario: " + comentario + ". <br> Su telefono es " + telefono
  } //cierra var obj

  var transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  }) //cierra transporter

  var info = await transporter.sendMail(obj);

  res.render('contacto', {message: 'Mensaje enviado correctamente',
  });

}); //cierra peticion del POST


module.exports = router;
=======
var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contacto');
});



router.post('/', async (req, res, next) => {

  console.log(req.body)

  var nombre = req.body.nombre;
  var apellido = req.body.apellido;
  var mail = req.body.mail;
  var comentario = req.body.comentario;
  var telefono = req.body.telefono;
  

  var obj = {
    to: 'gonzalouteyral01@gmail.com',
    subject: 'Contacto desde la web',
    html: nombre + " " + apellido + " se contacto a traves de tu pagina y quiere saber mas info de este correo: " + mail + ". <br> Además, hizo el siguiente comentario: " + comentario + ". <br> Su telefono es " + telefono
  } //cierra var obj

  var transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  }) //cierra transporter

  var info = await transporter.sendMail(obj);

  res.render('contacto', {message: 'Mensaje enviado correctamente',
  });

}); //cierra peticion del POST


module.exports = router;
>>>>>>> 462795d3be5ece8dd75b5756c24f5e505652b4fb
