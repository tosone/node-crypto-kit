var crypto = require('crypto');
var fs = require("fs");

function hmacAlg(name, key) {
	var hash = crypto.createHmac(name, key);
	var txt = fs.ReadStream("pub.key");
	txt.on("data", function(data) {
		hash.update(data);
	})
	txt.on("end", function() {
		console.log(name + ":");
		console.log("\tkey:" + new Buffer(key).toString('hex'))
		console.log("\thash:" + hash.digest('hex'));
	})
}
for (var alg in crypto.getHashes()) hmacAlg(crypto.getHashes()[alg], crypto.randomBytes(64));