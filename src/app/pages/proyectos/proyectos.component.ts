import { Component } from '@angular/core';
import { LayoutComponent } from "../../../../components/layout/layout.component";
import { AppRoute } from '../../types/AppRoute';
import { CarruselComponent } from '../../../../components/carrusel/carrusel.component';

@Component({
  selector: 'app-proyectos',
  imports: [LayoutComponent, CarruselComponent],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {
  readonly AppRoute = AppRoute
}
