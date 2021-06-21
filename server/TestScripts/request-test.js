'use strict';

const axios = require('axios');

// USE POST/CREATE NEW RECORD
/*
const book = {
    'author': 'Arif01',
    'title': 'Phantoms in the Brain',
    'published': '1998-01-01'
  };

axios.post('http://localhost:3000/books', book)
.then(response => {
    console.log('Response is:', response);
})
.catch(error => {
    console.log(error);
});
*/

//using PUT/UPDATE
/*
const book = {
    'author': 'Arif02',
    'title': 'Phantoms in the BrainXX',
    'published': '1998-01-01'
  };

axios.put('http://localhost:3000/books/12', book)
.then(response => {
    console.log('Response is:', response);
})
.catch(error => {
    console.log(error);
});
*/

//delete

axios.delete('http://localhost:3000/books/12')
.then(response => {
    console.log('Delete Response is:', response);
})
.catch(error => {
    console.log(error);
});