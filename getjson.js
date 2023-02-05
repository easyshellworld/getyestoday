function gettoday(coinname){

    let today=new Date().getTime()
    //today=Math.floor(today/1000)
    let last=Math.floor(today/1000)
    
   // console.log(today)
    //console.log(last)
   // let test= "https://api.mytokenapi.com/currency/kline?com_id="+coinname+"_usdt&symbol="+coinname+"&anchor=USDT&time="+last+"&market_id=338&period=1d&timestamp=1674739035146&code=ebc161c4c01e448626c3cc30518009d6&platform=web_pc&v=1.0.0&language=en_US&legal_currency=USD"
   let test= "/api/currency/"+"kline?com_id="+coinname+"_usdt&symbol="+coinname+"&anchor=USDT&time="+last+"&market_id=338&period=1d&timestamp=1674739035146&code=ebc161c4c01e448626c3cc30518009d6&platform=web_pc&v=1.0.0&language=en_US&legal_currency=USD"
   // console.log(test)
    return test
  }


$(document).ready(function(){
   // let testdd=gettoday("btc");
$.getJSON(gettoday("btc"),function(result){
    
    $("#coin").html("btc:"+result.data.kline[1].close);
   console.log(result.data.kline[1].close)
   console.log(result)
});

});
