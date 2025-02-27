import fetch from 'node-fetch';

const url1 = 'https://jsonplaceholder.typicode.com/posts/1XXXX';
const url2 = 'https://jsonplaceholder.typicode.com/invalid-url';
const url3 = 'https://jsonplaceholder.typicode.com/posts/3';

const fetchData = (url) => {
    return fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error ('API call failed!')
        } else {
            return response.json();
        }
    })

    .catch(error => {
        return { status: 'rejected', reason: error.message };
    });
};

Promise.allSettled([fetchData(url1), fetchData(url2),fetchData(url3)])
    .then(results => {
            console.log('All APIs call (including failures tracked):');
            results.forEach((result, index) => {
               // console.log("result",index,result);
                if (result.value?.status === 'rejected') {
                    console.log(`API ${index + 1} failed:`, result.reason);
                } else {
                    console.log(`API ${index + 1} succeeded:`, result.value);

                }
              
            });
    });

   

    