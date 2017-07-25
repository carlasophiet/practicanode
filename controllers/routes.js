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

router.get('/dibujos',function(req,res){
	res.render('dibujos',{
		titulo:"Carla Sophie Tapparo || Dibujos",
		subtitulo:"Dibujos",
	});
});
router.get('/cuidado',function(req,res){
	res.render('cuidado',{
		titulo:"Carla Sophie Tapparo || Cuidado",
		subtitulo:"Cuidado",
	});
});
router.get('/concepts-lihuen',function(req,res){
	res.render('concepts-lihuen',{
		titulo:"Carla Sophie Tapparo || Lihuén",
		subtitulo:"Concepts para Lihuén",
	});
});
router.get('/fondos-lihuen',function(req,res){
	res.render('fondos-lihuen',{
		titulo:"Carla Sophie Tapparo || Lihuén",
		subtitulo:"Fondos para Lihuen",
	});
});


router.get('/contacto',function(req,res){
	res.render('contacto',{
		subtitulo:"Contacto",
});
});
router.get('/contacto/send-message', function(req, res) {
  res.redirect('/contacto');
});

router.post('/contacto/send-message', function(req, res) {
  mailSender.sendEmail(req.body);

  res.render('contacto', {
  	subtitulo:"Contacto",
    success: "Email enviado exitosamente."
  });
});

module.exports = router;