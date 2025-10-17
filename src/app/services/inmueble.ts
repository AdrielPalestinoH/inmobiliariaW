import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Inmueble {
  id?: number;
  descripcion?: string;
  precio?: number;
  fechaAlta?: string;
  estadoDescripcion?: string;
  tipoDescripcion?: string;

  // para crear/editar
  tipoId?: number;
  estadoId?: number;
}

@Injectable({ providedIn: 'root' })
export class InmuebleService {
  private apiUrl = 'https://inmoapi-adagc9dgfjgnfuar.westus-01.azurewebsites.net/api/inmuebles';

  constructor(private http: HttpClient) {}

  listarInmuebles(): Observable<Inmueble[]> {
    return this.http.get<Inmueble[]>(this.apiUrl);
  }

  crearInmueble(inmueble: Inmueble): Observable<Inmueble> {
    return this.http.post<Inmueble>(this.apiUrl, inmueble);
  }

  actualizar(id: number, inmueble: Inmueble): Observable<Inmueble> {
    return this.http.put<Inmueble>(`${this.apiUrl}/${id}`, inmueble);
  }

  obtenerInmueble(id: number) {
    return this.http.get<Inmueble>(`https://inmoapi-adagc9dgfjgnfuar.westus-01.azurewebsites.net/api/inmuebles/${id}`);
  }

  enviarContacto(inmuebleId: number, data: any) {
    return this.http.post(`https://inmoapi-adagc9dgfjgnfuar.westus-01.azurewebsites.net/api/inmuebles/${inmuebleId}/contacto`, data);
  }
}
