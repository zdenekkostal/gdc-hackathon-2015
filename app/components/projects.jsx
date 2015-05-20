import { Component } from 'react';

let Projects = class Projects extends Component {
    displayName: 'Projects'

    constructor() {
        this.state = {
            projects: [
                {
                name: "(F)BI Geographical data visualization",
                trophy: "1st",
                origin: "CZ",
                team: "ZD, TKO, PCV",
                video: "https://drive.google.com/open?id=0ByrT3-F9ZdiCTHlZbFFBUTljdlU&authuser=0"
            },{
                name: "RealBear - Hanging Plotter",
                trophy: "2nd",
                origin: "CZ",
                team: "BK",
                video: "https://drive.google.com/open?id=0ByuGNVLP0RD2Y1lnNTNSeFNXZFU&authuser=0"
            },{
                name: "MFEWEABIFFYP (Metric Formatter)",
                trophy: "3rd",
                origin: "CZ",
                team: "C",
                video: "https://drive.google.com/open?id=0ByuGNVLP0RD2RC1pMjMzWURUY2s&authuser=0"
            },{
                name: "Cloud ADS Insights",
                origin: "CZ",
                team: "JPL, JVL, LIRY, MCL",
                video: "https://drive.google.com/open?id=0ByuGNVLP0RD2Y3pGdmM4NS1MMkU&authuser=0"
            },{
                name: "Market Basket Analysis",
                origin: "US",
                team: "SHO, POL, HSZ, APE, CAU, PKO, RLI",
                video: "https://drive.google.com/open?id=0ByuGNVLP0RD2UElPMEpvakJScFU&authuser=0"
            },{
                name: "Macros in MAQL",
                origin: "CZ",
                team: "VRY",
                video: "https://drive.google.com/open?id=0ByuGNVLP0RD2Mk1UUWlDeWVpMjA&authuser=0"
            },{
                name: "IC3 Information Collector",
                origin: "CZ",
                team: "RMO, OCE",
                video: "https://drive.google.com/open?id=0ByuGNVLP0RD2bE01dTcwUEVlVTg&authuser=0"
            },{
                name: "QA Test results",
                origin: "CZ",
                team: "MVN",
                video: "https://drive.google.com/open?id=0ByuGNVLP0RD2UU81MXZpSGVVQ3M&authuser=0"
            },{
                name: "MonetDB for Datamarts",
                origin: "CZ",
                team: "MSP, DKU",
                video: "https://drive.google.com/open?id=0ByuGNVLP0RD2Ukw4WEFyaXFPS0k&authuser=0"
            },{
                name: "Mr. Clippy, SQL executor, Data Explorer PbG support",
                origin: "CZ",
                team: "MSC, MKU, JDE, MGE, MPA",
                video: "https://drive.google.com/open?id=0ByuGNVLP0RD2bm94WDBtYnIxdVE&authuser=0"
            },{
                name: "GREATEST and LEAST functions in MAQL",
                origin: "CZ",
                team: "VRY",
                video: "https://drive.google.com/open?id=0ByuGNVLP0RD2Mk1UUWlDeWVpMjA&authuser=0"
            },{
                name: "GoodData running in Docker containers",
                origin: "CZ",
                team: "DK, SCE, JHR",
                video: "https://drive.google.com/open?id=0ByuGNVLP0RD2dmMta2NwRjZwUFk&authuser=0"
            }
            ]
        };
    }

    render() {
        const projects = this.state.projects.map(this.renderProject.bind(this));

        var videoVisible = this.props.videoVisible;
        var videoHeader = videoVisible ? (<th className="text-center">Video</th>) : '';

        return (
            <div id="projects">
                <div className="row">
                    <div className="small-12 large-9 columns">
                        <h2>Projects</h2>
                        <p>So many great ideas! To see a brief introduction of each project, watch the videos below. We‘ll get the popcorn ready.</p>
                    </div>
                </div>

                <div className="row">
                    <div className="small-12 columns">
                        <table>
                            <tbody>
                                <tr>
                                    <th><div className="trophy"> </div></th>
                                    <th>Project name</th>
                                    <th>Teammates</th>
                                    <th>Origin</th>
                                    {videoHeader}
                                </tr>

                                {projects}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }

    renderProject(project) {
        var trophy = ' ';

        if (project.trophy) {
            trophy = (<div className="trophy-item">{project.trophy}</div>);
        }

        var videoVisible = this.props.videoVisible;
        var videoCell = videoVisible ? (<td><a href={project.video} target="_blank">Watch</a></td>) : '';

        return (
            <tr>
                <td>{trophy}</td>
                <td><b>{project.name}</b></td>
                <td>{project.team}</td>
                <td className="text-center">{project.origin}</td>
                {videoCell}
            </tr>
        );
    }
};

export default Projects;
