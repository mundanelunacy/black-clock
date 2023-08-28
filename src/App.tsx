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
    const noSleepButtonStyle: React.CSSProperties = {
        color: noSleep.isEnabled ? "transparent" : "white",
        border: noSleep.isEnabled ? "1px solid transparent" : "1px solid white",
        padding: "5px",
        width: "130px",
        textAlign: "center",
        borderRadius: "5px",
        backgroundColor: "transparent",
    };

    const onClick = () => (noSleep.isEnabled ? noSleep.disable() : noSleep.enable());

    return (
        <div style={containerStyle}>
            <div>
                <div style={dateFontStyle}>{time.toLocaleDateString()}</div>
                <div style={timeFontStyle}>{time.toLocaleTimeString()}</div>
                <button style={noSleepButtonStyle} onClick={onClick}>
                    {noSleep.isEnabled ? "disable" : "enable"} no sleep
                </button>
            </div>
        </div>
    );
};

export default App;
