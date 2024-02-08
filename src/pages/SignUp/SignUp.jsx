import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleAuth from "../../components/GoogleAuth/GoogleAuth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const SignUp = () => {
    const { createFitPulseUser, updateFitPulseUserProfile, user } = useAuth();

    const navigate = useNavigate();

    const [passwordError, setPasswordError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        if (data.password !== data.cPassword) {
            setPasswordError("Password did not matched");
            return;
        }

        setPasswordError("");

        const name = data.firstName + " " + data.lastName;
        const email = data.email;
        const password = data.password;

        createFitPulseUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                if (user) {
                    updateFitPulseUserProfile(name);
                    navigate("/");
                }
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg">
                <h2 className="text-3xl font-bold mb-6 text-center text-white">
                    <span className="text-accent">SignUp</span>
                </h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-6 flex justify-between">
                        <div>
                            <label
                                htmlFor="firstName"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                First Name
                            </label>
                            <div>
                                <input
                                    id="firstName"
                                    type="text"
                                    className="shadow  border rounded w-full py-3 px-4  leading-tight focus:outline-none focus:shadow-outline bg-transparent border-accent"
                                    placeholder="Enter here"
                                    {...register("firstName", {
                                        required: {
                                            value: true,
                                            message: "Name is required",
                                        },
                                    })}
                                />
                            </div>
                            {errors.firstName && (
                                <p className="text-red-500 mt-2">
                                    {errors.firstName.message}
                                </p>
                            )}
                        </div>
                        <div>
                            <label
                                htmlFor="lastName"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                <i className="fas fa-envelope mr-2"></i>Last
                                Name
                            </label>
                            <div>
                                <input
                                    id="lastName"
                                    type="text"
                                    className="shadow  border rounded w-full py-3 px-4  leading-tight focus:outline-none focus:shadow-outline bg-transparent border-accent"
                                    placeholder="Enter here"
                                    {...register("lastName", {
                                        required: {
                                            value: true,
                                            message: "Name is required",
                                        },
                                    })}
                                />
                            </div>
                            {errors.lastName && (
                                <p className="text-red-500 mt-2">
                                    {errors.lastName.message}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="email"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Email
                        </label>
                        <div>
                            <input
                                id="email"
                                type="email"
                                className="shadow  border rounded w-full py-3 px-4  leading-tight focus:outline-none focus:shadow-outline bg-transparent border-accent"
                                placeholder="Enter here"
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
                    <div className="mb-2 flex justify-between">
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Password
                            </label>
                            <input
                                id="password"
                                type={`${showPassword ? "text" : "password"}`}
                                className="shadow border rounded w-full py-3 px-4 leading-tight focus:outline-none focus:shadow-outline bg-transparent border-accent  "
                                placeholder="Enter here"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is required",
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
                            {errors.password && (
                                <p className="text-red-500 mt-2">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>
                        <div>
                            <label
                                htmlFor="cPassword"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Confirm Password
                            </label>
                            <div className="relative">
                                <input
                                    id="cPassword"
                                    type={`${
                                        showPassword ? "text" : "password"
                                    }`}
                                    className="shadow border rounded w-full py-3 px-4 leading-tight focus:outline-none focus:shadow-outline bg-transparent border-accent  "
                                    placeholder="Enter here"
                                    {...register("cPassword", {
                                        required: {
                                            value: true,
                                            message:
                                                "Confirm Password is required",
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
                                {errors.cPassword && (
                                    <p className="text-red-500 mt-2">
                                        {errors.cPassword.message}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                    <p className="text-red-500 mt-2">{passwordError}</p>
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
                    {/* <div className="mb-6">
                        <label className="block mb-2">Gender</label>
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                className="form-radio text-red-500"
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
                                className="form-radio radio-accent"
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
                                className="form-radio radio-accent"
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
                        {errors.gender && (
                            <p className="text-red-500 mt-2">
                                {errors.gender.message}
                            </p>
                        )}
                    </div> */}

                    {/* <div className="flex justify-between mb-6">
                        <div>
                            <label
                                htmlFor="age"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Age
                            </label>
                            <input
                                id="age"
                                type="text"
                                className="shadow border rounded w-full py-3 px-4 leading-tight focus:outline-none focus:shadow-outline bg-transparent border-accent  "
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
                        <div>
                            <label
                                htmlFor="bmi"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                BMI
                            </label>
                            <input
                                id="bmi"
                                type="text"
                                onFocus={handleShowBMI}
                                className="shadow border rounded w-full py-3 px-4 leading-tight focus:outline-none focus:shadow-outline bg-transparent border-accent  "
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
                            {!showBMI && (
                                <p className="text-xs mt-2">
                                    Note: Don't know? Check first.
                                </p>
                            )}
                            {errors.bmi && (
                                <p className="text-red-500 mt-2">
                                    {errors.bmi.message}
                                </p>
                            )}
                        </div>
                    </div> */}

                    {/* <div className="mb-6">
                        <label
                            htmlFor="image"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Image
                        </label>
                        <div className="relative">
                            <input
                                id="image"
                                type="file"
                                className="shadow border rounded w-full py-3 px-4 leading-tight focus:outline-none focus:shadow-outline bg-transparent border-accent"
                                placeholder="Enter here"
                                {...register("image", {
                                    required: {
                                        value: true,
                                        message: "Image is required",
                                    },
                                })}
                            />
                        </div>
                        <p className="text-red-500 mt-2">{imageError}</p>
                    </div> */}

                    <div className="flex items-center justify-center">
                        <button
                            type="submit"
                            className="font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full bg-primary/70"
                        >
                            SignUp
                        </button>
                    </div>
                </form>
                <p className="text-center text-gray-600 mt-6">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-500 hover:underline">
                        Login
                    </Link>
                </p>
                <GoogleAuth></GoogleAuth>
            </div>
        </div>
    );
};

export default SignUp;
