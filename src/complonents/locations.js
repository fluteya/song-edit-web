import React from "react";
import { useState } from "react";
import Preview from "./preview";

/**
 * 
 * @name the name of location 
 * @returns one component on share page
 */
export default function Locations({name}) {
    const [content1, setcontent1] = useState("toggle-selected");
    const [content2, setcontent2] = useState("toggle");
    const toggleContent = () => {
        if (content1 === 'toggle') {
          setcontent1('toggle-selected');
          setcontent2("toggle");
        } 
    }

    const toggleContent2 = () => {
        if (content2 === 'toggle') {
          setcontent1('toggle');
          setcontent2("toggle-selected");
        } 
    };
    return(
        <div class="toggle-row-container">
        <div class="location-name-label">
            <h4>{name}</h4>
        </div>
        <div class="sequence-row-container">
            <button class={content1} onClick={toggleContent}>Shared</button>
            <button class={content2} onClick={toggleContent2}>Not Shared</button>
        </div>
    </div>
    )


}