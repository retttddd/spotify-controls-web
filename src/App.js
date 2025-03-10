import {Route, Routes} from "react-router-dom";
import {Suspense, lazy} from "react";
import {useAuthCodeHandler} from "./api/auth/authHandler";
import CustomErrorScreen from "./shared/components/errorScreen";
import CustomLoading from "./shared/components/loading";

const LandingPage = lazy(() => import("./pages/landingPage"));
const MainScreenLayout = lazy(() => import("./pages/mainScreen"));

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
        <Suspense fallback={<CustomLoading />}>
            <Routes>
                <Route path="/" element={<LandingPage onclick={onClick} />} />
                <Route path="/camera" element={<MainScreenLayout />} />
                <Route path="/error" element={<CustomErrorScreen />} />
            </Routes>
        </Suspense>
    );
}

export default App;
