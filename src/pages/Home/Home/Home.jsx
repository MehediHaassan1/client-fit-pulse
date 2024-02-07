import React from "react";
import Banner from "../Banner/Banner";
import Showcase from "../Showcase/Showcase";
import About from "../About/About";
import CourseProgrammers from "../CourseProgrammers/CourseProgrammers";
import Services from "../Services/Services";
import Classes from "../Classes/Classes";
import CalculateBMI from "../CalculateBMI/CalculateBMI";

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
            <div className="bg-bkg text-txt max-w-screen-xl mx-auto">
                <Services></Services>
                <Classes></Classes>
                <CalculateBMI></CalculateBMI>
            </div>
        </>
    );
};

export default Home;
