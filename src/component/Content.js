import React from "react";
import bg from "../reactjs-icon 2.png"
export default function Content() {
    return (
        <section className="content">
            <div className="container">
                <img className="bg" src={bg} alt="bg img"></img>
                <h1 className="fact">
                    Fun Facts About React
                </h1>
                <ul className="list">
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Hass well over 100k starts on GitHub</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousands of enterprise apps, including mobile apps</li>
                </ul>
            </div>
        </section>
    )
}