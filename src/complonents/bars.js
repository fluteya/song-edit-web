import React from "react";
import { useState } from "react";
import Bar from "./bar";



let instrument_type;
/* 
make one row of recording_data become one row of bars
@keys:one row of true/flase array
@name: the header:A,B,C...or G
@return:one row of bar
*/
function bars(keys,name){
    if (!Array.isArray(keys)) {
        return <Bar></Bar>; 
    }
    return(keys.map((key, index)=><Bar bool={key} inde = {index} name={name}></Bar>))}

/**
 * 
 * @type:the type of bar: the bars or the header of instrument
 * @name:if the type is bars, then the name is :A,B,C..
 * @row:one row of the true/false array
 * @instrument:if type is header of instrument,the it decide the type of instrument
 * @returns one row of bars
 */
export default function Bars({type,name,row,instrument}) {
    let initial_types = ["toggle-selected","toggle","toggle","toggle"];
    if(instrument == "Piano") {
        initial_types = ["toggle-selected","toggle","toggle","toggle"]
 }
    if (instrument == "French Horn") {
        initial_types = ["toggle","toggle-selected","toggle","toggle"]
}
    if (instrument == "Guitar") {
        initial_types = ["toggle","toggle","toggle-selected","toggle"]
    }
    if (instrument == "Drums") {
        initial_types = ["toggle","toggle","toggle","toggle-selected"]
    }
    let row1 = bars(row, name);//use bar function to get bars
    const [content1, setcontent1] = useState(initial_types[0]);
    const [content2, setcontent2] = useState(initial_types[1]);
    const [content3, setcontent3] = useState(initial_types[2]);
    const [content4, setcontent4] = useState(initial_types[3]);
    //click on insturments, if on insturment get click, then all rest will be unselcted
    const toggleContent = () => {
        if (content1 === 'toggle') {
          setcontent1('toggle-selected');
          setcontent2("toggle");
          setcontent3("toggle");
          setcontent4("toggle");
          instrument_type = "Piano"
        } 
    }
    const toggleContent2 = () => {
        if (content2 === 'toggle') {
          setcontent1('toggle');
          setcontent2("toggle-selected");
          setcontent3("toggle");
          setcontent4("toggle");
          instrument_type = "French Horn"
         } 
    };
    const toggleContent3 = () => {
        if (content3 === 'toggle') {
          setcontent1('toggle');
          setcontent2("toggle");
          setcontent3("toggle-selected");
          setcontent4("toggle");
          instrument_type = "Guitar"
         } 
    };
    const toggleContent4 = () => {
        if (content4 === 'toggle') {
          setcontent1('toggle');
          setcontent2("toggle");
          setcontent3("toggle");
          setcontent4("toggle-selected");
          instrument_type = "Drums"
        } 
    };
    if (type == "instrument") {
        return(
            <div class="toggle-row-container">
            <div class="row-label">
                <h4>Instrument</h4>
             </div>
            <div class="sequence-row-container">
            <button  onClick={toggleContent} class = {content1}>{"Piano"}</button>
            <button  onClick={toggleContent2} class = {content2}>{"French Horn"}</button>
            <button  onClick={toggleContent3} class = {content3}>{"Guitar"}</button>
            <button  onClick={toggleContent4} class = {content4}>{"Drums"}</button>
            
            </div>
        </div>
        )
    }

    if(type = "bars") {
        return (
            <div class="toggle-row-container">
               < h4>{name}</h4>
            <div class="row-label">
                
            </div>
            <div class="sequence-row-container">
                {row1}
            </div>
        </div>

        )
    }
}
export {instrument_type}