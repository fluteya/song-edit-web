import React from "react";
import { useState } from "react";

/**
 * 
 * @returns the preview button, change between preview and stop preview
 */
export default function Preview() {
    const [content, setcontent] = useState("preview");
    const toggleContent = () => {
        if (content === 'preview') {
          setcontent('stop preview');
        } else {
          setcontent('preview');
        }
    };
    return(<button onClick={toggleContent} type="button" >{content}</button>)

}

