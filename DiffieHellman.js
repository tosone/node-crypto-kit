var crypto = require('crypto');

function fun(name) {
	console.time(name);
	var alice = crypto.getDiffieHellman(name);
	var bob = crypto.getDiffieHellman(name);
	alice.generateKeys();
	bob.generateKeys();
	var bobPublicKey = bob.getPublicKey();
	var alicePublicKey = alice.getPublicKey();
	var alice_secret = alice.computeSecret(bobPublicKey, 'binary', 'hex');
	var bob_secret = bob.computeSecret(alicePublicKey, 'binary', 'hex');
	console.log(name + ":")
	console.log("\tbobPublicKey:" + bobPublicKey.toString("hex"));
	console.log("\talicePublicKey:" + alicePublicKey.toString("hex"));
	console.log("\tbobPrivateKey:" + bob_secret);
	console.log("\talicePrivateKey:" + alice_secret);
	console.log((alice_secret == bob_secret) ? "success" : "error");
	console.timeEnd(name);
	console.log("\n");
}
var group_name = ['modp1', 'modp2', 'modp5', 'modp14', 'modp15', 'modp16', 'modp17', 'modp18'];
for (var i in group_name) fun(group_name[i]);