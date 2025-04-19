import { Component, Input, input } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AppRoute } from '../../src/app/types/AppRoute';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  imports: [HeaderComponent, RouterModule, CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  @Input() src: string = ''
  @Input() alt: string = ''
  @Input() imageWidth: number = 20
  @Input() mostrarBoton: boolean = true
  @Input() ruta: AppRoute = AppRoute.experiencia
}
