import { signUpConfig } from "./config";

it("uses phone config", () => {
  expect(signUpConfig.signUpFields.map((it) => it.key)).toEqual([
    "phone_number",
    "password",
  ]);
});
