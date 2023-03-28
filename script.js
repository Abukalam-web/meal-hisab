
var kharoch =10581+115+20 ;
var motMeal = 279 + 8.5 +12  ;







// mot meal adding
var milRate = (kharoch / motMeal);
var millRate = milRate.toFixed(3);



// for kharoch and meal rate hisab
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



