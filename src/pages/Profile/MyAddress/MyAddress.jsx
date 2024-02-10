import { useState } from "react";
import { useForm } from "react-hook-form";
import { FiEdit } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import useUserData from "../../../hooks/useUserData";
import usePublicApi from "../../../hooks/usePublicApi";
import Swal from "sweetalert2";
import usePrivetApi from "../../../hooks/usePrivetApi";

const MyAddress = () => {
    const { userData, refetch } = useUserData();
    console.log(userData);
    const publicApi = usePublicApi();
    const privetApi = usePrivetApi();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [edit, setEdit] = useState(false);
    const handleEditForm = () => {
        setEdit(!edit);
    };

    const onSubmit = async (data) => {
        const userInfo = {
            county: data.country,
            city: data.city,
            state: data.state,
            postalCode: data.postalCode,
            streetAddress: data.streetAddress,
            apartment: data.apartment,
        };
        console.log(userInfo);
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
    return (
        <div>
            <div className="flex items-center justify-between border-dashed border-b-2 pb-2">
                <h1 className=" text-2xl">My Address</h1>
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
                                htmlFor="country"
                                className="block text-sm font-bold mb-2"
                            >
                                Country
                            </label>
                            <div>
                                <input
                                    id="country"
                                    type="text"
                                    className={`shadow  border rounded w-full py-3 px-4  leading-tight focus:outline-none focus:shadow-outline bg-slate-700  ${
                                        !edit &&
                                        "bg-[#212833] border-none text-slate-600"
                                    }`}
                                    placeholder="Enter here"
                                    {...register("country", {
                                        required: {
                                            value: true,
                                            message: "country is required",
                                        },
                                    })}
                                    readOnly={edit ? false : true}
                                    defaultValue={userData.county}
                                />
                            </div>
                            {errors.country && (
                                <p className="text-red-500 mt-2">
                                    {errors.country.message}
                                </p>
                            )}
                        </div>
                        <div className="md:w-1/2 mb-4 md:mb-0">
                            <label
                                htmlFor="city"
                                className="block text-sm font-bold mb-2"
                            >
                                City
                            </label>
                            <div>
                                <input
                                    id="city"
                                    type="text"
                                    className={`shadow  border rounded w-full py-3 px-4  leading-tight focus:outline-none focus:shadow-outline bg-slate-700  ${
                                        !edit &&
                                        "bg-[#212833] border-none text-slate-600"
                                    }`}
                                    placeholder="Enter here"
                                    {...register("city", {
                                        required: {
                                            value: true,
                                            message: "city is required",
                                        },
                                    })}
                                    readOnly={edit ? false : true}
                                    defaultValue={userData.city}
                                />
                            </div>
                            {errors.city && (
                                <p className="text-red-500 mt-2">
                                    {errors.city.message}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="md:flex justify-between mb-6 gap-4">
                        <div className="md:w-1/2 mb-4 md:mb-0">
                            <label
                                htmlFor="state"
                                className="block text-sm font-bold mb-2"
                            >
                                State
                            </label>
                            <div>
                                <input
                                    id="state"
                                    type="text"
                                    className={`shadow  border rounded w-full py-3 px-4  leading-tight focus:outline-none focus:shadow-outline bg-slate-700  ${
                                        !edit &&
                                        "bg-[#212833] border-none text-slate-600"
                                    }`}
                                    placeholder="Enter here"
                                    {...register("state", {
                                        required: {
                                            value: true,
                                            message: "state is required",
                                        },
                                    })}
                                    readOnly={edit ? false : true}
                                    defaultValue={userData.state}
                                />
                            </div>
                            {errors.state && (
                                <p className="text-red-500 mt-2">
                                    {errors.state.message}
                                </p>
                            )}
                        </div>
                        <div className="md:w-1/2 mb-4 md:mb-0">
                            <label
                                htmlFor="postalCode"
                                className="block text-sm font-bold mb-2"
                            >
                                Postal Code
                            </label>
                            <input
                                id="postalCode"
                                type="text"
                                className={`shadow border rounded w-full py-3 px-4 leading-tight focus:outline-none focus:shadow-outline bg-slate-700  ${
                                    !edit &&
                                    "bg-[#212833] border-none text-slate-600"
                                }`}
                                placeholder="Enter here"
                                {...register("postalCode", {
                                    required: {
                                        value: true,
                                        message: "postal code is required",
                                    },
                                })}
                                readOnly={edit ? false : true}
                                defaultValue={userData.postalCode}
                            />
                            {errors.postalCode && (
                                <p className="text-red-500 mt-2">
                                    {errors.postalCode.message}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="md:flex justify-between mb-6 gap-4 ">
                        <div className="md:w-1/2 mb-4 md:mb-0">
                            <label
                                htmlFor="streetAddress"
                                className="block text-sm font-bold mb-2"
                            >
                                Street Address
                            </label>
                            <input
                                id="streetAddress"
                                type="text"
                                className={`shadow border rounded w-full py-3 px-4 leading-tight focus:outline-none focus:shadow-outline bg-slate-700
                                ${
                                    !edit &&
                                    "bg-[#212833] border-none text-slate-600"
                                }  `}
                                placeholder="Enter here"
                                {...register("streetAddress", {
                                    required: {
                                        value: true,
                                        message: "street address is required",
                                    },
                                })}
                                readOnly={edit ? false : true}
                                defaultValue={userData.streetAddress}
                            />
                            {errors.streetAddress && (
                                <p className="text-red-500 mt-2">
                                    {errors.streetAddress.message}
                                </p>
                            )}
                        </div>
                        <div className="md:w-1/2 mb-4 md:mb-0">
                            <label
                                htmlFor="apartment"
                                className="block text-sm font-bold mb-2"
                            >
                                Apartment
                            </label>
                            <div className="relative">
                                <input
                                    id="apartment"
                                    type="text"
                                    className={`shadow border rounded w-full py-3 px-4 leading-tight focus:outline-none focus:shadow-outline bg-slate-700  ${
                                        !edit &&
                                        "bg-[#212833] border-none text-slate-600"
                                    }`}
                                    placeholder="Enter here"
                                    {...register("apartment", {
                                        required: true,
                                    })}
                                    readOnly={edit ? false : true}
                                    defaultValue={userData.apartment}
                                />
                            </div>
                            {errors.apartment && (
                                <p className="text-red-500 mt-2">
                                    apartment is required
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-start">
                        <button
                            disabled={edit ? false : true}
                            type="submit"
                            className={`font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-fit bg-primary/70  ${
                                !edit &&
                                "bg-[#212833] border-none text-slate-700"
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

export default MyAddress;
