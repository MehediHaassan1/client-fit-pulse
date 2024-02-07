import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Classes = () => {
    return (
        <div className="min-h-96 py-10">
            <SectionTitle
                title={"Power Up"}
                subtitle={"Boost Strength & Endurance"}
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="md:flex bg-slate-900 items-center">
                    <div className="relative h-[200px] overflow-hidden md:w-1/2">
                        <img
                            src="https://i.ibb.co/x1g15cs/High-Intensity-Interval-Training.jpg"
                            className="absolute inset-0 w-full md:w-96 h-full object-cover clip-polygon"
                        />
                    </div>

                    <div className="md:w-1/2">
                        <h3 className="text-accent font-black text-2xl md:text-xl">
                            HIIT
                        </h3>
                        <p className="md:text-sm my-4 text-white">
                            Alternates between short bursts of intense exercise
                            and brief recovery periods to maximize calorie burn
                            and improve fitness levels.
                        </p>
                    </div>
                </div>
                <div className="md:flex bg-slate-900  items-center gap-2 lg:gap-5">
                    <div className="relative h-[200px] overflow-hidden md:w-1/2">
                        <img
                            src="https://i.ibb.co/dkF1cnW/Weight-Loss-Program.jpg"
                            className="absolute inset-0 w-full md:w-96 h-full object-cover clip-polygon"
                        />
                    </div>

                    <div className="md:w-1/2">
                        <h3 className="text-accent font-black text-xl">
                            Weight Loss
                        </h3>
                        <p className="md:text-sm my-4 text-white">
                            Combines cardio and strength training exercises with
                            dietary guidance to help individuals achieve their
                            weight loss goals.
                        </p>
                    </div>
                </div>
                <div className="md:flex bg-slate-900  items-center gap-2 lg:gap-5">
                    <div className="relative h-[200px] overflow-hidden md:w-1/2">
                        <img
                            src="
                            https://i.ibb.co/jy0tHmG/Cardiovascular-Program.jpg"
                            className="absolute inset-0 w-full md:w-96 h-full object-cover clip-polygon"
                        />
                    </div>

                    <div className="md:w-1/2">
                        <h3 className="text-accent font-black text-xl">
                            Cardiovascular
                        </h3>
                        <p className="md:text-sm my-4 text-white">
                            Aimed at improving cardiovascular health and
                            endurance through activities like running, cycling,
                            or using cardio machines.
                        </p>
                    </div>
                </div>
                <div className="md:flex bg-slate-900  items-center gap-2 lg:gap-5">
                    <div className="relative md:w-1/2 h-[200px] overflow-hidden">
                        <img
                            src="
                            https://i.ibb.co/L5fnnFy/Strength-Training-Program.jpg"
                            className="absolute inset-0 w-full md:w-96 h-full object-cover clip-polygon"
                        />
                    </div>

                    <div className="md:w-1/2">
                        <h3 className="text-accent font-black text-xl">
                            Strength Training
                        </h3>
                        <p className="md:text-sm my-4 text-white">
                            Focuses on building muscle mass and strength through
                            resistance exercises like weightlifting.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Classes;
