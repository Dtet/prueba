import { TestBed } from '@angular/core/testing';

import { FacultativoService } from './facultativo.service';

describe('FacultativoService', () => {
  let service: FacultativoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacultativoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
