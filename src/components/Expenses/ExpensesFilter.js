import React from "react";

import "./ExpensesFilter.scss";

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (evt) => {
    props.onChangeYear(evt.target.value);
  };

  console.log(props.selectYear);
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selectYear} onChange={dropdownChangeHandler}>
          <option value="">Select year</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
