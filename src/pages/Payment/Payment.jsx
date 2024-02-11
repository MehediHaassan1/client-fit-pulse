import React, { useEffect, useState } from "react";
import usePrivetApi from "../../hooks/usePrivetApi";
import { useParams } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Payment = () => {
    const [membershipDetails, setMembershipDetails] = useState(null);
    const { id } = useParams();
    const privetApi = usePrivetApi();
    useEffect(() => {
        privetApi.get(`/membership-details/${id}`).then((res) => {
            setMembershipDetails(res.data);
        });
    }, [id, privetApi]);
    return (
        <div className="max-w-screen-xl mx-auto">
            <SectionTitle
                title={"payment"}
                subtitle={`pay for ${membershipDetails?.name}`}
            ></SectionTitle>
            <h1>this is payment page.</h1>
        </div>
    );
};

export default Payment;
