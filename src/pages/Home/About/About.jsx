import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const About = () => {
    return (
        <div className="min-h-screen md:flex items-center justify-between py-10 md:py-0">
            <div className="md:w-1/2">
                {/* <p className="text-accent text-lg font-bold">About FitPulse</p>
                <h2 className="text-primary text-4xl font-semibold">
                    Welcome to Us
                </h2>
                <div className="w-28 border-b-2 my-5 border-accent"></div> */}
                <SectionTitle
                    title={"about fitpulse"}
                    subtitle={"Welcome to Us"}
                ></SectionTitle>
                <p className="max-w-lg lg:text-lg leading-relaxed">
                    At FitPulse, we believe in transforming lives through the
                    power of fitness. Our mission is to ignite your passion for
                    a healthier lifestyle and fuel your strength on your journey
                    to optimal well-being. Embrace a community that shares your
                    commitment to self-improvement, where every workout propels
                    you closer to your goals. <br />
                    <span className="font-bold text-primary link link-hover ">
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
