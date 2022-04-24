import { GiHamburgerMenu } from "react-icons/gi"
import { FaRegTrashAlt, FaSearch, FaTimes } from "react-icons/fa"
import { useEffect, useRef, useState } from "react"
import React, { Component } from 'react';
//import { Editor } from 'react-draft-wysiwyg';
import dynamic from "next/dynamic";
let EditorNoSSR = dynamic(import('react-draft-wysiwyg').then(obj => obj.Editor), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
})

let NewProductIndex = () => {
    return <>
        <div className=" md:hidden mt-[80px] bg-[#dbdddf] pb-5 pt-2">
            <NewProductForm />
        </div>
    </>
}

let NewProductForm = ({ }) => {
    return <>
        <div className="p-2 mb-2 mt-3 ">
            <div className=" p-2 w-full  flex justify-between  ">
                <h3 className=" text-3xl font-extrabold" >Products</h3>
                <button className="border p-2" >import</button>
            </div>
            <form>
                <div className="bg-white rounded-xl p-2 pt-4 pb-4 mb-2" >

                    <TitleComp />
                    <DescriptionComp />
                </div>
                <div className="bg-white rounded-xl p-2 pt-4 pb-4 mb-2" >
                    <Media />
                </div>
                <div className="bg-white rounded-xl p-2 pt-4 pb-4 mb-2">
                    <Pricing />
                </div>
                <div className="bg-white rounded-xl p-2 pt-4 pb-4 mb-2">
                    <Inventory />
                </div>
                <div className="bg-white rounded-xl p-2 pt-4 pb-4 mb-2">
                    <Shipping />
                </div>
                <div className="bg-white rounded-xl p-2 pt-4 pb-4 mb-2">
                    <OptionsSection />
                </div>
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

let DescriptionComp = () => {
    return <>
        <div className="mb-2 p-2">
            <h4 className=" text-2xl">Description</h4>
            <EditorNoSSR /> </div>
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
            <div className="p-2 flex justify-center sm:block sm:grid-cols-2 sm:gap-3 text-xl ">
                <div className="sm:w-[600px] p-2">
                    <h3>Price</h3>
                    <p className="border p-2 w-full sm:w-full ">
                        <span className="p-2 w-[calc(30px)] inline-block" >₦</span>
                        <input placeholder="0.00" className="p-2 w-[calc(100%-30px)] " />
                    </p>
                </div>
                <div className=" sm:w-[600px] p-2">
                    <h3>Compare Price</h3>
                    <p className="border p-2 w-full sm:w-full ">
                        <span className="p-2 w-[calc(30px)] inline-block" >₦</span>
                        <input placeholder="0.00" className="p-2 w-[calc(100%-30px)] focus:border " />
                    </p>
                </div>
                <div className=" sm:w-[600px] p-2">
                    <p className="border p-2 w-full sm:w-full ">
                        <input type="checkbox" className=" default:ring-2 default:ring-inset" />
                        <span className=" ml-2" >Charge taxes on this product</span>
                    </p>
                </div>
                <div className=" sm:w-[600px] p-2">
                    <h3>Cost per item</h3>
                    <p className="border p-2 w-full sm:w-full ">
                        <span className="p-2 w-[calc(30px)] inline-block" >₦</span>
                        <input placeholder="0.00" className="p-2 w-[calc(100%-30px)] focus:border " />
                    </p>
                    <p className=" text-sm italic text-gray-600">Customers won't see this</p>
                </div>
            </div>
        </div>
    </>
}

let Inventory = () => {
    return <>
        <div className=" mb-2 p-2">
            <h4 className=" text-2xl" >Inventory</h4>
            <div className="p-2 flex justify-center sm:block sm:grid-cols-2 sm:gap-3 text-xl ">
                <div className="sm:w-[600px] p-2">
                    <h3>Store keeping unit</h3>
                    <p className="border p-2 w-full sm:w-full ">
                        <span className="p-2 w-[calc(30px)] inline-block" >₦</span>
                        <input placeholder="0.00" className="p-2 w-[calc(100%-30px)] " />
                    </p>
                </div>
                <div className=" sm:w-[600px] p-2">
                    <h3>Barcode</h3>
                    <p className="border p-2 w-full sm:w-full ">
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
                    <p className="border p-2 w-full sm:w-full ">
                        <input type="checkbox" className=" default:ring-2 default:ring-inset" />
                        <span className=" ml-2" >Continue selling after stock is out</span>
                    </p>
                </div>
                <div className=" sm:w-full border-t-2 p-2 ">
                    <h3>Quantity</h3>
                    <div className=" p-2 w-full sm:grid grid-cols-2">
                        <div className="border p-2 w-full sm:w-1/2 ">
                            <span className="p-2 w-[calc(30px)] inline-block" >₦</span>
                            <input placeholder="0.00" className="p-2 w-[calc(100%-30px)] focus:border " />
                        </div>
                        <div className="border p-2 w-full sm:w-1/2 ">
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
                <div className="border p-2 w-full sm:w-full ">
                    <input onChange={e => {
                        changeShowShipping(!showShipping)
                    }} type="checkbox" className=" default:ring-2 default:ring-inset" />
                    <span className=" ml-2 text-2xl" >This is a physical product</span>
                </div>
                <p>Customers won’t enter their shipping address or choose a shipping method
                    when buying this product.</p>
                {showShipping ? <>
                    <div className="p-2 flex justify-center sm:block sm:grid-cols-2 sm:gap-3 text-xl ">
                        <div className="sm:w-[600px] p-2">
                            <h3>Weight</h3>
                            <p className="border p-2 w-full sm:w-full ">
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
                            <p className="border p-2 w-full sm:w-full ">
                                <input type="checkbox" className=" default:ring-2 default:ring-inset" />
                                <span className=" ml-2" >Continue selling after stock is out</span>
                            </p>
                        </div>
                        <div className=" sm:w-full border-t-2 p-2 ">
                            <div className="sm:w-[600px] p-2">
                                <h3>Harmonised system code</h3>
                                <p className="border p-2 w-full sm:w-full ">
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
            <h4 className=" text-2xl" >Options</h4>
            <div>
                <div className="border p-2 w-full sm:w-full ">
                    <input onChange={e => {
                        changeShowOptions(!showOptions)
                    }} type="checkbox" className=" default:ring-2 default:ring-inset" />
                    <span className=" ml-2 text-2xl" >This product has options, like size or color</span>
                </div>
                {showOptions ? <>
                    <Options showOptionsHook={changeShowOptions} />
                </> : null}
            </div>
        </div>
    </>
}


let Options = ({ showOptionsHook }) => {
    let [optionsState, changeOptionsState] =
        useState([<Option deleteOptionHook={showOptionsHook} />]);
    useEffect(() => {
        
    }, [optionsState.length])
    return <>
        <>

            <div className="p-2 flex justify-center sm:block sm:grid-cols-2 sm:gap-3 text-xl ">

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
                    <p className="border p-2 w-full sm:w-full ">
                        <input type="checkbox" className=" default:ring-2 default:ring-inset" />
                        <span className=" ml-2" >Continue selling after stock is out</span>
                    </p>
                </div>
                <div className=" sm:w-full border-t-2 p-2 ">
                    <div className="sm:w-[600px] p-2">

                    </div>
                </div>
            </div>
        </>
    </>
}

let Option = ({ deleteOptionHook }) => {
    return <>
        <div className="flex" >
            <h5>Option</h5>
            <p>
                <input className="w-full" />
            </p>
            <span onClick={e => {
                deleteOptionHook(true)
            }}><FaRegTrashAlt /></span>
        </div>
    </>
}
export { NewProductIndex };