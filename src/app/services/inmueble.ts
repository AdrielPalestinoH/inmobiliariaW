import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Inmueble {
  id: number;
  titulo: string;      // si tu entidad tiene "descripcion", cámbialo aquí
  descripcion: string;
  precio: number;
  imagen?: string;     // campo extra opcional para mostrar fotos
}

@Injectable({
  providedIn: 'root'
})
export class InmuebleService {
  private apiUrl = 'http://localhost:8080/api/inmuebles';

  constructor(private http: HttpClient) {}

  getInmuebles(): Observable<Inmueble[]> {
    return this.http.get<Inmueble[]>(this.apiUrl);
  }
}
