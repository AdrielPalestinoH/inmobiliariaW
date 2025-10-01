import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Inmueble {
  id: number;
  precio: number;
  descripcion: string;
  fechaAlta: string;
  estadoDescripcion: string;
  tipoDescripcion: string;
}

@Injectable({
  providedIn: 'root'
})
export class InmuebleService {
  private apiUrl = 'http://localhost:8080/api/inmuebles';

  constructor(private http: HttpClient) {}

  listarInmuebles(): Observable<Inmueble[]> {
    return this.http.get<Inmueble[]>(this.apiUrl);
  }

  crearInmueble(inmueble: Partial<Inmueble>, estadoId: number, tipoId: number): Observable<Inmueble> {
    return this.http.post<Inmueble>(
      `${this.apiUrl}?estadoId=${estadoId}&tipoId=${tipoId}`, inmueble
    );
  }
}
