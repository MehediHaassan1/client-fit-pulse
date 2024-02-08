import { FaGoogle } from "react-icons/fa";

const GoogleAuth = () => {
    return (
        <div className="mt-4">
            <div className="divider">OR</div>
            <div className="mt-4">
                <button className="border w-full rounded py-3 flex items-center justify-center border-accent">
                    <FaGoogle className="w-6 h-6 text-accent"></FaGoogle>
                </button>
            </div>
        </div>
    );
};

export default GoogleAuth;
