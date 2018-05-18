import { TestBed, inject } from '@angular/core/testing';

import { BankWorkerService } from './bank-worker.service';

describe('BankWorkerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BankWorkerService]
    });
  });

  it('should be created', inject([BankWorkerService], (service: BankWorkerService) => {
    expect(service).toBeTruthy();
  }));
});
