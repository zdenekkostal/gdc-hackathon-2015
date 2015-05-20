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

                        <p>The jury chose three finalists during the weekend and the winning team was announced <strong>on Monday, 18th May</strong> on the <strong>CZ – US All Hands Ceremony.</strong> The&nbsp;winning team was also rewarded with special hackathon polo shirts.</p>

                        <p>This year‘s holder of the LEGO BEAR trophy is the <strong>(F)BI Geographical Data Visualization</strong> project created by <strong>Zdeněk Svoboda, Tomas Korčák and Petr Cvengroš</strong>.</p>

                        <img src={bear} />
                    </div>
                </div>
            </div>
        );
    }
};
