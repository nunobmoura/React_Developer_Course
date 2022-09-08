import moment from "moment";
import filtersReducers from "../../reducers/filters";

test("should setup default values", () => {
  const state = filtersReducers(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month"),
  });
});

test("should set sortBy to amount", () => {
  const state = filtersReducers(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

test("should set SortBy to date", () => {
  const currentState = {
    text: "",
    startDate: undefined,
    endDate: undefined,
    sortBy: "amount",
  };
  const action = { type: "SORT_BY_DATE" };
  const state = filtersReducers(currentState, action);
  expect(state.sortBy).toBe("date");
});

test("should set text filter", () => {
  const text = "Something in";
  const state = filtersReducers(undefined, { type: "SET_TEXT_FILTER", text });
  expect(state.text).toBe(text);
});

test("should set startDate", () => {
  const startDate = moment(0);
  const state = filtersReducers(undefined, { type: "SET_START_DATE", startDate });
  expect(state.startDate).toEqual(startDate);
});

test("should set endDate", () => {
  const endDate = moment(0);
  const state = filtersReducers(undefined, { type: "SET_END_DATE", endDate });
  expect(state.endDate).toEqual(endDate);
});
