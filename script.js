
// toFix() PRAVI String. TO MI JE PRAVILO PROBLEMA. PA JE MORALO Number() ISPRED. INA DOSTA MESTA SAM IMAO TAJ PROBLEM SA ZAOKRUZIVANJEM
// ISPOD IMA SREDJENA VERZIJA I MENJAO SAM NEKE NAZIVE PROMENLJIVIH.*************************

// let price = 1;
// let cid = [
//     ["PENNY", 1.01],
//     ["NICKEL", 2.05],
//     ["DIME", 3.1],
//     ["QUARTER", 4.25],
//     ["ONE", 90],
//     ["FIVE", 55],
//     ["TEN", 20],
//     ["TWENTY", 60],
//     ["ONE HUNDRED", 100]
//   ];

// const cashInput = document.getElementById("cash");
// const purchaseButton = document.getElementById("purchase-btn");
// const changeDue = document.querySelector("#change-due span");       //Moralo je preko querySelector je getElementById nije moglo da pronadje ovo span.


// purchaseButton.addEventListener("click", () => {
//     // cashSmallerThanPrice();
//     // cashEqualToPrice();
//     cashBiggerThanPrice();
// })

// const cashSmallerThanPrice = () => {
//     if (Number(cashInput.value) < price) {
//         alert("Customer does not have enough money to purchase the item");
//     } 
// }

// const cashEqualToPrice = () => {
//     if (Number(cashInput.value) === price) {
//         changeDue.textContent = "No change due - customer paid with exact cash";
//     }
// }

// const cashBiggerThanPrice = () => {
//     let change = 0;
//     if (Number(cashInput.value) > price) {
//         change = Number((Number(cashInput.value) - price).toFixed(2)); //Ovde radi i bez ovog Number unutar zagrade sto mi nije najjasnije jer je casInput string, a price je number. toFixed pravi string zato imam ono prvo Number.
//         // console.log(typeof change);
//         // console.log(typeof Number(cashInput.value));
//         // console.log(typeof price);
//         console.log("Change: " + change);
//     }


//     const dollarCurrencyValues = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
//     const numberOfEachBill = {};
//     const cidReverse = cid.slice().reverse();       //* Ispod.
//     // console.log(cidReverse[0][1])
//     let changeReducer = change;
//     let cashInputValue = Number(cashInput.value);
//     let totalAfterChange = 0;
    
//     for (let i = 0; i < 9; i++) {
//         let cidReverseValue = cidReverse[i][1];
//         totalAfterChange += cid[i][1]
//         //When change is > 0.
//         while (Number((changeReducer - dollarCurrencyValues[i]).toFixed(2)) >= 0 && Number((cidReverseValue - dollarCurrencyValues[i]).toFixed(2)) >= 0) {
//             if (numberOfEachBill[cidReverse[i][0]]) {
//                 numberOfEachBill[cidReverse[i][0]] += dollarCurrencyValues[i];
//             } else {
//                 numberOfEachBill[cidReverse[i][0]] = dollarCurrencyValues[i];
//             }
//             changeReducer -= dollarCurrencyValues[i];
//             cidReverseValue -= dollarCurrencyValues[i];
//             // console.log("Promenljivo: " + changeReducer);
//         } 
       
        
        

//         const moneyLeft = cidReverseValue;
//         cidReverse[i][1] = moneyLeft;
        
//         // console.log("CID REVERSE: " + cidReverse[i][1]);
        
//     }
//     console.log(cidReverse);
//     console.log("Ukupno posle kusura: " + totalAfterChange)

//         // // console.log(numberOfEachBill);
        
//         const billName = Object.keys(numberOfEachBill);
//         const billValue =Object.values(numberOfEachBill);
//         const billValueSum = billValue.reduce((a, b) => a + b, 0);
//         console.log(billValueSum)
//         console.log(billValue)
        
//         let changeText = "";
//         let cidReverseCashRemain = 0;
//         for (let i = 0; i < billName.length; i++) {
            
//             changeText += `${billName[i]}: $${billValue[i].toFixed(2)} `; 
//             cidReverseCashRemain += billValue[i];   
//         }
//         console.log("Vadim iz kase: " + cidReverseCashRemain.toFixed(2)) 
//         console.log("Kusur: " + change) 
//         console.log("Cena: " + price.toFixed(2))
//         console.log("Kes - cena: " + (Number(cashInput.value) - price))

