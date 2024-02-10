import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const UpdatePassword = () => {
    const { updateUserPassword } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const onSubmit = async (data) => {
        const oldPassword = data.oldPassword;
        const newPassword = data.newPassword;
        const confirmNewPassword = data.confirmNewPassword;
        if (newPassword !== confirmNewPassword) {
            alert("password did not matched");
            return;
        }
        updateUserPassword(oldPassword, newPassword)
            .then((result) => {
                if (result.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Password update successful",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    reset();
                }
            })
            .catch((error) => {
                const errorMessage = error.message;
                // Regular expression pattern to match the error code
                const errorCodePattern = /\(auth\/([^)]+)\)/;

                // Extracting the error code from the message
                const errorCodeMatch = errorMessage.match(errorCodePattern);
                if (errorCodeMatch && errorCodeMatch.length > 1) {
                    // Extracted error code
                    const errorCode = errorCodeMatch[1];
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: `${errorCode}`,
                    });
                }
            });
    };

    return (
        <div>
            <div className="border-dashed border-b-2 pb-2">
                <h1 className=" text-2xl">Update Password</h1>
            </div>
            <div className="w-full md:max-w-lg lg:max-w-lg mx-auto my-10 tracking-widest">
                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label
                            htmlFor="oldPassword"
                            className="block text-sm font-bold mb-2"
                        >
                            Old Password
                        </label>
                        <input
                            id="oldPassword"
                            type={`${showPassword ? "text" : "password"}`}
                            className="shadow border rounded w-full py-3 px-4 leading-tight focus:outline-none focus:shadow-outline bg-slate-700  "
                            placeholder="********"
                            {...register("oldPassword", {
                                required: {
                                    value: true,
                                    message: "Old password is required",
                                },
                            })}
                        />
                        {errors.oldPassword && (
                            <p className="text-red-500 mt-2">
                                {errors.oldPassword.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="newPassword"
                            className="block text-sm font-bold mb-2"
                        >
                            New Password
                        </label>
                        <div className="relative">
                            <input
                                id="newPassword"
                                type={`${showPassword ? "text" : "password"}`}
                                className="shadow border rounded w-full py-3 px-4 leading-tight focus:outline-none focus:shadow-outline bg-slate-700  "
                                placeholder="********"
                                {...register("newPassword", {
                                    required: {
                                        value: true,
                                        message: "Confirm Password is required",
                                    },
                                    minLength: {
                                        value: 6,
                                        message: "Must contain 6 characters",
                                    },
                                    validate: {
                                        upperCase: (fieldValue) => {
                                            return (
                                                /[A-Z]/.test(fieldValue) ||
                                                "Add 1 uppercase"
                                            );
                                        },
                                        lowerCase: (fieldValue) => {
                                            return (
                                                /[a-z]/.test(fieldValue) ||
                                                "Add 1 lowercase"
                                            );
                                        },
                                        numberCase: (fieldValue) => {
                                            return (
                                                /[0-9]/.test(fieldValue) ||
                                                "Add 1 number"
                                            );
                                        },
                                    },
                                })}
                            />
                            {errors.newPassword && (
                                <p className="text-red-500 mt-2">
                                    {errors.newPassword.message}
                                </p>
                            )}
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="confirmNewPassword"
                            className="block text-sm font-bold mb-2"
                        >
                            Confirm New Password
                        </label>
                        <div className="relative">
                            <input
                                id="confirmNewPassword"
                                type={`${showPassword ? "text" : "password"}`}
                                className="shadow border rounded w-full py-3 px-4 leading-tight focus:outline-none focus:shadow-outline bg-slate-700  "
                                placeholder="********"
                                {...register("confirmNewPassword", {
                                    required: {
                                        value: true,
                                        message:
                                            "Confirm New Password is required",
                                    },
                                    minLength: {
                                        value: 6,
                                        message: "Must contain 6 characters",
                                    },
                                    validate: {
                                        upperCase: (fieldValue) => {
                                            return (
                                                /[A-Z]/.test(fieldValue) ||
                                                "Add 1 uppercase"
                                            );
                                        },
                                        lowerCase: (fieldValue) => {
                                            return (
                                                /[a-z]/.test(fieldValue) ||
                                                "Add 1 lowercase"
                                            );
                                        },
                                        numberCase: (fieldValue) => {
                                            return (
                                                /[0-9]/.test(fieldValue) ||
                                                "Add 1 number"
                                            );
                                        },
                                    },
                                })}
                            />
                            {errors.confirmNewPassword && (
                                <p className="text-red-500 mt-2">
                                    {errors.confirmNewPassword.message}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* <p className="text-red-500 mt-2">{passwordError}</p> */}
                    <div
                        className="flex items-center gap-3 mb-6 w-fit cursor-pointer"
                        onClick={handleShowPassword}
                    >
                        <input
                            type="checkbox"
                            id="showPassword"
                            checked={showPassword ? true : false}
                            className="checkbox checkbox-xs"
                            readOnly
                        />
                        <span htmlFor="showPassword">Show password</span>
                    </div>
                    <div className="flex flex-start">
                        <button
                            type="submit"
                            className={`font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-fit bg-primary/70`}
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdatePassword;
