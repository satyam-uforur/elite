
const todosHtml = document.querySelector(".todos");
const emptyImage = document.querySelector(".empty-image");
let todosJson = JSON.parse(localStorage.getItem("todos")) || [];
const deleteAllButton = document.querySelector(".delete-all");
const filters = document.querySelectorAll(".filter");
let filter = '';

showTodos();

function getTodoHtml(todo, index) {
  if (filter && filter != todo.status) {
    return '';
  }
  let checked = todo.status == "completed" ? "checked" : "";
  return /* html */ `
    <li class="todo">
      <label for="${index}">
        <input id="${index}" onclick="updateStatus(this)" type="checkbox" ${checked}>
        <span class="${checked}">${todo.name}</span>
      </label>
      <button class="delete-btn" data-index="${index}" onclick="remove(this)"><i class="fa fa-times"></i></button>
    </li>
  `; 
}

function showTodos() {
  if (todosJson.length == 0) {
    todosHtml.innerHTML = '';
    emptyImage.style.display = 'block';
  } else {
    todosHtml.innerHTML = todosJson.map(getTodoHtml).join('');
    emptyImage.style.display = 'none';
  }
}

function addTodo(todo)  {
 
  todosJson.unshift({ name: todo, status: "pending" });
  localStorage.setItem("todos", JSON.stringify(todosJson));
  showTodos();
}

function updateStatus(todo) {
  let todoName = todo.parentElement.lastElementChild;
  if (todo.checked) {
    todoName.classList.add("checked");
    todosJson[todo.id].status = "completed";
  } else {
    todoName.classList.remove("checked");
    todosJson[todo.id].status = "pending";
  }
  localStorage.setItem("todos", JSON.stringify(todosJson));
}

function remove(todo) {
  const index = todo.dataset.index;
  todosJson.splice(index, 1);
  showTodos();
  localStorage.setItem("todos", JSON.stringify(todosJson));
}

filters.forEach(function (el) {
  el.addEventListener("click", (e) => {
    if (el.classList.contains('active')) {
      el.classList.remove('active');
      filter = '';
    } else {
      filters.forEach(tag => tag.classList.remove('active'));
      el.classList.add('active');
      filter = e.target.dataset.filter;
    }
    showTodos();
  });
});

deleteAllButton.addEventListener("click", () => {
  todosJson = [];
  localStorage.setItem("todos", JSON.stringify(todosJson));
  showTodos();
});

// execises
let y=document.getElementById('popup')
	
		
function popup(x){
	y=document.getElementById(x)		
	y.classList.add('popup-op')
	
	console.log(y.className)
			
}
function cancel(va){
	y=document.getElementById(va)	
	y.classList.remove('popup-op')
			
	console.log(y.className)
			
			
}
function cancel1(){
	let vid=document.getElementById('vid')
	document.getElementById('exname1').innerHTML=`
	<div class='popup1' id='pop'>
			
	</div>
	`
			
			
}	
	
function video(x){
			
			
	let vid=document.getElementById('vid')
	document.getElementById('exname1').innerHTML=`
	<div class='popup1 popup1-op' id='pop'>
	${x}
	<div class='filter1'>
	<i class='bx bx-play s5' onclick='vid.play()'></i>
	<i class='bx bx-pause s5' onclick='vid.pause()'></i>
	<i class='bx bx-x s5' onclick='cancel1()'></i>
			
	</div>
	</div>
	`
			
}
function change(jum)
{
	console.log(jum)
	document.getElementById(jum).style.backgroundColor = "#00ff00";
	document.getElementById(jum).style.color = "#000000";
}


