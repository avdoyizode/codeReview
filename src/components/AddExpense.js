import React from "react";
import AddForm from "../containers/AddForm";
import Body from "../containers/Body";
import "../styles/AddExpense.css";
const AddExpense = () => {
  return (
    <div className="add-expense">
      <Body />
      <AddForm />
    </div>
  );
};

export default AddExpense;
