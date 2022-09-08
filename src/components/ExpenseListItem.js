import React from "react";
import { Link } from "react-router-dom";

const ExpenseListItem = ({ id, description, amount, createdAt}) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <ul>
      <li>
        <h4>Amount:</h4>
        <p>{amount}</p>
      </li>
      <li>
        <h4>CreatedAt:</h4>
        <p>{createdAt}</p>
      </li>
    </ul>
  </div>
);

export default ExpenseListItem;