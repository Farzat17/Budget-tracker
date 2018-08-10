//declaring some variables and elements /by Farzat
var i, categories, newOption, currency;
var form = document.getElementById("newItem");

//first, we need to update the Category list from localStorage /by Farzat
categories = JSON.parse(localStorage.getItem("normalExpenseCategories"));
for(i = 0; i < categories.length; i++) {
    newOption = document.createElement("option");
    newOption.setAttribute("value", categories[i]);
    newOption.innerHTML = categories[i];
    document.getElementById("category").appendChild(newOption);
};
//we also need to update the currency based on settings
currency = document.getElementsByClassName("currency");
for(i = 0; i < currency.length; i++) {
    currency[i].innerHTML = localStorage.getItem("Currency");
};

//update localStorage when form is submitted /by Farzat
function processForm() {
    var id = parseInt(localStorage.getItem("id"));
    var newExpense = {
        id: (id + 1),
        category: form.category.value,
        name: form.name.value,
        price: form.price.value,
        date: form.date.value,
        paid: form.paid.checked,
    };
    id++;
    localStorage.setItem("id", id.toString());
    var expenses = JSON.parse(localStorage.getItem("Expenses"));
    expenses.push(newExpense);
    localStorage.setItem("Expenses", JSON.stringify(expenses));
    form.reset();
    return false;
};
form.addEventListener("submit", processForm);