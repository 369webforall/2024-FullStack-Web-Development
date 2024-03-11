let todos = [
  { id: 1, title: "Tomorrow i am working", dueDate: "2024-03-08" },
  { id: 2, title: "Go to gem", dueDate: "2024-03-09" },
];

let btn = document.getElementById("btn");

btn.addEventListener("click", createTodo);

// create 

function createTodo(e) {
  e.preventDefault();

  let title = document.getElementById("title").value;
  let dueDate = document.getElementById("date").value;
  let id = new Date().getTime();

  todos.push({ id: id, title: title, dueDate: dueDate });
  document.getElementById("title").value =""
  renderTodos();
}

// update
let todoIndex;

function updateTodo(e){
let updateId = Number(e.target.id)
let todo = todos.filter((todo, index)=>{
    todoIndex = index
    return todo.id === updateId
})
document.getElementById("title").value = todo[0].title

document.getElementById("btn").style = "display:none"
let updatebtn = document.createElement("button")
updatebtn.textContent = "Save Update"
updatebtn.id = "btnu"
updatebtn.onclick = saveTodoUpdate;
let form = document.getElementById("form");

form.append(updatebtn)
}

function saveTodoUpdate(){
    let title = document.getElementById("title").value;
    let todo = todos[todoIndex]  // {}
    let newObj = {...todo, title}
    todos[todoIndex] = newObj

    document.getElementById("btnu").style ="display:none";
    document.getElementById("btn").style = "display:block";
    document.getElementById("title").value = ""
    renderTodos();
}
function DeleteTodo(e){
    let delId = Number(e.target.id)
   todos = todos.filter((todo)=>todo.id !== delId)
   renderTodos();
}

//display todo READ

function renderTodos() {
  document.getElementById("render").innerHTML = "";
  todos.map((todo, index) => {
    let div = document.createElement("div"); // <div>addasfds 2024-08-06</div>
    div.textContent = todo.title + " " + todo.dueDate;

    let updatebtn = document.createElement("button");
        updatebtn.textContent = "Update"
        updatebtn.id = todo.id; 
        updatebtn.style = "margin:10px; cursor: pointer; padding:5px;"
        updatebtn.onclick = updateTodo;
        div.append(updatebtn)

        let deletebtn = document.createElement("button");
        deletebtn.textContent = "Delete"
        deletebtn.id = todo.id; 
        deletebtn.style = "margin:10px; cursor: pointer; padding:5px;"
        deletebtn.onclick = DeleteTodo;
        div.append(deletebtn)

    let render = document.getElementById("render");
    render.append(div);
  });
}

renderTodos();
