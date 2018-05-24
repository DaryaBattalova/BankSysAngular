import { Component, OnInit, Input  } from '@angular/core';
import { DateTimeAdapter } from 'ng-pick-datetime';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { OrderTicketService } from '../../../services/bank/order-ticket.service';
import { BankIdAndDate } from '../../../models/bank/bankIdAndDate';
import { TicketInfo } from '../../../models/bank/TicketInfo';
import { Observable } from 'rxjs/Observable';
import { CurrencyExchange } from '../../../models/bank/CurrExchange';
import { CurrencyExchangeService } from '../../../services/bank/currency-exchange.service';
import { BankListComponent } from '../bank-list/bank-list.component';
import { DataService } from '../../../services/bank/data.service';

@Component({
  selector: 'app-order-ticket',
  templateUrl: './order-ticket.component.html',
  styleUrls: ['./order-ticket.component.css'],
})

export class OrderTicketComponent implements OnInit {
  message:string;

  public chosenBankId: number;
  public listOfFreeTimes: string[];
  public bankIdAndDate: BankIdAndDate = new BankIdAndDate();
  public times: string[];

  //currency exchange
  private curFrom: string;
  private curTo: string;
  private sumFrom: string;
  private result: number;
  constructor(private data: DataService, dateTimeAdapter: DateTimeAdapter<any>, private orderTicketService: OrderTicketService,
    private currencyExchangeService:CurrencyExchangeService)
   {
    dateTimeAdapter.setLocale('us-US');
  }

  ngOnInit() {

    this.data.currentMessage.subscribe(message => this.message = message);
    this.chosenBankId = Number(this.message);
  }

//currency exhange

onBaseSelectChange(value: string)
{
  this.curFrom = value;
  console.log(this.curFrom);
}

onGoalSelectChange(value: string)
{
  this.curTo = value;
  console.log(this.curTo);
}

onInitialCurrencyInputChange(value: string)
{
  this.sumFrom = value;
  console.log(this.sumFrom);
}

ExchangeCurrency(BankId: number, SumOfMoney: string, CurrencyFrom: string, CurrencyTo: string)
{
  this.currencyExchangeService.exchangeCurrency({ BankId, SumOfMoney, CurrencyFrom, CurrencyTo} as CurrencyExchange)
  .subscribe(result => {
    this.result = result;})
  ;
}

onExchangeClick()
  {
    this.ExchangeCurrency(this.chosenBankId , this.sumFrom, this.curFrom, this.curTo);
    console.log(this.result);
  }
  
}
