import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
// here where I passed the word props as an argument, since this is our own function we can name this argument whatever we want. Typically it is named props
function ExpenseItem(props) {
  // useState needs a value
  const [title, setTitle] = useState(props.title);

  function clickHandler() {
    setTitle("updated");
    console.log(title);
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
