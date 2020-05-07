/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LibrosRecomendadosService } from './libros-recomendados.service';

describe('Service: LibrosRecomendados', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LibrosRecomendadosService]
    });
  });

  it('should ...', inject([LibrosRecomendadosService], (service: LibrosRecomendadosService) => {
    expect(service).toBeTruthy();
  }));
});
