import { Component } from '@angular/core';
import { LayoutComponent } from '../../../../components/layout/layout.component';
import { AppRoute } from '../../types/AppRoute';

@Component({
  selector: 'app-home',
  imports: [LayoutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly AppRoute = AppRoute
}
