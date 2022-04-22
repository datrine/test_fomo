import { useState } from "react";
import { useEffect } from "react";

let FooterNotification = ({ children, ttl }) => {
    let [display, changeDisplayState] = useState(true)
    useEffect(() => {
        if (typeof ttl === "number") {
            setTimeout(() => {
                changeDisplayState(false)
            }, ttl);
        }
    }, [])
    return <>
        {display ? <div className="fixed bottom-0 w-screen h-28 bg-black" >
            {children}
        </div> : null}
    </>
}

export { FooterNotification };