# black-clock

**Demo** [black-clock.web.app](https://black-clock.web.app/)

A simple clock written with react with the following features.

-   Black and white and with a simple design
-   Installable webapp that you can download onto your phone
-   'Enable no sleep' button will keep the screen awake until the app is closed
-   Extremely simple to customize with Javascript and CSS

The clock is designed to be used as a screensaver on a computer or a clock on a phone

## Customization

-   `App.tsx` is the main file that renders the clock

```Typescript

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
        color: noSleep.isEnabled ? "black" : "white",
        border: noSleep.isEnabled ? "" : "1px solid white",
        padding: "5px",
        width: "130px",
        textAlign: "center",
        borderRadius: "5px",
    };

    const onClick = () => (noSleep.isEnabled ? noSleep.disable() : noSleep.enable());

    return (
        <div style={containerStyle}>
            <div>
                <div style={dateFontStyle}>{time.toLocaleDateString()}</div>
                <div style={timeFontStyle}>{time.toLocaleTimeString()}</div>
                <div style={noSleepButtonStyle} onClick={onClick}>
                    {noSleep.isEnabled ? "disable" : "enable"} no sleep
                </div>
            </div>
        </div>
    );
};

export default App;

```