//         // const cidReverseReverse = cidReverse.slice().reverse();
//         // console.log("cidrevrev: " + cidReverseReverse)

//         if (Number(cashInput.value) === price) { //OVO!!!
            
//             console.log("hi : " + cidReverse.slice().reverse()[0][1])
//             changeDue.textContent = "No change due - customer paid with exact cash";
            
            
//         } else if (Number(cashInput.value) < price) {
//             alert("Customer does not have enough money to purchase the item");
//         } else if (Number(cashInput.value) >= price && (price + billValueSum) < Number(cashInput.value) && totalAfterChange.toFixed(2) >= 0) {
//             changeDue.textContent = `Status: INSUFFICIENT_FUNDS`;
//         } else if (totalAfterChange.toFixed(2) - change === 0) {
            
//             changeDue.textContent = `Status: CLOSED ${changeText}`;
            
//         }else {
//         changeDue.textContent = `Status: OPEN ${changeText}`;
//         }
// }


// *
// const cidReverse = cid.slice().reverse(); 
// Ovde je moralo slice() da ide.
// Kad uradim reverse() onda overwrite-ujem originalni array. Znaci cid ce da postane cidReverse.
// Onda ako opet stisnem dugme kad funkcija dodje to ovog istog dela onda je cid vec pretvoren u
// cidReverse tako da cu onda imati const cidReverse = cidReverse.slice().reverse(); sto je u stvari 
// cid i to onda pravi problem. Kad stavim slice ne prepravlja se originalni array nego se stvara novi
// i on se onda koristi unutar funkcije.

// ______________________________________________________________________________________________________
// ______________________________________________________________________________________________________
// ______________________________________________________________________________________________________


let price = 20;
let cid = [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
  ];

const cashInput = document.getElementById("cash");
const purchaseButton = document.getElementById("purchase-btn");
const thankYouForShopping = document.getElementById("thank-you-for-shopping");
const afterPurchase = document.getElementById("after-purchase");
const bottomLine = document.getElementById("bottom-line");
const changeDue = document.querySelector("#change-due span"); 
const leftInsideCashRegisterBills = document.querySelector("#left-inside-cash-register #bills");
const leftInsideCashRegisterValues = document.querySelector("#left-inside-cash-register #values");


document.getElementById("items-price").textContent = `$${price}`

let cashText = ""
cid.slice().reverse().forEach((bill) => {
    cashText += `${bill[0]}:  <br>`;
})

let cashText1 = ""
cid.slice().reverse().forEach((bill) => {
    cashText1 += `$${bill[1]}  <br>`;
})

leftInsideCashRegisterBills.innerHTML = `${cashText}`;
leftInsideCashRegisterValues.innerHTML = `${cashText1}`;

