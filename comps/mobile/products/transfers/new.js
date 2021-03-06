import { GiHamburgerMenu } from "react-icons/gi"
import { FaRegTrashAlt, FaSearch, FaTimes, FaStar } from "react-icons/fa"
import { useEffect, useRef, useState } from "react"
import React, { Component } from 'react';
import { BiSortAlt2 } from "react-icons/bi"
import { AiOutlineArrowLeft } from "react-icons/ai"
import { BsArrowDownUp, BsThreeDots, BsCaretDown, BsFilter, BsCaretRight, BsChevronDown, BsChevronUp } from "react-icons/bs"
import { MdIncompleteCircle } from "react-icons/md"
//import { Editor } from 'react-draft-wysiwyg';
import dynamic from "next/dynamic";
import { Form, ProgressBar } from "react-bootstrap";
import { Checkbox, Divider, FormControlLabel, Menu, MenuItem } from "@mui/material";
import { height } from "@mui/system";
//import RichTextEditor from 'react-rte';DescriptionComp

let NewTransferIndex = ({ }) => {
    return <>
        <div className=" md:hidden mt-[50px] bg-[#F3F2F1] pb-5 pt-2">
            <TransfersBanner />
            <OriginDiv />
            <DestinationDiv />
            <AddProductDiv />
            <ShippingDiv />
            <AddDetailsDiv />
        </div>
    </>
}


let TransfersBanner = () => {
    return <>
        <div className="flex justify-between px-2 py-3 shadow-inner bg-[#dbdddf] items-center mb-2">
            <span><AiOutlineArrowLeft size={22} /></span>
            <span className="text-3xl font-bold">Create Inventory Transfer</span>
        </div>
    </>
}

let OriginDiv = () => {
    let menuuu = <span>Select origin <BsCaretDown style={{ display: "inline" }} /></span>
    let handleMenuOpen = (isOpened) => {
        if (!isOpened) {
            return
        }

    }
    return <>
        <div className=" shadow-inner py-3 px-4 border-b mb-3 bg-white max-w-[600px] mx-auto rounded-md">
            <h3 className="mb-2 font-semibold text-xl" >Origin</h3>
            <div><MyMenu handleMenuOpen={handleMenuOpen} menuBtn={menuuu} /></div>
        </div>
    </>
}

let DestinationDiv = () => {
    let menuuu = <span>Select Destination <BsCaretDown style={{ display: "inline" }} /></span>
    let handleMenuOpen = (isOpened) => {
        if (!isOpened) {
            return
        }

    }
    return <>
        <div className=" shadow-inner py-3 px-4 border-b mb-3 bg-white max-w-[600px] mx-auto rounded-md">
            <h3 className="mb-2 font-semibold text-xl" >Origin</h3>
            <div><MyMenu handleMenuOpen={handleMenuOpen} menuBtn={menuuu} /></div>
        </div>
    </>
}

let AddProductDiv = () => {
    return <>
        <div className="  shadow-inner py-3 px-4 border-b mb-3 bg-white max-w-[600px] mx-auto rounded-md">
            <h3 className="mb-2 font-semibold text-xl" >Add products</h3>
            <div className="flex justify-around w-full">
                <div className="py-1 border text-xl pl-1 rounded-xl w-4/6 inline-block ">
                    <span><FaSearch style={{ display: "inline" }} /></span>
                    <input className="w-[calc(100%-20px)] pl-1 text-sm" placeholder="Search products" />
                </div>
                <span className="px-2 py-1 border ml-2 rounded-md">Browse</span>
            </div>
        </div>
    </>
}

let ShippingDiv = () => {
    return <>
        <div className=" shadow-inner py-3 px-4 border-b mb-3 bg-white max-w-[600px] mx-auto rounded-md">
            <h3 className="mb-2 font-semibold text-xl" >Shipment details</h3>
            <div className="w-full">
                <div className="mb-3">
                    <h3 className=" mb-1">Estimated arrival</h3>
                    <input type="date" className="w-full block py-1 mx-auto border text-xl px-2 rounded-md"
                        placeholder="Date of arrival" />
                </div>
                <div className="mb-3">
                    <h3 className=" mb-1">Tracking number</h3>
                    <input className="w-full block py-1 mx-auto border text-xl px-2 rounded-md"
                        placeholder="Search products" />
                </div>
                <div className="mb-3">
                    <h3 className=" mb-1">Shipping carrier</h3>
                    <input className="w-full block py-1 mx-auto border text-xl px-2 rounded-md"
                        placeholder="Search products" />
                </div>
            </div>
        </div>
    </>
}

