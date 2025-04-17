import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoute } from '../../src/app/types/AppRoute';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() src: string = ''
  @Input() alt: string = ''
  @Input() ruta: AppRoute = AppRoute.sobreMi

  readonly AppRoute = AppRoute

  estaActivo(ruta: AppRoute): boolean {
    return this.ruta == ruta
  }
}
