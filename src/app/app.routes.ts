import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { SobreMiComponent } from './pages/sobre-mi/sobre-mi.component';
import { ExperienciaComponent } from './pages/experiencia/experiencia.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'sobre-mi', component: SobreMiComponent },
  { path: 'experiencia', component: ExperienciaComponent },
  { path: 'contacto', component: ContactoComponent }
];