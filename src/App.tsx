import { useState, useEffect } from "react";

export const timeout = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const App: React.FC<{}> = () => {
    const [time, setTime] = useState(new Date());
    const [wakeLock, setWakeLock] = useState<any>(null);

    useEffect(() => {
        const requestWakeLock = async () => {
            if (!("wakeLock" in navigator)) return;
            if (!("request" in navigator.wakeLock)) return;
            try {
                const temp = await navigator.wakeLock.request("screen");
                temp.addEventListener("release", () => {
                    console.log("Screen Wake Lock released:", temp.released);
                });
                setWakeLock(temp);
            } catch (err) {
                console.error(err);
            }
        };

        requestWakeLock();

        return () => {
            if (wakeLock) wakeLock.release();
            setWakeLock(null);
        };
    });
    useEffect(() => {
        const main = async () => {
            while (true) {
                await timeout(1000);
                setTime(new Date());
            }
        };
        main();
    }, []);

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
