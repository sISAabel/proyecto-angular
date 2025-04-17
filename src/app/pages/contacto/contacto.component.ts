import { Component } from '@angular/core';
import { LayoutComponent } from '../../../../components/layout/layout.component';
import { AppRoute } from '../../types/AppRoute';

@Component({
  selector: 'app-contacto',
  imports: [LayoutComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  readonly AppRoute = AppRoute
}
