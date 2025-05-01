const Days = document.getElementById('days');
const Hours = document.getElementById('hours');
const Minutes = document.getElementById('mins');
const Seconds = document.getElementById('secs');

const targetDate = new Date("May 23 2025 00:00:00").getTime();

function timer(){
    const currentDate = new Date().getTime();
    const distance = targetDate - currentDate;

    const days = Math.floor(distance/1000/60/60/24);
    const hours = Math.floor(distance/1000/60/60)%24;
    const mins = Math.floor(distance/1000/60)%60;
    const secs = Math.floor(distance/1000)%60;

    // console.log(days + ":" + hours + ":" + mins + ":" + secs);

    Days.innerHTML = days;
    Hours.innerHTML = hours;
    Minutes.innerHTML = mins;
    Seconds.innerHTML = secs;
}   

setInterval(timer,1000);

 let coin_first = document.getElementById('coin_first');
 let coin = document.getElementById('coin');
 let btc = document.getElementById('btc');

coin.addEventListener('change', () => {
    let a = coin.value;
    coin_first.innerText =a.slice(0,1);
    if(a === "Bitcoin") {
        btc.innerText = "BTC";
    }
    else if(a === "Ethereum") {
        btc.innerText = "ETH";
    }
    else if(a === "Tether") {
        btc.innerText = "USDT";
    }
    else{
        btc.innerText = "BNB";
    }
})


let gov_coins = document.getElementById('gov_coins');
let coins = document.getElementById('coins');
let gov_coinss = document.getElementById('gov_coinss');

coins.addEventListener('change', () => {
    let a = coins.value;
    gov_coins.innerText =a.slice(0,1);
    if(a === "Dollar") {
        gov_coinss.innerText = "USD";
        gov_coins.innerText = "$";
    }
    else if(a === "Rupee") {
        gov_coinss.innerText = "INR";
        gov_coins.innerText = "₹";        
    }
    else if(a === "Riyal") {
        gov_coinss.innerText = "SAR";
        gov_coins.innerText = "S";
    }
    else{
        gov_coinss.innerText = "AED";
        gov_coins.innerText = "A";
    }
})

let crypto = document.getElementById('crypto');
let gov = document.getElementById('gov');

let Bitcoin_dollar = 84178.93;
let Ethereum_dollar = 1988.26;
let Tether_dollar = 1.00;
let BNB_dollar = 626.44;

crypto.addEventListener('change', () => {
    switch("Bitcoin"){
        case coin.value:
            switch("Dollar") {
                case coins.value:
                    gov.value = (crypto.value) * Bitcoin_dollar;
                break;
            }
            switch("Rupee") {
                case coins.value:
                    gov.value = (crypto.value) *(Bitcoin_dollar * 86);

                break;
            }
            switch("Riyal") {
                case coins.value:
                    gov.value = (crypto.value) * (Bitcoin_dollar * 3.75);

                break;
            }
            switch("Dirham") {
                case coins.value:
                    gov.value = (crypto.value) * (Bitcoin_dollar * 3.67);

                break;
            }
    }
})

crypto.addEventListener('change', () => {
    switch("Ethereum"){
        case coin.value:
            switch("Dollar") {
                case coins.value:
                    gov.value = (crypto.value) * Ethereum_dollar;
                break;
            }
            switch("Rupee") {
                case coins.value:
                    gov.value = (crypto.value) *(Ethereum_dollar * 86);

                break;
            }
            switch("Riyal") {
                case coins.value:
                    gov.value = (crypto.value) * (Ethereum_dollar* 3.75);

                break;
            }
            switch("Dirham") {
                case coins.value:
                    gov.value = (crypto.value) * (Ethereum_dollar * 3.67);

                break;
            }
    }
})


crypto.addEventListener('change', () => {
    switch("Tether"){
        case coin.value:
            switch("Dollar") {
                case coins.value:
                    gov.value = (crypto.value) * Tether_dollar;
                break;
            }
            switch("Rupee") {
                case coins.value:
                    gov.value = (crypto.value) *(Tether_dollar * 86);

                break;
            }
            switch("Riyal") {
                case coins.value:
                    gov.value = (crypto.value) * (Tether_dollar * 3.75);

                break;
            }
            switch("Dirham") {
                case coins.value:
                    gov.value = (crypto.value) * (Tether_dollar * 3.67);

                break;
            }
    }
})


crypto.addEventListener('change', () => {
    switch("BNB"){
        case coin.value:
            switch("Dollar") {
                case coins.value:
                    gov.value = (crypto.value) * BNB_dollar;
                break;
            }
            switch("Rupee") {
                case coins.value:
                    gov.value = (crypto.value) *(BNB_dollar * 86);

                break;
            }
            switch("Riyal") {
                case coins.value:
                    gov.value = (crypto.value) * (BNB_dollar * 3.75);

                break;
            }
            switch("Dirham") {
                case coins.value:
                    gov.value = (crypto.value) * (BNB_dollar * 3.67);

                break;
            }
    }
})

