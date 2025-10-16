import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InmuebleService } from '../../services/inmueble';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-detalle-propiedad',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './detalle-propiedad.html'
})
export class DetallePropiedad implements OnInit {
  inmueble: any;
  contacto = { nombre: '', email: '', telefono: '', mensaje: '' };

  constructor(private route: ActivatedRoute, private inmuebleService: InmuebleService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.inmuebleService.obtenerInmueble(id).subscribe({
      next: (data) => (this.inmueble = data),
      error: (err) => console.error('Error al cargar inmueble', err)
    });
  }

  enviarContacto() {
    if (!this.inmueble?.id) return;

    this.inmuebleService.enviarContacto(this.inmueble.id, this.contacto).subscribe({
      next: () => {
        alert('Mensaje enviado correctamente ✅');
        this.contacto = { nombre: '', email: '', telefono: '', mensaje: '' };
      },
      error: (err) => console.error('Error al enviar mensaje', err)
    });
  }
}
