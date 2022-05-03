import { GiHamburgerMenu } from "react-icons/gi"
import { FaRegTrashAlt, FaSearch, FaTimes } from "react-icons/fa"
import { useEffect, useRef, useState } from "react"
import React, { Component } from 'react';
import { BiGridVertical } from "react-icons/bi"
import { BsPlusLg } from "react-icons/bs"
//import { Editor } from 'react-draft-wysiwyg';
import dynamic from "next/dynamic";
import { Form } from "react-bootstrap";
import { Checkbox, FormControlLabel } from "@mui/material";
let DescCompNoSSR = dynamic(() => import('./dyn').then(obj => obj.DescriptionComp), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
})
//import RichTextEditor from 'react-rte';DescriptionComp

let NewProductIndex = () => {
    return <>
        <div className=" md:hidden mt-[80px] bg-[#dbdddf] pb-5 pt-2">
            {/*
          */}   <NewProductForm />
        </div>
    </>
}

let NewProductForm = ({ }) => {
    return <>
        <div className="p-2 mb-2 mt-3 ">
            <div className=" p-2  flex justify-between  ">
                <h3 className=" text-3xl font-extrabold" >Products</h3>
                <button className="border p-2" >import</button>
            </div>
            <form>
                <div className="bg-white rounded-xl p-2 pt-4 pb-4 mb-2" >

                    {/** */}  <TitleComp />
                    <DescCompNoSSR />
                </div>
                <div className="bg-white rounded-xl p-2 pt-4 pb-4 mb-2" >
                    <Media />
                </div>
                <div className="bg-white rounded-xl p-2 pt-4 pb-4 mb-2">
                    <Pricing />
                </div>
                <div className="bg-white rounded-xl p-2 pt-4 pb-4 mb-2">
                    {/* */}<Inventory />
                </div>
                <div className="bg-white rounded-xl p-2 pt-4 pb-4 mb-2">
                    <Shipping />
                </div>
                <div className="bg-white rounded-xl p-2 pt-4 pb-4 mb-2">
                    <OptionsSection />
                </div>
                <div className="bg-white rounded-xl p-2 pt-4 pb-4 mb-2">
                    <ProductStatus />
                </div>
                <div className="bg-white rounded-xl p-2 pt-4 pb-4 mb-2">
                    <ProductOrg />
                </div>
<SaveBar/>
            </form>
        </div>
    </>
}

let TitleComp = () => {
    return <>
        <div className=" mb-3 p-2">
            <h4 className=" text-2xl" >Title</h4>
            <input placeholder="Required" className="p-2 rounded-md placeholder:italic w-full border focus:invalid:border-pink-400 text-lg " required />
        </div>
    </>
}


let Media = () => {
    return <>
        <div className=" mb-2 p-2">
            <h4 className=" text-2xl" >Media</h4>
            <div className="container pt-4 pb-4  flex justify-around border-dotted border" >
                <input type="file" className="file:mr-1 file:rounded-md file:bg-slate-400 file:p-2 
file:text-xl file:text-white file:border file:hover:border-2 " />
                <button className="p-2 border" >Add from url</button>
            </div>
        </div>
    </>
}

let Pricing = () => {
    return <>
        <div className=" mb-2 p-2">
            <h4 className=" text-2xl" >Pricing</h4>
            <div className="p-2 flex flex-col justify-center sm:grid sm:grid-cols-2 sm:gap-3 text-xl ">
                <div className=" p-2">
                    <h3>Price</h3>
                    <p className="border p-2">
                        <span className="p-2 w-[calc(30px)] inline-block" >₦</span>
                        <input placeholder="0.00" className="p-2 w-[calc(100%-30px)] " />
                    </p>
                </div>
                <div className=" p-2">
                    <h3>Compare Price</h3>
                    <p className="border p-2">
                        <span className="p-2 w-[calc(30px)] inline-block" >₦</span>
                        <input placeholder="0.00" className="p-2 w-[calc(100%-30px)] focus:border " />
                    </p>
                </div>

                <div className=" sm:col-span-2" >

                    <div className=" p-2">
                        <p className="border p-2 ">
                            <input type="checkbox" className=" default:ring-2 default:ring-inset" />
                            <span className=" ml-2" >Charge taxes on this product</span>
                        </p>
                    </div>
                    <div className=" p-2">
                        <h3>Cost per item</h3>
                        <p className="border p-2">
                            <span className="p-2 w-[calc(30px)] inline-block" >₦</span>
                            <input placeholder="0.00" className="p-2 w-[calc(100%-30px)] focus:border " />
                        </p>
                        <p className=" text-sm italic text-gray-600">Customers won't see this</p>
                    </div>
                </div>
            </div>
        </div>
    </>
}

