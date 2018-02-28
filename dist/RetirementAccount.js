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
var RetirementAccount = /** @class */ (function () {
    function RetirementAccount() {
        this.balance = 100000;
        // dateOpened: Date;
        this.monthlyTransactions = 6;
        this.userAge = 66;
        //  this.dateOpened = new Date();
    }
    // move this.balance to an if statement. use moment JS. create this.currentdate.add (days) then get 1st day of month, not first day of week.
    RetirementAccount.prototype.withdrawMoney = function (amount, description, transactionOrigin) {
        var currentBalance = this.balance;
        this.accountType = 3;
        this.amount = amount;
        if (transactionOrigin == 1 || transactionOrigin == 2) {
            if (this.monthlyTransactions >= 1) {
                if (amount > currentBalance) {
                    this.success = false;
                    this.errorMessage = "Cannot withdrawal more than the available balance.";
                    this.transactionDate = moment().format("MMM Do YYYY");
                    this.description = description;
                }
                else {
                    if (this.userAge <= 65) {
                        this.earlyWithdrawal = (this.balance * .1);
                        this.balance -= this.earlyWithdrawal;
                        this.success = true;
                        this.errorMessage = "";
                        this.balance -= amount;
                        this.transactionDate = moment().format("MMM Do YYYY");
                        this.description = description;
                        this.monthlyTransactions--;
                        //  this.accountHistory
                    }
                    else {
                        this.success = true;
                        this.errorMessage = "";
                        this.balance -= amount;
                        this.transactionDate = moment().format("MMM Do YYYY");
                        this.description = description;
                        this.monthlyTransactions--;
                        //  this.accountHistory
                    }
                }
            }
            else {
                this.errorMessage = "Number of transactions exceeded federal monthly limit";
            }
        }
        else {
            if (amount > currentBalance) {
                this.success = false;
                this.errorMessage = "Cannot withdrawal more than the available balance.";
                this.description = description;
            }
            else {
                if (this.userAge <= 65) {
                    this.earlyWithdrawal = (this.balance * .1);
                    this.balance -= this.earlyWithdrawal;
                    this.success = true;
                    this.errorMessage = "";
                    this.balance -= amount;
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
            }
        }
        return this.description;
    };
    RetirementAccount.prototype.depositMoney = function (amount, description) {
        this.balance += amount;
        this.success = true;
        this.description = description;
        this.errorMessage = "";
        this.transactionDate = moment().format("MMM Do YYYY");
        return this.description;
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