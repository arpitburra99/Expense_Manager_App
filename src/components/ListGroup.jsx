import React, { useContext } from "react";
import ListItem from "./ListItem";
import ExpenseContext from "../context/ExpenseContext";

const ListGroup = () => {
  const { transactions, deleteTransaction, editTransaction } =
    useContext(ExpenseContext);

  return (
    <ul className="list-group">
      {transactions.map((transaction) => (
        <ListItem
          key={transaction.id}
          transaction={transaction}
          deleteTransaction={deleteTransaction}
          editTransaction={editTransaction}
        />
      ))}
    </ul>
  );
};

export default ListGroup;
