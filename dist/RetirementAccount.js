"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Decorators_1 = require("./Decorators");
var RetirementAccount = /** @class */ (function () {
    function RetirementAccount() {
        this.balance = 100000;
        this.monthlyTransactions = 6;
        this.dateOpened = new Date();
    }
    RetirementAccount.prototype.withdrawMoney = function (amount, description, transactionOrigin) {
        this.TransactionOrigin = 3;
        var currentBalance = this.balance;
        this.accountType = 3;
        if (this.TransactionOrigin == 1 || 2) {
            if (this.monthlyTransactions >= 1) {
                this.amount = amount;
                if (amount > currentBalance) {
                    this.success = false;
                    this.errorMessage = "Cannot withdrawal more than the available balance.";
                    this.resultBalance = this.balance;
                    this.transactionDate = new Date();
                    this.description = description;
                }
                else {
                    this.success = true;
                    this.errorMessage = "";
                    this.resultBalance = this.balance -= amount;
                    this.transactionDate = new Date();
                    this.description = description;
                    this.monthlyTransactions--;
                    //  this.accountHistory
                }
            }
            else {
                this.errorMessage = "Too many transactions this month";
            }
        }
        else {
            this.amount = amount;
            if (amount > currentBalance) {
                this.success = false;
                this.errorMessage = "Cannot withdrawal more than the available balance.";
                this.resultBalance = this.balance;
                this.transactionDate = new Date();
                this.description = description;
            }
            else {
                this.success = true;
                this.errorMessage = "";
                this.resultBalance = this.balance -= amount;
                this.transactionDate = new Date();
                this.description = description;
                //  this.accountHistory
            }
        }
        return;
    };
    RetirementAccount.prototype.depositMoney = function (amount, description) {
        this.balance += amount;
        this.resultBalance = this.balance;
        this.success = true;
        this.description = description;
        this.errorMessage = "";
        this.transactionDate = new Date();
        return;
    };
    RetirementAccount.prototype.advanceDate = function (numberOfDays) {
        // balance * .03 / 12
        //monthlyTransactions reset to 6
    };
    RetirementAccount = __decorate([
        Decorators_1.displayClassName
    ], RetirementAccount);
    return RetirementAccount;
}());
exports.RetirementAccount = RetirementAccount;
//# sourceMappingURL=RetirementAccount.js.map