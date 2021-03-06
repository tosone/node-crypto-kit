var crypto = require("crypto");
console.time("spendtime");
var bob = crypto.createDiffieHellman(128);
var prime = bob.getPrime('hex');
var alice = crypto.createDiffieHellman(prime, 'hex');
var bobPublicKey = bob.generateKeys('hex');
var alicePublicKey = alice.generateKeys('hex');
var bobPrivateKey = bob.computeSecret(alicePublicKey, 'hex', 'hex');
var alicePrivateKey = alice.computeSecret(bobPublicKey, 'hex', 'hex');
console.log("prime:" + prime);
console.log("bobPublicKey:" + bobPublicKey);
console.log("alicePublicKey:" + alicePublicKey);
console.log("bobPrivateKey:" + bobPrivateKey);
console.log("alicePrivateKey:" + alicePrivateKey);
console.log(bobPrivateKey == alicePrivateKey ? "success" : "error");
console.timeEnd("spendtime");
