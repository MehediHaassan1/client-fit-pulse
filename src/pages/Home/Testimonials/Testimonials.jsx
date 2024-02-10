import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import usePublicApi from "../../../hooks/usePublicApi";

const Testimonials = () => {
    const publicApi = usePublicApi();
    const [testimonials, setTestimonials] = useState([]);
    useEffect(() => {
        const getReviews = async () => {
            const reviewsResponse = await publicApi.get("/reviews");
            const reviews = reviewsResponse.data;
            setTestimonials(reviews);
        };
        getReviews();
    }, [publicApi]);
    return (
        <section className="min-h-screen py-16">
            <SectionTitle
                title={"what our client say"}
                subtitle={"testimonials"}
            ></SectionTitle>
            <div>
                <Swiper
                    navigation={true}
                    modules={[Navigation, Autoplay]}
                    className="mySwiper w-full max-w-4xl text-center"
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                >
                    {testimonials.map((review) => (
                        <SwiperSlide key={review._id}>
                            <div className="mx-12 lg:mx-20 md:text-center my-10">
                                <Rating
                                    className="mx-auto"
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <FaQuoteLeft className="mx-auto text-5xl mt-2 text-orange-300" />
                                <p className="text-xs my-2 md:text-lg">
                                    {review.details}
                                </p>
                                <h3 className="text-2xl text-orange-500 text-center">
                                    {review.name}
                                </h3>
                                <div className="text-center w-full flex items-center justify-center mt-5">
                                    <img
                                        src={review.image}
                                        alt=""
                                        className="w-20 h-20 rounded-full object-cover object-top"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;
