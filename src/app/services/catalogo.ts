import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface EstadoInmueble {
  id: number;
  descripcion: string;
}

export interface TipoInmueble {
  id: number;
  descripcion: string;
}

@Injectable({
  providedIn: 'root'
})
export class Catalogo {
  private apiUrl = 'http://localhost:8080/api/catalogo';

  constructor(private http: HttpClient) {}

  getEstados(): Observable<EstadoInmueble[]> {
    return this.http.get<EstadoInmueble[]>(`${this.apiUrl}/estados`);
  }

  getTipos(): Observable<TipoInmueble[]> {
    return this.http.get<TipoInmueble[]>(`${this.apiUrl}/tipos`);
  }
}
