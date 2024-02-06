import React from "react";
import Banner from "../Banner/Banner";
import Showcase from "../Showcase/Showcase";

const Home = () => {
    return (
        <>
            <div className="bg-bkg text-txt max-w-screen-xl mx-auto">
                <Banner></Banner>
                <Showcase></Showcase>
            </div>
        </>
    );
};

export default Home;