let Inventory = () => {
    return <>
        <div className=" mb-2 p-2">
            <h4 className=" text-2xl" >Inventory</h4>
            <div className="p-2 flex flex-col justify-center sm:block sm:grid-cols-2 sm:gap-3 text-xl ">
                <div className=" sm:w-[600px] p-2">
                    <h3>Store keeping unit</h3>
                    <p className="border p-2 ">
                        <span className="p-2 w-[calc(30px)] inline-block" >₦</span>
                        <input placeholder="0.00" className="p-2 w-[calc(100%-30px)] " />
                    </p>
                </div>
                <div className=" sm:w-[600px] p-2">
                    <h3>Barcode</h3>
                    <p className="border p-2">
                        <span className="p-2 w-[calc(200px)] inline-block" >(ISBN, UPC, GTIN, etc)</span>
                        <input placeholder="Enter here..." className="p-2 w-[calc(100%-200px)]  focus:border " />
                    </p>
                </div>
                <div className=" sm:w-[600px] p-2">
                    <p className="border p-2 w-full sm:w-full ">
                        <input type="checkbox" className=" default:ring-2 default:ring-inset" />
                        <span className=" ml-2" >Track item</span>
                    </p>
                </div>
                <div className=" sm:w-[600px] p-2">
                    <p className="border p-2">
                        <input type="checkbox" className=" default:ring-2 default:ring-inset" />
                        <span className=" ml-2" >Continue selling after stock is out</span>
                    </p>
                </div>
                <div className=" sm:w-full border-t-2 p-2 ">
                    <h3>Quantity</h3>
                    <div className=" p-2 sm:grid grid-cols-2">
                        <div className="border p-2 w-full sm:w-1/2 ">
                            <span className="p-2 w-[calc(30px)] inline-block" >₦</span>
                            <input placeholder="0.00" className="p-2 w-[calc(100%-30px)] focus:border " />
                        </div>
                        <div className="border p-2 sm:w-1/2 ">
                            <span className="p-2 w-[calc(30px)] inline-block" >₦</span>
                            <input placeholder="0.00" className="p-2 w-[calc(100%-30px)] focus:border " />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

let Shipping = () => {
    let [showShipping, changeShowShipping] = useState(false)
    return <>
        <div className=" mb-2 p-2">
            <h4 className=" text-2xl" >Shipping</h4>
            <div>
                <div className="border p-2">
                    <input onChange={e => {
                        changeShowShipping(!showShipping)
                    }} type="checkbox" className=" default:ring-2 default:ring-inset" />
                    <span className=" ml-2 text-2xl" >This is a physical product</span>
                </div>
                <p>Customers won’t enter their shipping address or choose a shipping method
                    when buying this product.</p>
                {showShipping ? <>
                    <div className="p-2 flex flex-col justify-center sm:block sm:grid-cols-2 sm:gap-3 text-xl ">
                        <div className="sm:w-[600px] p-2">
                            <h3>Weight</h3>
                            <p className="border p-2 ">
                                <input placeholder="0.00" type="number"
                                    className="p-2 w-[calc(100%-200px)] " />
                                <select className="p-2 w-[calc(200px)]  inline-block" >
                                    <option> Kilogram (kg)</option>
                                    <option> Pound (oz)</option>
                                    <option> Pound (lb)</option>
                                    <option>Gram (g)</option>
                                </select>
                            </p>
                        </div>
                        <div className=" sm:w-[600px] p-2">
                            <h3>Customs information</h3>
                            <p>
                                Customs authorities use this information to calculate duties when shipping internationally.
                                Shown on printed customs forms.</p>
                            <div>
                                <h3>Country/region</h3>
                                <p><select className="w-full p-2 bg-white border-gray-500 default:border"><option>Nigeria</option></select></p>
                            </div>
                        </div>
                        <div className=" sm:w-[600px] p-2">
                            <p className="border p-2 w-full sm:w-full ">
                                <input type="checkbox" className=" default:ring-2 default:ring-inset" />
                                <span className=" ml-2" >Track item</span>
                            </p>
                        </div>
                        <div className=" sm:w-[600px] p-2">
                            <p className="border p-2">
                                <input type="checkbox" className=" default:ring-2 default:ring-inset" />
                                <span className=" ml-2" >Continue selling after stock is out</span>
                            </p>
                        </div>
                        <div className=" border-t-2 p-2 ">
                            <div className="sm:w-[600px] p-2">
                                <h3>Harmonised system code</h3>
                                <p className="border p-2">
                                    <span className="p-2 w-[calc(30px)] inline-block align-middle" >
                                        <FaSearch /></span>
                                    <input placeholder="0.00" className="p-2 w-[calc(100%-30px)] " />
                                </p>
                            </div>
                        </div>
                    </div>
                </> : null}
            </div>
        </div>
    </>
}

let OptionsSection = () => {
    let [showOptions, changeShowOptions] = useState(false);
    return <>
        <div className=" mb-2 p-2">
            <div className="mb-2 border-b pb-1 ">
                <h4 className=" text-2xl font-bold" >Options</h4>
                <div className=" p-4">
                    <input checked={showOptions} onChange={e => {
                        changeShowOptions(!showOptions)
                    }} type="checkbox" className=" default:ring-2 default:ring-inset" />
                    <span className=" ml-2" >This product has options, like size or color</span>
                </div>
            </div>
            <div>
                {showOptions ? <>
                    <Options showOptionsHook={changeShowOptions} />
                </> : null}
            </div>
        </div>
    </>
}


let Options = ({ showOptionsHook }) => {

    let [optionsState, changeOptionsState] =
        useState([{ opt_name: "", opt_values: [] }]);
    let deleteOpt = (hookIndex) => {
        let newOpts = optionsState.splice(hookIndex, 1);
        if (optionsState.length === 0) {
            return showOptionsHook(false)
        }
        changeOptionsState([...optionsState])
    }
    useEffect(() => {
        //changeOptionsState([<Option deleteOptionHook={deleteOpt } indexProp={0} />])
        console.log(optionsState)
    }, [])
    return <>
        <div className=" sm:grid sm:grid-cols-2 sm:gap-2 sm:pt-2" >
            {optionsState.map((obj, index) => <Option deleteOptionHook={deleteOpt} indexProp={index} {...obj} />)}

        </div>
        <div className=" w-full flex text-2xl p-2 border border-md align-bottom  text-[#2c6ecb]" onClick={e => {
            let opt = { name: "" }
            changeOptionsState(prev => ([...prev, opt]))
        }}><span className="p-2" ><BsPlusLg /></span> <span>Add an option</span>
        </div>
    </>
}

let Option = ({ deleteOptionHook, indexProp, opt_name, opt_values, ...objProp }) => {
    let [optValuesState, changeOptValuesState] = useState([""])
    let deleteOptValueHook = (hookIndex) => {
        let newOpts = optValuesState.splice(hookIndex, 1);
        if (optValuesState.length === 0) {
            return deleteOptionHook(indexProp)
        }
        changeOptValuesState([...optValuesState])
    }
    return <>
        <div className=" p-2 border-b sm:border sm:grid sm:grid-cols-2 mb-2" >
            <div className=" col-span-2 mb-2 " >
                <h4 className="text-lg pl-8" >Option name</h4>
                <div className=" text-xl">
                    <span className="inline-block pr-2">
                        <BiGridVertical />
                    </span>
                    <input className="w-[calc(100%-80px)] border" />
                    <span className="inline-block pl-2" onClick={e => {
                        deleteOptionHook(indexProp)
                    }}>
                        <FaRegTrashAlt />
                    </span>
                </div>
            </div>
            <div className="col-span-2 mb-2 ">
                <h4 className="text-lg pl-8">Option values</h4>
                {optValuesState.map((opts, index) => <OptionValue
                    key={index}
                    deleteOptionValueHook={deleteOptValueHook}
                    indexProp={index} />)}
            </div>
            <div className=" flex justify-center sm:col-span-2">
                <button type="button" className="border rounded-sm p-2" onClick={e => {
                    let opt = { name: "" }
                    changeOptValuesState(prev => ([...prev, opt]))
                }}>Add an option value</button>
            </div>
        </div>
    </>
}

let OptionValue = ({ deleteOptionValueHook, indexProp, opt_value, opt_name }) => {
    let [optValuesState, changeOptValuesState] = useState(opt_value);
    return <>
        <div className=" text-xl mb-2">
            <span className="inline-block pr-2"><BiGridVertical /></span>
            <input value={optValuesState} onChange={e => {
                let opt_value = e.target.value
                changeOptValuesState(opt_value)
            }} className="w-[calc(100%-80px)] border pl-2" placeholder="Add a value" />
            <span className="inline-block pl-2" onClick={e => {
                deleteOptionValueHook(indexProp)
            }}><FaRegTrashAlt /></span>
        </div>
    </>
}

let ProductStatus = () => {
    return <>
        <div className="p-2">
            <h4 className=" text-2xl font-bold mb-2" >Product Status</h4>
            <div className="border-b pb-2 mb-2" >
                <Form.Select className=" mx-auto" aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">Draft</option>
                    <option value="2">Active</option>
                </Form.Select>
                <p className=" text-gray-500 text-sm" >This product will be hidden from all sales channels.</p>

            </div>
            <div>
                <h3 className=" font-bold">Sales Channels And Apps</h3>
                <div>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Online store" />
                    <p><span className="text-[#2c6ecb] underline">Schedule availability</span></p>
                </div>
            </div>
        </div>
    </>
}

let ProductOrg = () => {
    return <>
        <div className="p-2">
            <h4 className=" text-2xl font-bold mb-2" >Product Status</h4>
            <div className="pb-2 mb-2" >
                <div className="mb-2">
                    <h3 className="mb-1">Type</h3>
                    <input className="p-2 border w-full rounded-sm" />
                </div>
                <div className="mb-2">
                    <h3 className="mb-1">Vendor</h3>
                    <input className="p-2 border w-full rounded-sm" />
                </div>
                <div className="border-b mb-5">
                <h3 className="mb-1">Collections</h3>
                    <input className="p-2 border w-full rounded-sm" />
                </div>
                <div className="mb-2">
                <h3 className="mb-1">Tags</h3>
                    <input className="p-2 border w-full rounded-sm" />
                </div>
            </div>
        </div>
    </>
}

let SaveBar=()=>{
    return<>
    <div className="fixed bottom-0 bg-black flex justify-around w-full p-2">
        <span>Unsaved product</span>
<button type="button" className=" px-2 py-1 border-white border text-white hover:bg-blue-500 rounded-sm" >Discard</button>
<button disabled={true} type="button" className=" px-2 py-1 border-white border bg-green-500 disabled:bg-green-800 disabled:border-none disabled:border-0 disabled:text-gray-900 text-white hover:bg-blue-500 rounded-sm" >Saved</button>
        </div></>
}
export { NewProductIndex };