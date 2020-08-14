import React, { useState } from "react";
import { connect } from "react-redux";

function Home({toDos}) {
    // console.log("props:", props);
    const [text, setText] = useState("");

    function onChange(e) {
        setText(e.target.value)
    }

    function onSubmit(e) {
        e.preventDefault();
        setText("")
    }

    return (
    <>
    <h1>To Do</h1>
    <form onSubmit={onSubmit}>
    <input type="text" value={text} onChange={onChange}/>
    <button>Add</button>
    </form>
    <ul>{JSON.stringify(toDos)}</ul>
    </>
    )
}

//connect()는 Home으로 보내는 props에 추가될수 있도록 허용해줌
//일반적으로 getCurrentState 함수는 mapStateToProps라고 하는데
//mapStateToProps는 redux state로 부터 home(component)에 props로써 전달.
function getCurrentState(state) {
    return {toDos: state}
    
    //return { jiyoung: true}
    //Home의 props에 jiyoung:true가 추가됨
}

//getCurrentState함수를 통해 store에서 state를 Home으로 가져다줌
export default connect(getCurrentState)(Home);