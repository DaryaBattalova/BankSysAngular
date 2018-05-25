import { Component, OnInit } from '@angular/core';
import { BankIdAndDate } from '../../../models/bank/bankIdAndDate';
import { OrderTicketService } from '../../../services/bank/order-ticket.service';
import { TicketInfo } from '../../../models/bank/TicketInfo';
import { DataService } from '../../../services/bank/data.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
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
  public userNameAndSurName: string[];
  public name: string;
  public d: string;

  constructor(private data: DataService, private orderTicketService: OrderTicketService) { }

  message: string;

  ngOnInit() {
    this.dateIsChosen = false;
    this.cellHasColor = false;
    this.chosenTime = "00:00";
    this.data.currentMessage.subscribe(message => this.message = message);
    this.bankId = Number(this.message);
  } 

  getTicket() {
    this.createTicket(this.bankId, this.chosenDate, this.chosenTime);
  }

  onDateChanged(choosedDate: Date) {
    if(choosedDate >= new Date(new Date().getFullYear(),new Date().getMonth(), new Date().getDate()))
    {
      this.chosenDate = choosedDate;
      this.data.changeDate(this.chosenDate);
      this.getListOfFreeTimeByDay(this.bankId , this.chosenDate);
    }
    else{
      alert("date should be greater than today")
    }

  }

  onCellClick(event:any)
  {
    console.log(event);
    this.chosenTime = event.target.innerHTML;
    this.cellHasColor = true;
    this.data.changeTime(this.chosenTime);
    this.curDate = this.getChoosenDate();
  }

   getListOfFreeTimeByDay(bankId: number, date: Date): void
  {
    //this.d = this.getChoosenDate();
    this.orderTicketService.getListOfFreeTime({ bankId, date } as BankIdAndDate)
    .subscribe(listOfFreeTimes => {
      this.listOfFreeTimes = listOfFreeTimes;
      this.dateIsChosen = true;
    });
  }

  createTicket(bankId: number, date: Date, time: string)
  {
     // console.log("forTicket: " + bankId + " " + date + " " + time );
      this.orderTicketService.createTicket({ bankId, date, time } as TicketInfo)
      .subscribe(userNameAndSurName => {
        this.userNameAndSurName = userNameAndSurName;
     //   this.name = this.userNameAndSurName[0];
        console.log("name: " + this.name);
        this.data.changeName(this.userNameAndSurName[0]);

      });

     // console.log("name1: " + this.userNameAndSurName[0]);
     // this.data.changeSurname(this.userNameAndSurName[1]);
  }

  getChoosenDate()
  {
    return this.chosenDate.getDate() +  "." + (this.chosenDate.getMonth() + 1)  + "."  + this.chosenDate.getFullYear();
  }

}
