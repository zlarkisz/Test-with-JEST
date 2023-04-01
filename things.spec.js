test("expectation", () => {
  expect("Some string").toBe("Some string");
  expect(17).toBe(17);
  expect([17]).toEqual([17]);

  const result = {
    value: Date.now(),
  };

  expect(result).toEqual({
    value: expect.any(Number),
  });
});
