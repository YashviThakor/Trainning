/*
Online Payment System
Create Payment class with amount, date.
Subclasses: CreditCardPayment, PayPalPayment, CryptoPayment.
Abstraction: Hide sensitive details like #cardNumber.
*/
class Payment {
    constructor(amount, date) {
        this.amount = amount;
        this.date = date;
    }
    processPayment() {
        throw new Error("methodshould be in the subclass");
    }
}
class CreditCardPayment extends Payment {
    constructor(amount, date, cardNumber) {
        super(amount, date);
        this.cardNumber = cardNumber;
    }
    processPayment() {
        return `Payment of ${this.amount} processed using Credit Card on ${this.date}.`;
    }
}
class PayPalPayment extends Payment {
    constructor(amount, date, email) {
        super(amount, date);
        this.email = email;
    }
    processPayment() {
        return `Payment of $${this.amount} processed using PayPal on ${this.date}.`;
    }
}
class CryptoPayment extends Payment {
    constructor(amount, date, walletAddress) {
        super(amount, date);
        this.walletAddress = walletAddress;
    }
    processPayment() {
        return `Payment of ${this.amount} processed using Crypto on ${this.date}.`;
    }
}
const creditCard = new CreditCardPayment(100, "2025-02-05", "1234-5678-9876-54321");
console.log(creditCard.processPayment());
const paypal = new PayPalPayment(50, "2025-02-05", "yashvi@google.com");
console.log(paypal.processPayment());
const crypto = new CryptoPayment(200, "2025-02-05", "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa");
console.log(crypto.processPayment());