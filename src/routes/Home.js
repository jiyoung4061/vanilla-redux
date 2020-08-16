import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreator } from "../store";
import ToDo from "../components/ToDo";

function Home({ toDos, addToDo }) {
  //   console.log("rest:", rest);
  const [text, setText] = useState("");

  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    addToDo(text);
    setText("");
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo, index) => (
          <ToDo {...toDo} key={index} />
        ))}
      </ul>
    </>
  );
}

//connect()는 Home으로 보내는 props에 추가될수 있도록 허용해줌
//일반적으로 getCurrentState 함수는 mapStateToProps라고 하는데
//mapStateToProps는 redux state로 부터 home(component)에 props로써 전달.
// function getCurrentState(state) {
function mapStateToProps(state) {
  return { toDos: state };
  //return { jiyoung: true}
  //Home의 props에 jiyoung:true가 추가됨
}

// function mapDispatchToProps(dispatch, ownProps) {
function mapDispatchToProps(dispatch) {
  return {
    //addToDo라는 함수를 정의한 것: text가 필요하고, 함수가 실행되면 actionCreator.addToDo와 함께 dispatch가 호출
    addToDo: (text) => dispatch(actionCreator.addToDo(text)),
  };
}
//getCurrentState함수를 통해 store에서 state를 Home으로 가져다줌
// connect의 두번째 argument: mapDispatchToProps
// mapStateToProps 없으면 null로 선언
// export default connect(null,mapDispatchToProps)(Home);
export default connect(mapStateToProps, mapDispatchToProps)(Home);
