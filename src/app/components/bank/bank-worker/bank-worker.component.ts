import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/authentication/auth.service';
import { Router } from '@angular/router';
import { BankWorkerService } from '../../../services/bank/bank-worker.service';
import { CurrencyExchangeTicket } from '../../../models/bank/CurrencyExchangeTicket';

@Component({
  selector: 'app-bank-worker',
  templateUrl: './bank-worker.component.html',
  styleUrls: ['./bank-worker.component.css']
})
export class BankWorkerComponent implements OnInit {

  ticketsOfUser: string[];

  constructor(private bankWorkerService: BankWorkerService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if (!this.authService.checkAccess(BankWorkerComponent.name)) {
      this.router.navigate(['denied']);
    }
    this.getTicketsOfUser();
  }

  getTicketsOfUser()
  {
    this.bankWorkerService.getTicketsForWorker()
    .subscribe(userNameAndSurname => {
      this.ticketsOfUser = userNameAndSurname;
    });
  }
}
