var crypto = require('crypto');
console.time("spendtime");
var alice = crypto.createECDH('secp256k1');
var bob = crypto.createECDH('secp256k1');
alice.generateKeys();
bob.generateKeys();
var bobPublicKey = bob.getPublicKey('hex');
var alicePublicKey = alice.getPublicKey('hex');
var alicePrivateKey = alice.computeSecret(bobPublicKey, 'hex', 'hex');
var bobPrivateKey = bob.computeSecret(alicePublicKey, 'hex', 'hex');
console.log("bobPublicKey:" + bobPublicKey);
console.log("alicePublicKey:" + alicePublicKey);
console.log("bobPrivateKey:" + bobPrivateKey);
console.log("alicePrivateKey:" + alicePrivateKey);
console.log(bobPrivateKey == alicePrivateKey ? "success" : "error");
console.timeEnd("spendtime");