import { Account } from "./Account";
import { Transaction } from "./Transaction";
import { AccountType } from "./AccountType";
import { TransactionOrigin} from "./TransactionOrigin";
import { displayClassName, displayClassNameWithPurpose } from "./Decorators";
import * as moment from 'moment';

@displayClassName
export class SavingsAccount implements Account {

    constructor(){
      // this.dateOpened = new Date();
    }
    balance: number = 10000;
    accountType: AccountType;
    accountHistory: Transaction[];
    success: boolean;
    amount: number;
    description: string;
    transactionDate: any;
    errorMessage: string;
   // dateOpened: Date;
    monthlyTransactions: number = 6;

    withdrawMoney(amount: number, description: string, transactionOrigin: TransactionOrigin): any {

        let currentBalance = this.balance;
        this.accountType = 2;
        this.amount = amount;
            if(transactionOrigin == 1 || transactionOrigin == 2){
                if(this.monthlyTransactions >= 1){

                    if(amount > currentBalance){
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
                        this.monthlyTransactions--;
                        //  this.accountHistory
                    }
                }
                else{
                    this.errorMessage = "Number of transactions exceeded federal monthly limit";
                }
            }
            else{
                if(amount > currentBalance){
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
            }
            return this.description;
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
        // balance * .02 / 12
        //monthlyTransaction reset to 6
    }

}