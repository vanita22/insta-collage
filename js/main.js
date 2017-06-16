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
	ev.target.appendChild(document.getElementById(menu));
}

