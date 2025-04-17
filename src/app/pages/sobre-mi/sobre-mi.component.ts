import { Component } from '@angular/core';
import { AppRoute } from '../../types/AppRoute';
import { LayoutComponent } from '../../../../components/layout/layout.component';

@Component({
  selector: 'app-sobre-mi',
  imports: [LayoutComponent],
  templateUrl: './sobre-mi.component.html',
  styleUrl: './sobre-mi.component.css'
})
export class SobreMiComponent {
  readonly AppRoute = AppRoute
}
