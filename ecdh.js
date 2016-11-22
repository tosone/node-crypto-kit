var crypto = require('crypto');
console.time("spendtime");
var Curves = crypto.getCurves();
for (var i in Curves) {
  var alice = crypto.createECDH(Curves[i]);
  var bob = crypto.createECDH(Curves[i]);
  alice.generateKeys();
  bob.generateKeys();
  var bobPublicKey = bob.getPublicKey('hex');
  var alicePublicKey = alice.getPublicKey('hex');
  var alicePrivateKey = alice.computeSecret(bobPublicKey, 'hex', 'hex');
  var bobPrivateKey = bob.computeSecret(alicePublicKey, 'hex', 'hex');
  console.log("Curves: " + Curves[i]);
  console.log("bobPublicKey: " + bobPublicKey);
  console.log("alicePublicKey: " + alicePublicKey);
  console.log("bobPrivateKey: " + bobPrivateKey);
  console.log("alicePrivateKey: " + alicePrivateKey);
  console.log(bobPrivateKey == alicePrivateKey ? "success" : "error");
  console.timeEnd("spendtime");
  console.log();
}
