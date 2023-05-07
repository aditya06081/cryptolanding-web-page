var btc= document.getElementById("bitcoin");
var eth= document.getElementById("ethereum");
var doge= document.getElementById("dogecoin");


var settings = {
    "asyn":true,
    "scrossDomain":true,
    "url":"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",

    "method" :"GET",
    "headers":{}
    
 }
 $.ajax(settings).done(function(respone){
    btc.innerHTML=respone.bitcoin.usd;
    eth.innerHTML=respone.ethereum.usd;
    doge.innerHTML=respone.dogecoin.usd;

 });