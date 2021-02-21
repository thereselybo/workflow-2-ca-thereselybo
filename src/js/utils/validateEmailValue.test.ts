import { validateEmailValue } from "../utils/index";

test("check if input value is an email address", () => {
  expect(validateEmailValue("hello@there.com")).toBeTruthy();
});
