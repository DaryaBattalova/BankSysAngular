import { Injectable } from '@angular/core';
import { AuthService } from '../authentication/auth.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class BankWorkerService {

  private bankWorkerUrl = environment.apiUrl + '/api/v1/bankWorker/';

  constructor(private authService: AuthService) { }

}
