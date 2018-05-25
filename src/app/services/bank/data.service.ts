import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private messageSource = new BehaviorSubject<string>("default message");
  currentMessage = this.messageSource.asObservable();

  private dateChosenByUser = new BehaviorSubject<Date>(new Date);
  currentDateChosenByUser = this.dateChosenByUser.asObservable();

  private timeChosenByUser = new BehaviorSubject<string>("default message");
  currentTimeChosenByUser = this.timeChosenByUser.asObservable();

  private userName = new BehaviorSubject<string>("user name");
  currentUserName = this.userName.asObservable();

  private userSurame = new BehaviorSubject<string>("user surname");
  currentUserSurname = this.userSurame.asObservable();
  
  constructor() { }
  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  changeDate(message: Date)
  {
    this.dateChosenByUser.next(message);
  }

  changeTime(message: string)
  {
    this.timeChosenByUser.next(message);
  }

  changeName(message: string)
  {
    this.userName.next(message);
  }

  changeSurname(message: string)
  {
    this.userSurame.next(message);
  }

}
