import { useState } from "react";
import { useInterval } from "./useInterval";
import NoSleep from "nosleep.js";

const noSleep = new NoSleep();

export const App: React.FC<{}> = () => {
    const [time, setTime] = useState(new Date());
    useInterval(() => setTime(new Date()), 1000);
    const containerStyle: React.CSSProperties = {
        display: "flex",
        alignItems: "center",
        height: "100vh",
        justifyContent: "center",
        color: "#ffffff",
    };
    const dateFontStyle: React.CSSProperties = { fontSize: "5vw" };
    const timeFontStyle: React.CSSProperties = { fontSize: "15vw" };
    const noSleepFontStyle: React.CSSProperties = { color: noSleep.isEnabled ? "black" : "white" };
    const onClick = () => (noSleep.isEnabled ? noSleep.disable() : noSleep.enable());
    return (
        <div style={containerStyle}>
            <div>
                <div style={dateFontStyle}>{time.toLocaleDateString()}</div>
                <div style={timeFontStyle}>{time.toLocaleTimeString()}</div>
                <div style={noSleepFontStyle} onClick={onClick}>
                    {noSleep.isEnabled ? "disable" : "enable"} no sleep
                </div>
            </div>
        </div>
    );
};

export default App;
