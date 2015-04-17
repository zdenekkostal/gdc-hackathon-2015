import { Component } from 'react';

export default class Triangles extends Component {
    displayName: 'Triangles'

    render() {
        return (
            <div id="triangles">
                <div className="tri-g-1"></div>

                <div className="tri-1"></div>
                <div className="tri-2"></div>

                <div className="tri-p-1"></div>
                <div className="tri-p-2"></div>
                <div className="tri-p-3"></div>

            </div>
        );
    }
};
