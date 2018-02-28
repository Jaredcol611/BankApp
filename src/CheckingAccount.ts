import { Account } from "./Account";
import { Transaction } from "./Transaction";
import { AccountType } from "./AccountType";
import { TransactionOrigin} from "./TransactionOrigin";
import { displayClassName, displayClassNameWithPurpose } from "./Decorators";
import * as moment from 'moment';

@displayClassName
export class CheckingAccount implements Account {

    constructor() {
       // this.dateOpened = new Date();
    }

    balance: number = 1000;
    accountType: AccountType;
    accountHistory: Transaction[];
    success: boolean;
    amount: number;
    description: string;
    transactionDate: any;
    errorMessage: string;
   // dateOpened: Date;

    withdrawMoney(amount: number, description: string, transactionOrigin: TransactionOrigin): any {
        let currentBalance = this.balance;
        this.accountType = 1;
        this.amount = amount;
            if(transactionOrigin) {
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
                  //  this.accountHistory
                }
                return this.description;
            }
    }

    depositMoney(amount: number, description: string): any {
        this.balance += amount;
        this.success = true;
        this.description = description;
        this.errorMessage = "";
        this.transactionDate = moment().format("MMM Do YYYY");

        return this.description;
    }

    advanceDate(numberOfDays: number) {
       // this.dateOpened +=
        // balance * .01 / 12
    }

}