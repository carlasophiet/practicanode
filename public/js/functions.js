$(document).ready(function(){

		$(".verMas").on('click',function(){
			var vid= $(this).data('id');
			var id= '#div'+ vid;
			console.log(id);
			if($(id).css('display')=='none'){
				$(id).css('display', 'block');
			}else{
				if($(id).css('display')=='block'){
				$(id).css('display', 'none');}
			}
		});

		//EMPIEZA MODAL
		$('.chiquita').on('click', function(){	
			id = $(this).data('id');
			img = id;
			console.log('estoy');
			$('#imagenGrande').attr('src', img);
				});	
		//TERMINA MODAL


});//TERMINA DOC READY