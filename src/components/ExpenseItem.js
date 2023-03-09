import "./ExpenseItem.css";
// here where I passed the word props as an argument, since this is our own function we can name this argument whatever we want. Typically it is named props
function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div>{props.date.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
