import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import ExpenseSection from "./components/ExpenseSection";
import ListGroup from "./components/ListGroup";
import { ExpenseProvider } from "./context/ExpenseContext";

const App = () => {
  return (
    <ExpenseProvider>
      <Navbar />
      <div className="container">
        <MainSection />
        <ExpenseSection />
        <ListGroup />
        <ToastContainer />
      </div>
    </ExpenseProvider>
  );
};

export default App;
