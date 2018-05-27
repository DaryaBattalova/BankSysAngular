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
  shortDate: string;
  time: string;
  userName: string;
  userSurname: string;
  userNameAndSurname: string[];
  nameIsGot: Boolean;
  ticketIsSent: Boolean;

  constructor(private data: DataService, private orderTicketService: OrderTicketService) { }

  ngOnInit() {
    this.data.currentDateChosenByUser.subscribe(date => this.date = date);
    this.data.currentTimeChosenByUser.subscribe(time => this.time = time);
    this.shortDate = this.getChoosenDate();
    this.nameIsGot = false;
    this.getUserNameAndSurname();
    this.ticketIsSent = false;
    this.sendTicketEmail();
  }


  getUserNameAndSurname()
  {
    this.orderTicketService.getUserNameAndSurname()
    .subscribe(userNameAndSurname => {
      this.userNameAndSurname = userNameAndSurname;
      this.nameIsGot = true;
    });
  }

  getChoosenDate()
  {
    return this.date.getDate() +  "." + this.date.getMonth()  + "."  + this.date.getFullYear();
  }

  sendTicketEmail()
  {
    this.orderTicketService.sendTicketEmail().subscribe(ticketIsSent => {
      this.ticketIsSent  = true;
    });
  }
}
