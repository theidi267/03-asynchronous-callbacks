'use strict';

const fs = require('fs');

// Wrap the fs.readFile method with our interface so that we can properly test it modularly.
module.exports = exports = (arr, callback) => {
  if(!arr || !Array.isArray(arr)) return null;
  for(let i=0; i<arr.length; i++){
    if (typeof arr[i] !== 'string') return null;
  }  
  const test = [];
  let count = 0;

  fs.readFile( `${__dirname}/${arr[count]}`, (err, data) => {
    if(err) return callback(err);
    else { 
      test.push(data.toString()); 
      count++;
      fs.readFile( `${__dirname}/${arr[count]}`, (err, data) => {
        if(err) return callback(err);
        else { 
          test.push(data.toString()); 
          count++;
          fs.readFile( `${__dirname}/${arr[count]}`, (err, data) => {
            if(err) return callback(err);
            else { 
              test.push(data.toString()); 
              return callback(null, test);
      }});
    }});
  }});
}