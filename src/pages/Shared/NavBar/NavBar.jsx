import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import { IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";

const NavBar = () => {
    const user = false;
    const navLinks = (
        <>
            <li>
                <NavLink to="/" className="text-txt ">
                    Home
                </NavLink>
            </li>
            {!user && (
                <li>
                    <NavLink to="/login" className="text-txt">
                        login
                    </NavLink>
                </li>
            )}
        </>
    );

    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
    );
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const myTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", myTheme);
    }, [theme]);

    const handleDarkMode = () => {
        if (theme === "dark") {
            setTheme("light");
            setToggle(true);
        } else {
            setTheme("dark");
            setToggle(false);
        }
    };

    return (
        <div className="h-full w-full bg-bkg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 sticky top-0 z-50">
            <div className="navbar bg-bkg text-txt">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden text-accent"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            {navLinks}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost text-xl">
                        Fit Pulse{" "}
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{navLinks}</ul>
                </div>
                <div className="navbar-end">
                    <div
                        onClick={handleDarkMode}
                        className="flex items-center justify-center mx-2"
                    >
                        <input
                            type="checkbox"
                            className="toggle toggle-error"
                            checked={toggle}
                        />
                    </div>
                    {user ? (
                        <>
                            <div className="dropdown dropdown-end">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="btn btn-ghost btn-circle avatar"
                                >
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="Tailwind CSS Navbar component"
                                            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                        />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                                >
                                    <li>
                                        <a>Profile</a>
                                    </li>
                                    <li>
                                        <a>Settings</a>
                                    </li>
                                    <li>
                                        <a>Logout</a>
                                    </li>
                                </ul>
                            </div>
                        </>
                    ) : (
                        <FaUserCircle className="w-8 h-8 bg-accent rounded-full"></FaUserCircle>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NavBar;
