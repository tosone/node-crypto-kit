const crypto = require('crypto');
const tls = require('tls');
console.log(crypto.getHashes().join(' '));
console.log(crypto.getCiphers().join(' '));
console.log(tls.getCiphers().join(' '));
