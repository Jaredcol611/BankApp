import {TransactionOrigin} from "./TransactionOrigin";
import {AccountType} from "./AccountType";
import {Account} from "./Account";
import {Transaction} from "./Transaction";
import {RetirementAccount} from "./RetirementAccount";
import {SavingsAccount} from "./SavingsAccount";
import {CheckingAccount} from "./CheckingAccount";


let checking = new CheckingAccount();

let savings = new SavingsAccount();

let retirement = new RetirementAccount();

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

    console.log(savings.monthlyTransactions);
    console.log(savings.withdrawMoney(500, "Car crash", 3));
    console.log(savings.success);
    console.log(savings.errorMessage);
    console.log(savings.transactionDate);
    console.log(savings.balance);
    console.log(savings.description);
    console.log(savings.monthlyTransactions);





