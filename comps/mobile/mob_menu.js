import { GiHamburgerMenu } from "react-icons/gi"
import { FaTimes } from "react-icons/fa"
import { IoIosArrowDropright, IoMdGitNetwork } from "react-icons/io"
import { IoSettingsOutline, IoAnalyticsOutline, } from "react-icons/io5"
import { MdDashboard, MdSummarize } from "react-icons/md"
import { BiChevronRight, BiChevronDown } from "react-icons/bi"
import { BsJournalBookmark, BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs"
import { AiFillShopping } from "react-icons/ai"
import { useState } from "react"

let MobileHamBurgerMenu = () => {
    let [menuOpened, toggleMenuOpened] = useState(false)
    let [drawerOpened, toggleDrawerOpened] = useState(false)
    return <>
        {menuOpened ? <MenuExpanded openMenuHook={toggleMenuOpened}
            isOpenedProps={drawerOpened}
            openHook={toggleDrawerOpened} /> :
            <MenuCollapsed openMenuHook={toggleMenuOpened}
                isOpenedProps={drawerOpened}
                openHook={toggleDrawerOpened} />}

    </>
}

let MenuCollapsed = ({ openMenuHook, ...props }) => {
    return <>
        <div className="md:hidden fixed top-0 w-screen backdrop-blur " >

            <div className="z-0 h-full w-full backdrop-blur" ></div>
            <div className="z-5 h-full w-full">
                <div className="flex justify-between p-2 bg-white items-start">
                    <Drawer {...props} />
                    <span onClick={e => {
                        openMenuHook(true)
                    }} className="p-2 bg-blue-300 text-white rounded-lg" ><GiHamburgerMenu /></span>
                </div>
            </div>
        <div className="z-0 fixed top-1 pt-2 right-[100px]"><AccCircle/></div>
        </div>  </>
}

let MenuExpanded = ({ openMenuHook, ...props }) => {
    return <>
        <div className="md:hidden fixed h-screen top-0 bottom-0 w-screen" >
            <div className=" fixed top-0 bottom-0 z-0 h-full w-full bg-red-400" ></div>
            <div className=" fixed top-0 bottom-0  z-50  h-full w-full bg-slate-500">
                <div className="h-2/5 w-full flex items-start
            justify-between p-2 bg-white ">
                    <Drawer {...props} />
                    <span onClick={e => {
                        openMenuHook(false)
                    }} className="p-2 bg-blue-300 text-white rounded-full"><FaTimes /></span>
                </div>
                <div className="h-3/5 bg-transparent backdrop-blur">

                </div>
            </div>
        </div>
    </>
}

let Drawer = ({ isOpenedProps, openHook }) => {

    let closedDrawer = <><span onClick={e => {
        openHook(true)
    }} className=" text-2xl text-blue-500 p-2 animate-pulse" >
        <IoIosArrowDropright /></span>
    </>

    let openDrawer = <><div className="z-50000 h-screen w-screen fixed top-0 bottom-0 left-0 text-[#e7eef8]">
        <div className="grid grid-cols-2 w-full h-full">
            <div className=" bg-black h-full w-full">
                <div className=" h-10 p-2">
                    <span onClick={e => {
                        openHook(false)
                    }} className="rounded-full text-[#e7eef8]">
                        <FaTimes />
                    </span>
                </div>
                <div className="h-[500px]">
                    <div className="h-full
                flex flex-col justify-start items-center overflow-auto" >
                        <ul>
                            {menuItems.filter((item)=>!item.parentId).map((obj, index) => <>
                                <li key={index} >  <DrawerItem {...obj} key={index} /></li>

                            </>)}
                        </ul>
                    </div>
                </div>
                <div className="h-10
                flex flex-col justify-center pb-2" >
                    <ul>
                        <li><DrawerItem
                            title="Settings"
                            id="settings"
                            iconComp={<IoSettingsOutline />}
                            parentId=""
                            link="/settings" /></li>
                    </ul>
                </div>
            </div>
            <div onClick={e => {
                openHook(false)
            }} className=" z-[1200] bg-slate-500 backdrop-blur w-full h-full"></div>
        </div>
    </div>
    </>

    return <>
        {isOpenedProps ? openDrawer : closedDrawer}
    </>
}

let DrawerItem = ({ id, title, iconComp = null, link }) => {
    let bgClr = "#19191f";
    let isLink =link&& window.location.pathname.includes(link) ? true : false;
    let subItems = !!id && menuItems.filter((item) => item.parentId === id);
    let [openItemSub, toggleItemOpen] = useState(false)
    return <>
        <div className="p-2 w-full text-[#e7eef8]">
            <div className="p-2 mb-1 w-11/12 grid grid-cols-12 
        gap-2 rounded-2xl align-middle overflow-x-auto  "
                style={{ backgroundColor: isLink ? bgClr : "inherit" }}>
                <div className=" self-center col-span-2">
                    <span>{iconComp}</span></div>
                <div className="self-center col-span-8">
                    <span className=" truncate ">{title}</span>
                </div>
                <div className=" self-center col-span-2">
                    <span onClick={e => {
                        toggleItemOpen(!openItemSub)
                    }}>{subItems.length > 0 ? (openItemSub ? <BiChevronDown /> : <BiChevronRight />) : null} </span>
                </div>
            </div>
            <div className=" ml-3 w-11/12 min-w-[150px] text-[90%]">
                <ul className=" list-outside" >
                    {openItemSub && subItems.map((item, index) => <> <li key={index} > <DrawerItem {...item} />
                    </li>
                    </>)}

                </ul>
            </div>
        </div>
    </>
}

let AccCircle=()=>{
    return<>
    <span className="rounded-full bg-blue-500 p-2">uuo</span>
    
    </>
}

let menuItems = [
    {
        title: "Orders",
        id: "orders_orders",
        iconComp: null,
        parentId: "orders",
        link: "/admin/orders"
    },
    {
        title: "Abandoned Checkouts",
        id: "abandoned_checkouts",
        iconComp: null,
        parentId: "orders",
        link: "/admin/orders/abandoned"
    },
    {
        title: "Drafts",
        id: "order_drafts",
        iconComp: null,
        parentId: "orders",
        link: "/admin/orders/drafts"
    },
    {
        title: "Dashboard",
        id: "dashboard",
        iconComp: <MdDashboard />,
        parentId: "",
        link: "/dashboard"
    },
    {
        title: "Social Media",
        id: "social_media",
        iconComp: <IoMdGitNetwork />,
        parentId: "",
        link: "social_media"
    },
    {
        title: "Products",
        id: "products",
        iconComp: <AiFillShopping />,
        parentId: "",
        link: "/single_page"
    },
    {
        title: "Orders",
        id: "orders",
        iconComp: <BsJournalBookmark />,
        parentId: "",
        link: "/admin/orders"
    },
    {
        title: "Analytics",
        id: "analytics",
        iconComp: <IoAnalyticsOutline />,
        parentId: "",
        link: "/admin/orders"
    },
    {
        title: "Settings",
        id: "settings",
        iconComp: <IoSettingsOutline />,
        parentId: "",
        link: "/settings"
    },
    {
        title: "Dashboard",
        id: "dashboard",
        iconComp: <MdDashboard />,
        parentId: "single_page",
        link: "/xyz"
    },
    {
        title: "Instagram",
        id: "instagram",
        iconComp: <BsInstagram />,
        parentId: "social_media",
        link: "social_media/ig"
    },
    {
        title: "Facebook",
        id: "facebook",
        iconComp: <BsFacebook />,
        parentId: "social_media",
        link: "social_media/fb"
    },
    {
        title: "Twitter",
        id: "twitter",
        iconComp: <BsTwitter />,
        parentId: "social_media",
        link: "social_media/tw"
    },
]


export { MobileHamBurgerMenu };