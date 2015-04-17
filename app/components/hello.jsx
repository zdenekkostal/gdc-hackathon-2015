import { Component } from 'react';

export default class Hello extends Component {
    displayName: 'Hello'

    render() {
        return (
            <div id="hello">
                <img src="app/images/logo.png" className="logo" />

                <h1>
                    <strong>
                        <span className="color-green">All</span><span className="color-black">Data</span>&nbsp;
                        <span className="color-pink">Hackathon</span>&nbsp;
                    </strong>
                    <span className="color-pink">2015</span>
                </h1>

                MAY 7–8, 2015 • Prague, Brno, San Francisco • <span className="color-grey">#AllDataHack</span>

            </div>
        );
    }
};
