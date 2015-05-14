var crypto = require('crypto');

function hmacAlg(name, key) {
	console.log(name + ":");
	console.log("\tkey:" + new Buffer(key).toString('hex'));
	console.log("\thash:" + crypto.createHmac(name, key).update("123456").digest('hex'));
}
for (var alg in crypto.getHashes()) hmacAlg(crypto.getHashes()[alg], crypto.randomBytes(64));