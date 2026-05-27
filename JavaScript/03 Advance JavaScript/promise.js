// JavaScrpit Promise

// Promise One
// Simple demonstration of a Promise
const PromiseOne = new Promise((resolve, reject) => {
  let num = Math.floor(Math.random() * 100);
  if (num % 2 == 0) {
    resolve("Task Completed");
  } else {
    reject("Task Failed");
  }
});
PromiseOne.then((result) => {
  console.log(result);
})
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Done with the Task");
  });

// Promise Two
// Create a Promise that resolve after 3 seconds
const PromiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Resolved");
  }, 1000);
  setTimeout(() => {
    reject("Promsie Rejeceted");
  }, 5000);
});
PromiseTwo.then((result) => {
  console.log(result);
  console.log(PromiseTwo);
})
  .catch((error) => {
    console.log(error);
    console.log(PromiseTwo);
  })
  .finally(() => {
    console.log("Done With PromiseTwo");
    console.log(PromiseTwo);
  });

// Promise Three
// Create a promise that rejects with : "Network Error"
const PromiseThree = new Promise((resolve, reject) => {
  if (navigator.onLine) {
    resolve("You are Connected to Internet");
  } else {
    reject("You are Not Connected to Internet");
  }
});
PromiseThree.then((result) => {
  console.log(result);
  console.log(PromiseThree);
})
  .catch((error) => {
    console.log(error);
    console.log(PromiseThree);
  })
  .finally(() => {
    console.log("Done with Promise Three");
  });

// Promise all
Promise.all([PromiseOne, PromiseTwo, PromiseThree])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Done with all the Promises");
  });

// Promise race
Promise.race([PromiseOne, PromiseThree, PromiseTwo])
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Done with the Promises");
  });

// Promise allSettled
Promise.allSettled([PromiseOne, PromiseTwo, PromiseThree])
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Done with all the Promises");
  });
