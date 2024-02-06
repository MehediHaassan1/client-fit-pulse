const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col md:flex-row-reverse w-full p-0">
                <div className="md:w-1/2 flex items-center justify-center relative">
                    <img
                        src="https://i.ibb.co/W6djZwN/home-banner-main.png"
                        className="object-cover object-top"
                    />
                    <div className="absolute bottom-20  bg-gray-400 rounded bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 px-4 py-2 flex gap-2">
                        <h1 className="lg:text-xl">
                            150 Cal/<span className="text-xs">day</span>
                        </h1>
                        <img
                            src="https://i.ibb.co/wQgYfRP/banner-chart.png"
                            alt="banner-chart"
                        />
                    </div>
                    <div className="absolute top-20 left-10">
                        <img
                            src="https://i.ibb.co/r2hHyFb/dumbble.png"
                            alt="dumbble"
                        />
                    </div>
                    <div className="absolute bottom-28 right-0">
                        <img
                            src="https://i.ibb.co/VvMyCtB/jumping-rope.png"
                            alt="jumping-rope"
                        />
                    </div>
                    <div className="absolute right-0 lg:right-28 top-28">
                        <img
                            src="https://i.ibb.co/3RXHW5w/small-dumble.png"
                            alt="small dumble"
                        />
                    </div>
                    <div className="absolute left-0 transform -rotate-90 -z-10 opacity-10 outline-txt">
                        <h1 className="text-6xl font-black m-0">FIT PULSE</h1>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                        Get healthy body
                    </h1>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                        With the perfect
                    </h1>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold flex items-center gap-2">
                        Exercise
                        <img
                            className="w-56 h-10 object-cover object-top rounded-full"
                            src="https://i.ibb.co/HzWttzP/home-banner-exercise.jpg"
                            alt="home banner exercise"
                        />
                    </h1>
                    <p className="py-4 md:py-6 md:w-3/4 max-w-1/2">
                        we are always there to help you to make a healthy body
                        and mind through the power of fitness
                    </p>

                    <button className="btn rounded-sm bg-primary hover:bg-primary/70 text-bkg border-0">
                        Get Started
                    </button>
                    <div className="mt-5 flex items-center justify-between lg:w-2/3">
                        <div className="p-2 text-xs md:text-lg">
                            <h3 className="lg:text-3xl">27+</h3>
                            <p className="">expert trainers</p>
                        </div>
                        <div className="border-x-2 border-accent p-2 text-xs md:text-lg">
                            <h3 className="lg:text-3xl">970+</h3>
                            <p className="">members</p>
                        </div>
                        <div className="p-2 text-xs md:text-lg">
                            <h3 className="lg:text-3xl">15+</h3>
                            <p className="">programs</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
