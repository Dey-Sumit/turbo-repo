import { Navigation, Pagination } from "swiper";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";

//! Note: All the css files for swiper imported in _app.tsx

type CarouselProps = {
  imageUrls?: Array<string>;
  id?: string;
};

export const Carousel = ({
  imageUrls = [
    "https://source.unsplash.com/random/1920x1080/?wallpaper",
    "https://source.unsplash.com/random/1920x1080/?wallpaper",
    "https://source.unsplash.com/random/1920x1080/?cat",
  ],
  id = "abc",
}: CarouselProps) => {
  return (
    <Swiper
      slidesPerView={1}
      id={id}
      className="h-[290px]"
      pagination={{
        dynamicBullets: true,
        dynamicMainBullets: 2,
      }}
      modules={[Pagination, Navigation]}
      navigation
      style={{
        // @ts-ignore : overridden css variables for swiper
        "--swiper-theme-color": "#fff",
        "--swiper-navigation-size": "1.75rem",
        border: "2px",
      }}
    >
      {imageUrls.map((imageUrl, index) => (
        <CarouselSlide key={index}>
          <div className="relative h-full w-full overflow-hidden bg-gray-300">
            <img
              src={imageUrl}
              alt="Picture of the venue" // TODO: Add alt text eg. Picture of venue : ${venueName}
              className="overflow-hidden object-cover transition-all duration-500  sm:hover:scale-[1.02]"
            />
          </div>
        </CarouselSlide>
      ))}
      {/* {imageUrls.length === 0 && (
        <CarouselSlide>
          <div className="relative grid h-full w-full place-items-center bg-darkWhite">
            <Image
              src={noImage}
              alt="Picture of the venue"
              width={100}
              height={100}
              // TODO: Add alt text eg. Picture of venue : ${venueName}
              className="rounded-t-2xl object-contain transition-all duration-500 hover:scale-[1.02]"
            />
          </div>
        </CarouselSlide>
      )} */}
    </Swiper>
  );
};

// Custom component for a single slide in the carousel
const CarouselSlide = ({ children }: { children: React.ReactNode }) => {
  return <SwiperSlide>{children}</SwiperSlide>;
};
CarouselSlide.displayName = "SwiperSlide"; // This is needed to make the CarouselSlide work as a custom component (as per the swiper docs)

export default CarouselSlide;
