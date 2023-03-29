let deposite = 2000 + 570+470 ;
let  totalMeal = 69.5 + 3+3 ; 
function deposite1 () {
    const kalam00 = document.getElementById("kalam");
    kalam00.innerHTML = deposite ;

}
deposite1();

function koroch (){
    // adding koroch and meal
    let totalKhoroch = 10581+115+20+658 ;

    let allTotalMeal = 279+12+11 ;






    const milrate = totalKhoroch / allTotalMeal;
    const milRate = milrate.toFixed(3);
    const khoroch1 = milRate * totalMeal ;
    const khoroch11 = khoroch1.toFixed(2);
    const getId = document.getElementById("k11");
    getId.innerHTML = khoroch11; 

    const poket = deposite - khoroch11 ;
    const poket11 = poket.toFixed(2);

    const poket1 = document.getElementById("poketKalam");
    poket1.innerHTML = poket11;
    



}
koroch();
