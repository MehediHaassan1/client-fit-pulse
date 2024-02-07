import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useState } from "react";

const CalculateBMI = () => {
    const [bmi, setBMI] = useState(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const height = parseFloat(data.height);
        const heightInMeters = height / 100;
        const weight = parseFloat(data.weight);
        const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(
            2
        );
        setBMI(bmiValue);
    };

    return (
        <div className="min-h-screen px-10 py-16">
            <SectionTitle
                title={"body mass index tool"}
                subtitle={"Measure Your Fitness Level with BMI"}
            ></SectionTitle>
            <div className="md:flex items-center justify-between">
                <div className="md:w-1/2">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="form-control w-full max-w-xs mb-2">
                            <div className="label">
                                <span className="label-text">Height (cm)</span>
                            </div>
                            <input
                                type="text"
                                name="height"
                                placeholder="Type here"
                                className="input border-accent outline-0 focus:border-accent focus:outline-none w-full max-w-md bg-transparent"
                                {...register("height", {
                                    required: {
                                        value: true,
                                        message: "Height is required",
                                    },
                                    pattern: {
                                        value: /^[1-9]\d*$/,
                                        message: "Invalid height",
                                    },
                                })}
                            />
                            <p className="text-accent">
                                {errors.height && errors.height.message}
                            </p>
                        </label>
                        <label className="form-control w-full max-w-xs mb-4">
                            <div className="label">
                                <span className="label-text">Weight (kg)</span>
                            </div>
                            <input
                                type="text"
                                name="weight"
                                placeholder="Type here"
                                className="input border-accent outline-0 focus:border-accent focus:outline-none w-full max-w-xs bg-transparent"
                                {...register("weight", {
                                    required: {
                                        value: true,
                                        message: "Weight is required",
                                    },
                                    pattern: {
                                        value: /^[1-9]\d*$/,
                                        message: "Invalid weight",
                                    },
                                })}
                            />
                            <p className="text-accent">
                                {errors.weight && errors.weight.message}
                            </p>
                        </label>
                        <label className="form-control w-full max-w-xs mb-4">
                            <div>
                                <label className="block mb-2">Gender:</label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        className="form-radio"
                                        name="gender"
                                        value="male"
                                        {...register("gender", {
                                            required: {
                                                value: true,
                                                message: "Gender is required",
                                            },
                                        })}
                                    />
                                    <span className="ml-2">Male</span>
                                </label>
                                <label className="inline-flex items-center ml-6">
                                    <input
                                        type="radio"
                                        className="form-radio"
                                        name="gender"
                                        value="female"
                                        {...register("gender", {
                                            required: {
                                                value: true,
                                                message: "Gender is required",
                                            },
                                        })}
                                    />
                                    <span className="ml-2">Female</span>
                                </label>
                                <label className="inline-flex items-center ml-6">
                                    <input
                                        type="radio"
                                        className="form-radio"
                                        name="gender"
                                        value="other"
                                        {...register("gender", {
                                            required: {
                                                value: true,
                                                message: "Gender is required",
                                            },
                                        })}
                                    />
                                    <span className="ml-2">Other</span>
                                </label>
                            </div>
                            <p className="text-accent">
                                {errors.gender && errors.gender.message}
                            </p>
                        </label>

                        <button
                            type="submit"
                            className="btn rounded-sm bg-primary hover:bg-primary/70 text-bkg border-0"
                        >
                            Calculate BMI
                        </button>
                    </form>
                    {bmi && <p className="mt-3">Your BMI is: {bmi}</p>}
                </div>
                <div className="mt-5 md:mt-0 md:w-1/2">
                    <img
                        src="https://i.ibb.co/Pz3phgq/bmi-calculate.jpg"
                        alt="bmi-calculate"
                    />
                </div>
            </div>
        </div>
    );
};

export default CalculateBMI;
