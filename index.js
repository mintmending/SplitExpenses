
import { expenses } from "./data.js";

const entryList = document.getElementById('entry-list');

renderEntries();
    
function renderEntries(){
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

    // add a sort by date later?
    entryList.innerHTML = entryHTML; 
}


// Code for entry-button here (refactor later into document event listener?)
const saveEntryBtn = document.getElementById("save-entry-btn");

saveEntryBtn.addEventListener("click", function(){

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

        expenses.unshift(newExpense);

        document.form1.reset();
        renderEntries();
    }
})

