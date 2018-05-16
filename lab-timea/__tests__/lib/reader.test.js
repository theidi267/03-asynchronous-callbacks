'use strict';

const reader = require('../../lib/reader.js');

describe('File Reader Module', () => {

  it('when given a bad filepath, returns an error', () => {
   
    let file = `${__dirname}/../../data/file.txt`;
    reader(file, (err,data) => {
      expect(err).toBeDefined();
    });
  });

  it('when given a real file, returns the contents', () => {
    let file = `${__dirname}/../../data/file1.txt`;
    reader(file, (err,data) => {
      expect(err).toBeUndefined(); 
      expect(typeof data).toBe('string');
    });
  });

  it('should return null if invalid arguments are passed', () => {
    // console.log(reader(4));
    expect(reader(4)).toBeNull();
    expect(reader([4, 5])).toBeNull();
  });

  it('should print the content of the files in order of the files', () => {
    return reader(['../../data/file1.txt', '../../data/file2.txt', '../../data/file3.txt'], (err, callback) => {
      if (err) console.error(err);
      callback = callback.map(file => file.charAt(0));
      expect(callback).toBe('B', 'T', 'M');
    })
  })

});