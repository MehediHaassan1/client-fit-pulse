import { IoInformationCircle } from "react-icons/io5";
import Swal from "sweetalert2";
import useUserData from "../../../hooks/useUserData";
import usePrivetApi from "../../../hooks/usePrivetApi";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
const DeleteAccount = () => {
    const { userData } = useUserData();
    const { deleteFitPulseUser, signOutFitPulseUser } = useAuth();
    const privetApi = usePrivetApi();
    const navigate = useNavigate();
    const handleDeletUser = (id) => {
        Swal.fire({
            title: "Type 'confirm delete'",
            input: "text",
            inputAttributes: {
                autocapitalize: "off",
            },
            showCancelButton: true,
            confirmButtonText: "Delete",
            showLoaderOnConfirm: true,
            confirmButtonColor: "#EF4444",
            preConfirm: async (input) => {
                if (input === "confirm delete") {
                    const deleteResponse = await privetApi.delete(
                        `/user/${id}`
                    );
                    if (deleteResponse.data.deletedCount > 0) {
                        deleteFitPulseUser()
                            .then(() => {
                                Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: "Account Deleted",
                                    showConfirmButton: false,
                                    timer: 1500,
                                });
                                navigate("/");
                                signOutFitPulseUser();
                            })
                            .catch((error) => {
                                console.log(error.message);
                            });
                    }
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong",
                    });
                }
            },
        });
    };

    return (
        <div>
            <div className="border-dashed border-b-2 pb-2">
                <h1 className=" text-2xl">Delete Account</h1>
            </div>
            <div className="py-10">
                <h1 className="md:text-4xl flex gap-2 items-center mb-5">
                    <IoInformationCircle /> Before You Delete
                </h1>
                <p>
                    Please be aware that deleting your account is irreversible.
                    We can’t help you recover your account after you delete it.
                    When you delete your account, you remove all of your Data.
                    Your username will be released for re-use.
                </p>

                <p className="my-5">
                    You don’t need to delete your account to change your profile
                    name or other information. You can update your account
                    information in your account settings.
                </p>
                <div className="border p-2 rounded">
                    <div className="border-4 border-red-500 bg-black p-5 rounded">
                        <h1 className="text-2xl md:text-4xl uppercase font-black">
                            mega warning!
                        </h1>
                        <p>
                            You are going to delete your profile... absolutely
                            everything.
                            <br />
                            This cannot be undone, so be very sure.
                        </p>
                        <button
                            onClick={() => handleDeletUser(userData._id)}
                            className="my-5 bg-red-500 px-4 py-2 rounded capitalize"
                        >
                            I understand, please delete my account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteAccount;
