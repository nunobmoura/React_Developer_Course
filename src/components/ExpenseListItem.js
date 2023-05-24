import React from "react";
import { Link } from "react-router-dom";
import moment from 'moment';
import numeral from "numeral";

const ExpenseListItem = ({ id, description, amount, createdAt}) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <ul>
      <li>
        <h4>Amount:</h4>
        <p>{numeral(amount / 100).format('$0,0.00')}</p>
      </li>
      <li>
        <h4>CreatedAt:</h4>
        <p>{moment(createdAt).format('DD / MMM / YYYY')}</p>
      </li>
    </ul>
  </div>
);

export default ExpenseListItem;