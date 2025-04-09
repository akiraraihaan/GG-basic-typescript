describe('Union Type', function () {
  it('Should support in typescript', function () {
    
    let sample : number | string | boolean = "akira";
    console.info(sample);
    
    sample = 27;
    console.info(sample);
    sample = true;
    console.info(sample);

  });

  it('Should support typeof operator', function () {

    function process(value: number | boolean | string) {
      if(typeof value === "string") {
        return value.toUpperCase();
      } else if (typeof value === "number") {
        return value + 2;
      } else {
        return !value;
      }
    }

    expect(process("akira")).toBe("AKIRA");
    expect(process(27)).toBe(29);
    expect(process(true)).toBe(false);

  });
});