const myFirstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello, Promise!");
    }, 1000);
  });
  
  myFirstPromise.then(message => {
    console.log(message);
  });