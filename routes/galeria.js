var express = require('express');
var router = express.Router();
var novedadesModel= require('../models/novedadesModel')
var cloudinary = require('cloudinary').v2;

/* GET home page. */
router.get('/', async function(req, res, next) {

novedades = await novedadesModel.getNovedades()

novedades = novedades.splice(0,5);

novedades = novedades.map(galeria => {
  if (galeria.img_id) {
    const imagen = cloudinary.url(galeria.img_id, {
    });
  return {
  ...galeria,
  imagen
  }
  } else {
    return {
      ...galeria,
      imagen: ''
    }
  }
});
   res.render('galeria', {
    novedades
  });
});

module.exports = router;