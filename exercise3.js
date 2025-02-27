/*
Recap:
- fulfilled means the promise resolved successfully and returned a value.
- rejected means the promise failed or encountered an error and returned a reason.
- Promise.allSetteked() returns an array of objects 
*/

const promise1 = new Promise((resolve, reject) => setTimeout(resolve, 5000, 'Resolved 1 --gives only status and value'));
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 500, 'Rejected 2 with a reason'));
const promise3 = new Promise ((resolve, reject) => setTimeout(resolve, 1500, 'Rejected 3 with a reason'));

Promise.allSettled([promise1, promise2, promise3])
  .then(results => console.log(results));
