import React, { useEffect, useState } from "react";
import usePrivetApi from "../../hooks/usePrivetApi";
import { Link, useParams } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const MembershipDetails = () => {
    const [membershipDetails, setMembershipDetails] = useState(null);
    const { id } = useParams();
    const privetApi = usePrivetApi();
    useEffect(() => {
        privetApi.get(`/membership-details/${id}`).then((res) => {
            setMembershipDetails(res.data);
        });
    }, [id, privetApi]);
    return (
        <div className="max-w-screen-xl mx-auto p-4 lg:p-0">
            <SectionTitle
                title={"payment details"}
                subtitle={"read before pay"}
            ></SectionTitle>
            <div className="md:p-10">
                <div className="flex items-center gap-20 md:gap-40 lg:gap-72">
                    <h1 className="text-3xl lg:text-5xl">
                        {membershipDetails?.name}
                    </h1>
                    <Link
                        to={`/payment/${id}`}
                        className="btn rounded-sm bg-primary hover:bg-primary/70 text-bkg border-0"
                    >
                        Pay
                    </Link>
                </div>
                <p className="my-5">
                    <span className="text-xl text-accent">Description:</span>{" "}
                    {membershipDetails?.description}
                </p>
                <p className="mb-3">
                    <h4 className="text-xl text-accent">Features</h4>
                    {membershipDetails?.features?.map((feature, index) => (
                        <li style={{ listStyleType: "square" }} key={index}>
                            {feature}
                        </li>
                    ))}
                </p>

                <p>
                    <span className="text-xl text-accent">Note :</span> Cancel
                    anytime. We'll remind you 7 days before your membership
                    ends.
                </p>
            </div>
        </div>
    );
};

export default MembershipDetails;
