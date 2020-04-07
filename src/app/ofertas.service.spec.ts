import { TestBed, inject } from '@angular/core/testing';

import { OfertasService } from './ofertas.service';

describe('OfertasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OfertasService]
    });
  });

  it('should be created', inject([OfertasService], (service: OfertasService) => {
    expect(service).toBeTruthy();
  }));
});
