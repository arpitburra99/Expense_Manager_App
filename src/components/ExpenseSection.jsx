import React, { useContext } from "react";
import ExpenseContext from "../context/ExpenseContext";

const ExpenseSection = () => {
  const { transactions } = useContext(ExpenseContext);

  const income = transactions
    .filter((item) => item.amount > 0)
    .reduce((p, c) => p + c.amount, 0);

  const expense = transactions
    .filter((item) => item.amount < 0)
    .reduce((p, c) => p + c.amount, 0);

  return (
    <div id="current-status" className="main-section">
      <div id="income" className="balance">
        <span>
          <p>Current Income</p>
          <h1>₹{income}</h1>
        </span>
      </div>

      <div id="expense" className="balance">
        <span>
          <p>Current Expense</p>
          <h1>₹{expense}</h1>
        </span>
      </div>
    </div>
  );
};

export default ExpenseSection;
