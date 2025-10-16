import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MisPagosService {
  private apiUrl = 'http://localhost:8080/api';

   constructor(private http: HttpClient) {}

  listarCreditos(usuarioId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/creditos/usuario/${usuarioId}`);
  }

  listarPagos(creditoId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/pagos/${creditoId}`);
  }

  // (Opcional para PayPal)
iniciarPagoPaypal(detalleId: number): Observable<any> {
  return this.http.post<any>(`http://localhost:8080/api/pagos/paypal/${detalleId}`, {});
}
}
