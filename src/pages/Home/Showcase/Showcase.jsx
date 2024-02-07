import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";

// import required modules
import { EffectCoverflow, Autoplay } from "swiper/modules";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Showcase = () => {
    return (
        <div className="min-h-screen py-10 md:py-0 md:flex flex-row-reverse items-center justify-evenly">
            <div className="md:w-1/2 flex flex-col items-start justify-center max-w-md">
                <SectionTitle
                    title={"activate your"}
                    subtitle={"Potential"}
                ></SectionTitle>
                <p className="my-5 lg:text-lg">
                    Transform your journey, unlock new horizons. Activate Your
                    Potential with FitPulse, where empowerment meets innovation.
                    Elevate every experience, embrace growth, and chart your
                    course to success effortlessly and dynamically.
                </p>
                <button className="btn rounded-sm bg-primary hover:bg-primary/70 text-bkg border-0">
                    SignUp
                </button>
            </div>
            <div className="md:w-1/2 mt-5 md:mt-0 flex items-center justify-center ">
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    loop={true}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, EffectCoverflow]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="https://i.ibb.co/zhN2fwS/img1.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/PYW3Dwf/img2.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/L6nBsQn/img3.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/qYB7Zd1/img4.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/9wHmJxp/img5.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/RHG98bW/img6.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/THw9WLq/img7.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/nQSHb34/img8.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/Jsd2GjG/img9.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/f2fFkCW/img10.png" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Showcase;
