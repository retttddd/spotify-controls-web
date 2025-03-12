export const sendCommand = async (command) => {
    try {
        const response = await fetch("http://127.0.0.1:5000/postcommand", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                key: "value",
                command: command,
            }),
        });

        const data = await response.json();
        console.log("Response:", data);
    } catch (error) {
        console.error("Error sending command:", error);
    }
};
