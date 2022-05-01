import { createContext, useContext } from "react";

let ProductCtx=createContext({
    product:{
        title:"",
        desc:"",
        /**
         * @type {{opt_name:string,opt_values:[string]}}
         */
        options:[],
        pricing:{
            price:undefined,
            unitPrice:undefined
        }
    },
    changeProduct:()=>{}
});

export {ProductCtx}