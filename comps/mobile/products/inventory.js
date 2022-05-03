import { GiHamburgerMenu } from "react-icons/gi"
import { FaRegTrashAlt, FaSearch, FaTimes } from "react-icons/fa"
import { useEffect, useRef, useState } from "react"
import React, { Component } from 'react';
import { BiGridVertical } from "react-icons/bi"
import { BsArrowDownUp, BsThreeDots, BsCaretDown, BsFilter, BsCaretRight } from "react-icons/bs"
import { FiAlignJustify } from "react-icons/fi"
//import { Editor } from 'react-draft-wysiwyg';
import dynamic from "next/dynamic";
import { Form } from "react-bootstrap";
import { Checkbox, Divider, FormControlLabel, Menu, MenuItem } from "@mui/material";
let DescCompNoSSR = dynamic(() => import('./dyn').then(obj => obj.DescriptionComp), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
})
//import RichTextEditor from 'react-rte';DescriptionComp

let ProductInventory = () => {
    return <>
        <div className=" md:hidden mt-[80px] bg-[#dbdddf] pb-5 pt-2">
            <InventoryBanner />
            <InventoryTabs />
        </div>
    </>
}

let InventoryBanner = () => {
    return <>
        <div className="flex justify-between px-2 py-2 bg-white items-center mb-2">
            <span className="text-3xl">Inventory</span>
            <div className="w-1/2 px-2 flex justify-around items-center align-middle">
                <button className="py-1 px-2 border rounded-md">...</button>
                <button className="py-1 px-2 border rounded-md bg-green-500 text-white">View products</button>
            </div>
        </div>
    </>
}

let InventoryTabs = () => {
    let tablist = [{ name: "All", content: <><PanelAll /></> }]
    return <>
        <div className="bg-white">
            <Tabs tablist={tablist} />
        </div>

    </>
}

let Tabs = ({ tablist = [] }) => {
    let [activeTabIndex, changeActiveTabIndex] = useState(0)
    return <>
        <div className="flex flex-wrap justify-start p-2" >
            {tablist.map((tabItem, index) => <span
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
let PanelAll = () => {
    return <>
        <div className="mb-2 pb-2">
            <div className="flex justify-between mx-auto w-5/6 border items-center pl-2 pr-1 rounded-md mb-2">
                <FaSearch size={22} /><input className="p-2 w-[calc(100%-23px)]" placeholder="Search inventory" />
            </div>

            <div className="flex justify-between p-2 items-start">
                <div className="">
                    <button className="px-2 py-2  rounded-l-md border"><BsFilter /></button>
                    <button className="px-2 py-2  rounded-r-md border"><BsArrowDownUp /></button>
                </div>
                <div className="">
                    <button className="px-2 py-2 border rounded-md"><BsThreeDots /></button>
                </div>
            </div>
            <div className="px-4">
                <div className={`border rounded-md px-2 flex justify-around mx-auto`}>

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
        <div className=" sm:hidden grid grid-cols-12 p-2">
            <div className="">
                <FormControlLabel control={<Checkbox checked={0 ? false : true} />} />
            </div>
            <div className="col-span-2">
                <img src="/ui.jpeg" style={{ width: "50px", height: "50px" }} />
            </div>
            <div className=" col-span-9" >
                <h3 className="mb-2 text-xl">Item name</h3>
                <h4 className="mb-2 text-xl">Item name</h4>
                <div>
                    {arrSome.map((item, index) => <SomethingProductGet {...item} key={index} />)}

                </div>
            </div>
        </div>
    </>
}

let SomethingProductGet = ({ name, menuitems, menuComp }) => {
    let [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget)
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    let menuItems = menuitems ? menuitems.map((item, index) => <MenuItem key={index} onClick={item.handleClick}>
        {item.comp ? item.comp : <></>}
    </MenuItem>) : item.name.menuComp
    return <>
        <div className="flex justify-between p-2 border-b">
            <span>{name}</span>
            <span className="flex items-center" onClick={handleClick} >{0} {!open ? <BsCaretRight /> : <BsCaretDown />}</span>
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
return<>

</>
}

export { ProductInventory };