$(document).ready(function(){

	$('#item').keyup(function(event){
		if(event.keyCode == 13) {
			event.preventDefault();
			$('#add').click();
		};
	});	


	$('#add').click(function(){
		var txtbox = document.getElementById('item');
		var txtval = txtbox.value;
		event.preventDefault();

		if(!$.trim($('#item').val())) {
			alert('Please enter text to add to the list');
		} else {
			$('<li class="items"></li>').appendTo('#list').html(txtval + '</span><img class="delete" src="delete.gif">');

		document.getElementById('item').value = '';
		};
	});


	$('#list').on('click', '.delete', function(e){e.preventDefault(); $(this).parent().remove()});

	$('#list').on('click', 'li', function(){$(this).toggleClass('strike')});

	$('#list').on('mouseenter', 'li', function(){$(this).children('.delete').toggleClass('show');});
	$('#list').on('mouseleave', 'li', function(){$(this).children('.delete').toggleClass('show');});

});


