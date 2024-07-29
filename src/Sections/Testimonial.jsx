import React from "react";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination"
import Heading from "../component/Heading/Heading";

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


      <div className="App mt-5 md:mt-5 h-[700px] md:h-[846.5px] overflow-hidden">
        <div className="relative h-full  w-full">
          <div className="absolute w-[104%] h-[80%] bg-gray-100 transform -rotate-2  bottom-[50px] -left-2 flex justify-center items-center">
            <div className='about-container w-full h-[80%] rotate-[1.9deg]'>
              <div className=' h-[90%] -mt-20 md:-mt-14'>


                <Heading subTitle={"What Client Say"} title={"Testimonials"} />

                <Slider testimonials={testimonials} />
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}

export default Testimonial;


const Slider = ({ testimonials }) => {
  return (
    <div className="relative w-full h-[450px] lg:h-[408.5px] opacity-90 overflow-hidden">
      <Swiper
        grabCursor={true}
        effect={"creative"}
        className={"lg:w-[90%] w-[78%] mySwiper h-full"}
        loop={true}
        spaceBetween={10}
        breakpoints={{
          1200: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          390: {
            slidesPerView: 1,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}

        modules={[Navigation, Pagination]}
        speed={1300}
        pagination={{ clickable: true }}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -200],
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
        {testimonials?.map((data, index) => (
          // testimonial-item
          <SwiperSlide
            className="flex rounded-[10px] p-[10px] lg:p-[20px] justify-between bg-[#0066FF] flex-col mb-[15px] border border-[#0066FF] h-[85%]"
            key={index}
          >
          <div className="testimonial-text-container relative bg-white text-[#4a4a4a;] p-[10px] rounded-[10px] before:absolute before:-bottom-3 before:left-5 before:border-t-[15px] before:border-t-white before:border-x-[10px] before:border-x-transparent md:text-[18px] lg:text-[18px]">
  <p>{data.text}</p>
</div>
<div className="w-full mt-4 text-white">
  <p className="font-bold text-sm md:text-base lg:text-lg">{data.name}</p>
  <p className="text-sm md:text-base lg:text-lg">{data.position}</p>
</div>



          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="swiper-button-prev  text-gray-800 p-2 rounded-full absolute left-2 top-44 transform -translate-y-1/2 cursor-pointer z-10">
        <img className="w-[20px] h-[20px] " src="https://cdn-icons-png.flaticon.com/512/130/130882.png" alt="" />
      </div>
      <div className="swiper-button-next  text-gray-800 p-2 rounded-full absolute right-2 top-44 transform -translate-y-1/2 cursor-pointer z-10">
        <img className="w-[20px] h-[20px]" src="https://cdn-icons-png.flaticon.com/512/130/130884.png" alt="" />
      </div>
    </div>
  );
};
