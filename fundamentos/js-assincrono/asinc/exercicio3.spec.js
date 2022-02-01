const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

describe("A função uppercase", () => {
  it("retorna a string em uppercase", (done) => {
    uppercase('douglas', (result) => {
      try {
        expect(result).toBe('DOUGLAS');
        done();
      } catch (error) {
        done(error);
      }
    })
  });
});
