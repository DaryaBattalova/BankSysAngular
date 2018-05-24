import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/bank/data.service';

@Component({
  selector: 'app-ticket-view',
  templateUrl: './ticket-view.component.html',
  styleUrls: ['./ticket-view.component.css']
})
export class TicketViewComponent implements OnInit {

  date:string;
  time: string;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentDateChosenByUser.subscribe(date => this.date = date);
    this.data.currentTimeChosenByUser.subscribe(time => this.time = time);
  }

}
