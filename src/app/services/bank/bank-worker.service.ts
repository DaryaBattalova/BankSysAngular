import { Injectable } from '@angular/core';
import { AuthService } from '../authentication/auth.service';
import { environment } from '../../../environments/environment';
import { CurrencyExchangeTicket } from '../../models/bank/CurrencyExchangeTicket';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BankWorkerService {

  private bankWorkerUrl = environment.apiUrl + '/api/v1/bankWorker/';

  constructor(private http: HttpClient, private authService: AuthService) { }

  getTicketsForWorker(): Observable<string[]>{
    return this.http.get<string[]>(this.bankWorkerUrl + "getTicketsForCurrentBankWorker", { headers: this.authService.getAuthHeader() });
  }
  
}
