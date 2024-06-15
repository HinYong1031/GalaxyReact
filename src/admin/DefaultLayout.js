import { useEffect, useState, useRef } from "react";
import AdminNavBar from "./AdminNavbar";
import Sidebar from "./Sidebar";

function DefaultLayout({ children }) {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const sidebarRef = useRef(null);
    const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setSidebarOpen(false);
        }
    };
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <AdminNavBar toggleSidebar={toggleSidebar} />
                <div className="flex flex-1">
                    <div ref={sidebarRef}>
                        <Sidebar isOpen={isSidebarOpen} />
                    </div>
                    <main className="flex-1 p-4 bg-white dark:bg-gray-800 mx-auto max-w-screen-2xl mt-16 sm:ml-64">
                        {children}
                    </main>
                </div>
            </div>
        </>
    );
}

export default DefaultLayout;
