import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Libro } from '../_models/libro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibrosRecomendadosService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getLibrosRecomendados(): Observable<Libro[]> {
    return this.http.get<Libro[]>(this.baseUrl + 'user');
  }

  postUserID(user: any) {
    return this.http.post(this.baseUrl + 'user', user);
  }
}
