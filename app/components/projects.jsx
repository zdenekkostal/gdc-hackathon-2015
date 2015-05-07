import { Component } from 'react';

let Projects = class Projects extends Component {
    displayName: 'Projects'

    render() {
        const projects = this.props.projects.map(this.renderProject.bind(this));

        return (
            <div id="projects">
                <div className="row">
                    <div className="small-9 columns">
                        <h2>Projects</h2>
                        <p>Register your team for the hackathon into the table below. Please note that the registration is essential as the organisational team can supply you adequately.</p>
                        <p>Be sure to support your favorite projects by liking them!</p>
                    </div>
                </div>

                <div className="row">
                    <div className="small-12 columns">
                        <table>
                            <tbody>
                                <tr>
                                    <th>Project name</th>
                                    <th>Teammates</th>
                                    <th>Origin</th>
                                    <th>Likes</th>
                                </tr>

                                {projects}
                            </tbody>
                        </table>
                        <p>
                            <button className="button">Add your own!</button>
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    renderProject(project) {
        return (
            <tr>
                <td><a href={project.uri}>{project.name}</a></td>
                <td>{project.teammates.join(', ')}</td>
                <td>{project.origin}</td>
                <td>{project.likes}</td>
            </tr>
        );
    }
};

Projects.defaultProps = {
    projects: [{
        name: 'GoodCraft',
        uri: 'https://github.com/gooddata/gdc-client',
        teammates: ['Bob Koutsky'],
        origin: 'US',
        likes: 23
    }, {
        name: 'GoodCraft 2',
        uri: 'https://github.com/gooddata/gdc-client',
        teammates: ['Bob Koutsky'],
        origin: 'US',
        likes: 23
    },{
        name: 'GoodCraft',
        uri: 'https://github.com/gooddata/gdc-client',
        teammates: ['Bob Koutsky'],
        origin: 'US',
        likes: 23
    }, {
        name: 'GoodCraft 2',
        uri: 'https://github.com/gooddata/gdc-client',
        teammates: ['Bob Koutsky'],
        origin: 'US',
        likes: 23
    }]
};

export default Projects;
