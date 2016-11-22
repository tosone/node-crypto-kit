'use strict';

const crypto = require('crypto');
const spawn = require('child_process').spawn;

const text = 'tosone';

const alg = spawn('openssl', ['list-cipher-algorithms']);
// const alg = spawn('openssl', ['list-cipher-commands']);

let output = '';

alg.stdout.on('data', data => {
  output += data;
});

alg.on('close', code => {
  if (code === 0) {
    let algs = output.trim().split('\n');
    for (let algorithm of algs) {
      if (/=>/.test(algorithm)) {
        algorithm = algorithm.split(' => ')[0];
      }
      if (!/XTS|CCM|GCM|wrap|base64/.test(algorithm)) {
        console.log(algorithm + ":");
        let key = crypto.randomBytes(128);
        console.time('\tcrypted');
        let cipher = crypto.createCipher(algorithm, key);
        let crypted = cipher.update(text, 'utf8', 'base64');
        crypted += cipher.final('base64');
        console.timeEnd('\tcrypted');

        console.time('\tdecipher');
        let decipher = crypto.createDecipher(algorithm, key);
        let dec = decipher.update(crypted, 'base64', 'base64');
        dec += decipher.final('base64');
        console.timeEnd('\tdecipher');
      } else {
        console.log(algorithm);
      }
    }
  }
});
