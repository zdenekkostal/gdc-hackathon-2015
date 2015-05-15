import { Component } from 'react';
var bear = require("../images/bear.png");

export default class Awards extends Component {
    displayName: 'Awards'

    render() {
        return (
            <div id="awards">
                <div className="row">
                    <div className="small-12 columns">

                        <h2>Awards</h2>

                        <p>Every team that wants to compete for the LEGO BEAR <strong>has to record a 60 second video</strong> that introduces the project. Please send a link of the video including a short description of the team to <a href="mailto:hackathon@gooddata.com" className="color-green">hackathon@gooddata.com</a>.</p>

                        <p>Deadline for delivering the video recording is <strong>Friday 6pm</strong> (both PST and CET).</p>

                        <p>During the weekend the jury will be looking over your submitted projects and watching your videos, thinking hard who will be this year's winner.</p>

                        <p>The lucky winning team will be announced on Monday, May 18th during the<br />CZ–US All Hands Ceremony.</p>

                        <img src={bear} />
                    </div>
                </div>
            </div>
        );
    }
};
