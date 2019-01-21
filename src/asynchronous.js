class Asynchronous {
  constructor(name) {
    this.name = name;
  }

  asyncFunctionA() {
    console.log('Hello from Async Function A');
    return 'Hello from Async Function A';
  }

  asyncFunctionB() {
  console.log('Hello from Async Function B');

  return new Promise(function(resolve, reject) {
      setTimeout(function() {
        let random = Math.floor(Math.random() * Math.floor(2));
        if(random === 1) {
          resolve('Promise resolved.');
        } else {
          reject(Error('Promise rejected'));
        }
      }, 5000);
    });
  }

  asyncFunctionC() {
    console.log('Hello from Async Function C');
    return 'Hello from Async Function C';
  }

  asyncFunctionD() {
    console.log('Hello from Async Function D');
    return 'Hello from Async Function D';
  }
}

export { Asynchronous };
