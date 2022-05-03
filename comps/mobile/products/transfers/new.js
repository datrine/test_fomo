import { GiHamburgerMenu } from "react-icons/gi"
import { FaRegTrashAlt, FaSearch, FaTimes, FaStar } from "react-icons/fa"
import { useEffect, useRef, useState } from "react"
import React, { Component } from 'react';
import { BiSortAlt2 } from "react-icons/bi"
import{AiOutlineArrowLeft} from "react-icons/ai"
import { BsArrowDownUp, BsThreeDots, BsCaretDown, BsFilter, BsCaretRight, BsChevronDown,BsChevronUp } from "react-icons/bs"
import { MdIncompleteCircle } from "react-icons/md"
//import { Editor } from 'react-draft-wysiwyg';
import dynamic from "next/dynamic";
import { Form, ProgressBar } from "react-bootstrap";
import { Checkbox, Divider, FormControlLabel, Menu, MenuItem } from "@mui/material";
import { height } from "@mui/system";
//import RichTextEditor from 'react-rte';DescriptionComp

let NewTransferIndex = ({ }) => {
    return <>
        <div className=" md:hidden mt-[50px] bg-white pb-5 pt-2">
            <TransfersBanner/>
        </div>
    </>
}


let TransfersBanner = () => {
    return <>
        <div className="flex justify-between px-2 py-3 shadow-inner bg-[#dbdddf] items-center mb-2">
            <span><AiOutlineArrowLeft size={22}/></span>
            <span className="text-3xl font-bold">Create Inventory Transfer</span>
        </div>
    </>
}

let OriginDiv=()=>{
    return<>
    </>
}

export { NewTransferIndex };