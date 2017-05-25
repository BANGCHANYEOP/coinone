var CoinoneAPI = require('coinone-api');
var request = require('request');
var crypto = require('crypto');
var request = require('request');
var ACCESS_TOKEN = 'fe760a95-522e-4cc6-97a1-bf69b77ea8af';
var SECRET_KEY = '8fed2d0b-7ffb-48e0-b864-65ca0f492d6b';
var url = 'https://api.coinone.co.kr/v2/account/daily_balance/';
var url2 = 'https://api.coinone.co.kr/ticker/';
  var payload = {
  "access_token": ACCESS_TOKEN,
  "nonce": Date.now()
};
var coinoneAPI = new CoinoneAPI('ACCESS_TOKEN','SECRET_KEY');
coinoneAPI.ticker('eth').then(function(response){
  console.log(response.data)
})

payload = new Buffer(JSON.stringify(payload)).toString('base64');

var signature = crypto
  .createHmac("sha512", SECRET_KEY.toUpperCase())
  .update(payload)
  .digest('hex');

var headers = {
  'content-type':'application/json',
  'X-COINONE-PAYLOAD': payload,
  'X-COINONE-SIGNATURE': signature
};

var options = {
  url: url,
  headers: headers,
  body: payload 
};

request.post(options,
  function(error, response, body) {
    console.log(body);
});