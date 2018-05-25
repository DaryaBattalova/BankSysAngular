import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/bank/data.service';
import { OrderTicketService } from '../../../services/bank/order-ticket.service';
import { DateAndTime } from '../../../models/bank/DateAndTime';

@Component({
  selector: 'app-ticket-view',
  templateUrl: './ticket-view.component.html',
  styleUrls: ['./ticket-view.component.css']
})
export class TicketViewComponent implements OnInit {

  date:Date;
  d: string;
  time: string;
  userName: string;
  userSurname: string;
  userNameAndSurname: string[];

  constructor(private data: DataService, private orderTicketService: OrderTicketService) { }

  ngOnInit() {
    this.data.currentDateChosenByUser.subscribe(date => this.date = date);
    this.data.currentTimeChosenByUser.subscribe(time => this.time = time);
    this.d = "27.05.2018";

  //  this.data.currentUserName.subscribe(userName => this.userName = userName);
   // this.data.currentUserSurname.subscribe(userSurname => this.userSurname = userSurname);
  }

  newMessage()
  {
    this.getUserNameAndSurname(this.date, this.time);
    console.log(this.userNameAndSurname);
  }

  getUserNameAndSurname(date: Date, time: string)
  {
    this.orderTicketService.getUserNameAndSurname({date, time } as DateAndTime)
    .subscribe(userNameAndSurname => {
      this.userNameAndSurname = userNameAndSurname;
    });
  }

  Name()
  {
    console.log(this.userNameAndSurname);
  }

}
