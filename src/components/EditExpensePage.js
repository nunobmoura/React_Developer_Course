import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";

const EditExpensePage = (props) => {
  const { id } = useParams();
  const selectedExpense = props.expense.find((expense) => expense.id === id);
  const navigate = useNavigate();
  return (
    <div>
      <ExpenseForm
        expense={selectedExpense}
        onSubmit={(expense) => {
          props.dispatch(editExpense(id, expense));
          navigate("/");
        }}
      />
      <button
        onClick={() => {
          props.dispatch(removeExpense({ id }));
          navigate("/");
        }}
      >
        Remove
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    expense: state.expenses,
  };
};

export default connect(mapStateToProps)(EditExpensePage);
