import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CommonModule, FooterComponent, SlickCarouselModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'thepoint';

  comercios = [
    {
      nombre: 'Krazy Papas',
      img: './assets/img/content/Comercios/picture-0.jpg',
      descripcion: 'Las mejores Belgian Style Fries',
      url: 'https://www.instagram.com/krazy_papas/'
    },
    {
      nombre: 'Hawaiice',
      img: './assets/img/content/Comercios/picture-1.jpg',
      descripcion: 'Traemos minutas Hawaiianas hasta El Salvador! 🍧🌈 100% Agua Purificada y +20 sabores💧',
      url: 'https://www.instagram.com/hawaiice.sv/'
      
    },
    {
      nombre: 'The Coffee Cup',
      img: './assets/img/content/Comercios/picture-2.jpg',
      descripcion: 'Disfruta de la mejor experiencia de café gourmet 100% salvadoreño.',
      url: 'https://www.instagram.com/thecoffeecup_sv/'
    },
    {
      nombre: 'Pupuseria Suiza',
      img: './assets/img/content/Comercios/picture-3.jpg',
      descripcion: 'Desde 1999 haciendo pupusas con ingredientes de calidad. Lo que importa es lo de adentro 🧡',
      url: 'https://www.instagram.com/pupuseriasuiza/'
    },
    {
      nombre: 'Prado',
      img: './assets/img/content/Comercios/picture-4.jpg',
      descripcion: 'Lo mejor para tu hogar lo encuentras en Prado ¡Para qué ir a otro lado!',
      url: 'https://www.instagram.com/prado_sv/'
    },
    {
      nombre: 'Mr.Laundry',
      img: './assets/img/content/Comercios/picture-5.jpg',
      descripcion: 'Lavandería profesional ¡Nos encargamos de todas tus prendas!',
      url: 'https://www.instagram.com/mrlaundrysv/'
    },
    {
      nombre: 'Ceramica Romani',
      img: './assets/img/content/Comercios/picture-6.jpg',
      descripcion: 'Ceramica Romani y Bodegon de la Ceramica. Venta de Ceramica en El Salvador.',
      url: 'https://www.instagram.com/onlineceramicasv/'
    },
    {
      nombre: 'Shrimp Factory',
      img: './assets/img/content/Comercios/picture-7.jpg',
      descripcion: 'Una nueva forma de disfrutar los mariscos en Surf City🦐☀️🌊',
      url: 'https://www.instagram.com/shrimpfactory.sv/'
    },
    {
      nombre: 'La Neveria',
      img: './assets/img/content/Comercios/picture-8.jpg',
      descripcion: '"Siempre Algo Nuevo" Helados, paletas, pasteles de helado y de pan, crepas, helado de yogurt y Chocolates',
      url: 'https://www.instagram.com/laneveria_oficial/'
    },
    {
      nombre: '300 MMA Training Center',
      img: './assets/img/content/Comercios/picture-9.jpg',
      descripcion: 'Somos el centro de entrenamiento para las MMA en El Salvador!',
      url: 'https://www.instagram.com/300mmatrainingcenter/'
    },
    {
      nombre: 'G-Box',
      img: './assets/img/content/Comercios/picture-10.jpg',
      descripcion: 'Tu mejor opción de compras por Internet. ✈️🛍📦',
      url: 'https://www.instagram.com/gbox.sv/'
    },
    {
      nombre: 'Academia Europea',
      img: './assets/img/content/Comercios/picture-11.jpg',
      descripcion: 'Somos la academia de idiomas más grande del continente americano, Headquarters MIAMI, FL, USA. No. 1 En Idiomas 🇺🇸 🇫🇷 🇮🇹 🇨🇳 🇵🇹 🇪🇸 🇯🇵 🇩🇪 ',
      url: 'https://www.instagram.com/academiaeuropea.sv/'
    },
    {
      nombre: 'Castella Sagarra',
      img: './assets/img/content/Comercios/picture-12.jpg',
      descripcion: '🚰 Especialistas en equipo de bombeo. Encuentra todo en cerrajería, fontanería, jardinería, herramientas y más.',
      url: 'https://www.instagram.com/castellasagarra/'
    }
  ];

  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 1424, 
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1021, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 555,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  logos = [
    './assets/img/logo/asset 18.png',
    './assets/img/logo/asset 19.png',
    './assets/img/logo/asset 21.png',
    './assets/img/logo/asset 22.png',
    './assets/img/logo/asset 23.png',
    './assets/img/logo/asset 24.png',
    './assets/img/logo/asset 25.png',
    './assets/img/logo/asset 26.png',
 
  ];

  slideConfig2 = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    infinite: true,
    speed: 5000, 
    cssEase: 'linear',
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 3, 
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2, 
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  removeSlide() {
    if (this.comercios.length > 0) {
      this.comercios.pop();
    }
  }

  slickInit(e: any) {
   
  }

  breakpoint(e: any) {
   
  }

  afterChange(e: any) {
  }

  beforeChange(e: any) {
    
  }

  trackByFn(index: number, comercio: any) {
    return index;
  }
}
