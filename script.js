
var kharoch =10581+115 ;
var motMeal = 000;

// deposit kalam vai 
var kalamDepo = 2940;
var kalamMeal = 66.5;

// tnazim khan
var tanzimD = 1200;
var tanzimM = 71;

// tahmid 
var tahmidD  = 2100;
var tahmidM = 69.5;

// tonmoy 
var tonmoyD = 2300;
var tonmoyM = 72;

// kharoch1 = kalamDepo + tanzimD + tahmidD + tonmoyD;

motMeal = kalamMeal + tanzimM + tahmidM + tonmoyM;
var milRate = (kharoch / motMeal);
var millRate = milRate.toFixed(3);




function motKharach (){
  const kharach = document.getElementById("motKhoroch");
  kharach.innerHTML = kharoch;
}
motKharach();
function mealRate (){
  const rate = document.getElementById("motKhoroch1");
  rate.innerHTML = millRate;
}
mealRate();




function kalamVai (){
  const kalamId = document.getElementById("kalam");
  kalamId.innerHTML = kalamDepo;
}
kalamVai();
function  k1 (){
  var k11  = document.getElementById("k11");
   var k22 = kalamMeal * millRate;
   k22 = k22.toFixed(2);
   k11.innerHTML = k22;  
}
k1();

// kalam vai end



// tahmid


function allPoket (){
  var poketKalam = document.getElementById("poketKalam");
  var poketTanzim = document.getElementById("poketTanzim");
  var poketTahmid = document.getElementById("poketTahmid");
  var poketTonmoy = document.getElementById("poketTonmoy");

var poketKalam1 = kalamDepo -(kalamMeal * millRate);
poketKalam1 =poketKalam1.toFixed(2);
poketKalam.innerHTML = poketKalam1;

var poketTanzim1 = tanzimD - (tanzimM * millRate);
poketTanzim1 = poketTanzim1.toFixed(2);
poketTanzim.innerHTML = poketTanzim1;

var poketTahmid1 = tahmidD - (tahmidM * millRate);
poketTahmid1 = poketTahmid1.toFixed(2);
poketTahmid.innerHTML = poketTahmid1;

var poketTonmoy1 = tonmoyD - ( tonmoyM * millRate);
poketTonmoy1 = poketTonmoy1.toFixed(2);
poketTonmoy.innerHTML = poketTonmoy1;
 




}
allPoket();




