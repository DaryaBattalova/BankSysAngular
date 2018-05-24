import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private messageSource = new BehaviorSubject<string>("default message");
  currentMessage = this.messageSource.asObservable();

  private dateChosenByUser = new BehaviorSubject<string>("default message");
  currentDateChosenByUser = this.dateChosenByUser.asObservable();

  private timeChosenByUser = new BehaviorSubject<string>("default message");
  currentTimeChosenByUser = this.timeChosenByUser.asObservable();
  
  constructor() { }
  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  changeDate(message: string)
  {
    this.dateChosenByUser.next(message);
  }

  changeTime(message: string)
  {
    this.timeChosenByUser.next(message);
  }

}
