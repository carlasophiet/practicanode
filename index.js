var express=require('express'); //require es funcion de JS que funciona en node para llamar paquetes de dependencias
var app=express(); //variable que me devuelve lo que hay en express.
var path=require('path'); //libreria que viene con Node. 

app.use('/public', express.static('public')); //use es método de express, static pasa carpeta public donde tnengo mis css/js/imagenes
//para no tener que cargar más de una vez el css.
app.get('/',function(req,res){
	//res.send('hola mundo');>send es para texto o html
	res.sendFile(path.join(__dirname,"public","views","index.html")); //join para que sea para Linux o Windows según barritas
//variable __dirname > variable que me devuelve donde estoy parado ABSOLUTO, después concateno subpaths donde yo cree lo que quería.
}); //.get > escuche peticion que lnodelega por http, '/' > cuando vayan a path principal (ej: facebook.com/), EXPRESS ES COLLECION DE MÉTODOS DE 
//PROTOCOLO HTTP(Y MÁS), LE VOY A PASAR CALLBACK QUE SE EJECUTA ANTE PEDIDO QUE ME LLEGO (CUANDO ENTRA A ESA DIRECCIÓN/PATH)
//REQ > INFO QUE ME VINO DE CLIENTE. RES> OBJ QUE VOY A USAR PARA ENVIAR INFO AL CLIENTE. canal abierto entre cliente para 
//enviar lo que quiera a cliente.
app.get('/pagina-2',function(req,res){
	res.sendFile(path.join(__dirname,"public","views","pagina-2.html"));
});


app.get('/usuarios',function(req,res){
	//var usuarios =db.getUsuarios(); > SI TUVIERAMOS BD para pedir usuarios. 
	res.send([
	{ name: "aaa", lastname:"bbbb"},
	{ name: "ccc", lastname:"dddd"},
	{ name: "eee", lastname:"ffff"},
		]);	//jSON con usuarios. 
});
app.listen(3000, function(){//servidor web esta a la escucha de un puerto -1024 al 64000?-, el primer par es el puerto
	console.log('acá');//no es necesario, pero es para verificar.
	console.log(__dirname);
});
//servidor andando!