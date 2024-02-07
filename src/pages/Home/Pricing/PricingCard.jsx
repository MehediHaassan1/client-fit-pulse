import React from "react";

const PricingCard = ({ pricingItem }) => {
    const { name, description, features, price } = pricingItem;
    return (
        <div className="h-[400px] relative">
            <h1 className="text-xl text-accent font-bold mt-5">{name}</h1>

            {/* <p className="my-2">{description}</p> */}

            <div className="my-5">
                <span className="text-2xl mr-1">$</span>
                <p className="text-3xl inline-block">{price}</p>
            </div>

            <div>
                {features.map((feature, idx) => (
                    <p
                        key={idx}
                        className="leading-loose border-b last:border-b-0"
                    >
                        {feature}
                    </p>
                ))}
            </div>

            <div className="absolute bottom-0 w-full">
                <button className="btn rounded-sm bg-primary hover:bg-primary/70 text-bkg border-0">
                    Join
                </button>
            </div>
        </div>
    );
};

export default PricingCard;
