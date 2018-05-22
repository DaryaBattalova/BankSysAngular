import { Component, OnInit } from '@angular/core';
import { DateTimeAdapter } from 'ng-pick-datetime';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { OrderTicketService } from '../../../services/bank/order-ticket.service';
import { BankIdAndDate } from '../../../models/bank/bankIdAndDate';
import { TicketInfo } from '../../../models/bank/TicketInfo';
import { Observable } from 'rxjs/Observable';
import { CurrencyExchange } from '../../../models/bank/CurrExchange';
import { CurrencyExchangeService } from '../../../services/bank/currency-exchange.service';

@Component({
  selector: 'app-order-ticket',
  templateUrl: './order-ticket.component.html',
  styleUrls: ['./order-ticket.component.css']
})

export class OrderTicketComponent implements OnInit {

  public date: string;
  public bankId: number;
  public listOfFreeTimes: string[];
  public bankIdAndDate: BankIdAndDate = new BankIdAndDate();
  public times: string[];
  public dateIsChosen: Boolean;
  public chosenTime: any;
  public chosenDate: Date;
  public flag: string;
  public cellHasColor: Boolean;
  public curDate: string;

  //currency exchange
  private curFrom: string;
  private curTo: string;
  private sumFrom: string;
  private result: number;
  constructor(dateTimeAdapter: DateTimeAdapter<any>, private orderTicketService: OrderTicketService,
    private currencyExchangeService:CurrencyExchangeService)
   {
    dateTimeAdapter.setLocale('us-US');
  }

  ngOnInit() {
    this.bankId = 1;
    this.dateIsChosen = false;
    this.cellHasColor = false;
    this.chosenTime = "00:00";
  }

  getTicket() {
    this.createTicket(1, this.chosenDate, this.chosenTime);
  }

  onDateChanged(choosedDate: Date) {
    this.chosenDate = choosedDate;
    this.getListOfFreeTimeByDay(this.bankId , this.chosenDate);
  }

  onCellClick(event:any)
  {
    console.log(event);
    this.chosenTime = event.target.innerHTML;
    this.cellHasColor = true;
    this.curDate = this.getChoosenDate();
  }

   getListOfFreeTimeByDay( bankId: number, date: Date): void
  {
     this.orderTicketService.getListOfFreeTime({ bankId, date } as BankIdAndDate)
    .subscribe(listOfFreeTimes => {
      console.log(listOfFreeTimes)
      this.listOfFreeTimes = listOfFreeTimes;
      this.dateIsChosen = true;
    });
  }

  createTicket(bankId: number, date: Date, time: string)
  {
      console.log("forTicket: " + bankId + " " + date + " " + time );
      this.orderTicketService.createTicket({ bankId, date, time } as TicketInfo)
      .subscribe(flag => { console.log('ts')});
  }

  getChoosenDate()
  {
    return this.chosenDate.getDate() +  "." + (this.chosenDate.getMonth() + 1)  + "."  + this.chosenDate.getFullYear();
  }

buildArr(theArr: String[]): String[][]{

    var arrOfarr = [];
    for(var i = 0; i < theArr.length ; i+=4) {
        var row = [];

        for(var x = 0; x < 4; x++) {
          var value = theArr[i + x];
            if (!value) {
                break;
            }
            row.push(value);
        }
        arrOfarr.push(row);
    }
     return arrOfarr;
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
    this.ExchangeCurrency(this.bankId , this.sumFrom, this.curFrom, this.curTo);
    console.log(this.result);
  }
  
}
