import React from "react";
import { FaTrash, FaPenSquare } from "react-icons/fa";
import { toast } from "react-toastify";

const ListItem = ({ transaction, deleteTransaction, editTransaction }) => {
  const handleDelete = () => {
    deleteTransaction(transaction.id);
    toast.error("Transaction Deleted!");
  };

  const handleEdit = () => {
    editTransaction(transaction);
    toast.warning("Transaction edit!");
  };

  return (
    <li className="list-item">
      <span>
        <h3
          className={
            transaction.amount > 0
              ? "income-transaction"
              : "expense-transaction"
          }
        >
          ₹{transaction.amount}
        </h3>
        <h4>{transaction.text}</h4>
      </span>
      <button className="editbtn" onClick={handleEdit}>
        <FaPenSquare />
      </button>
      <button className="delbtn" onClick={handleDelete}>
        <FaTrash />
      </button>
    </li>
  );
};

export default ListItem;
