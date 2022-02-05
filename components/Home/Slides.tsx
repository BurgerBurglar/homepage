import React, { Children } from "react";
import { Mousewheel, Pagination, EffectCreative } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

interface SlidesProps {}

export const Slides: React.FC<SlidesProps> = ({ children }) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        grabCursor={true}
        effect="creative"
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, "-100%", -400],
          },
          next: {
            translate: [0, "100%", 0],
          },
        }}
        direction="vertical"
        modules={[Mousewheel, Pagination, EffectCreative]}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {Children.map(children, (child, i) => (
          <SwiperSlide key={i}>{child}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
