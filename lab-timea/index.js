'use strict';

const fileReader = require('./lib/reader.js');

let callback = (err,data) => {
  if(err) { throw err; }
  console.log(data);
};
let arr = ['./data/file1.txt', './data/file2.txt', './data/file3.txt'];

fileReader( arr, callback );

