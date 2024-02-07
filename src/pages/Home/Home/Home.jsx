import React from "react";
import Banner from "../Banner/Banner";
import Showcase from "../Showcase/Showcase";
import About from "../About/About";
import CourseProgrammers from "../CourseProgrammers/CourseProgrammers";

const Home = () => {
    return (
        <>
            <div className="bg-bkg text-txt max-w-screen-xl mx-auto">
                <Banner></Banner>
                <About></About>
                <Showcase></Showcase>
            </div>
            <div className="bg-bkg text-txt">
                <CourseProgrammers></CourseProgrammers>
            </div>
        </>
    );
};

export default Home;
