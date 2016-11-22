'use strict';

var crypto = require('crypto');
var data = "tosone";
var key = crypto.randomBytes(128);

// console.time("pbkdf2");

crypto.pbkdf2(data, key, 7000, 256, function (err, hash) {
  console.log(hash.toString('hex'));
});

// console.timeEnd("pbkdf2");

console.time("pbkdf2Sync");
console.log(crypto.pbkdf2Sync(data, key, 70000, 256).toString('hex'));
console.timeEnd("pbkdf2Sync");
