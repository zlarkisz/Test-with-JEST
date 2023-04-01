import User from "./user";

describe("User", () => {
  it("name returns full name", () => {
    const user = new User({ firstName: "Jane", lastName: "Doe" });
    expect(user.name).toBe("Jane Doe");
  });
});
