import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor,CurrencyPipe  } from '@angular/common';
import { InmuebleService, Inmueble } from '../../services/inmueble';
import { RouterLink, RouterLinkActive } from '@angular/router'; // 👈 importa esto

@Component({
  selector: 'app-propiedades',
  standalone: true,
    imports: [CommonModule, NgFor, CurrencyPipe, RouterLink, RouterLinkActive], // 👈 agrégalo aquí

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
