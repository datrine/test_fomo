import { GiHamburgerMenu } from "react-icons/gi"
import { FaRegTrashAlt, FaSearch, FaTimes, FaStar } from "react-icons/fa"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

import TextField from '@mui/material/TextField';
import { useEffect, useRef, useState } from "react"
import React, { Component } from 'react';
import { BiSortAlt2 } from "react-icons/bi"
import { AiOutlineArrowLeft } from "react-icons/ai"
import { BsArrowDownUp, BsThreeDots, BsCaretDown, BsFilter, BsCaretRight, BsChevronDown, BsChevronUp } from "react-icons/bs"
import { MdIncompleteCircle } from "react-icons/md"
//import { Editor } from 'react-draft-wysiwyg';
import dynamic from "next/dynamic";
import { Form, ProgressBar } from "react-bootstrap";
import { Checkbox, Container, Divider, InputAdornment, Menu, MenuItem, } from "@mui/material";
import { height } from "@mui/system";
//import RichTextEditor from 'react-rte';DescriptionComp


const filter = createFilterOptions();
let NewGiftCardIndex = ({ }) => {
    return <>
        <div className=" md:hidden mt-[50px] bg-[#F3F2F1] pb-5 pt-2">
            <TransfersBanner />
            <GiftCardDiv />
            <ExpDateDiv />
            <FindOrCreateCustomer />
            <AddDetailsDiv />
        </div>
    </>
}


let TransfersBanner = () => {
    return <>
        <div className="flex flex-col px-3 py-2 shadow-inner bg-[#dbdddf] items-start mb-2">
            <span className="py-1 px-2 border"><AiOutlineArrowLeft size={22} /></span>
            <span className="text-3xl font-bold">Issue Gift Card</span>
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

let FindOrCreateCustomer = () => {
    return <>
        <div className="  shadow-inner py-3 px-4 border-b mb-3 bg-white max-w-[600px] mx-auto rounded-md">
            <h3 className="mb-2 font-semibold text-xl" >Find or create customer</h3>
            <p><span>To send the gift card code, add a customer with an email address or phone number.</span></p>
            <div className="flex justify-around w-full">
            </div>

         
            <div className="mt-2 ">
   <FindAutocomplete />
            </div>

        </div>
    </>
}

let FindAutocomplete = () => {
    const [value, setValue] = React.useState(null);
    const [inputValue, setInputValue] = React.useState('');
    const [options, setOptions] = React.useState([]);
    const loaded = React.useRef(false);
    let [showTagMgtApp, changeShowTagMgtApp] = useState(false);
    //<input className="w-[calc(100%-20px)] pl-1 text-sm py-1 inline-block" placeholder="" />
    return <>
        <Autocomplete
        value={value}
            includeInputInList
            filterSelectedOptions
            options={options}
            filterOptions={(opts,state)=>{
                const filtered=filter(opts,state);
                if (!filtered.some(x=>x===state.inputValue)) {
                    filtered.push("Add customer")
                }
                return filtered;
            }}
            getOptionLabel={opt => opt}
            onChange={(event, newValue) => {
                //setOptions(newValue ? [newValue, ...options] : options);
                if (newValue) {
                    console.log(newValue+" ......")
                    changeShowTagMgtApp(true)
                }
                setValue(newValue);
            }}
            onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
            }}
            renderInput={(params) => {
                return <>
                    <TextField {...params}
                        InputProps={{...params.InputProps,
                            startAdornment: <InputAdornment position="start">
                                <span><FaSearch style={{ display: "inline" }} /></span>
                            </InputAdornment>,
                        }} label="Search customers" fullWidth />
                </>
            }}
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            freeSolo
            renderOption={(props, option,state) => {
                let view=null;
                console.log(option)
                if (option==="") {
                    view=<><span>Create customer</span></>
                }else{
                    view=<><span>{option}</span></>
                }
                return <>
                    <li {...props} >
                        <span>{view}</span>
                    </li>
                </>
            }} />
            
        {showTagMgtApp ? <ManageTagView openTagApp={changeShowTagMgtApp} /> : null}
    </>
}

let GiftCardDiv = () => {
    return <>
        <div className=" shadow-inner py-3 px-4 border-b mb-3 bg-white max-w-[600px] mx-auto rounded-md">
            <h3 className="mb-2 font-semibold text-xl" >Gift card details</h3>
            <div className="w-full">
                <div className="mb-3">
                    <h3 className=" mb-1">Estimated arrival</h3>
                    <input type="date" className="w-full block py-1 mx-auto border text-xl px-2 rounded-md"
                        placeholder="Date of arrival" />
                </div>
                <div className="mb-3">
                    <h3 className=" mb-1">₦</h3>
                    <input type="number" className="w-full block py-1 mx-auto border text-md px-2 rounded-md"
                        placeholder="Initial value" />
                </div>
                <div className="mb-3">
                    <h3 className=" mb-1">Shipping carrier</h3>
                    <input className="w-full block py-1 mx-auto border text-md px-2 rounded-md"
                        placeholder="Search products" />
                </div>
            </div>
        </div>
    </>
}

let ExpDateDiv = () => {
    return <>
        <div className=" shadow-inner py-3 px-4 border-b mb-3 bg-white max-w-[600px] mx-auto rounded-md">
            <h3 className="mb-2 font-semibold text-lg" >Expiration date</h3>
            <div className="w-full">
                <div className="mb-3"><FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>

                </div>
                <div className="mb-3">
                    <h3 className=" mb-1">Estimated arrival</h3>
                    <input type="date" className="w-full block py-1 mx-auto border text-xl px-2 rounded-md"
                        placeholder="Date of arrival" />
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

                        <CreateCustomerDiv />

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

let CreateCustomerDiv = () => {
    let [showTagMgtApp, changeShowTagMgtApp] = useState(false);
    return <>
    <button className="w-full" onClick={e => {
        console.log("ok;ljojj")
            changeShowTagMgtApp(true)
        }}>Create customer</button>
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
export { NewGiftCardIndex };