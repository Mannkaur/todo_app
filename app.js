function addTask()
{
	var task = document.createElement("div");
	task.innerHTML = document.getElementById("addtodo").value;
	task.onclick = remValue;
	document.getElementById("li").appendChild(task);
	
}


function remValue(){
	document.getElementById("li").removeChild(this);
	
}


