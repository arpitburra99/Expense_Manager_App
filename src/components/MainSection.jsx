import React, { useContext, useEffect, useState } from "react";
import ExpenseContext from "../context/ExpenseContext";
import { toast } from "react-toastify";

const MainSection = () => {
  const { transactions, saveTransaction, edit, updateTransaction } =
    useContext(ExpenseContext);

  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const balance = transactions.reduce((p, c) => {
    return p + c.amount;
  }, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (edit.isEdit) {
      updateTransaction(edit.transactions.id, text, +amount);
      toast.success("Updated Successfully");
    } else {
      saveTransaction(text, +amount);
      toast.success("Add Successfully");
    }
    setText("");
    setAmount("");
  };

  useEffect(() => {
    setText(edit.transactions.text);
    setAmount(edit.transactions.amount);
  }, [edit]);

  return (
    <div className="main-section">
      <div id="current-bal" className="balance">
        <span>
          <p>Current Balance</p>
          <h1>₹{balance}</h1>
        </span>
        <i className="fa-solid fa-wallet"></i>
      </div>

      <form className="transaction-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Your Transaction"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <input
          type="number"
          placeholder="Enter Amount"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        />
        <button>
          Save Transaction<i className="fa-solid fa-floppy-disk"></i>
        </button>
      </form>
    </div>
  );
};

export default MainSection;
