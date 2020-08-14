import {createStore} from "redux";

const ADD = "ADD";
const DELETE = "DELETE"

export const addToDo = text => {
    return {
        type: ADD,
        text
    }
}

export const deleteToDo = id => {
    return {
        type: DELETE,
        id
    }
}
//connect : 컴포넌트들을 store와 연결시켜줌
//2개 argument를 가짐 -> store나 dispatch중 고를수 있음
const reducer = (state=["hello"], action) =>{
    switch (action.type) {
        case ADD:
            return [{text: action.text, id:Date.now()}, ...state];
        
        case DELETE:
            return state.filter(toDo=> toDo.id !== action.id)
        default:
            return state;
    }
}

const store = createStore(reducer)

export default store;