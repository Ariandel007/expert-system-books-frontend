import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Libro } from '../_models/libro';


@Injectable({
  providedIn: 'root'
})
export class LibrosLeidosService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getLibrosLeidos(): Observable<Libro[]> {
    return this.http.get<Libro[]>(this.baseUrl + 'libros');
  }

  postUserID(user: any) {
    return this.http.post(this.baseUrl + 'libros', user);
  }
}
