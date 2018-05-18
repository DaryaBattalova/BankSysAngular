import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../authentication/auth.service';
import { environment } from '../../../environments/environment';
import { bankList } from '../../models/bank/bankList';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BankService {

  private bankListUrl = environment.apiUrl + '/api/v1/banks/';

  constructor(private http: HttpClient, private authService: AuthService) { }

  getBanks(): Observable<bankList[]> {
    return this.http.get<bankList[]>(this.bankListUrl + "bankList/", { headers: this.authService.getAuthHeader() });
  }

}
