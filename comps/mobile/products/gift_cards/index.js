import { GiHamburgerMenu } from "react-icons/gi"
import { FaRegTrashAlt, FaSearch, FaTimes, FaStar } from "react-icons/fa"
import { useEffect, useRef, useState } from "react"
import React, { Component } from 'react';
import { BiSortAlt2 } from "react-icons/bi"
import { BsArrowDownUp, BsThreeDots, BsCaretDown, BsFilter, BsCaretRight, BsChevronDown,BsChevronUp } from "react-icons/bs"
import { MdIncompleteCircle } from "react-icons/md"
//import { Editor } from 'react-draft-wysiwyg';
import dynamic from "next/dynamic";
import { Form, ProgressBar } from "react-bootstrap";
import { Checkbox, Divider, FormControlLabel, Menu, MenuItem } from "@mui/material";
import { height } from "@mui/system";
//import RichTextEditor from 'react-rte';DescriptionComp

let TransfersIndex = ({ }) => {
    return <>
        <div className=" md:hidden mt-[50px] bg-white pb-5 pt-2">
            <TransfersBanner />
            <TransfersTabs />
        </div>
    </>
}

let TransfersBanner = () => {
    return <>
        <div className="flex justify-between px-2 py-3 shadow-inner bg-[#dbdddf] items-center mb-2">
            <span className="text-3xl font-bold">Transfers</span>
            <div className="w-1/2 px-2 flex justify-around items-center align-middle">
                <button className="py-1 px-2 border rounded-md">...</button>
                <a href="/admin/transfers/new?return_url=/admin/transfers/" className="py-1 px-2 border rounded-md bg-[#008060] text-white">Create transfer</a>
            </div>
        </div>
    </>
}

let TransfersTabs = () => {
    let tablist = [
        { name: "All", content: <><PanelAll /></> },
        { name: "Pending", content: <></> },
        { name: "Partial", content: <></> },
        { name: "Completed", content: <></> },
    ]
    return <>
        <div className="bg-white">
            <Tabs tablist={tablist} />
        </div>

    </>
}

let Tabs = ({ tablist = [] }) => {
    let [activeTabIndex, changeActiveTabIndex] = useState(0);
    console.log(tablist)
    return <>
        <div className="flex flex-wrap justify-around p-2 " >
            {tablist.map((tabItem, index) => <span onClick={e => {
                changeActiveTabIndex(index)
            }}
                className={`py-1 px-2 ${index === activeTabIndex ? "border-b-2 text-blue-500" : ""}`} key={index} >
                {tabItem.name}
            </span>)}
        </div>
        <div>
            <TabPanel content={tablist[activeTabIndex].content} />
        </div>
    </>
}

let TabPanel = ({ content }) => {
    return <>
        <div>
            {content}
        </div>
    </>
}
let FilterBtnsGridForMobile = () => {
    return <>
        <div className="md:hidden flex flex-wrap justify-center items-start px-2 ">
            <span className="py-1 pl-2 pr-1 border rounded-md mr-2 mb-2">
                <FaSearch style={{ display: "inline" }} /><input className="w-[100px]" placeholder="Search inventory" />
            </span>
            <span className="px-2 py-1 border rounded-md  mr-2 mb-2 "><MoreFilter /></span>

            <span className="px-2 py-1 border rounded-md  mr-2 mb-2"><FaStar style={{ display: "inline", verticalAlign: "baseline" }} /></span>
            <span className="px-2 py-1 border rounded-md mr-2 mb-2"><BiSortAlt2 style={{ verticalAlign: "middle", display: "inline" }} />
                <span>Sort</span></span>
        </div>
    </>
}

let MoreFilter = ({ children }) => {
    let [showMore, changeShowMore] = useState(false);
    let handleClose = () => {
        changeShowMore(false)
    }
    return <>

        {showMore ? <TransfersFilter handleClose={handleClose} /> : <span onClick={() => { changeShowMore(true) }}>More filters</span>}
    </>
}

let PanelAll = () => {
    return <>
        <div className="mb-2 pb-2">
            <FilterBtnsGridForMobile />
            <div className="flex justify-between p-2 items-start max-w-[600px]">
                <div className="">
                    <button className="px-2 py-2  rounded-l-md border"><BsFilter /></button>
                    <button className="px-2 py-2  rounded-r-md border"><BsArrowDownUp /></button>
                </div>
                <div className="">
                    <button className="px-2 py-2 border rounded-md"><BsThreeDots /></button>
                </div>
            </div>
            <div className="px-4">
                <div className={`border rounded-md px-2 flex justify-around mx-auto max-w-[600px]`}>

                    <FormControlLabel control={<Checkbox checked={0 ? false : true} />} label={`${0} selected`} />
                    <span className=" bg-gray-500 self-stretch" style={{ width: "0.5px" }} />
                    <Actions />
                    <span className=" bg-gray-500 self-stretch" style={{ width: "0.5px" }} />
                    <button>Cancel</button>
                </div>
            </div>
            <ProductAsInventoryItem />
            <ProductAsInventoryItem />
            <ProductAsInventoryItem />
        </div>
    </>
}

