import { Component } from 'react';
import ScrollTo from './scrollTo';
var logo = require("../images/logo.png");

export default class Hello extends Component {
    displayName: 'Hello'

    render() {
        var extra;

        if (this.props.signupVisible) {
            extra = (
                <p onClick={this.props.signupHandler}>
                    <ScrollTo target="newProject">
                        <button className="button">Sign up</button>
                    </ScrollTo>
                </p>
            );
        }

        return (
            <div id="hello">
                <div className="logo"></div>

                <h1>
                    <strong className="color-green">All</strong><strong className="color-black">Data</strong>&nbsp;
                    <strong className="color-pink">Hackathon</strong>&nbsp;
                    <span className="color-pink">2015</span>
                </h1>

                MAY 14 – 15, 2015 • Prague, Brno, San Francisco • <span className="color-grey">#AllDataHack2015</span>

                {extra}
            </div>
        );
    }
};
