import React, { Component } from "react";
import "./Portrait.css";
import pp from "./pp.jpg";

class Portrait extends Component {
    render() {
        return (
            <div className="photo">
                <img src={pp} width="250" height="250"/>
                <h2>Doruk Gezici</h2>
            </div>
        );
    }
}

export default Portrait;
