var express = require('express'),
mailSender = require('./email'),
router = express.Router();

router.get('/',function(req,res){
	res.render('index');
});
router.get('/proyectos',function(req,res){
	res.render('proyectos',{
		titulo:"Carla Sophie Tapparo || Proyectos",
		subtitulo:"Proyectos",
		}); //para mater contenido dinamico desde acá.
	});
router.get('/contacto',function(req,res){
	res.render('contacto',{
		titulo:"Carla Sophie Tapparo || Contacto",
		subtitulo:"Contacto",
		success:'¡Gracias!'});
});
router.get('/dibujos',function(req,res){
	res.render('dibujos',{
		titulo:"Carla Sophie Tapparo || Dibujos",
		subtitulo:"Dibujos",
	});
});

module.exports = router;