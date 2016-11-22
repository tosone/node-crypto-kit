var crypto = require('crypto');
var fs = require("fs");

function hashAlg(name) {
  var hash = crypto.createHash(name);
  var txt = fs.ReadStream("pub.key", {
    encoding: "utf8"
  });
  txt.on("data", function (data) {
    hash.update(data);
  })
  txt.on("end", function () {
    console.log(name + ":" + hash.digest('hex'));
  })
}
for (var alg in crypto.getHashes()) hashAlg(crypto.getHashes()[alg]);
