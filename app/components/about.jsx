import { Component } from 'react';

import Jury from './jury';

export default class About extends Component {
    displayName: 'About'

    constructor () {
        this.state = {
            jury: [
                {name: 'Jirka Tobolka', image: 'jirka'},
                {name: 'Bill Lapp', image: 'bill'},
                {name: 'Jaroslav Gergič', image: 'jarda'},
                {name: 'Kristy Marcinová', image: 'kristy'}
            ]
        };
    }

    render() {
        return (
            <div id="about">
                <div className="row">
                    <div className="small-9 columns">
                        <h2>Let's do something awesome.</h2>
                        <p>Get ready to learn new technologies and push your limits. We'll provide plenty of food, awesome swag, and everything you'll need to carry out your craziest ideas.</p>
                        <p>In case you want to rest for a bit, we got you covered.</p>
                    </div>
                </div>

                <div className="row">
                    <div className="small-12 columns">

                        <h3>The allmighty jury</h3>

                        <Jury members={this.state.jury} />
                    </div>
                </div>
            </div>
        );
    }
};
