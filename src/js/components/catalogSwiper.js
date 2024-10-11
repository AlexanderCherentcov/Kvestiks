import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, Keyboard } from 'swiper/modules';
import 'swiper/swiper-bundle.min.css';

document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.reviews__swiper', {
    modules: [Navigation, Pagination, Autoplay, Keyboard],
    slidesPerView: 3,
    spaceBetween: 10,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    // Настройки адаптивности
    breakpoints: {
      1400: {
        // Для экранов от 1024px
        slidesPerView: 3,
        loop: true,
      },

      768: {
        // Для экранов от 768px до 1024px (планшеты)
        slidesPerView: 2,
        loop: true,

        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
      },
      0: {
        slidesPerView: 1,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
      },
    },

    // Пагинация
    pagination: {
      el: '.reviews__pagination',
      clickable: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });
});
