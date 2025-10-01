import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { InmuebleService, Inmueble } from '../../services/inmueble';

@Component({
  selector: 'app-propiedades',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './propiedades.html',
  styleUrls: ['./propiedades.scss']
})
export class Propiedades implements OnInit {
  inmuebles: Inmueble[] = [];

  constructor(private inmuebleService: InmuebleService) {}

  ngOnInit() {
    this.inmuebleService.listarInmuebles().subscribe({
      next: (data) => this.inmuebles = data,
      error: (err) => console.error('Error al cargar propiedades', err)
    });
  }
}
