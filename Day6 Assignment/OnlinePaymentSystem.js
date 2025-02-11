var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Payment = /** @class */ (function () {
    function Payment(amount, date) {
        this.amount = amount;
        this.date = date;
    }
    return Payment;
}());
var CreditCardPayment = /** @class */ (function (_super) {
    __extends(CreditCardPayment, _super);
    function CreditCardPayment(amount, date, cardNumber) {
        var _this = _super.call(this, amount, date) || this;
        _this.cardNumber = cardNumber;
        return _this;
    }
    CreditCardPayment.prototype.processPayment = function () {
        return "Payment of $".concat(this.amount, " processed using Credit Card on ").concat(this.date, ".");
    };
    return CreditCardPayment;
}(Payment));
var PayPalPayment = /** @class */ (function (_super) {
    __extends(PayPalPayment, _super);
    function PayPalPayment(amount, date, email) {
        var _this = _super.call(this, amount, date) || this;
        _this.email = email;
        return _this;
    }
    PayPalPayment.prototype.processPayment = function () {
        return "Payment of $".concat(this.amount, " processed using PayPal on ").concat(this.date, ".");
    };
    return PayPalPayment;
}(Payment));
var CryptoPayment = /** @class */ (function (_super) {
    __extends(CryptoPayment, _super);
    function CryptoPayment(amount, date, walletAddress) {
        var _this = _super.call(this, amount, date) || this;
        _this.walletAddress = walletAddress;
        return _this;
    }
    CryptoPayment.prototype.processPayment = function () {
        return "Payment of $".concat(this.amount, " processed using Crypto on ").concat(this.date, ".");
    };
    return CryptoPayment;
}(Payment));
var creditCardPayment = new CreditCardPayment(100, "2025-02-05", "1234-5678-9876-54321");
console.log(creditCardPayment.processPayment());
var paypalPayment = new PayPalPayment(50, "2025-02-05", "yashvi@google.com");
console.log(paypalPayment.processPayment());
var cryptoPayment = new CryptoPayment(200, "2025-02-05", "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa");
console.log(cryptoPayment.processPayment());
