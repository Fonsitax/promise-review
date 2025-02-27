// Switched to ESM syntax using "import" instead of "require"
// NOTES: install node fetch, added type: module to package.json
// Fetching data from multiple APIs

import fetch from 'node-fetch';

// Define API endpoints
const url1 = 'https://jsonplaceholder.typicode.com/posts/1';
const url2 = 'https://jsonplaceholder.typicode.com/invalid-url';
const url3 = 'https://jsonplaceholder.typicode.com/posts/3';

// Function to fetch data from an API and parse the response to JSON..
const fetchData = (url) => {
return fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error ("API call failed!");
        } else {
            return response.json();
        }
    })

    .catch(error => {
        return Promise.reject(`Error fetching data from ${url}: one API fails so the entire operation fails 😔`)
    })
   
};


// Using Promise.all to fetch data from all 3 APIS at once
Promise.all([fetchData(url1), fetchData(url2), fetchData(url3)])
    .then(result => {
        console.log("All data fetched successfully!");
        console.log(result);
    })

    .catch(error => {
        console.log("Error!", error);
    });