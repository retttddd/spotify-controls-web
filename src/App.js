import { Route, Routes, useNavigate } from "react-router-dom";
import {Suspense, lazy, useEffect} from "react";
import {useAuthCodeHandler} from "./api/auth/authHandler";

const WelcomPage = lazy(() => import("./pages/welcome"));
const CustomWebcam = lazy(() => import("./pages/controlsWebCam"));

function App() {
    useAuthCodeHandler();
    const navigate = useNavigate();
    const redirectLink = process.env.REACT_APP_REDIRECT_LINK;

    const onClick = () => {
        if (redirectLink) {
            window.location.href = redirectLink;
        } else {
            //navigate("/errorScreen"); futureproof
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
