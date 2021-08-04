import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.scss";

const Expenses = ({ expenses }) => {
  return (
    <Card className="expenses">
      {expenses.map((item) => (
        <ExpenseItem key={item.id} {...item} />
      ))}
    </Card>
  );
};

export default Expenses;
