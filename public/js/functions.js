$(document).ready(function(){
		$(".verMas").on("click",function(){
			var vid= $(this).data('id');
			var id= '#'+ vid;
			if($(id).css('display')==="none"){
				$('.escondido').hide();
				$(id).css('display','block');
			}else{
				if($(id).css('display')==="block"){
				$(id).css('display','none');
			}
		}
	});



}//TERMINA DOC READY