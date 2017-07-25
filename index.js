var express=require('express'); //require es funcion de JS que funciona en node para llamar paquetes de dependencias
var app=express(); //variable que me devuelve lo que hay en express.
var path=require('path'); //libreria que viene con Node. 
var bodyParser=require('body-parser');


//define funcionalidad extra entre que llega petición al servidor y que yo ejecuto funcion para petición (use)
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());//obj donde meto POST de form
//set the view engine to ejs
app.set('view engine','ejs'); //cargar EJS como motor de vista
app.set('views', path.join(__dirname,'public','views')); //para que siempre busque las vistas a esta carpeta
app.use('/public', express.static('public')); //use es método de express, static pasa carpeta public donde tnengo mis css/js/imagenes
app.set('js', path.join(__dirname,'public','js'));
app.use(require("./controllers/routes"));

app.listen(3000, function(){//servidor web esta a la escucha de un puerto -1024 al 64000?-, el primer par es el puerto
	console.log('acá');//no es necesario, pero es para verificar.
	console.log(__dirname);
});
//servidor andando!