const inputValueChecker = () => {
    let change = 0;
    if (Number(cashInput.value) > price) {
        change = Number((Number(cashInput.value) - price).toFixed(2)); 
    }

    const dollarCurrencyValues = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
    const eachBillChangeTotal = {};
    const cidReverse = cid.slice().reverse();       //* Ispod.
    console.log(cid)
    console.log("cid" + cid)
    console.log(cid[0][1])
    let changeReducer = change;
    let cashInputValue = Number(cashInput.value);
    let totalBeforeChange = 0;
     
    for (let i = 0; i < 9; i++) {
        let cidReverseValue = cidReverse[i][1];
        totalBeforeChange += cidReverse[i][1]

        while (Number((changeReducer - dollarCurrencyValues[i]).toFixed(2)) >= 0 && Number((cidReverseValue - dollarCurrencyValues[i]).toFixed(2)) >= 0) {
            if (eachBillChangeTotal[cidReverse[i][0]]) {
                eachBillChangeTotal[cidReverse[i][0]] += Number(dollarCurrencyValues[i].toFixed(2));
            } else {
                eachBillChangeTotal[cidReverse[i][0]] = dollarCurrencyValues[i];
            }
            changeReducer -= dollarCurrencyValues[i];
            cidReverseValue -= dollarCurrencyValues[i];
        } 
        
        const moneyLeft = cidReverseValue;
        cidReverse[i][1] = Number(moneyLeft.toFixed(2));      
    }

    const totalAfterChange = totalBeforeChange - change;    
    // console.log(totalAChange)

    const billName = Object.keys(eachBillChangeTotal);
    const billValue = Object.values(eachBillChangeTotal);

        // const billValueTwoDecimals = billValue.map((bill) => Number(bill.toFixed(2)))
        // billName.forEach((name, index) => {eachBillChangeTotal[name] = billValueTwoDecimals[index]})  
        
    const billValueSum = billValue.reduce((a, b) => a + b, 0);

        
    let changeText = "";
        for (let i = 0; i < billName.length; i++) {
            changeText += `${billName[i]}: $${billValue[i].toFixed(2)} <br>`;  
        }

    cashText1 = "";
        for (let i = 0; i < 9; i++) {
            cashText1 += `$${cidReverse[i][1]} <br>`;  
        }

        
        // console.log(billValue)
        // console.log(eachBillChangeTotal);
        // console.log(cidReverse);
        // console.log("Ukupno posle kusura: " + totalAChange)
        // console.log("Vadim iz kase: " + billValueSum) 
        // console.log("Kusur: " + change) 
        // console.log("Cena: " + price.toFixed(2))
        

        
    if (cashInputValue === price) { 
        changeDue.textContent = "No change due - customer paid with exact cash";         
    } else if (cashInputValue < price) {
        alert("Customer does not have enough money to purchase the item");
    } else if (cashInputValue >= price && (price + billValueSum) < cashInputValue && totalBeforeChange.toFixed(2) >= 0) {
        changeDue.textContent = `Status: INSUFFICIENT_FUNDS`;
    } else if (Number(totalAfterChange.toFixed(2)) === 0) {
        changeDue.innerHTML = `Status: <span id="closed">CLOSED</span> <br> ${changeText} `;    
    } else {
    changeDue.innerHTML = `Status: <span id="open">OPEN</span> <br> ${changeText} `;
    }

    leftInsideCashRegisterValues.innerHTML = `${cashText1}`;

    afterPurchase.style.visibility = "visible";
    thankYouForShopping.style.visibility = "visible";
    bottomLine.style.visibility = "visible";
    cashInput.value = ""
    
}

purchaseButton.addEventListener("click", inputValueChecker);




// //CASE 1.
// let original = [1, 2, 3, 4, 5];
// let kopija = original.slice().reverse();

// const proba = () => {

// for (let i=0; i<5; i++){
//     while(kopija[i] > 1){
//         kopija[i]--   
//     }    
// }
// console.log(original)
// console.log("original: " + original)
// console.log(kopija)
// console.log("kopija: " + kopija)
// }

// document.addEventListener("click", proba)
//________________________________________

// //CASE 2.
// let original = [["one", 1], ["two", 2], ["three", 3], ["four", 4], ["five", 5]];
// let kopija = original.slice().reverse();

// const proba = () => {

// for (let i=0; i<5; i++){
//     while(kopija[i][1] > 1){
//         kopija[i][1]--     
//     }    
// }
// console.log(original)
// console.log("original: " + original)
// console.log(kopija)
// console.log("kopija: " + kopija)
// }

// document.addEventListener("click", proba)
//_____________________________________________

// let original = [["one", 1], ["two", 2], ["three", 3], ["four", 4], ["five", 5]];
// let kopija = original.map(arr => [...arr]).reverse();

// for (let i=0; i<5; i++){
//     while(kopija[i][1] > 1){
//         kopija[i][1]--     
//     }    
// }
// console.log(kopija)
// console.log(original)
// console.log("kopija" + kopija)
// console.log("original" + original)


//__________________________________________


// let original = [1, 2, 3, 4, 5];
// let kopija = [...original].reverse();

// for (let i=0; i<5; i++){
//     while(kopija[i] > 1){
//         kopija[i]--     
//     }    
// }
// console.log(kopija)
// console.log(original)
// console.log("kopija" + kopija)
// console.log("original" + original)
//________________________

// let original = [[1], [2], [3], [4], [5]];
// let kopija = original.map(arr => [...arr]).reverse();

// for (let i=0; i<5; i++){
//     while(kopija[i][0] > 1){
//         kopija[i][0]--     
//     }    
// }
// console.log(kopija)
// console.log(original)
// console.log("kopija" + kopija)
// console.log("original" + original)

//_________
// array = [1, 2, 3, 4, 5];
// console.log(...array)

//_______________________

// let original = [["one", 1], ["two", 2], ["three", 3], ["four", 4], ["five", 5]];
// // let kopija = original.map(arr => [...arr]).reverse();


// const sub = () => {
//     let kopija = original.map(arr => [...arr]).reverse();
//     kopija[0][1]--;
//     console.log(kopija)
// }
// document.addEventListener("click", sub)
