// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { connect } from "react-redux";
// import ExpenseForm from "./ExpenseForm";
// import { editExpense, removeExpense } from "../actions/expenses";


// const EditExpensePage = (props) => {
//   const { id } = useParams();
//   const selectedExpense = props.expense.find((expense) => expense.id === id);
//   const navigate = useNavigate();
//   return (
//     <div>
//       <ExpenseForm
//         expense={selectedExpense}
//         onSubmit={(expense) => {
//           props.dispatch(editExpense(id, expense));
//           navigate("/");
//         }}
//       />
//       <button
//         onClick={() => {
//           props.dispatch(removeExpense({ id }));
//           navigate("/");
//         }}
//       >
//         Remove
//       </button>
//     </div>
//   );
// };

// const mapStateToProps = (state) => ({
//   expense: state.expenses,
// });

// export default connect(mapStateToProps)(EditExpensePage);


import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";


export class EditExpensePage extends React.Component {
 onSubmit = (expense) => {
  this.props.editExpense(this.props.expense.id, expense);
  this.props.navigate('/');
 };
 onClick = () => {
  this.props.removeExpense({ id: this.props.expense.id });
  this.props.navigate('/');
 }
 render() {
  return (
    <div>
      <ExpenseForm
        expense={this.props.expense}
        onSubmit={this.onSubmit}
      />
      <button
        onClick={this.onClick}
      >
        Remove
      </button>
    </div>
  )
 }
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  removeExpense: (data) => dispatch(removeExpense(data)),
});

const PageWithNavigate = (props) => {
  const navigate = useNavigate();
  return <EditExpensePage {...props} navigate={navigate} />
}

export default connect(mapStateToProps, mapDispatchToProps)(PageWithNavigate);
