import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [NgFor,CurrencyPipe],
  templateUrl: './catalogo.html',
  styleUrls: ['./catalogo.scss']
})
export class Catalogo {
  inmuebles = [
    {
      titulo: 'Casa en Playas de Tijuana',
      descripcion: 'Bonita casa con vista al mar y amplio jardín.',
      precio: 120000,
      imagen: 'https://picsum.photos/400/200?random=1'
    },
    {
      titulo: 'Casa en Cacho Tijuana',
      descripcion: 'Ubicación céntrica con acceso rápido a vialidades.',
      precio: 150000,
      imagen: 'https://picsum.photos/400/200?random=2'
    },
    {
      titulo: 'Casa en Otay Tijuana',
      descripcion: 'Moderna, espaciosa y lista para habitar.',
      precio: 180000,
      imagen: 'https://picsum.photos/400/200?random=3'
    }
  ];
}
