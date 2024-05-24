import { NavLink, Link } from "react-router-dom";

function ClientNavBar() {
    return (
        <div className="text-white">
            <div className="navbar bg-black">
                <div className="navbar-start">
                    <div>
                        <NavLink
                            exact
                            to="/"
                            className="btn btn-ghost normal-case text-xl"
                        >
                            <img
                                src="../img/logo.png"
                                height="50px"
                                width="50px"
                                alt="Logo"
                            />
                            &nbsp; Galaxy
                        </NavLink>
                    </div>
                </div>
                <div className="navbar-center lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <NavLink exact to="/">
                                Home
                            </NavLink>
                        </li>
                        <li tabIndex="0"></li>
                        <li>
                            <NavLink to="/offer">
                                Offer
                            </NavLink>
                        </li>
                        <li tabIndex="0"></li>
                        <li>
                            <NavLink to="/about">
                                About
                            </NavLink>
                        </li>
                        <li tabIndex="0"></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex-none">
                        <div className="dropdown dropdown-end">
                            <label
                                tabIndex="0"
                                className="btn btn-ghost btn-circle"
                            >
                                <div className="indicator">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 3 22 22"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                        />
                                    </svg>
                                </div>
                            </label>
                            <div
                                tabIndex="0"
                                className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
                            >
                                <div className="card-body">
                                    <span className="font-bold text-lg"></span>
                                    <span className="text-info"></span>
                                    <div className="card-actions">
                                        <Link
                                            to="/"
                                            className="btn btn-primary btn-block"
                                        >
                                            View Cart
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span id="displayusername"></span>
                        <div className="dropdown dropdown-end">
                            <label
                                tabIndex="0"
                                className="btn btn-ghost btn-circle avatar"
                            >
                                {/* profile icon */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                    />
                                </svg>
                            </label>
                            <ul
                                tabIndex="0"
                                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                            >
                                <li>
                                    <Link
                                        to="/"
                                        className="justify-between nav-link"
                                        style={{ color: "black" }}
                                    >
                                        Profile
                                        <span className="badge">New</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/"
                                        style={{ color: "black" }}
                                    >
                                        Logout
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ClientNavBar;
