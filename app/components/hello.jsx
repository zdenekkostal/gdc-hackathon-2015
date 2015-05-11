import { Component } from 'react';
import ScrollTo from './scrollTo';
import ProgressBar from './progressBar';

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

        if (this.props.progressVisible) {
            var hacking;
            var event = this.props.event;
            var progress = this.props.progress;

            if (event !== ''){
                var hacking = (
                    <div className="hacking">
                        {event}
                    </div>
                );
            }

            extra = (
                <div className="progress-area">
                    <ProgressBar progress={progress} />
                    {hacking}
                </div>
            );
        }

        return (
            <div id="hello">
                <div className="logo"></div>

                <h1>
                    <strong className="color-green">All</strong><strong className="color-black">Data</strong>
                    <br className="show-for-small" />
                    <strong className="color-pink">Hackathon</strong>&nbsp;
                    <span className="color-pink">2015</span>
                </h1>

                MAY 14 – 15, 2015
                    <br className="show-for-small" /> • Prague, Brno, San Francisco
                    <br className="show-for-small" /> • <span className="color-grey">#AllDataHack2015</span>

                {extra}
            </div>
        );
    }
};
