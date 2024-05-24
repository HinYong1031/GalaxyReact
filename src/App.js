import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import TitleUpdater from "./TitleUpdater"; // Import the component that handles title updates
import HomePage from "./HomePage";
import AboutUs from "./AboutUs";
import Dashboard from "./admin/DashboardPage";

function App() {
    const [loading, setLoading] = useState(true);
    const { pathname } = useLocation();

    useEffect(() => {
        // Side effect code
        window.scrollTo(0, 0);
    }, [pathname]); //Dependency Array

    useEffect(() => {
        setTimeout(() => setLoading(false), 1000);
    }, []); //Run only once, use an empty array

    // Determine if the current route is an admin route
    const isAdminRoute = pathname.startsWith("/admin");

    return loading ? (
        <Loader />
    ) : (
        <>
            {/* Render the component responsible for updating the title */}
            <TitleUpdater />

            <Routes>
                <Route path="/admin">
                    <Route path="dashboard" element={<Dashboard />} />
                    {/* Add more admin routes as needed */}
                </Route>
            </Routes>

            <Routes>
                <Route path="/client">
                    <Route path="home" element={<HomePage />} />
                    <Route path="about" element={<AboutUs />} />
                    {/* Add more client routes as needed */}
                </Route>
            </Routes>
        </>
    );
}

export default App;
