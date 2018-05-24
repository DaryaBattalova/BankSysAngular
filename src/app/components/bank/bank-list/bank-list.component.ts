import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/authentication/auth.service';
import { BankService } from '../../../services/bank/bank.service';
import { bankList } from '../../../models/bank/bankList';
import { Router } from '@angular/router';
import { CurrencyExchangeService } from '../../../services/bank/currency-exchange.service';
import { exchangeRates } from '../../../models/bank/exchangeRates';
import { DataService } from '../../../services/bank/data.service';;

@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.css']
})
export class BankListComponent implements OnInit {
  message:string;

  banks: bankList[];
  bank: bankList;
  rates: exchangeRates;
  public bankId: number;

  constructor(private data: DataService, private bankService: BankService, private currencyExchangeService: CurrencyExchangeService,  private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if (!this.authService.checkAccess(BankListComponent.name)) {
      this.router.navigate(['denied']);
    }
    this.getBanks();
    this.bankId = 1;
    this.getExchangeRates();

    this.data.currentMessage.subscribe(message => this.message = message);
  }

  newMessage() {
    this.data.changeMessage(this.bankId.toString());
  }

  getBanks(): void {
    this.bankService.getBanks()
    .subscribe(banks => this.banks = banks);
  }

  getExchangeRates(): void
  {
    this.currencyExchangeService.getExhangeRates()
    .subscribe(rates => { console.log(rates) , this.rates = rates});
  }

  getChosenBankId(value:any)
  {
    this.bankId = value;
    this.data.changeMessage(this.bankId.toString());
  }
}
