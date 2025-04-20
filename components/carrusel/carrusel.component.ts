import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrusel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css'],
})

export class CarruselComponent {
  carruselItems = [
    {
      subtitulo: 'primera version',
      titulo: 'Portafolio',
      descripcion: 'Portafolio personal con un enfoque creativo y visualmente atractivo. Combina formas abstractas, colores vibrantes y un estilo moderno para mostrar habilidades digitales.',
      boton: 'julio 2021',
    },
    {
      subtitulo: 'tienda de electrónica',
      titulo: 'Electro.',
      descripcion: 'Tienda online moderna de productos electrónicos, con una estructura clara que facilita la navegación. Ideal para destacar gadgets y tecnología de última generación.',
      boton: 'agosto 2021',
    },
    {
      subtitulo: 'blog de gimnasio',
      titulo: 'SISA-GYMS',
      descripcion: 'Web para un gimnasio, con una estética enérgica y urbana que motiva al usuario. El diseño refleja fuerza y dinamismo, ideal para promover un estilo de vida activo.',
      boton: 'agosto 2021',
    },
    {
      subtitulo: 'web de productividad',
      titulo: 'TuCalendi.com',
      descripcion: 'Un sistema de programación para reuniones y eventos para el web 3.0. TuCalendi es tu asistente personal online que trabaja para ti las 24 horas del día para llenar tu agenda y hacerte dueño de tu tiempo.',
      boton: 'agosto 2022',
    },
    {
      subtitulo: 'blog de coctelería',
      titulo: 'Drunky Ducks',
      descripcion: 'Landing page colorida y desenfadada para un proyecto creativo, relacionada a la coctelería. Su estética divertida y llamativa atrae al público joven y techie.',
      boton: 'abril 2023',
    },
    {
      subtitulo: 'despacho de abogados',
      titulo: 'FU Abogados',
      descripcion: 'Página institucional para un despacho de abogados, con un diseño sobrio que transmite profesionalismo y confianza. Presenta sus servicios legales de forma directa y organizada.',
      boton: 'enero 2024',
    },
  ];

  indiceActual = 0;

  moverDerecha(): void {
    const anterior = this.indiceActual;
    this.indiceActual++;
    this.setSlide(anterior, this.indiceActual);
  }

  moverIzquierda(): void {
    const anterior = this.indiceActual;
    this.indiceActual--;
    this.setSlide(anterior, this.indiceActual);
  }

  private setSlide(prev: number, next: number): void {
    const total = this.carruselItems.length;

    if (next >= total) {
      this.indiceActual = 0;
    } else if (next < 0) {
      this.indiceActual = total - 1;
    }

    console.log('Índice actual:', this.indiceActual);
  }
}