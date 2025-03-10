import { useEffect } from "react";
import { AuthService } from "./authService";
import { useNavigate } from "react-router-dom";

export const useAuthCodeHandler = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const urlSearch = new URLSearchParams(window.location.search);
        const code = urlSearch.get("code");

        if (code !== null) {
            AuthService.sendAuthCode(code)
                .then((response) => {
                    if (response.access === true && response.id) {
                        localStorage.setItem("token", response?.id);
                        localStorage.setItem("access", "true"); // Store as string
                        navigate("/camera"); // Navigate immediately
                    }
                })
                .catch((error) => console.error("Auth error:", error));
        }
    }, [navigate]);
};
