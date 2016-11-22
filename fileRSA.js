var fs = require("fs");
var crypto = require('crypto');
var pubkey = fs.readFileSync('pub.crt', 'utf8');
var prikey = fs.readFileSync('pri.crt', 'utf8');
var ciphertxt = crypto.publicEncrypt(pubkey, new Buffer("tosone"));
console.log("publickey:" + pubkey);
console.log("privatekey:" + prikey);
console.log("ciphertext:" + ciphertxt.toString('hex'));
console.log("deciphertext:" + crypto.privateDecrypt(prikey, ciphertxt).toString("utf8"));
