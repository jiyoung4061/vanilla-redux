import { createStore } from "redux";

const input = document.querySelector("input");
const form = document.querySelector("form");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO"
const DELETE_TODO = "DELETE_TODO"

const reducer = (state=[], action) => {
    switch(action.type){
        case ADD_TODO:
            return [...state, {text: action.text, id: Date.now()}]
        case DELETE_TODO:
            return []
        default:
            return state;
    }
};

const store = createStore(reducer);

store.subscribe(()=> console.log(store.getState()))

const addTodo = (text) => {
    store.dispatch({type:ADD_TODO, text})
}

const deleteToDo= (e) => {
    // console.log("e", e.target.parentNode.id);
    //e.target : click된 해당 버튼
    //e.target.parentNode : 버튼의 상위 node (li태그)
    //e.target.parentNode.id : 해당 li태그의 id

    const id = e.target.parentNode.id;
    store.dispatch({type:DELETE_TODO, id})

}

const paintToDos = () => {
    const toDos = store.getState();
    ul.innerHTML=""
    toDos.forEach(toDo=>{
        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.innerText = "DEL";
        btn.addEventListener("click", deleteToDo)
        li.id = toDo.id
        li.innerText = toDo.text;

        li.appendChild(btn);
        ul.appendChild(li);
    })
}

store.subscribe(paintToDos)


const onSubmit = e => {
    e.preventDefault();
    const toDo = input.value; // input값 받아오기
    input.value="";
    addTodo(toDo);
}

form.addEventListener("submit", onSubmit);