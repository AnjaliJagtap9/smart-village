import React from "react";
import "../Styles/HomeSlidebar.css";
// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Images
import img1 from "../assets/village1.jpg";
import img2 from "../assets/scheme.jpg";
import img3 from "../assets/complaint.jpg";

function HomeSlider() {
  return (
    <div style={{ margin: "20px" }}>
      <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  slidesPerView={1}
  navigation
  pagination={{ clickable: true }}
  autoplay={{
    delay: 4000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true
  }}
  speed={800}
  loop={true}
>
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="slide">
            <img src={img1} alt="Village" />
            <h2>Welcome to Smart Village</h2>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="slide">
            <img src={img2} alt="Schemes" />
            <h2>Explore Government Schemes</h2>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="slide">
            <img src={img3} alt="Complaint" />
            <h2>Raise & Track Complaints Easily</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HomeSlider;