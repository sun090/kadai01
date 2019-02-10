alert(11111);
console.log('はじめての');
console.log(5+23);
console.log(2000-1800);
console.log("18+5");
var name="ITO";
console.log(name);
console.log("自分の名前");
//var=変数の宣言　変数名は数字からNG

var point=70;

if(point>=80){console.log("素晴らしい！おめでとう！")}
else{console.log("もっと頑張りましょう！")};

//var random=Math.floor(Math.random()*5);は０からの５パターン

//これは１からの５パターン　
var random=Math.floor(Math.random()*5 + 1);
console.log(random);

if(random==1){console.log ("イチ")}
if(random==2){console.log ("ニイ")}
if(random==3){console.log ("サン")}
if(random==4){console.log ("ヨン")}
if(random==5){console.log ("ゴー")}



$(document).ready(function() {
    
 $('#test').on('click',function(){ 
  //$('#test').html('あああああ');
 $('#test').css('color','red');
 $('#test').fadeOut(2000);
 $('#test').fadeIn(2000);

 });

 });

 $(document).ready(function() {
    
    $('#hide').on('click',function(){ 
        $('#ex').fadeOut(2000);
    }); });
     //$('#test').html('あああああ');
    //$('#test').css('color','red');
 $(document).ready(function() {
    $('#show').on('click',function(){ 
    $('#ex').fadeIn(2000);
    $('#show').click(function(){
        var countUpValue = 0;
        function countUpValue(){
            countUpValue++;
            console.log(countUpValue);}
   
    });
   
    });
    $('#show').click(function(){
        


    });
});
var countUpValue = 0;
function countUpValue(){
    countUpValue++;
    console.log(countUpValue);
}
