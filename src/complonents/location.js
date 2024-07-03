import React from "react";
import { useState } from "react";
import Preview from "./preview";

/**
 * 
 * @name: the name of song 
 * @date: the date of song
 * @returns:one component on share page
 */
export default function Location({name,date}) {
    return(
        <div class="card">
        <div class="song-details">
            <h3>{name}</h3>
            <p>{date}</p>
        </div>
        <div className="buttons">
            <Preview></Preview>
        </div>
    </div>
    )


}