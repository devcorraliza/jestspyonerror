import * as m from "./index";

test("adds 1 + 2 to equal 3", () => {
  const spy = jest.spyOn(m, "f2").mockImplementationOnce(jest.fn());
  m.f1();
  expect(spy).toBeCalled();
});
