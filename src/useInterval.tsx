// Taken from https://blog.bitsrc.io/polling-in-react-using-the-useinterval-custom-hook-e2bcefda4197

import { useEffect, useRef } from "react";

export const useInterval = (callback: () => void, delay: number | null) => {
    const savedCallback = useRef<() => void | null>();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        const tick = () => {
            if (savedCallback.current) {
                savedCallback.current();
            }
        };
        if (delay !== null) {
            const id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
};
