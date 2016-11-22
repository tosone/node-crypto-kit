var crypto = require('crypto');
var fs = require('fs');

var pubkey = fs.readFileSync('pub.crt', 'utf8');
var prikey = fs.readFileSync('pri.crt', 'utf8');
var data = "tosone";
console.log("publickey:" + pubkey);
console.log("privatekey:" + prikey);

var sign = crypto.createSign('RSA-SHA256');
sign.update(data);
var signed = sign.sign(prikey, 'hex'); //签名
console.log("signed:" + signed);
var verify = crypto.createVerify('RSA-SHA256');
verify.update(data);
console.log(verify.verify(pubkey, signed, 'hex') ? "success" : "error"); //验证
