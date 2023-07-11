import { useState, useEffect } from "react";

export const timeout = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const App: React.FC<{}> = () => {
    const [time, setTime] = useState(new Date());
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
