const About = () => {
    return (
        <div className="min-h-screen md:flex items-center justify-between py-10 md:py-0">
            <div className="md:w-1/2">
                <p className="text-accent text-lg font-bold">About FitPulse</p>
                <h2 className="text-primary/30 text-4xl font-semibold">
                    Welcome to Us
                </h2>
                <div className="w-28 border-b-2 my-5 border-primary"></div>
                <p className="max-w-lg lg:text-lg ">
                    At FitPulse, we believe in transforming lives through the
                    power of fitness. Our mission is to ignite your passion for
                    a healthier lifestyle and fuel your strength on your journey
                    to optimal well-being. Embrace a community that shares your
                    commitment to self-improvement, where every workout propels
                    you closer to your goals. <br />
                    <span className="font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text  link link-hover border-white">
                        read more
                    </span>
                </p>
            </div>
            <div className="md:w-1/2 flex items-center justify-center">
                <img src="https://i.ibb.co/drRHTFd/about.jpg" alt="about" />
            </div>
        </div>
    );
};

export default About;
