import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  return (
    <div>
      {/* Here where we have the words title and amount, we can choose whatever words we want for that on the outside of the brackets */}
      <ExpenseItem
        title={props[0].title}
        amount={props[0].amount}
        date={props[0].date}
      />
      <ExpenseItem
        title={props[1].title}
        amount={props[1].amount}
        date={props[1].date}
      />
      <ExpenseItem
        title={props[2].title}
        amount={props[2].amount}
        date={props[2].date}
      />
      <ExpenseItem
        title={props[3].title}
        amount={props[3].amount}
        date={props[3].date}
      />
    </div>
  );
}
