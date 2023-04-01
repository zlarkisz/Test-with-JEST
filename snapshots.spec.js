const user = {
  name: "Jane Doee",
  age: 30,
  job: "Software Engineer",
};

test("user matches snapshot", () => {
  expect(user).toMatchSnapshot();
});
