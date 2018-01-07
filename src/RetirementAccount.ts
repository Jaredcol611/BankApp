import { Account } from "./Account";
import { Transaction } from "./Transaction";
import { AccountType } from "./AccountType";
import { TransactionOrigin} from "./TransactionOrigin";
import { displayClassName, displayClassNameWithPurpose } from "./Decorators";

@displayClassName
export class RetirementAccount implements Account, Transaction {

    constructor() {
        this.dateOpened = new Date();
    }
    accountHolderName: string;
    accountHolderBirthDate: Date;
    balance: number = 100000;
    accountType: AccountType;
    accountHistory: Transaction[];
    success: boolean;
    resultBalance: number;
    amount: number;
    description: string;
    transactionDate: Date;
    errorMessage: string;
    dateOpened: Date;
    monthlyTransactions: number = 6;
    TransactionOrigin: TransactionOrigin;

    withdrawMoney(amount: number, description: string, transactionOrigin: TransactionOrigin): Transaction {

        this.TransactionOrigin = 3;
        let currentBalance = this.balance;
        this.accountType = 3;
            if(this.TransactionOrigin == 1 || 2){
                if(this.monthlyTransactions >= 1){
                        this.amount = amount;
                    if(amount > currentBalance){
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
                else{
                    this.errorMessage = "Too many transactions this month";
                }
            }
            else{
                this.amount = amount;
                if(amount > currentBalance){
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
    }

    depositMoney(amount: number, description: string): Transaction {
        this.balance += amount;
        this.resultBalance = this.balance;
        this.success = true;
        this.description = description;
        this.errorMessage = "";
        this.transactionDate = new Date();

        return;
    }

    advanceDate(numberOfDays: number) {
        // balance * .03 / 12
        //monthlyTransactions reset to 6
    }

}