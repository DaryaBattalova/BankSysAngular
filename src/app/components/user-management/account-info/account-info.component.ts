import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/authentication/auth.service';
import { IUser } from '../../../models/user/user';
import { OrderTicketService } from '../../../services/bank/order-ticket.service';
import { CurrencyExchangeTicket } from '../../../models/bank/CurrencyExchangeTicket';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {

  currentUser: IUser;
  ticketsOfUser: CurrencyExchangeTicket[];

  constructor(private orderTicketService: OrderTicketService, private authService: AuthService) { }

  ngOnInit() {
    this.currentUser = this.authService.currentUser;
    this.getTicketsOfUser();
  }

  getTicketsOfUser()
  {
    this.orderTicketService.getTicketsOfUser()
    .subscribe(userNameAndSurname => {
      this.ticketsOfUser = userNameAndSurname;
    });
  }

  getTickets()
  {
    console.log(this.ticketsOfUser);
  }
}
