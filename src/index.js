import {createStore} from "redux"; 
//store:나의 data를 넣는곳! state!!(state? 내 application안에서 바뀌는 data들)
//redux는 createStore라는 함수가 있음
//action : function부를때 2번째 인수

const add = document.getElementById("add")
const minus = document.getElementById("minus")
const number = document.querySelector("span")

const countModifier=(count=0, action)=>{

    if(action.type==="ADD") {
        return count+1;
    } else if(action.type==="MINUS") {
        return count-1;
    } else {
        return count
    }
}

const countStore = createStore(countModifier);

countStore.dispatch({type:"ADD"})
countStore.dispatch({type:"ADD"})
countStore.dispatch({type:"ADD"})
countStore.dispatch({type:"ADD"})
countStore.dispatch({type:"MINUS"})

console.log(countStore.getState());


//1. store 만들기(store는 data를 저장하는 곳)
//2. reducer: data를 수정하는 "함수"
// modifier,reducer=> data를 바꿔줌, 뭐든지 return 해주는 값이 data값으로 됨