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


    useEffect(() => {
        const qString = window.location.search;
        const urlSearch = new URLSearchParams(qString);
        const code = urlSearch.get("code");
        const authParams = {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: "Basic " + btoa(`${client_id}:${client_secret}`),
            },
            body: new URLSearchParams({
                grant_type: "authorization_code",
                redirect_uri: redirect_uri,
                code: code,
            }),
            };
            console.log(authParams); // Now correctly placed
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
