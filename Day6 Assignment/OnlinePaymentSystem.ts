abstract class Payment {
    protected amount: number;
    protected date: string;

    constructor(amount: number, date: string) {
        this.amount = amount;
        this.date = date;
    }

    abstract processPayment(): string;
}

class CreditCardPayment extends Payment {
    private cardNumber: string;

    constructor(amount: number, date: string, cardNumber: string) {
        super(amount, date);
        this.cardNumber = cardNumber;
    }

    processPayment(): string {
        return `Payment of $${this.amount} processed using Credit Card on ${this.date}.`;
    }
}

class PayPalPayment extends Payment {
    private email: string;

    constructor(amount: number, date: string, email: string) {
        super(amount, date);
        this.email = email;
    }

    processPayment(): string {
        return `Payment of $${this.amount} processed using PayPal on ${this.date}.`;
    }
}

class CryptoPayment extends Payment {
    private walletAddress: string;

    constructor(amount: number, date: string, walletAddress: string) {
        super(amount, date);
        this.walletAddress = walletAddress;
    }

    processPayment(): string {
        return `Payment of $${this.amount} processed using Crypto on ${this.date}.`;
    }
}

const creditCardPayment = new CreditCardPayment(100, "2025-02-05", "1234-5678-9876-54321");
console.log(creditCardPayment.processPayment());

const paypalPayment = new PayPalPayment(50, "2025-02-05", "yashvi@google.com");
console.log(paypalPayment.processPayment());

const cryptoPayment = new CryptoPayment(200, "2025-02-05", "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa");
console.log(cryptoPayment.processPayment());
