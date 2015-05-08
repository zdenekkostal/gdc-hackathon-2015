import { Component } from 'react';
var bear = require("../images/bear.jpg");

export default class Awards extends Component {
    displayName: 'Awards'

    render() {
        return (
            <div id="awards">
                <div className="row">
                    <div className="small-12 columns">

                        <h2>Awards</h2>

                        <p>Every team that wants to compete for the "Lego Bear" <strong>has to record a 60 second video</strong> that introduces the project. Please send a link of the video including a short description of the team to <a href="mailto:hackathon@gooddata.com">hackathon@gooddata.com</a>.</p>

                        <p>Deadline for delivering the video recording is <strong>Friday 6pm</strong> (both PST and CET). The jury will choose three finalist during the weekend and the winner will be announced the following Monday, 18th May on the CZ - US All Hands Ceremony.</p>

                        <img src={bear} />
                    </div>
                </div>
            </div>
        );
    }
};
