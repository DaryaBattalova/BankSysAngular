import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../authentication/auth.service';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { BankIdAndDate } from '../../models/bank/bankIdAndDate';
import { TicketInfo } from '../../models/bank/TicketInfo';
import { DateAndTime } from '../../models/bank/DateAndTime';
import { CurrencyExchangeTicket } from '../../models/bank/CurrencyExchangeTicket';

const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

@Injectable()
export class OrderTicketService {

  private ticketUrl = environment.apiUrl + '/api/v1/tickets/';
  constructor(private http: HttpClient, private authService: AuthService) { }

  getListOfFreeTime(bankIdAndDate: BankIdAndDate): Observable<string[]> {
    return this.http.post<string[]>(this.ticketUrl + "bankIdAndDate" , bankIdAndDate , { headers: this.authService.getAuthHeader() });
  }

  createTicket(ticketCreation: TicketInfo): Observable<any>  {
    return this.http.post<any>(this.ticketUrl + "ticketCreation", ticketCreation, { headers: this.authService.getAuthHeader() });
  }

  getUserNameAndSurname(): Observable<any>{
    return this.http.get<any>(this.ticketUrl + "getUserNameAndSurname", { headers: this.authService.getAuthHeader() });
  }

  getTicketsOfUser(): Observable<CurrencyExchangeTicket[]>{
    return this.http.get<CurrencyExchangeTicket[]>(this.ticketUrl + "getTicketsOfUser", { headers: this.authService.getAuthHeader() });
  }

  sendTicketEmail(dateAndTime: DateAndTime): Observable<any>{
    return this.http.post<any>(this.ticketUrl + "sendTicketEmail", dateAndTime, { headers: this.authService.getAuthHeader() });
  }
}
