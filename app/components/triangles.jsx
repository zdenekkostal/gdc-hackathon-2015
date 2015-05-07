import { Component } from 'react';

export default class Triangles extends Component {
    displayName: 'Triangles'

    render() {
        return (
            <div id="triangles">
                <div className="triangles-left">
                    <div className="tri-g-1"></div>

                    <div className="tri-l-1 show-for-large-up"></div>
                    <div className="tri-l-2 show-for-large-up"></div>

                    <div className="tri-p-1 show-for-large-up"></div>
                    <div className="tri-p-2 show-for-large-up"></div>
                    <div className="tri-p-3 show-for-large-up"></div>
                    <div className="tri-p-4 show-for-large-up"></div>

                    <div className="tri-g-2 show-for-large-up"></div>
                </div>

                <div className="triangles-right">
                    <div className="tri-r-3 show-for-large-up"></div>
                    <div className="tri-r-big show-for-large-up"></div>

                    <div className="tri-r-1 show-for-large-up"></div>
                    <div className="tri-r-2 show-for-large-up"></div>

                    <div className="tri-r-4 show-for-large-up"></div>
                    <div className="tri-r-5 show-for-large-up"></div>
                </div>

            </div>
        );
    }
};
