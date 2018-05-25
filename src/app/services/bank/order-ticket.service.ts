import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../authentication/auth.service';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { BankIdAndDate } from '../../models/bank/bankIdAndDate';
import { TicketInfo } from '../../models/bank/TicketInfo';
import { DateAndTime } from '../../models/bank/DateAndTime';

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

  getUserNameAndSurname(dateAndTime: DateAndTime): Observable<any>{
    return this.http.post<any>(this.ticketUrl + "getUserNameAndSurname", dateAndTime, { headers: this.authService.getAuthHeader() });
  }
}
