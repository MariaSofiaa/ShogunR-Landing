import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-seccion-two',
  standalone: true,
  imports: [SeccionTwoComponent, CommonModule],
  templateUrl: './seccion-two.component.html',
  styleUrl: './seccion-two.component.css',
})
export class SeccionTwoComponent {
  // Array de URLs de imágenes de perritos
  items = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRQqNxjJOhZ77IpITJS5l64fHG_KQvWwOcnsLdguAn8U2_0sAWbYvslOu9xzKqZJr3lLk&usqp=CAU',
    'https://www.semana.com/resizer/v2/RE55ORS5VRHPPLSJPA5LA3PBKY.jpg?auth=b0027f91be13abea4668c68dfd37df7655ffff98fde53839fe9daebfb44eaddd&smart=true&quality=75&width=1280&height=720',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRQqNxjJOhZ77IpITJS5l64fHG_KQvWwOcnsLdguAn8U2_0sAWbYvslOu9xzKqZJr3lLk&usqp=CAU',
    'https://www.semana.com/resizer/v2/RE55ORS5VRHPPLSJPA5LA3PBKY.jpg?auth=b0027f91be13abea4668c68dfd37df7655ffff98fde53839fe9daebfb44eaddd&smart=true&quality=75&width=1280&height=720',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRQqNxjJOhZ77IpITJS5l64fHG_KQvWwOcnsLdguAn8U2_0sAWbYvslOu9xzKqZJr3lLk&usqp=CAU',
    'https://www.semana.com/resizer/v2/RE55ORS5VRHPPLSJPA5LA3PBKY.jpg?auth=b0027f91be13abea4668c68dfd37df7655ffff98fde53839fe9daebfb44eaddd&smart=true&quality=75&width=1280&height=720',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRQqNxjJOhZ77IpITJS5l64fHG_KQvWwOcnsLdguAn8U2_0sAWbYvslOu9xzKqZJr3lLk&usqp=CAU',
    'https://www.semana.com/resizer/v2/RE55ORS5VRHPPLSJPA5LA3PBKY.jpg?auth=b0027f91be13abea4668c68dfd37df7655ffff98fde53839fe9daebfb44eaddd&smart=true&quality=75&width=1280&height=720',
  ];

  // Índice de la imagen activa (la del medio)
  activeIndex = 1;  // Empezamos con el primer índice central

  // Número total de imágenes visibles (3 imágenes)
  totalVisible = 3;

  // Calcula el índice central
  get centerIndex() {
    return Math.floor(this.totalVisible / 2);
  }

  // Calcula las imágenes visibles en función del índice activo
  get visibleItems() {
    const start = this.activeIndex;
    return this.items.slice(start, start + this.totalVisible);
  }

  // Navegar a la imagen anterior
  prevSlide() {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    } else {
      this.activeIndex = this.items.length - this.totalVisible; // Regresa al final si estamos al principio
    }
  }

  // Navegar a la imagen siguiente
  nextSlide() {
    if (this.activeIndex < this.items.length - this.totalVisible) {
      this.activeIndex++;
    } else {
      this.activeIndex = 0; // Vuelve al principio cuando llegues al final
    }
  }
}
