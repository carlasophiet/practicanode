module.exports ={
	sendEmail: function(req,res){
		'use strict';
		const nodemailer = require('nodemailer');
		
	console.log(req.body);//todo lo que es texto
	res.render('contacto',{ //se vuelve a poner todo, por ejemplo si tengo un titulo.
		success:"Mensaje enviado"
	});

	}

//mando toda la función que quiera. 





}//adentro de llaves va lo que exporto para afuera.