import React from "react";
import { Link } from "react-router-dom";
import Preview from "./preview";

/**
 * 
 * @name:the name of song
 * @date:the date create song
 * @id:the id on api 
 * @returns the song component on homescreent
 */
export default function Song({name,date,id}) {
 return (
        <section class="sample">
            <div class="card">
                <div class="song-details">
                    <h3>{name}</h3>
                    <p>{date}</p>
                </div>
                <div class = "button-group-container">
                <Preview></Preview>
                <Link to = {`/share/${id}`}>share</Link>
                <Link class = "bright-button" to = {`/Createsample/${id}`}>Edit</Link>
                </div>
            </div>
        </section>
);
}
