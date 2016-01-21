describe("countBy", function() {
  it("will count up to a maximum using specified multiples", function() {
    expect(countBy(30,5)).to.equal("5, 10, 15, 20, 25, 30")
  });
});
