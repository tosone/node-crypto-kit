var crypto = require('crypto');

function hashAlg(name) {
  console.log(name + ":" + crypto.createHash(name).update("123456").digest('hex'));
}
for (var alg in crypto.getHashes()) hashAlg(crypto.getHashes()[alg]);
