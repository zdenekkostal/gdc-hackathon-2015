import { Component } from 'react';

export default class Awards extends Component {
    displayName: 'Awards'

    render() {
        return (
            <div id="awards">
                <h2>Awards</h2>

                <p>Every team that want to compete to win "Lego Bear" <strong>has to record the 60 seconds video</strong> that introduces the project and send the link to this video to hackathon@gooddata.com with short description of the team (team members, etc).</p>

                <p>Deadline for delivering the video recording is <strong>Friday 6pm</strong> (both PST and CET). The jury will choose three finalist during the weekend and the winner will be announced the following Monday, 18th May on the CZ - US All Hands Ceremony.</p>

                <img src="app/images/bear.jpg" />
            </div>
        );
    }
};
