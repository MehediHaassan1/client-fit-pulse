import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import GoogleAuth from "../../components/GoogleAuth/GoogleAuth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const Login = () => {
    const { signInFitPulseUser } = useAuth();

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
        signInFitPulseUser(data.email, data.password)
            .then((userCredential) => {
                // Signed up
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                // ..
            });
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
                <h2 className="text-3xl font-bold mb-6 text-center text-white">
                    <span className="text-accent">LogIn</span>
                </h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-6">
                        <label
                            htmlFor="email"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            <i className="fas fa-envelope mr-2"></i>Email
                        </label>
                        <div>
                            <input
                                id="email"
                                type="email"
                                className="shadow  border rounded w-full py-3 px-4  leading-tight focus:outline-none focus:shadow-outline bg-transparent border-accent"
                                placeholder="Enter your email"
                                {...register("email", { required: true })}
                            />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="password"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Password
                        </label>
                        <div className="relative">
                            <input
                                id="password"
                                type={`${showPassword ? "text" : "password"}`}
                                className="shadow border rounded w-full py-3 px-4 leading-tight focus:outline-none focus:shadow-outline bg-transparent border-accent  "
                                placeholder="Enter your password"
                                {...register("password", { required: true })}
                            />
                            <div
                                className="absolute right-0 top-0 py-3 px-4 cursor-pointer"
                                onClick={handleShowPassword}
                            >
                                {showPassword ? (
                                    <FaEye className="w-5 h-5" />
                                ) : (
                                    <FaEyeSlash className="w-5 h-5" />
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            type="submit"
                            className="font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full bg-primary/70"
                        >
                            LogIn
                        </button>
                    </div>
                    <div className="text-center mt-4">
                        <a href="#" className="text-gray-600 hover:underline">
                            Forgot password?
                        </a>
                    </div>
                </form>
                <p className="text-center text-gray-600 mt-6">
                    Don't have an account?{" "}
                    <Link
                        to="/signup"
                        className="text-blue-500 hover:underline"
                    >
                        Sign up
                    </Link>
                </p>
                <GoogleAuth></GoogleAuth>
            </div>
        </div>
    );
};

export default Login;
