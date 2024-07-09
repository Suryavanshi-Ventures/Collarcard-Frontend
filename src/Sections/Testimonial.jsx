import React from "react";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative, Navigation, Pagination  } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
};

const testimonials = [
  {
    text: "Your collar stays saved me the other day. I never (I can count the times on one hand) forget collar stays in the morning, but I did one day last week. I was debating between paper clips, a folded business card, or nothing when I remembered your handy collar stays in my wallet! Thank you – great invention!",
    name: "Justin L.",
    position: "Guggenheim Partners",
  },
  {
    text: "Finally a product designed for when you forget your collar stays at home! I can’t tell you how many times I ran off to a meeting or business trip and had to use paperclips – what a great idea!",
    name: "Mitch G.",
    position: "Denver, CO",
  },
  {
    text: "I actually used my CollarCard at my last job interview. I forgot my collar stays, but then I remembered I had your CollarCard in my wallet. I got the job, and your product definitely helped me to stay looking sharp. Thanks!",
    name: "james B",
    position: "Los Angeles, CA",
  },
  {
    text: "We received our CollarCards and love them! They were a hit at our convention in NYC these past couple of days – a few people actually stopped by our booth because they heard we were giving away CollarCards. Thank you for getting these to us in a hurry and on time!",
    name: "Diana M",
    position: "New York City",
  },
];

function Testimonial() {
  return (
    <>
      <div className="testimonials">
        <h2>What Client Say</h2>
        <h1>Testimonials</h1>
      </div>

      <div className="testimonial-container">
        <div className="slider-container">
          <Slider testimonials={testimonials}/>
        </div>
      </div>
    </>
  );
}

export default Testimonial;


const Slider = ({ testimonials }) => {
  return (
    <div className="relative w-full h-[368.5px] opacity-90 overflow-hidden">
      <Swiper
        grabCursor={true}
        effect={"creative"}
        className={"w-[90%] mySwiper h-full"}
        loop={true}
        breakpoints={{
          1200: {
            slidesPerView: 2.1,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[ Navigation, Pagination]}
        speed={1300}
        pagination={{ clickable: true }}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -500],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
      >
        {testimonials.map((data, index) => (
          <SwiperSlide className="testimonial-item" key={index}>
            <div className="testimonial-text-container">
              <p>{data.text}</p>
            </div>
            <div className="testimonial-info-container">
              <div className="testimonial-name-container">
                <p>{data.name}</p>
              </div>
              <div className="testimonial-position-container">
                <p>{data.position}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="swiper-button-prev  text-gray-800 p-2 rounded-full absolute left-2 top-1/2 transform -translate-y-1/2 cursor-pointer z-10">
      <img className="w-[20px] h-[20px]" src="https://cdn-icons-png.flaticon.com/512/130/130882.png" alt="" />
      </div>
      <div className="swiper-button-next  text-gray-800 p-2 rounded-full absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer z-10">
        <img className="w-[20px] h-[20px]" src="https://cdn-icons-png.flaticon.com/512/130/130884.png" alt="" />
      </div>
    </div>
  );
};
