import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SeccionFourComponent } from './seccion-four/seccion-four.component';
import { SeccionThreeComponent } from './seccion-three/seccion-three.component';
import { SeccionTwoComponent } from './seccion-two/seccion-two.component';
import { SeccionOneComponent } from './seccion-one/seccion-one.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SeccionFourComponent, SeccionThreeComponent, SeccionTwoComponent, SeccionOneComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'landingShogunReturn';

  private isScrolling = false; // Para evitar scrolls dobles

  @HostListener('wheel', ['$event'])
  onScroll(event: WheelEvent) {
    if (this.isScrolling) return; 
    this.isScrolling = true;

    event.preventDefault(); 
    const sections = document.querySelectorAll('.container > *');
    const scrollContainer = document.querySelector('.container') as HTMLElement;

    let currentIndex = Math.round(
      scrollContainer.scrollTop / window.innerHeight
    );

    if (event.deltaY > 0 && currentIndex < sections.length - 1) {
      scrollContainer.scrollTo({
        top: (currentIndex + 1) * window.innerHeight,
        behavior: 'smooth',
      });
    } else if (event.deltaY < 0 && currentIndex > 0) {
      scrollContainer.scrollTo({
        top: (currentIndex - 1) * window.innerHeight,
        behavior: 'smooth',
      });
    }

    setTimeout(() => (this.isScrolling = false), 800); 
  }
}
