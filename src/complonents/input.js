import React from "react";
import { useState } from "react";

let inputcontent;
/**
 * it is the inputbar in create sample page
 * @content: the initial content of bar, can be the name of song or null when create new song
 * @return: input bar, change change when insert char or delete 
 */
export default function Input({content}) {
    let a;
    const [inputValue, setInputValue] = useState(content);
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        inputcontent = event.target.value
    };
return(<input type="text" value={inputValue}  onChange={handleInputChange} ></input>);
}
//use this function to get inputcontent to upload on API
export function getInputContent() {
    return inputcontent;
  }
