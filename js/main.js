/*funciones para mover las imagenes*/
function drag(ev){
	console.log(ev.target.id);
	ev.dataTransfer.setData("text", ev.target.id);
}

function permitirDrop(ev){
	ev.preventDefault();
}

function drop(ev){
	ev.preventDefault();
	var menu = ev.dataTransfer.getData("text");
	ev.target.appendChild(document.getElementById(menu));/*valiadacion*/
}

/*valiadacion*/

function validacion(){
	var name = document.getElementById('nombre').value;
	var password = document.getElementById('password').value;

	if(name == " " && name == 'number'){
		alert("ingrese nombre");
		return false;
	}

	if(password == " " && password < 6){
		alert("ingrese contraseña con letras y números mayor a 6 carácteres");
		return false;
	}

	return true;
}

validacion();