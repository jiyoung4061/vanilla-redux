import React from "react";
import { connect } from "react-redux";
import { actionCreator } from "../store";
import { Link } from "react-router-dom";

function ToDo({ text, onBtnClick, id }) {
  //   console.log("text:", text);
  return (
    <li>
      <Link to={`/${id}`}>
        {text}
        <button onClick={onBtnClick}>DEL</button>
      </Link>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  //   console.log(ownProps);
  return {
    //Home.js에서 addToDo는 text를 필요로 했지만 여기서는 ownProps에 id가 있으므로 따로 선언할 필요 x
    onBtnClick: () => dispatch(actionCreator.deleteToDo(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
