
import { expenses } from "./data.js";

document.addEventListener("click", function(e){
    if (e.target.id === "toggle-account"){
        calculateAndRenderSum();
    } 
    
    if (e.target.id === "save-entry-btn") {
        let date = document.getElementById("date");
        let shop = document.getElementById('shop');
        let buyer = document.getElementById('buyer-select');
        let price = document.getElementById('price');
    
        if(date.value && shop.value && buyer.value && price.value){
    
            let newExpense = {
                date: date.value,
                shop: shop.value,
                buyer: buyer.value,
                price: price.value,
                uuid: "" // generate uuids here later (for integration of delete buttons)
            }
    
            expenses.unshift(newExpense); // add sort by date instead of adding to the top?
    
            document.form1.reset();
           
            calculateAndRenderSum();

            renderEntries();
        }
    }
})

function calculateAndRenderSum(){
    let sum = 0;

    const divSum = document.getElementById('div-sum');
    const toggleAccount = document.getElementById("toggle-account");
    let isToggleAccount = toggleAccount.checked;
    const moneyText = document.getElementById("money-text");

    expenses.forEach(function(expense){
        if(expense.buyer === "Tom"){
            sum += expense.price / 2;
        } 
        else if (expense.buyer === "Anna"){
            sum -= expense.price / 2;
        }
        
    })

    if(isToggleAccount){ // true -> Anna is selected
        if(sum >= 0){
            divSum.classList.replace("money-getsback","money-owed");
            toggleAccount.classList.replace("money-getsback","money-owed");
            moneyText.classList.replace("money-getsback","money-owed");
            moneyText.innerHTML = "owes";
        } else { 
            divSum.classList.replace("money-owed","money-getsback");
            toggleAccount.classList.replace("money-owed","money-getsback");
            moneyText.classList.replace("money-owed","money-getsback");
            moneyText.innerHTML = "gets back";
        }
    } else { // Tom is selected
        if(sum >= 0){ 
            divSum.classList.replace("money-owed","money-getsback");
            toggleAccount.classList.replace("money-owed","money-getsback");
            moneyText.classList.replace("money-owed","money-getsback");
            moneyText.innerHTML = "gets back";
        } else {
            divSum.classList.replace("money-getsback","money-owed");
            toggleAccount.classList.replace("money-getsback","money-owed");
            moneyText.classList.replace("money-getsback","money-owed");
            moneyText.innerHTML = "owes";
        }

    }

    divSum.innerHTML = Math.abs(sum) + "€";
}


    
function renderEntries(){
    const entryList = document.getElementById('entry-list');
    let entryHTML = "";

    expenses.forEach(function(entry){
        entryHTML += `
            <div class="expense-entry">
                <div class="entry date">${entry.date}</div>
                <div class="entry shop">${entry.shop}</div>
                <div class="entry buyer">${entry.buyer}</div>
                <div class="entry price">${entry.price}€</div>
                <div class="entry split-price">${entry.price/2}€</div>
            </div>
            `
    })

    // add a sort by date later? see event listener for entry btn
    entryList.innerHTML = entryHTML; 
}