let Actions = () => {
    let [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget)
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return <>
        <button onClick={handleClick} className="inline" >Actions <BsCaretDown style={{ display: "inline" }} /></button>
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
        >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
    </>
}

let ProductAsInventoryItem = ({ productID, arrOfItem = [] }) => {
    let arrSome = arrOfItem.length > 0 && arrOfItem || [
        { name: "Incoming", menuitems: [{ menuComp: <TransferItems productID={productID} />, handleClick: () => { } }] },
        { name: "Incoming", menuitems: [{ comp: <span>Create a transfer</span>, handleClick: () => { } }] },
    ]
    return <>
        <div className=" md:hidden px-2 py-2 border-b " >
            <div className="grid grid-cols-12">
                <div className=" col-span-4">
                    <span>#TranNum</span>
                </div>
                <div className=" col-span-8">
                    <span>Address you supplied</span>
                </div>


            </div>

            <div className=" grid grid-cols-12 mb-2 gap-1">
                <div className=" col-span-4">
                    <TransfersState state={"partial"} />
                </div>

                <div className=" grid grid-cols-12 col-span-8 gap-1">
                    <div className=" col-span-9">
                        <SelfProgBar style={{ width: "calc(100%-20px)" }} now={60} /> </div>
                    <div className="col-span-3"> <SomethingInventoryGet /></div>
                </div>
            </div>
        </div>
    </>
}

let TransfersState = ({ state }) => {
    let view = null
    switch (state) {
        case "pending":
            view = <><span className="px-2 py-1 bg-yellow-300 text-white rounded-xl text-sm">Pending</span></>
            break;
        case "partial":
            view = <><span className="px-2 py-1 bg-[#a4e8f2] text-white rounded-xl text-sm">
                <MdIncompleteCircle style={{ display: "inline" }} /> Partially received</span></>
            break;

        default:
            break;
    }
    return <>
        {view}
    </>
}

let SomethingInventoryGet = ({ name, menuitems, menuComp }) => {
    let [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget)
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    let menuItems = menuitems ? menuitems.map((item, index) => <MenuItem key={index} onClick={item.handleClick}>
        {item?.comp ? item.comp : <></>}
    </MenuItem>) : menuComp
    return <>
        <div className="">
            <span>{name}</span>
            <span className="flex items-center" onClick={handleClick} > {!open ? <BsCaretRight /> : <BsCaretDown />}</span>
        </div>
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
        >
            {menuItems}
        </Menu>
    </>
}

//component that shows the list of incoming inventories as a pop-up menu
let TransferItems = ({ productID }) => {
    return <>

    </>
}

let SelfProgBar = ({ width = 100, height, style, now = 60 }) => {
    let gradient = `linear-gradient(to right, green ${now}%, white ${now}%)`;
    console.log(gradient)
    return <>
        <div className=" inline-block w-full">
            <div style={{ background: gradient }} className=" inline-block  h-3 w-[calc(100%-0px)] border rounded-2xl " >
            </div>
            <p><span style={{ verticalAlign: "sub", float: "right" }}>2/3</span></p></div>
    </>
}


let TransfersFilter = ({ handleClose }) => {
    return <>
        <div className="w-[100vw] h-[100vh] fixed z-[1004] bg-white top-0 bottom-0 left-0">
            <div className="flex justify-between p-2 items-center border-b">
                <span className="p-2" onClick={handleClose}>
                    <FaTimes style={{ display: "inline" }} />
                    </span>
                <span>More filters</span>
                <span className="px-2 py-1 text-white bg-[#008060] rounded-md ">Done</span>
            </div>
            <div className="p-2">
                <FilterCollapser title={"Status"} contents={<StatusFilterView/>} />
            </div>
            <div className="border px-2 flex justify-center py-1 mx-auto w-4/5 rounded-md"><span>Clear all filters</span></div>
        </div>
    </>
}

let FilterCollapser = ({ title, contents }) => {
    let [collapsed, toggleCollapsed] = useState(true)
    return <>
        <div>
            <div className="flex w-full justify-between text-lg font-bold">
                <span className="p-2">{title}</span>
                <span className="p-2" onClick={() => {
                    toggleCollapsed(!collapsed)
                }}>
                    {collapsed ? <BsChevronUp style={{display:"inline"}}/> :<BsChevronDown style={{display:"inline"}} /> }
                </span>
            </div>
            {collapsed ? <div>{contents}</div> : null}
        </div>
    </>
}

let StatusFilterView=()=>{
    return<>
    <div className="p-2">
    <FilterTicker label={"Completed"}/></div>
    </>
}

let FilterTicker=({handleChange,label})=>{
    return<>
    <div className=" flex justify-between">
        <Checkbox onChange={handleChange}/>
        <span>{label}</span>
    </div>
    </>
}

export { TransfersIndex };