import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.scss";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = ({ expenses }) => {
  //const yearCurrent = new Date().getFullYear();
  const [selectYear, setSelectYear] = useState("");

  const changeYearHandler = (year) => {
    setSelectYear(year);
  };

  if (selectYear !== "") {
    console.log("vo day");
    expenses = expenses.filter((expense) => expense.date.getFullYear() === +selectYear);
  }

  console.log("array expense:", expenses);
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selectYear={selectYear} onChangeYear={changeYearHandler} />
        {expenses.map((item) => (
          <ExpenseItem key={item.id} {...item} />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
