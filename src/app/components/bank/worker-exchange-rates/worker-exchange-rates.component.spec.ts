import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerExchangeRatesComponent } from './worker-exchange-rates.component';

describe('WorkerExchangeRatesComponent', () => {
  let component: WorkerExchangeRatesComponent;
  let fixture: ComponentFixture<WorkerExchangeRatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerExchangeRatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerExchangeRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
