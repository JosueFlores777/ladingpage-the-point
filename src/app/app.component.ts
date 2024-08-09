import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CommonModule,FooterComponent, SlickCarouselModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'thepoint';
  slides = [
    { img: 'https://images.pexels.com/photos/1229852/pexels-photo-1229852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { img: 'https://images.pexels.com/photos/1229852/pexels-photo-1229852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { img: 'https://images.pexels.com/photos/1229852/pexels-photo-1229852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { img: 'https://images.pexels.com/photos/1229852/pexels-photo-1229852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { img: 'https://images.pexels.com/photos/1229852/pexels-photo-1229852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { img: 'https://images.pexels.com/photos/1229852/pexels-photo-1229852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { img: 'https://images.pexels.com/photos/1229852/pexels-photo-1229852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { img: 'https://images.pexels.com/photos/1229852/pexels-photo-1229852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }
  ];
  slideConfig = { slidesToShow: 4, slidesToScroll: 4 };


  removeSlide() {
    if (this.slides.length > 0) {
      this.slides.pop();
    }
  }

  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    console.log('afterChange');
  }

  beforeChange(e: any) {
    console.log('beforeChange');
  }

  trackByFn(index: number, slide: any) {
    return index;
  }
}
