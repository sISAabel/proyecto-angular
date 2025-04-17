import { Component } from '@angular/core';
import { AppRoute } from '../../types/AppRoute';
import { LayoutComponent } from '../../../../components/layout/layout.component';

@Component({
  selector: 'app-experiencia',
  imports: [LayoutComponent],
  templateUrl: './experiencia.component.html',
  styleUrl: './experiencia.component.css'
})
export class ExperienciaComponent {
  readonly AppRoute = AppRoute
}
