describe('If Statement', function () {
  it('should support in typescript', function () {

    const examVal = 90;

    if (examVal > 80) {
      console.info("Good");
    } else if (examVal > 60) {
      console.info("Not Bad");
    } else {
      console.info("Try Again")
    }

  });

  it('should support ternary operator', function () {

    const val = 80;

    const say = val >= 75 ? "Congrats" : "Try Again";

    console.info(say);

  });

  it('should support switch statement', function () {

    function sayHello (name: string): string {
      switch (name) {
        case "akira":
          return "Hi Akira";
        case "raihan":
          return "Hi Raihan";
        default:
          return "Hello";
      }
    }

    console.info(sayHello("akira"));
    console.info(sayHello("raihan"));
    console.info(sayHello("budi"));

  });
});