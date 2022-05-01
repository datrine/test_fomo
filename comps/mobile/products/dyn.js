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
/*let RichEditorNoSSR = dynamic(()=>import('react-rte'), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
})*/
import RichTextEditor from 'react-rte';

let DescriptionComp = ({props}) => {
    let [editorState,changeEditorState]=useState({ value: RichTextEditor.createEmptyValue()});
    let onChange = (value) => {
        changeEditorState({value});
      if (props?.onChange) {
        // Send the changes up to the parent component as an HTML string.
        // This is here to demonstrate using `.toString()` but in a real app it
        // would be better to avoid generating a string on each change.
       /* this.props.onChange(
          value.toString('html')
        );*/
      }
    };
    return <>
        <div className="mb-2 p-2 z-0">
            <h4 className="text-2xl">Description</h4>
            {editorState? <RichTextEditor onChange={onChange} value={editorState.value} />:null}
           
        </div>
    </>
}

export { DescriptionComp };