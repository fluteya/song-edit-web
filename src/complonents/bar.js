import React from "react";
import { useState } from "react";
import {softedarr} from "../pages/Createsample"//softedarr is the true/false arrays,not just one rows,it contain A row from G row
//it is used to change the json data when on bar get clicked 

/**
 * 
 * @bool: true of false
 * @name: A,B,C...
 * @inde: the position of the bar
 * @return：one bar
 */
export default function Bar({bool,name,inde}) {
const letters = ["A", "B", "C", "D", "E", "F", "G"];
let rownum = letters.indexOf(name);

/* 
decide the initial state of bar:toggled or not
@bool: the bool true or false
@return: if ture return toggle-selected, if false return to toggle
**/
function initial(bool) {
    if (bool == true) {
      return ("toggle-selected");
    } else{
      return("toggle")
    }
}
  let initialcolor = initial(bool);
    const [content, setcontent] = useState(initialcolor);
    //onclick event of bar
    const toggleContent = () => {
        if (content === 'toggle') {
          setcontent('toggle-selected');
          softedarr[rownum][name][inde] = true;
    } else {
          setcontent('toggle');
          softedarr[rownum][name][inde] = false;
    }
    };
    return(
        <button  onClick={toggleContent} class = {content}></button>
    )
}