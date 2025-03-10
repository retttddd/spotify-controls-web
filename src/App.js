import {Route, Routes, useNavigate} from "react-router-dom";
import {Suspense, lazy, useEffect, useState} from "react";
import {useAuthCodeHandler} from "./api/auth/authHandler";
import CustomErrorScreen from "./pages/errorscreen";

const WelcomPage = lazy(() => import("./pages/welcome"));
const CustomWebcam = lazy(() => import("./pages/controlsWebCam"));

function App() {
    useAuthCodeHandler();
    const redirectLink = process.env.REACT_APP_REDIRECT_LINK;

    const onClick = () => {
        if (redirectLink) {
            localStorage.clear()
            window.location.href = redirectLink;
        } else {
            return <CustomErrorScreen/>
        }
    };

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<WelcomPage onclick={onClick} />} />
                <Route path="/camera" element={<CustomWebcam />} />
            </Routes>
        </Suspense>
    );
}

export default App;
