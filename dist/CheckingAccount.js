"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Decorators_1 = require("./Decorators");
var moment = require("moment");
var CheckingAccount = /** @class */ (function () {
    function CheckingAccount() {
        this.balance = 1000;
        this.dateOpened = moment('2015-06-19');
    }
    CheckingAccount.prototype.withdrawMoney = function (amount, description, transactionOrigin) {
        var currentBalance = this.balance;
        this.accountType = 1;
        this.amount = amount;
        if (transactionOrigin) {
            if (amount > currentBalance) {
                this.success = false;
                this.errorMessage = "Cannot withdrawal more than the available balance.";
                this.transactionDate = moment().format("MMM Do YYYY");
                this.description = description;
            }
            else {
                this.success = true;
                this.errorMessage = "";
                this.balance -= amount;
                this.transactionDate = moment().format("MMM Do YYYY");
                this.description = description;
            }
            return this.description;
        }
    };
    CheckingAccount.prototype.depositMoney = function (amount, description) {
        this.balance += amount;
        this.success = true;
        this.description = description;
        this.errorMessage = "";
        this.transactionDate = moment().format("MMM Do YYYY");
        return this.description;
    };
    CheckingAccount.prototype.advanceDate = function (numberOfDays) {
        var countingDate = this.dateOpened;
        console.log(countingDate);
        var i = 0;
        while (i < numberOfDays) {
            countingDate.add(1, 'days');
            console.log(countingDate);
            i++;
            // console.log(countingDate.date());
            if (countingDate.date() === 1) {
                console.log('New monthly interest added');
                var interest = (this.balance * 0.01) / 12;
                console.log(interest);
                this.balance += interest;
                console.log(this.balance);
            }
        }
        return this.balance;
    };
    CheckingAccount = __decorate([
        Decorators_1.displayClassName
    ], CheckingAccount);
    return CheckingAccount;
}());
exports.CheckingAccount = CheckingAccount;
//# sourceMappingURL=CheckingAccount.js.map