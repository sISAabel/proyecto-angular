import { Component, Input, input } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AppRoute } from '../../src/app/types/AppRoute';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [HeaderComponent, RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  @Input() src: string = ''
  @Input() ruta: AppRoute = AppRoute.experiencia
}
