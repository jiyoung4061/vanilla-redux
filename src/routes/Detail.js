import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

function Detail({ toDo }) {
  //   console.log(props);
  // mapStateToProps, ownProps 사용 안하면 이렇게 사용해야함
  //   const id = useParams();
  //   console.log(id);

  //새로고침할때 state가 사라짐
  //   return <h1>{toDo.text}</h1>; => 결과 undefined
  //   return <h1>{toDo?.text}</h1>; => 결과 toDo.text나옴
  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created at: {toDo?.id}</h5>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  //   console.log(state);
  //find() : test function에 만족하는 첫번째 요소 반환
  return { toDo: state.find((toDo) => toDo.id === parseInt(id)) };
}

export default connect(mapStateToProps)(Detail);
