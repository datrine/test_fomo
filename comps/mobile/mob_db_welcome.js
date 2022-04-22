import { GiHamburgerMenu } from "react-icons/gi"
import { FaTimes } from "react-icons/fa"
import { useEffect, useRef, useState } from "react"
//let btn=(new HTMLButtonElement())
//btn.className
let Intro = () => {
    let [showBanner, toggleBanner] = useState(false);
    let [openMenu, toggleMenu] = useState(false);
              
    return <>
        <div className=" mt-[80px] bg-[#dbdddf] pb-5 pt-2">
            <SelectClosableBanner />
            <ClosableBanner />
            <ClosableBanner />
            <ClosableBanner />

        </div>
    </>
}

let SelectClosableBanner = ({  }) => {
    let [isBannerClosed, changeBannerState] = useState(false);
    return <>
        {isBannerClosed ? null : <div className="p-2 h-36 mb-2 mt-3 bg-black ">
            <p className="text-right" >
                <button onClick={e => {
                    changeBannerState(true)
                }} className=" rounded-full bg-white text-black p-2" >
                    <FaTimes />
                </button>
            </p>
            <div className=" p-2  h-[full] flex flex-col items-center justify-center">
                <button
                    className=" p-2 text-lg bg-green-500 text-white rounded-3xl 
                    ring-1 shadow-md focus:ring-blue-500 " >Select ff A Plan</button>

            </div>
        </div>}

    </>
}

let ClosableBanner = ({ handleClose, closeComp }) => {
    let [isBannerClosed, changeBannerState] = useState(false);
    return <>
        {isBannerClosed ? null : <div className="p-2 h-36 mb-2 bg-white ">
            <p className="text-right" >
                {closeComp ? closeComp : <CtxMenu
                    closeBannerHook={changeBannerState}
                    handleClose={handleClose} />}
            </p>
        </div>}

    </>
}

function CtxMenu({ closeBannerHook, handleClose = () => { }, menuListComps = [] }) {
    let ref = useRef();
    let [openMenu, toggleMenu] = useState(false)
    let [refClientRect, changeClientRect] =
        useState(typeof document === "object" && document?.body?.getBoundingClientRect());

    useEffect(() => {
        let dimensions = ref.current.getBoundingClientRect();

        changeClientRect(dimensions)
    }, []);

    return <>
        <button ref={ref} onClick={e => {
            toggleMenu(!openMenu)
        }}
            className=" w-[30px] h-[30px] rounded-[50%] bg-white text-xl">
            <strong>...</strong>
        </button>
        <div style={{ top: refClientRect.top + 50, }}
            className={`container w-[100] 
            ${openMenu ? "" : "hidden"} right-10 align-text-bottom `}>
            <ul>
                {menuListComps.map((comp, index) => <> <li key={index} >
                    {comp}
                </li>
                </>)}
                <li onClick={e => {
                    closeBannerHook(true)
                    handleClose(e)
                }}>
                    <span> Dismiss</span>
                </li>
            </ul>
        </div>
    </>
}


export { Intro };