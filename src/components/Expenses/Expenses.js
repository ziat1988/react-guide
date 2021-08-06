import { useState } from "react";
import Card from "../UI/Card";
import ExpenseChart from "./ExpenseChart";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.scss";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = ({ expenses }) => {
  const yearCurrent = new Date().getFullYear().toString();
  const [selectYear, setSelectYear] = useState(yearCurrent);

  const changeYearHandler = (year) => {
    setSelectYear(year);
  };

  const filteredExpenses = expenses.filter((expense) => expense.date.getFullYear().toString() === selectYear);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selectYear={selectYear} onChangeYear={changeYearHandler} />

        <ExpenseChart filteredExpenses={filteredExpenses} />

        {filteredExpenses.length > 0 && filteredExpenses.map((item) => <ExpenseItem key={item.id} {...item} />)}

        {filteredExpenses.length === 0 && <h2>No item</h2>}
      </Card>
    </div>
  );
};

export default Expenses;
