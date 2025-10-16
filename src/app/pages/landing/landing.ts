import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // 👈 importa RouterLink


@Component({
  selector: 'app-landing',
  imports: [RouterLink],
  templateUrl: './landing.html',
  styleUrl: './landing.scss'
})
export class Landing {

}
