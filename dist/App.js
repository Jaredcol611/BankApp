"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RetirementAccount_1 = require("./RetirementAccount");
var SavingsAccount_1 = require("./SavingsAccount");
var CheckingAccount_1 = require("./CheckingAccount");
var checking = new CheckingAccount_1.CheckingAccount();
var savings = new SavingsAccount_1.SavingsAccount();
var retirement = new RetirementAccount_1.RetirementAccount();
//calculate interesting using Math()
//checking account tests
// console.log(checking.withdrawMoney(1100, "bills", 1));
// console.log(checking.success);
// console.log(checking.errorMessage);
// console.log(checking.transactionDate);
// console.log(checking.balance);
// console.log(checking.description);
// console.log(checking.withdrawMoney(100, "food", 1));
// console.log(checking.success);
// console.log(checking.errorMessage);
// console.log(checking.transactionDate);
// console.log(checking.balance);
// console.log(checking.description);
// console.log(checking.depositMoney(990, "paycheck"));
// console.log(checking.success);
// console.log(checking.errorMessage);
// console.log(checking.transactionDate);
// console.log(checking.balance);
// console.log(checking.description);
//savings account tests
// console.log(savings.withdrawMoney(10001, "Car crash", 2));
// console.log(savings.success);
// console.log(savings.errorMessage);
// console.log(savings.transactionDate);
// console.log(savings.balance);
// console.log(savings.description);
//console.log(savings.monthlyTransactions);
// console.log(savings.withdrawMoney(500, "Car crash", 2));
// console.log(savings.success);
// console.log(savings.errorMessage);
// console.log(savings.transactionDate);
// console.log(savings.balance);
// console.log(savings.description);
// console.log(savings.monthlyTransactions);
// console.log(savings.monthlyTransactions);
// console.log(savings.withdrawMoney(500, "Broken bone", 2));
// console.log(savings.success);
// console.log(savings.errorMessage);
// console.log(savings.transactionDate);
// console.log(savings.balance);
// console.log(savings.description);
// console.log(savings.monthlyTransactions);
//retirement account tests
// console.log(retirement.monthlyTransactions);
// console.log(retirement.withdrawMoney(10000, "kicks", 3));
// console.log(retirement.earlyWithdrawal);
// console.log(retirement.success);
// console.log(retirement.errorMessage);
// console.log(retirement.transactionDate);
// console.log(retirement.balance);
// console.log(retirement.description);
// console.log(retirement.monthlyTransactions);
// console.log(retirement.balance);
// console.log(retirement.withdrawMoney(500, 'Withdraw from retirement before the age of 65', 2));
// console.log(retirement.success);
// console.log(retirement.earlyWithdrawal);
// console.log(retirement.balance);
// console.log(retirement.monthlyTransactions);
// console.log(retirement.transactionDate);
// console.log(checking.advanceDate(234));
// console.log(savings.advanceDate(234));
console.log(retirement.advanceDate(37));
console.log(checking.advanceDate(38));
console.log(savings.advanceDate(38));
// console.log(retirement.balance);
// console.log(retirement.depositMoney(10000, "mulah"));
// console.log(retirement.balance);
// console.log(retirement.transactionDate);
// console.log(retirement.balance);
//# sourceMappingURL=App.js.map