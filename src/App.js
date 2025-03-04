import { Route, Routes, useNavigate } from "react-router-dom";
import {Suspense, lazy, useEffect} from "react";

const WelcomPage = lazy(() => import("./pages/welcome"));
const CustomWebcam = lazy(() => import("./pages/controlsWebCam"));

function App() {
    const navigate = useNavigate();
    const redirectLink = process.env.REACT_APP_REDIRECT_LINK;
    console.log(redirectLink);
    const client_id = process.env.REACT_APP_CLIENT_ID;
    const client_secret = process.env.REACT_APP_CLIENT_SECRET;
    const redirect_uri = process.env.REACT_APP_REDIRECT_URI;

    const sendAuthCode = async (code) => {
        try {
            const response = await fetch("http://127.0.0.1:5000/auth", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ code }),
            });

            const data = await response.json();
            console.log("Response:", data);
        } catch (error) {
            console.error("Error sending auth code:", error);
        }
    };

    useEffect(() => {
        const qString = window.location.search;
        const urlSearch = new URLSearchParams(qString);
        const code = urlSearch.get("code");
        console.log(code);
        if (code) {
            sendAuthCode(code);
        }
    }, [window.location.search]);

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
