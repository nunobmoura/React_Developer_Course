import moment from "moment";
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate,
} from "../../actions/filters";

test("should generate set start date action object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0),
  });
});

test("should generate end date action object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0),
  });
});

test("should sort by Amout", () => {
  expect(sortByAmount()).toEqual({type: "SORT_BY_AMOUNT"});
});

test("should sort by Date", () => {
  expect(sortByDate()).toEqual({type: "SORT_BY_DATE"});
});

test("should use input text", () => {
  const action = setTextFilter("This is my text");
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "This is my text",
  });
});

test("should use default text", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "",
  });
});
