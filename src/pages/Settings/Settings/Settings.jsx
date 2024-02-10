import { TbPasswordUser } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";
import NavBar from "../../Shared/NavBar/NavBar";
import useUserData from "../../../hooks/useUserData";
import { TiUserDelete } from "react-icons/ti";

const Settings = () => {
    const { userData } = useUserData();
    return (
        <>
            <NavBar></NavBar>
            <div className="max-w-screen-xl mx-auto px-4 md:px-10 lg:px-20 py-5">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-12 min-h-screen px-0">
                    <div className="md:col-span-4 lg:col-span-3 bg-primary p-4 lg:p-10 rounded-md text-center min-h-screen text-black">
                        {userData?.image ? (
                            <div className="avatar">
                                <div className="w-32 rounded-full">
                                    <img
                                        src={userData?.image}
                                        className="object-cover object-top"
                                    />
                                </div>
                            </div>
                        ) : (
                            <div className="avatar placeholder">
                                <div className="bg-neutral text-neutral-content rounded-full w-32">
                                    <span className="text-5xl uppercase">
                                        {userData?.name?.slice(0, 1)}
                                    </span>
                                </div>
                            </div>
                        )}

                        <div>
                            <h2 className="text-xl capitalize">
                                {userData?.name}
                            </h2>
                            <h2 className="text-md">
                                {userData?.uid?.slice(0, 6)}
                            </h2>
                        </div>
                        <div className="my-5 bg-primary space-y-4">
                            <NavLink
                                className="flex items-center gap-2 border p-2 rounded-md text-sm"
                                to="update-password"
                            >
                                <TbPasswordUser className="w-5 h-5" /> Update
                                password
                            </NavLink>
                            <NavLink
                                className="flex items-center gap-2 border p-2 rounded-md text-sm"
                                to="delete-account"
                            >
                                <TiUserDelete className="w-5 h-5" /> Delete
                                Account
                            </NavLink>
                        </div>
                    </div>
                    <div className="text-white md:col-span-8 lg:col-span-9 bg-slate-700 p-4 lg:p-10 rounded-md">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Settings;
