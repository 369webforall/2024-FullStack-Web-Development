// CRUD - create, read, update, delte
// {id:1, title:"lets go walk", dueDate:"2024-02-28"}

let todos = [
  { id: 1, title: "lets go walk", dueDate: "2024-02-28" },
  { id: 2, title: "go for shopping", dueDate: "2024-02-29" },
];



//add todo

let btn = document.getElementById('btn');

btn.addEventListener('click', addTodo);

function addTodo(){
  let title = document.getElementById('title').value; 
  let dueDate = document.getElementById('dueDate').value; 
  let id = new Date().getTime();
  todos.push({id:id, title:title, dueDate:dueDate})
  render();
}

//update

function updateTodo(e){
e.preventDefault();
let id = Number(e.target.id)
let data = todos.filter((todo)=>todo.id === id)
console.log(data)
}


//delete






// view/ read/ display


const render = function () {
    document.getElementById("render").innerHTML = ""
  todos.map((todo) => {
    let div = document.createElement("div");
    div.textContent = todo.title + " " + todo.dueDate;
    let render = document.getElementById("render");
let updateBtn = document.createElement("button");
updateBtn.textContent = "Update";
updateBtn.id = todo.id;
updateBtn.style="margin-left:12px; margin-top:12px";
updateBtn.onclick = updateTodo;
div.append(updateBtn)
    render.append(div);
  });
};

render();
