function gettoday(coinname){

    let today=new Date().getTime()
    //today=Math.floor(today/1000)
    let last=Math.floor(today/1000)
    
   // console.log(today)
    //console.log(last)
   // let test= "https://api.mytokenapi.com/currency/kline?com_id="+coinname+"_usdt&symbol="+coinname+"&anchor=USDT&time="+last+"&market_id=338&period=1d&timestamp=1674739035146&code=ebc161c4c01e448626c3cc30518009d6&platform=web_pc&v=1.0.0&language=en_US&legal_currency=USD"
   let test= "/currency/"+"kline?com_id="+coinname+"_usdt&symbol="+coinname+"&anchor=USDT&time="+last+"&market_id=338&period=1d&timestamp=1674739035146&code=ebc161c4c01e448626c3cc30518009d6&platform=web_pc&v=1.0.0&language=en_US&legal_currency=USD"
   // console.log(test)
    return test
  }

function getfox(){
  const foxurl='https://api.exchangerate-api.com/v4/latest/'
  $.getJSON(foxurl+'usd',function(result){
    $("#coin").append("  USDCNY:"+result.rates.CNY)
    $("#coin").append("  USDJPY:"+result.rates.JPY)
  })
  $.getJSON(foxurl+'eur',function(result){
    $("#coin").append("  EURUSD:"+result.rates.USD)
  })
  $.getJSON(foxurl+'gbp',function(result){
    $("#coin").append("  GBPJPY:"+result.rates.JPY)
  })
}

$(document).ready(function(){
   // let testdd=gettoday("btc");
$.getJSON(gettoday("btc"),function(result){
    
    $("#coin").append(" btc:"+result.data.kline[1].close);
  // console.log(result.data.kline[1].close)
  // console.log(result)
});

$.getJSON(gettoday("eth"),function(result){
    
   $("#coin").append("  eth:"+result.data.kline[1].close);
 // console.log(result.data.kline[1].close)
 // console.log(result)
});

$.getJSON(gettoday("matic665"),function(result){
    
  $("#coin").append("  matic:"+result.data.kline[1].close);
// console.log(result.data.kline[1].close)
// console.log(result)
});

$.getJSON(gettoday("apt530"),function(result){
    
  $("#coin").append("  apt:"+result.data.kline[1].close);
// console.log(result.data.kline[1].close)
// console.log(result)
});

$.getJSON(gettoday("tron"),function(result){
    
  $("#coin").append("  trx:"+result.data.kline[1].close);
// console.log(result.data.kline[1].close)
// console.log(result)
});

$.getJSON(gettoday("solana"),function(result){
    
  $("#coin").append("  sol:"+result.data.kline[1].close);
// console.log(result.data.kline[1].close)
// console.log(result)
});

$.getJSON(gettoday("xlm"),function(result){
    
  $("#coin").append("  xlm:"+result.data.kline[1].close);
// console.log(result.data.kline[1].close)
// console.log(result)
});
getfox();
});
