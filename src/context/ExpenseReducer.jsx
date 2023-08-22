const ExpenseReducer = (state, action) => {
  switch (action.type) {
    case "SAVE_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (item) => item.id !== action.payload
        ),
      };
    case "EDIT_TRANSACTION":
      return {
        ...state,
        edit: { transactions: action.payload, isEdit: true },
      };
    case "UPDATE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                text: action.payload.text,
                amount: action.payload.amount,
              }
            : item
        ),
        edit: { transactions: {}, isEdit: false },
      };
  }
};

export default ExpenseReducer;
