export const AuthService = {
    async sendAuthCode(code) {
        const authServer = process.env.REACT_APP_BACKEND_URL;
        try {
            const response = await fetch('http://127.0.0.1:5000/auth', {
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