let AddDetailsDiv = () => {
    return <>
        <div className=" shadow-inner py-3 px-4 border-b mb-3 bg-white max-w-[600px] mx-auto rounded-md">
            <h3 className="mb-2 font-semibold text-xl" >Additional details</h3>
            <div className="w-full">
                <div className="mb-3 pb-3 border-b">
                    <h3 className=" mb-1">Reference number</h3>
                    <input type="date" className="w-full block py-1 mx-auto border text-xl px-2 rounded-md"
                        placeholder="Date of arrival" />
                </div>
                <div className="mb-3">
                    <div className="flex w-full justify-between">
                        <h3 className="mb-2 font-semibold text-xl" >Tags</h3>

                        <TagDiv />

                    </div>
                    <input className="w-full block py-1 mx-auto border text-xl px-2 rounded-md"
                        placeholder="Find or create tags" />
                </div>
            </div>
        </div>
    </>
}

let MyMenu = ({ menuBtn, name, menuitems, menuComp, handleMenuOpen }) => {
    let [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget)
        handleMenuOpen(!e.currentTarget)
    };

    const handleClose = () => {
        setAnchorEl(null);
        handleMenuOpen(false)
    };
    let menuItems = menuitems ? menuitems.map((item, index) => <MenuItem key={index} onClick={item.handleClick}>
        {item?.comp ? item.comp : <></>}
    </MenuItem>) : menuComp
    return <>
        <div className="inline" onClick={handleClick}>{menuBtn}</div>
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

let TagDiv = () => {
    let [showTagMgtApp, changeShowTagMgtApp] = useState(false);
    return <>
        <span onClick={e => {
            changeShowTagMgtApp(true)
        }} className=" underline text-blue-500">Manage tags</span>
        {showTagMgtApp ? <ManageTagView openTagApp={changeShowTagMgtApp} /> : null}
    </>
}

let ManageTagView = ({ openTagApp }) => {
    return <>
        <div className="fixed top-0 left-0 bottom-0 h-screen w-screen">
            <div onClick={e => {
                        openTagApp(false)
                    }} className=" h-1/2 w-full" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}></div>
            <div className=" h-1/2 w-full p-2" style={{ backgroundColor: "white" }}>
                <div className="flex justify-between p-2 border-b mb-3 text-2xl">
                    <span>Manage tags</span>
                    <span onClick={e => {
                        openTagApp(false)
                    }}><FaTimes style={{ display: "inline" }} /></span>
                </div>
                <div className="p-2">
                    <div className=" border text-xl pl-1 rounded-md w-full block mx-auto  mb-2">
                        <span><FaSearch style={{ display: "inline" }} /></span>
                        <input className="w-[calc(100%-20px)] pl-1 py-1  inline" placeholder="Search products" />
                    </div>
                    <div className="">
                        <div className=" h-[100px] overflow-auto">
                            <h4>Selected</h4>
                            <TagsSelectionView />
                        </div>

                    </div>
                </div>
                <div className="absolute bottom-0 w-full border-t p-3 flex justify-end">
                    <span onClick={e => {
                        openTagApp(false)
                    }} className="border px-2 py-1 rounded-md mr-2">Cancel</span>
                    <span className="border px-3 py-1 rounded-md bg-green-700 text-white">Save</span>
                </div>
            </div>
        </div>
    </>
}

let TagsSelectionView = () => {
    let handleChange = ({ isChecked, index }) => {
        console.log({ isChecked, index })
    }
    return <>
        <div className="p-2">
            <FilterTicker index={0} label={"Completed"} handleChange={handleChange} />
            <FilterTicker index={1} label={"Completed"} handleChange={handleChange} />
            <FilterTicker index={2} label={"Completed"} handleChange={handleChange} />
            <FilterTicker index={3} label={"Completed"} handleChange={handleChange} />
        </div>
    </>
}

let FilterTicker = ({ handleChange, label, index }) => {
    let [isChecked, toggleCheckState] = useState(false)
    return <>
        <p className={`${isChecked ? "bg-blue-200" : null} `}>
            <Checkbox checked={isChecked} onChange={e => {
                toggleCheckState(!isChecked);
                handleChange({ isChecked: e.target.checked, index })
            }} style={{ marginRight: "20px" }} />
            <span>{label}</span>
        </p>
    </>
}
export { NewTransferIndex };