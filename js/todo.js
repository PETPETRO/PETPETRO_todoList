var todo = [];
var list = document.getElementById('todo-list').childNodes;
var entry = document.getElementById('new-entry');
var text = entry;



function addEntry(entry) {

	if (text.value.length != 0) {
		todo.push(text);
		console.log(todo);

		var x = document.getElementById("todo-list");
		newLI = document.createElement("li");
		newText = document.createTextNode(text.value);
		newLI.appendChild(newText);
		x.appendChild(newLI);

	}

}



function mark(event) {
	var elementLi = event.target;

	if (elementLi.nodeName == "LI") {
		if (elementLi.getAttribute("class") == "done") {
			elementLi.setAttribute("class", "");
		} else {
			elementLi.setAttribute("class", "done");
		}

	}

}



function rem() {
	var remove = document.getElementById('todo-list');
	for (var a = 1; a <= document.getElementById('todo-list').childNodes.length+1; a++) {
		var x = document.getElementById('todo-list').childNodes[a].getAttribute("class");
		if (x === "done") {
			document.getElementById('todo-list').childNodes[a].remove();
			console.log(a);
			a--;
		} 
	}
}



function play() {
	for (var i = 0; i < list.length; i++) {
		var arrValue = list[i].value;
		todo.push(arrValue);
	}


	console.log(todo);
	var btnAdd = document.getElementById('Add-btn-add');
	btnAdd.addEventListener('click', addEntry);

	document.getElementById('todo-list').addEventListener("click", mark);
	document.getElementById('Done-btn-delete').addEventListener("click", rem);


}



window.onload = play();