import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.scss";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (newExpenseData) => {
    const expenseData = { ...newExpenseData, id: Math.random().toString() };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
