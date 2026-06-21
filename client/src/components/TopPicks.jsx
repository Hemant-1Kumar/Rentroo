import React, { useEffect, useState } from "react";
import Title from "./Title";
import Item from "./Item";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay } from "swiper/modules";
import { useAppContext } from "../context/AppContext";

const TopPicks = () => {
  const { cars, searchedCities } = useAppContext();
  const [topPicks, setTopPicks] = useState([]);

  useEffect(() => {
    const data = cars.filter((car) => {
      return searchedCities.some(
        (city) =>
          city.toLowerCase().trim() ===
          car.city.toLowerCase().trim()
      );
    });

    console.log("Filtered Cars =", data);

    setTopPicks(data);
  }, [cars, searchedCities]);

  console.log("topPicks length =", topPicks.length);
  console.log("cars length =", cars.length);
  console.log("searchedCities =", searchedCities);
  console.log(
    "car cities =",
    cars.map((car) => car.city)
  );

  return topPicks.length >0  && (
    <section className="max-padd-container pt-16 xl:py-22">
      <Title
        title1={"Top picks for you"}
        title2={"Popular in your area"}
        titleStyles={"mb-10"}
      />

      <Swiper
        loop={topPicks.length > 4}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          600: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1124: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1300: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Autoplay]}
        className="h-[488px] md:h-[533px] xl:h-[422px] mt-5"
      >
        {topPicks.slice(0, 6).map((car) => (
          <SwiperSlide key={car._id}>
            <Item car={car} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TopPicks;