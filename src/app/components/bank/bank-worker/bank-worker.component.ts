import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/authentication/auth.service';
import { Router } from '@angular/router';
import { BankWorkerService } from '../../../services/bank/bank-worker.service';

@Component({
  selector: 'app-bank-worker',
  templateUrl: './bank-worker.component.html',
  styleUrls: ['./bank-worker.component.css']
})
export class BankWorkerComponent implements OnInit {

  constructor(private bankService: BankWorkerService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if (!this.authService.checkAccess(BankWorkerComponent.name)) {
      this.router.navigate(['denied']);
    }
  }

}
