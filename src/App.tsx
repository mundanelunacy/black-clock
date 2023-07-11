import { useState, useEffect } from "react";

export const timeout = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const App: React.FC<{}> = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const requestWakeLock = async () => {
            if (!("wakeLock" in navigator)) return;
            if (!("request" in navigator.wakeLock)) return;
            try {
                const wakeLock = await navigator.wakeLock.request("screen");
                wakeLock.addEventListener("release", () => {
                    console.log("Screen Wake Lock released:", wakeLock.released);
                });
            } catch (err) {
                console.error(err);
            }
        };
        requestWakeLock();
    }, []);

    useEffect(() => {
        const main = async () => {
            while (true) {
                await timeout(1000);
                setTime(new Date());
            }
        };
        main();
    });

    const style = {
        display: "flex",
        alignItems: "center",
        height: "100vh",
        justifyContent: "center",
        color: "#ffffff",
    };

    return (
        <div style={style}>
            <div style={{}}>
                <div style={{ fontSize: "3vw" }}>{time.toLocaleDateString()}</div>
                <div style={{ fontSize: "10vw" }}>{time.toLocaleTimeString()}</div>
            </div>
        </div>
    );
};

export default App;
