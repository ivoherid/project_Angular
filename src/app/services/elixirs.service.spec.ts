import { TestBed } from '@angular/core/testing';

import { ElixirsService } from './elixirs.service';

describe('ElixirsService', () => {
  let service: ElixirsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElixirsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
