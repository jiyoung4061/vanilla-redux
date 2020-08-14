import { createStore } from "redux";

const input = document.querySelector("input");
const form = document.querySelector("form");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO"
const DELETE_TODO = "DELETE_TODO"

const addToDo = (text) => { //action을 create하는 부분
    return { //return 부분이 reducer의 action으로 보내짐
        type: ADD_TODO,
        text
    }
}
const deleteToDo = (id) => {
    return {
        type:DELETE_TODO,
        id
    }
}

//array에서 요소를 delete하는 방법 => splice(하지만 array를 mutate하는 것이기 때문에 X)
// filter : 테스트를 통과한 모든 element들로 ***새로운 array***를 만듬
const reducer = (state=[], action) => {
    switch(action.type){
        case ADD_TODO:
            const newToDoObj = {text: action.text, id: Date.now()}
            return [newToDoObj, ...state]
        case DELETE_TODO:
            const cleaned = state.filter(toDo=> toDo.id !== action.id)
            return cleaned;
        default:
            return state;
    }
};

const store = createStore(reducer);

store.subscribe(()=> console.log(store.getState()))

const dispatchAddToDo = (text) => { //action을 dispatch하기위한 함수
    store.dispatch(addToDo(text))
}

const dispatchDeleteToDo= (e) => {
    const id = parseInt(e.target.parentNode.id);
    store.dispatch(deleteToDo(id))
}

const paintToDos = () => {
    const toDos = store.getState();
    ul.innerHTML=""
    toDos.forEach(toDo=>{
        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.innerText = "DEL";
        btn.addEventListener("click", dispatchDeleteToDo)
        li.id = toDo.id
        li.innerText = toDo.text;

        li.appendChild(btn);
        ul.appendChild(li);
    })
}

store.subscribe(paintToDos) //toDo의 변화에따라 list를 re-painting하고 있음

const onSubmit = e => {
    e.preventDefault();
    const toDo = input.value; // input값 받아오기
    input.value="";
    dispatchAddToDo(toDo);
}

form.addEventListener("submit", onSubmit);  