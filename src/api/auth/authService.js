export const AuthService = {
    async sendAuthCode(code) {
        try {
            const authServer = process.env.REACT_APP_BACKEND_URL + "auth";
            const response = await fetch(authServer, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ code }),
            });

            if (!response.ok) {
                throw new Error(`Failed to send auth code: ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            console.error("Error in AuthService:", error);
            throw error;
        }
    }
};
