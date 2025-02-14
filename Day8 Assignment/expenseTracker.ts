interface Expense {
    id: number;
    amount: number;
    category: string;
    date: Date;
    description: string;
}

let expenses: Expense[] = [];
let expenseId = 1;

const form = document.getElementById("expenseForm") as HTMLFormElement;
const expenseList = document.getElementById("expenseList") as HTMLUListElement;
const categoryFilter = document.getElementById("categoryFilter") as HTMLSelectElement;

loadExpenses();

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const description = (document.getElementById("expenseDescription") as HTMLInputElement).value;
    const amount = parseFloat((document.getElementById("expenseAmount") as HTMLInputElement).value);
    const category = (document.getElementById("expenseCategory") as HTMLSelectElement).value;
    const date = new Date((document.getElementById("expenseDate") as HTMLInputElement).value);

    const newExpense: Expense = { id: expenseId++, description, amount, category, date };
    expenses.push(newExpense);

    saveExpenses();
    renderExpenses();

    form.reset();
});

categoryFilter.addEventListener("change", renderExpenses);

function renderExpenses() {
    expenseList.innerHTML = "";

    const filteredExpenses = categoryFilter.value
        ? expenses.filter((expense) => expense.category === categoryFilter.value)
        : expenses;

    filteredExpenses.forEach((expense) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span><strong>Description:</strong> ${expense.description}</span>
            <span><strong>Amount:</strong> ${expense.amount.toFixed(2)}</span>
            <span><strong>Category:</strong> ${expense.category}</span>
            <span><strong>Date:</strong> ${expense.date.toLocaleDateString()}</span>
        `;
        expenseList.appendChild(listItem);
    });
}

function saveExpenses() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
}

function loadExpenses() {
    const storedExpenses = localStorage.getItem("expenses");
    if (storedExpenses) {
        expenses = JSON.parse(storedExpenses, (key, value) =>
            key === "date" ? new Date(value) : value
        );
        expenseId = expenses.length > 0 ? Math.max(...expenses.map((exp) => exp.id)) + 1 : 1;
    }
    renderExpenses();
}
