import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaDumbbell, FaHeartbeat } from "react-icons/fa";
import { GiNinjaHead } from "react-icons/gi";
import { IoTime } from "react-icons/io5";

const Services = () => {
    return (
        <div className="min-h-screen mt-10">
            <div className="lg:flex items-center justify-between">
                <div>
                    <SectionTitle
                        title={"awesome features"}
                        subtitle={"Why Choose Us"}
                    ></SectionTitle>
                    <div className="grid grid-cols-1 gap-5 mb-5 md:mb-0 md:grid-cols-2">
                        <div className="flex items-start gap-4">
                            <div>
                                <FaDumbbell className="w-10 h-10 text-accent" />
                            </div>
                            <div>
                                <h1 className="text-xl lg:text-3xl uppercase">
                                    PRO EQUIPMENT
                                </h1>
                                <p className="lg:w-3/4 mt-3">
                                    durable, efficient, enhancing workouts, and
                                    supporting fitness goals.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div>
                                <GiNinjaHead className="w-10 h-10 text-accent" />
                            </div>
                            <div>
                                <h1 className="text-xl lg:text-3xl uppercase">
                                    NINJA COACH
                                </h1>
                                <p className="lg:w-3/4 mt-3">
                                    Fitness expert, motivator, and coach,
                                    empowering clients toward success.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div>
                                <FaHeartbeat className="w-10 h-10 text-accent" />
                            </div>
                            <div>
                                <h1 className="text-xl lg:text-3xl uppercase">
                                    CARDIO FIRST
                                </h1>
                                <p className="lg:w-3/4 mt-3">
                                    Revolutionizing gym culture with Cardio
                                    First's innovative fitness solutions.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div>
                                <IoTime className="w-10 h-10 text-accent" />
                            </div>
                            <div>
                                <h1 className="text-xl lg:text-3xl uppercase">
                                    FLEXIBLE TIME
                                </h1>
                                <p className="lg:w-3/4 mt-3">
                                    Customize your gym schedule with Flexible
                                    Time for optimal fitness.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative">
                        <img
                            src="https://i.ibb.co/zP2jWBz/features-banner.png"
                            alt="features-banner"
                            border="0"
                        />
                        <div className="absolute bottom-10 w-full opacity-50">
                            <h1 className="md:text-7xl text-slate-400 uppercase text-center">
                                work out
                            </h1>
                            <h1 className="md:text-7xl text-slate-400 uppercase text-center">
                                right now
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
