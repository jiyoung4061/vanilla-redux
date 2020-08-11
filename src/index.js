import {createStore} from "redux"; 
//store:나의 data를 넣는곳! state!!(state? 내 application안에서 바뀌는 data들)
//redux는 createStore라는 함수가 있음
//
const add = document.getElementById("add")
const minus = document.getElementById("minus")
const number = document.querySelector("span")

const reducer = () =>{};

const store = createStore(reducer);



//1. store 만들기(store는 data를 저장하는 곳)
//2. reducer: data를 modify하는 함수