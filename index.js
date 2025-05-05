
const entryHTML= `
    <div class="expense-entry">
        <div class="entry date">05.05.2025</div>
        <div class="entry shop">Rewe</div>
        <div class="entry buyer">Nena</div>
        <div class="entry price">50,00€</div>
        <div class="entry split-price">-25,00€</div>
    </div>
    `
let testId = document.getElementById('test-id');
    
function renderEntries(){
    testId.innerHTML = entryHTML + entryHTML; 
}

renderEntries();