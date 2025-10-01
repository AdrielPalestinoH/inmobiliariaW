import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface TipoUsuario {
  id: number;
  descripcion: string;
}

@Injectable({ providedIn: 'root' })
export class CatalogoUsuario {
  private apiUrl = 'http://localhost:8080/api/catalogo/tipos-usuario';

  constructor(private http: HttpClient) {}

  listarTipos(): Observable<TipoUsuario[]> {
    return this.http.get<TipoUsuario[]>(this.apiUrl);
  }
}
