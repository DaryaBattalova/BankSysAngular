import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../authentication/auth.service';
import { Observable } from 'rxjs/Observable';
import { exchangeRates } from '../../models/bank/exchangeRates';
import { CurrencyExchange } from '../../models/bank/CurrExchange';
import { ExchangeRatesInfo } from '../../models/bank/ExchangeRatesInfo';


@Injectable()
export class CurrencyExchangeService {

  private exchangeRatesUrl = environment.apiUrl + '/api/v1/exchangeRates/';

  constructor(private http: HttpClient, private authService: AuthService) { }

  getExhangeRates(): Observable<exchangeRates> {
    return this.http.get<exchangeRates>(this.exchangeRatesUrl + "exchangeRates", { headers: this.authService.getAuthHeader() });
  }

  getExchangeRatesByBankId(): Observable<exchangeRates> {
    return this.http.get<exchangeRates>(this.exchangeRatesUrl + "getExchangeRatesByBankId", { headers: this.authService.getAuthHeader() });
  }
  

  exchangeCurrency(currencyExchange: CurrencyExchange): Observable<any>  {
    return this.http.post<any>(this.exchangeRatesUrl + "exchangeCurrency", currencyExchange, { headers: this.authService.getAuthHeader() });
  }

  updateExchangeRates(exchangeRates: ExchangeRatesInfo): Observable<any>  {
    return this.http.post<any>(this.exchangeRatesUrl + "createExchangeRates", exchangeRates, { headers: this.authService.getAuthHeader() });
  }

}
