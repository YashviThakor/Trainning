var expenses = [];
var expenseId = 1;
var form = document.getElementById("expenseForm");
var expenseList = document.getElementById("expenseList");
var categoryFilter = document.getElementById("categoryFilter");
loadExpenses();
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var description = document.getElementById("expenseDescription").value;
    var amount = parseFloat(document.getElementById("expenseAmount").value);
    var category = document.getElementById("expenseCategory").value;
    var date = new Date(document.getElementById("expenseDate").value);
    var newExpense = { id: expenseId++, description: description, amount: amount, category: category, date: date };
    expenses.push(newExpense);
    saveExpenses();
    renderExpenses();
    form.reset();
});
categoryFilter.addEventListener("change", renderExpenses);
function renderExpenses() {
    expenseList.innerHTML = "";
    var filteredExpenses = categoryFilter.value
        ? expenses.filter(function (expense) { return expense.category === categoryFilter.value; })
        : expenses;
    filteredExpenses.forEach(function (expense) {
        var listItem = document.createElement("li");
        listItem.innerHTML = "\n            <span><strong>Description:</strong> ".concat(expense.description, "</span>\n            <span><strong>Amount:</strong> ").concat(expense.amount.toFixed(2), "</span>\n            <span><strong>Category:</strong> ").concat(expense.category, "</span>\n            <span><strong>Date:</strong> ").concat(expense.date.toLocaleDateString(), "</span>\n        ");
        expenseList.appendChild(listItem);
    });
}
function saveExpenses() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
}
function loadExpenses() {
    var storedExpenses = localStorage.getItem("expenses");
    if (storedExpenses) {
        expenses = JSON.parse(storedExpenses, function (key, value) {
            return key === "date" ? new Date(value) : value;
        });
        expenseId = expenses.length > 0 ? Math.max.apply(Math, expenses.map(function (exp) { return exp.id; })) + 1 : 1;
    }
    renderExpenses();
}
