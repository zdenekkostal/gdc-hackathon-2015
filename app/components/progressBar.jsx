import { Component } from 'react';

var ProgressBar = class ProgressBar extends Component {
    displayName: 'ProgressBar'

    render() {
        var points = [1, 1, 1, 1, 1, 1];

        const marks = points.map(function (item, i) {
            var pct = (i+1) * 14;
            return (<div className="progressBar-point" style={{left: pct + '%'}}></div>);
        });

        const borders = points.map(function (item, i) {
            var pct = (i+1) * 14;
            return (<div className="progressBar-point-border" style={{left: pct + '%'}}></div>);
        });

        var pct = this.props.progress;

        return (
            <div className="progressBar">
                {marks}
                {borders}
                <div className="progressBar-status" style={{width: pct + '%'}}></div>
            </div>
        );
    }
};

ProgressBar.defaultProps = {
    progress: 0
};

export default ProgressBar;
