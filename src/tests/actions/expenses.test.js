import { removeExpense, editExpense, addExpense } from "../../actions/expenses";

test("should remove an expense", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc",
  });
});

test("should edit the existing expense", () => {
  const action = editExpense("123abc", { note: "My new note" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: {
      note: "My new note",
    },
  });
});

test("should setup add expense with provided values", () => {
  const expenseData = {
    description: "Rent",
    amount: 100,
    createdAt: 25000,
    note: "This is my note",
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String),
    },
  });
});

test("should setup add expense with default values", () => {
  const defaultData = {
    description: "",
    amount: 0,
    createdAt: 0,
    note: "",
  };
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...defaultData,
      id: expect.any(String),
    },
  });
});
