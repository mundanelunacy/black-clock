import { useState, useEffect } from "react";

const timeout = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

let wakeLock: any = null;
const screenlock = async () => {
    if (!("wakeLock" in navigator)) return;
    if (!("request" in navigator.wakeLock)) return;
    try {
        wakeLock = await navigator.wakeLock.request("screen");
        wakeLock.addEventListener("release", () => {
            console.log("Screen Wake Lock released:", wakeLock.released);
        });
    } catch (err) {
        console.error(err);
    }
};

screenlock();

export const App: React.FC<{}> = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const requestWakeLock = async () => {};
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
                {/* <div onClick={() => console.log(wakeLock.released)}>click me</div> */}
            </div>
        </div>
    );
};

export default App;
