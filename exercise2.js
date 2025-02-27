import fetch from 'node-fetch';

const url1 = 'https://jsonplaceholder.typicode.com/posts/1'; 
const url2 = 'https://jsonplaceholder.typicode.com/invalid-urlX';  
const url3 = 'https://jsonplaceholder.typicode.com/posts/3'; 

// Function to fetch data from an API and return the result or rejection reason
const fetchData = (url) => {
    return fetch(url)  
        .then((response) => {
            if (!response.ok) {
                throw new Error(`API call failed with status: ${response.status}`);
            }
            return response.json();  
        })
        .catch((error) => {
            // Only throw the error, do not return any object here
            throw error;  // Let the Promise reject and handle the error naturally
        });
};

// Use Promise.allSettled to fetch all data from the APIs and handle all results
Promise.allSettled([fetchData(url1), fetchData(url2), fetchData(url3)])
    .then((results) => {
        console.log('All API calls (including failures) tracked:');
        
        results.forEach((result, index) => {
            if (result.status === 'fulfilled') {
                console.log(`API ${index + 1} succeeded:`, result.value);  
            } else {
                console.log(`API ${index + 1} failed:`, result.reason);  
            }
        });
    });
