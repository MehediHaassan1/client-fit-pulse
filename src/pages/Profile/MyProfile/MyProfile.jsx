import React, { useState } from "react";
import useUserData from "../../../hooks/useUserData";
import { useForm } from "react-hook-form";
import { FiEdit } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import usePublicApi from "../../../hooks/usePublicApi";
import Swal from "sweetalert2";
import usePrivetApi from "../../../hooks/usePrivetApi";

const MyProfile = () => {
    const { userData, refetch } = useUserData();
    const [genderError, setGenderError] = useState(false);
    const [edit, setEdit] = useState(false);
    const publicApi = usePublicApi();
    const privetApi = usePrivetApi();

    const imageHostingKey = import.meta.env.VITE_imageHosting_key;
    const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        if (data.gender === "choose one") {
            setGenderError(true);
            return;
        }
        setGenderError(false);
        const imageData = { image: data.image[0] };
        const imageResponse = await publicApi.post(
            `${imageHostingUrl}`,
            imageData,
            {
                headers: {
                    "content-type": "multipart/form-data",
                },
            }
        );
        const image = imageResponse?.data?.data?.display_url;
        const userInfo = {
            name: data.fullName,
            email: userData.email,
            gender: data.gender,
            age: data.age,
            bmi: data.bmi,
            image: image,
        };
        const response = await privetApi.patch(
            `/user/${userData?.uid}`,
            userInfo
        );
        if (response.data.modifiedCount > 0) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Profile has been updated",
                showConfirmButton: false,
                timer: 1500,
            });
            refetch();
            setEdit(!edit);
        }
    };

    const handleEditForm = () => {
        setEdit(!edit);
    };

    return (
        <div>
            <div className="flex items-center justify-between border-dashed border-b-2 pb-2">
                <h1 className=" text-2xl">My Profile</h1>
                <div onClick={handleEditForm}>
                    {edit ? (
                        <RxCross2 className="w-5 h-5 text-black cursor-pointer" />
                    ) : (
                        <FiEdit className="w-5 h-5 text-black cursor-pointer" />
                    )}
                </div>
            </div>
            <div className="w-full md:max-w-lg lg:max-w-2xl mx-auto my-10 tracking-widest">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-6 md:flex justify-between gap-4">
                        <div className="md:w-1/2 mb-4 md:mb-0">
                            <label
                                htmlFor="firstName"
                                className="block text-sm font-bold mb-2"
                            >
                                Full Name
                            </label>
                            <div>
                                <input
                                    id="fullName"
                                    type="text"
                                    className={`shadow  border rounded w-full py-3 px-4  leading-tight focus:outline-none focus:shadow-outline bg-slate-700 ${
                                        !edit &&
                                        "bg-[#212833] border-none text-slate-600"
                                    }`}
                                    placeholder="Enter here"
                                    defaultValue={userData?.name}
                                    {...register("fullName", {
                                        required: {
                                            value: true,
                                            message: "Full Name is required",
                                        },
                                    })}
                                    readOnly={edit ? false : true}
                                />
                            </div>
                            {errors.fullName && (
                                <p className="text-red-500 mt-2">
                                    {errors.fullName.message}
                                </p>
                            )}
                        </div>
                        <div className="md:w-1/2 mb-4 md:mb-0">
                            <label
                                htmlFor="email"
                                className="block text-sm font-bold mb-2"
                            >
                                Email
                            </label>
                            <div>
                                <input
                                    id="email"
                                    type="email"
                                    className={`shadow  border rounded w-full py-3 px-4  leading-tight focus:outline-none focus:shadow-outline bg-slate-700  ${
                                        !edit &&
                                        "bg-[#212833] border-none text-slate-600"
                                    }`}
                                    placeholder="Enter here"
                                    defaultValue={userData?.email}
                                    readOnly
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: "Email is required",
                                        },
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: "Invalid email",
                                        },
                                    })}
                                />
                            </div>
                            {errors.email && (
                                <p className="text-red-500 mt-2">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="md:flex justify-between mb-6 gap-4">
                        <div className="md:w-1/2 mb-4 md:mb-0">
                            <label className="block mb-1">Gender</label>
                            <label className="inline-flex items-center w-full">
                                <select
                                    id="gender"
                                    defaultValue={
                                        userData?.gender || "choose one"
                                    }
                                    className="select select-bordered rounded border-white w-full bg-slate-700 text-white focus:outline-none focus:border-white"
                                    disabled={edit ? false : true}
                                    {...register("gender", {
                                        required: true,
                                    })}
                                >
                                    <option disabled value="choose one">
                                        choose one
                                    </option>
                                    <option value="male">male</option>
                                    <option value="female">female</option>
                                    <option value="other">other</option>
                                </select>
                            </label>
                            {genderError && (
                                <p className="text-red-500 mt-2">
                                    Please select an option
                                </p>
                            )}
                        </div>
                        <div className="md:w-1/2 mb-4 md:mb-0">
                            <label
                                htmlFor="age"
                                className="block text-sm font-bold mb-2"
                            >
                                Age
                            </label>
                            <input
                                disabled={edit ? false : true}
                                defaultValue={userData?.age}
                                id="age"
                                type="text"
                                className={`shadow border rounded w-full py-3 px-4 leading-tight focus:outline-none focus:shadow-outline bg-slate-700  ${
                                    !edit &&
                                    "bg-[#212833] border-none text-slate-600"
                                }`}
                                placeholder="Enter here"
                                {...register("age", {
                                    required: {
                                        value: true,
                                        message: "Age is required",
                                    },
                                    pattern: {
                                        value: /^\d+$/,
                                        message: "Only number accepted",
                                    },
                                })}
                            />
                            {errors.age && (
                                <p className="text-red-500 mt-2">
                                    {errors.age.message}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="md:flex justify-between mb-6 gap-4 ">
                        <div className="md:w-1/2 mb-4 md:mb-0">
                            <label
                                htmlFor="bmi"
                                className="block text-sm font-bold mb-2"
                            >
                                BMI
                            </label>
                            <input
                                disabled={edit ? false : true}
                                id="bmi"
                                defaultValue={userData?.bmi}
                                type="text"
                                // onFocus={handleShowBMI}
                                className={`shadow border rounded w-full py-4 px-4 leading-tight focus:outline-none focus:shadow-outline bg-slate-700   ${
                                    !edit &&
                                    "bg-[#212833] border-none text-slate-600"
                                }`}
                                placeholder="Enter here"
                                {...register("bmi", {
                                    required: {
                                        value: true,
                                        message: "BMI is required",
                                    },
                                    pattern: {
                                        value: /^(?!0\d)\d+(\.\d+)?$/,
                                        message: "Only number accepted",
                                    },
                                })}
                            />

                            <p className="text-xs mt-2">
                                Note: Don't know? Check first.
                            </p>

                            {errors.bmi && (
                                <p className="text-red-500 mt-2">
                                    {errors.bmi.message}
                                </p>
                            )}
                        </div>
                        {edit && (
                            <div className="md:w-1/2 mb-4 md:mb-0">
                                <label
                                    htmlFor="image"
                                    className="block text-sm font-bold mb-2"
                                >
                                    Image
                                </label>
                                <div className="relative">
                                    <input
                                        disabled={edit ? false : true}
                                        id="image"
                                        type="file"
                                        className={`shadow border rounded w-full py-3 px-4 leading-tight focus:outline-none focus:shadow-outline bg-slate-700  ${
                                            !edit &&
                                            "bg-[#212833] border-none text-slate-600"
                                        }`}
                                        placeholder="Enter here"
                                        {...register("image", {
                                            required: true,
                                        })}
                                    />
                                </div>
                                {errors.image && (
                                    <p className="text-red-500 mt-2">
                                        Image is required
                                    </p>
                                )}
                            </div>
                        )}
                    </div>

                    <div className="flex flex-start">
                        <button
                            disabled={edit ? false : true}
                            type="submit"
                            className={`font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-fit bg-primary/70 ${
                                !edit &&
                                "bg-[#212833] border-none text-slate-600"
                            }`}
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MyProfile;
