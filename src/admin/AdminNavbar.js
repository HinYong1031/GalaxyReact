import Sidebar from "./Sidebar";
import { useState } from "react";

function AdminNavBar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); //dropdown is initially closed by initialise false

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const [isSidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start rtl:justify-end">
                            <button
                                onClick={toggleSidebar}
                                aria-controls="logo-sidebar"
                                type="button"
                                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            >
                                <span className="sr-only">Open sidebar</span>
                                <svg
                                    className="w-6 h-6"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        clip-rule="evenodd"
                                        fill-rule="evenodd"
                                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                                    ></path>
                                </svg>
                            </button>
                            <a
                                href="https://flowbite.com"
                                className="flex ms-2 md:me-24"
                            >
                                <img
                                    src="https://flowbite.com/docs/images/logo.svg"
                                    className="h-8 me-3"
                                    alt="FlowBite Logo"
                                />
                                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                                    Flowbite
                                </span>
                            </a>
                        </div>
                        <div className="flex items-center">
                            <div className="flex items-center ms-3">
                                <label className="cursor-pointer grid place-items-center">
                                    <input
                                        type="checkbox"
                                        value="dark"
                                        className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
                                    />
                                    <svg
                                        className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <circle cx="12" cy="12" r="5" />
                                        <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                                    </svg>
                                    <svg
                                        className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                    </svg>
                                </label>
                            </div>
                            <div className="flex items-center ms-3">
                                <button
                                    type="button"
                                    className="flex text-sm bg-gray-100 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                    aria-expanded={isDropdownOpen}
                                    onClick={toggleDropdown}
                                >
                                    <span className="sr-only">
                                        Open user menu
                                    </span>
                                    <div className="w-8 h-8 rounded-full">
                                        <svg
                                            class="text-gray-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                    </div>
                                </button>
                                {isDropdownOpen && (
                                    <div
                                        className="absolute z-50 right-2.5 top-12 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                                        id="dropdown-user"
                                    >
                                        <div className="px-4 py-3" role="none">
                                            <p
                                                className="text-sm text-gray-900 dark:text-white"
                                                role="none"
                                            >
                                                Neil Sims
                                            </p>
                                            <p
                                                className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                                                role="none"
                                            >
                                                neil.sims@flowbite.com
                                            </p>
                                        </div>
                                        <ul className="py-1" role="none">
                                            <li>
                                                <a
                                                    href="/"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    role="menuitem"
                                                >
                                                    Dashboard
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="/"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    role="menuitem"
                                                >
                                                    Settings
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="/"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    role="menuitem"
                                                >
                                                    Earnings
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="/"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    role="menuitem"
                                                >
                                                    Sign out
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <Sidebar isOpen={isSidebarOpen} />
        </>
    );
}

export default AdminNavBar;
