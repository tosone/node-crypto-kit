var fs = require("fs");
var crypto = require('crypto');
var filedata = fs.readFileSync('pub.key', 'utf8');

function crypto_fun(name) {
  var key = crypto.randomBytes(64);
  var cipher = crypto.createCipher(name, key);
  var crypted = cipher.update(filedata, 'utf8', 'hex');
  crypted += cipher.final('hex');
  console.log(name + ":");
  console.log("\tkey:" + new Buffer(key).toString('hex'));
  console.log("\tciphertext:" + crypted);
  var decipher = crypto.createDecipher(name, key);
  var dec = decipher.update(crypted, 'hex', 'utf8');
  dec += decipher.final('utf8');
  console.log("\tdeciphertext:" + dec + "\n");
}
var ss = ['aes-128-cbc', 'aes-128-ecb', 'aes-192-cbc', 'aes-192-ecb', 'aes-256-cbc', 'aes-256-ecb', 'bf', 'bf-cbc', 'bf-cfb', 'bf-ecb', 'bf-ofb', 'camellia-128-cbc', 'camellia-128-ecb', 'camellia-192-cbc', 'camellia-192-ecb', 'camellia-256-cbc', 'camellia-256-ecb', 'cast', 'cast-cbc', 'cast5-cbc', 'cast5-cfb', 'cast5-ecb', 'cast5-ofb', 'des', 'des-cbc', 'des-cfb', 'des-ecb', 'des-ede', 'des-ede-cbc', 'des-ede-cfb', 'des-ede-ofb', 'des-ede3', 'des-ede3-cbc', 'des-ede3-cfb', 'des-ede3-ofb', 'des-ofb', 'des3', 'desx', 'idea', 'idea-cbc', 'idea-cfb', 'idea-ecb', 'idea-ofb', 'rc2', 'rc2-40-cbc', 'rc2-64-cbc', 'rc2-cbc', 'rc2-cfb', 'rc2-ecb', 'rc2-ofb', 'rc4', 'rc4-40', 'seed', 'seed-cbc', 'seed-cfb', 'seed-ecb', 'seed-ofb'];
for (var alg in ss) crypto_fun(ss[alg]);
