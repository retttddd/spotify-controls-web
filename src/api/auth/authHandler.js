import { useEffect } from "react";
import { AuthService } from "./authService";

export const useAuthCodeHandler = () => {
    useEffect(() => {
        const urlSearch = new URLSearchParams(window.location.search);
        const code = urlSearch.get("code");

        if (code !== null) {
            AuthService.sendAuthCode(code)
                .then((response) => console.log("Auth response:", response))
                .catch((error) => console.error("Auth error:", error));
        }
    }, []);
};
