import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
                <h2 className="text-3xl font-bold mb-6 text-center text-white">
                    <span className="text-accent">LogIn</span>
                </h2>
                <form>
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
                        <div>
                            <input
                                id="password"
                                type="password"
                                className="shadow border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-transparent border-accent  "
                                placeholder="Enter your password"
                            />
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
                <div className="mt-4">
                    <div className="divider">OR</div>
                    <div className="mt-4">
                        <button className="border w-full rounded py-3 flex items-center justify-center border-accent">
                            <FaGoogle className="w-6 h-6 text-accent"></FaGoogle>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
