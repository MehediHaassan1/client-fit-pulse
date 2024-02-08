import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import usePublicApi from "../../hooks/usePublicApi";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const GoogleAuth = () => {
    const { signInWithGoogle } = useAuth();
    const publicApi = usePublicApi();
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(async (result) => {
                const user = result.user;
                if (user) {
                    const userInfo = {
                        name: user?.displayName,
                        email: user?.email,
                        uid: user?.uid,
                    };
                    const response = await publicApi.get(
                        `/user?email=${user?.email}`
                    );
                    if (response.data.insertedId) {
                        navigate("/");
                    } else {
                        const res = await publicApi.post("/user", userInfo);
                        if (res.data.insertedId) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Logged in successful",
                                showConfirmButton: false,
                                timer: 1500,
                            });
                            navigate("/");
                        }
                    }
                }
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    };

    return (
        <div className="mt-4">
            <div className="divider">OR</div>
            <div className="mt-4">
                <button
                    onClick={handleGoogleLogin}
                    className="border w-full rounded py-3 flex items-center justify-center border-accent"
                >
                    <FaGoogle className="w-6 h-6 text-accent"></FaGoogle>
                </button>
            </div>
        </div>
    );
};

export default GoogleAuth;
