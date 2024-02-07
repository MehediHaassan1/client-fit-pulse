import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import PricingCard from "./PricingCard";

const Pricing = () => {
    const [pricing, setPricing] = useState([]);

    useEffect(() => {
        fetch("features.json")
            .then((res) => res.json())
            .then((data) => setPricing(data));
    }, []);

    return (
        <div className="min-h-screen">
            <SectionTitle
                title={"our programs"}
                subtitle={"Effective membership for you"}
            ></SectionTitle>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-10 text-center ">
                {pricing.map((priceItem) => (
                    <PricingCard
                        key={priceItem._id}
                        pricingItem={priceItem}
                    ></PricingCard>
                ))}
            </div>
        </div>
    );
};

export default Pricing;
