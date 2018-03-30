import { Account } from "./Account";
import { Transaction } from "./Transaction";
import { AccountType } from "./AccountType";
import { TransactionOrigin} from "./TransactionOrigin";
import { displayClassName, displayClassNameWithPurpose } from "./Decorators";
import * as moment from 'moment';

@displayClassName
export class SavingsAccount implements Account {

    constructor(){
        this.dateOpened = moment('2015-06-19');
    }
    balance: number = 10000;
    accountType: AccountType;
    accountHistory: Transaction[];
    success: boolean;
    amount: number;
    description: string;
    transactionDate: any;
    errorMessage: string;
    monthlyTransactions: number = 6;
    dateOpened: any;
    accountHolderBirthDate: Date;

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
        let countingDate = this.dateOpened;
        console.log(countingDate);
        let i = 0;
        while (i < numberOfDays) {
            countingDate.add(1, 'days');
            console.log(countingDate);
            i++;
            // console.log(countingDate.date());
            if (countingDate.date() === 1) {
                console.log('New monthly interest added');
                let interest = (this.balance * 0.02) / 12;
                console.log(interest);
                this.balance += interest;
                console.log(this.balance);
            }
        }
        return this.balance;
    }
}