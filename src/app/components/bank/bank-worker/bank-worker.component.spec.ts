import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankWorkerComponent } from './bank-worker.component';

describe('BankWorkerComponent', () => {
  let component: BankWorkerComponent;
  let fixture: ComponentFixture<BankWorkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankWorkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
