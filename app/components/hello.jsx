import { Component } from 'react';

export default class Hello extends Component {
    displayName: 'Hello'

    render() {
        return (
            <div id="hello">
                <img src="app/images/logo.png" className="logo" />

                <h1>
                    <strong className="color-green">All</strong><strong className="color-black">Data</strong>&nbsp;
                    <strong className="color-pink">Hackathon</strong>&nbsp;
                    <span className="color-pink">2015</span>
                </h1>

                MAY 7–8, 2015 • Prague, Brno, San Francisco • <span className="color-grey">#AllDataHack</span>

                <p>
                    <button className="button">Sign up</button>
                </p>
            </div>
        );
    }
};
