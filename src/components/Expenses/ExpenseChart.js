import React from "react";
import Chart from "../Chart/Chart";

const ExpenseChart = (props) => {
  const arrayDataChart = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  props.filteredExpenses.map((expense) => {
    let monthNum = expense.date.getMonth(); // return int 0 -> 11
    arrayDataChart[monthNum].value += expense.amount;
  });

  return (
    <div>
      <Chart dataPoints={arrayDataChart} />
    </div>
  );
};

export default ExpenseChart;
