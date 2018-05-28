import { Component, OnInit } from '@angular/core';
import { CurrencyExchangeService } from '../../../services/bank/currency-exchange.service';
import { exchangeRates } from '../../../models/bank/exchangeRates';
import { ExchangeRatesInfo } from '../../../models/bank/ExchangeRatesInfo';

@Component({
  selector: 'app-worker-exchange-rates',
  templateUrl: './worker-exchange-rates.component.html',
  styleUrls: ['./worker-exchange-rates.component.css']
})
export class WorkerExchangeRatesComponent implements OnInit {

  constructor(private currencyExchangeService: CurrencyExchangeService) { }

  rates: exchangeRates;
  ratesAreGot: Boolean;
  updateRatesClicked: Boolean;
  USDPurchase: string;
  USDSale: string;
  EURPurchase: string;
  EURSale: string;
  AllIsChosen: Boolean;
  rateIsCreated: Boolean;

  ngOnInit() {
    this.getExchangeRatesByBankId();
  }

  getExchangeRatesByBankId(): void
  {
    this.currencyExchangeService.getExchangeRatesByBankId()
    .subscribe(rates => { this.rates = rates, this.ratesAreGot = true;});
  }

  onUpdateRatesClick()
  {
    this.updateRatesClicked = true;
    console.log(this.USDPurchase);
  }

  onUSDPurchaseChange(value: string)
  {
    this.USDPurchase = value;
  }

  onUSDSaleChange(value: string)
  {
    this.USDSale = value;
  }

  onEURPurchaseChange(value: string)
  {
    this.EURPurchase = value;
  }

  onEURSaleChange(value: string)
  {
    this.EURSale = value;
    this.AllIsChosen = true;
  }

  getInfo()
  {
    console.log("submit");
    this.updateExchangeRates(this.USDPurchase, this.USDSale, this.EURPurchase, this.EURSale);  }

  updateExchangeRates(USDPurchase: string, USDSale: string, EURPurchase: string, EURSale: string )
  {
this.currencyExchangeService.updateExchangeRates({USDPurchase, USDSale, EURPurchase , EURSale} as ExchangeRatesInfo)
.subscribe(userNameAndSurName => {
  this.rateIsCreated = true;
});

  }

}
