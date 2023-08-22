import { createContext, useReducer } from "react";
import ExpenseReducer from "./ExpenseReducer";

const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const initialState = {
    transactions: [
      // { id: 1, text: "salary", amount: 100000 },
      // { id: 2, text: "rent", amount: -20000 },
    ],
    edit: { transactions: {}, isEdit: false },
  };

  const [state, dispatch] = useReducer(ExpenseReducer, initialState);

  const saveTransaction = (text, amount) => {
    const newTransaction = {
      id: crypto.randomUUID(),
      text,
      amount,
    };
    dispatch({
      type: "SAVE_TRANSACTION",
      payload: newTransaction,
    });
  };

  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  const editTransaction = (oldTransaction) => {
    dispatch({
      type: "EDIT_TRANSACTION",
      payload: oldTransaction,
    });
  };

  const updateTransaction = (oldId, newText, newAmount) => {
    const updatedTransaction = {
      id: oldId,
      text: newText,
      amount: newAmount,
    };
    dispatch({
      type: "UPDATE_TRANSACTION",
      payload: updatedTransaction,
    });
    console.log(updatedTransaction);
  };

  return (
    <ExpenseContext.Provider
      value={{
        transactions: state.transactions,
        edit: state.edit,
        saveTransaction,
        deleteTransaction,
        editTransaction,
        updateTransaction,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseContext;
