var fs = require("fs");
var crypto = require('crypto');
var filedata = fs.readFileSync('pub.key', 'utf8');

function hmacAlg(name, key) {
	var hash = crypto.createHmac(name, key);
	hash.update(filedata);
	console.log(name + ":");
	console.log("\tkey:" + new Buffer(key).toString('hex'))
	console.log("\thash:" + hash.digest('hex'));
}
for (var alg in crypto.getHashes()) hmacAlg(crypto.getHashes()[alg], crypto.randomBytes(64));