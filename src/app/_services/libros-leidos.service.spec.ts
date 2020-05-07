/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LibrosLeidosService } from './libros-leidos.service';

describe('Service: LibrosLeidos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LibrosLeidosService]
    });
  });

  it('should ...', inject([LibrosLeidosService], (service: LibrosLeidosService) => {
    expect(service).toBeTruthy();
  }));
});
