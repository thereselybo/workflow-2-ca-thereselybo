import { checkInputLength } from "./index";

test("check if input length after trimming is truthy", () => {
  expect(checkInputLength("hello there")).toBeTruthy();
});
