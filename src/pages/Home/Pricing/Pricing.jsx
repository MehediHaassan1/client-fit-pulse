import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import PricingCard from "./PricingCard";
import usePublicApi from "../../../hooks/usePublicApi";

const Pricing = () => {
    const [membership, setMembership] = useState([]);
    const publicApi = usePublicApi();

    useEffect(() => {
        const getMembershipData = async () => {
            const membershipResponse = await publicApi.get("/membership");
            const membershipResponseData = membershipResponse.data;
            setMembership(membershipResponseData);
        };
        getMembershipData();
    }, [publicApi]);

    return (
        <div className="min-h-screen">
            <SectionTitle
                title={"our programs"}
                subtitle={"Effective membership for you"}
            ></SectionTitle>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-10 text-center ">
                {membership.map((priceItem) => (
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
