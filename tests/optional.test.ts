describe('Optional parameter', function () {
  it('Should support null and undefined', function () {

    function sayHello (name?: string | null) {
      if (name) {
        console.info(`Hello ${name}`);
      } else {
        console.info('Hello');
      }
    }

    sayHello("akira");
    const name: string | undefined = undefined;
    sayHello(name);
    sayHello(null);

  });
});