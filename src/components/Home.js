import React from "react";
import ExpenseList from "./ExpenseList";
import Body from "../containers/Body";
import "../styles/Home.css";
const Home = () => {
  return (
    <div className="home">
      <Body />
      <ExpenseList />
    </div>
  );
};

export default Home;
