import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { jsx } from 'react/jsx-runtime';

var c=({imageUrls:r=["https://source.unsplash.com/random/1920x1080/?wallpaper","https://source.unsplash.com/random/1920x1080/?wallpaper","https://source.unsplash.com/random/1920x1080/?cat"],id:i="abc"})=>jsx(Swiper,{slidesPerView:1,id:i,className:"h-[290px]",pagination:{dynamicBullets:!0,dynamicMainBullets:2},modules:[Pagination,Navigation],navigation:!0,style:{"--swiper-theme-color":"#fff","--swiper-navigation-size":"1.75rem",border:"2px"},children:r.map((o,l)=>jsx(a,{children:jsx("div",{className:"relative h-full w-full overflow-hidden bg-gray-300",children:jsx("img",{src:o,alt:"Picture of the venue",className:"overflow-hidden object-cover transition-all duration-500  sm:hover:scale-[1.02]"})})},l))}),a=({children:r})=>jsx(SwiperSlide,{children:r});a.displayName="SwiperSlide";var h=a;//! Note: All the css files for swiper imported in _app.tsx

export { c as a, h as b };
