import { Component } from 'react';

let Projects = class Projects extends Component {
    displayName: 'Projects'

    constructor() {
        this.state = {
            projects: [],
            loading: true
        };
    }

    componentWillMount() {
        this.loadProjects();
    }

    loadProjects() {
        $.get('/repo').then((projects) => {
            this.setState({
                projects: projects
            });
        });
    }

    onSubmit (){
        var url = '/repo';
        var nameInput = $("#p-name");

        if (nameInput.val().length < 1) {
            nameInput.focus();
            nameInput.addClass('invalid');
            return false;
        }

        nameInput.removeClass('invalid');

        $.ajax({
            type: "POST",
            url: url,
            data: $("#newProjectForm").serialize()
        }).then(() => {
            this.loadProjects();
        });

        this.props.submitHandler();

        return false;
    }

    render() {
        const projects = this.state.projects.map(this.renderProject.bind(this));

        var form;
        var extra;

        if (this.props.signupVisible) {
            extra = (
                <p>
                    <button className="button"
                    onClick={this.props.signupHandler} id="newProject">Add your own!</button>
                </p>
            );
        }

        if(this.props.formVisible) {
            form = (
                <form id="newProjectForm" onSubmit={this.onSubmit.bind(this)}>
                  <fieldset>
                    <legend>New project</legend>
                    <div className="row">
                        <div className="small-2 columns">
                            <label for="p-name">Name</label>
                        </div>
                        <div className="small-10 columns">
                            <input type="text" id="p-name" name="name" placeholder="Project name" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="small-2 columns">
                            <label for="p-link">Link</label>
                        </div>
                        <div className="small-10 columns">
                            <input type="text" id="p-link" name="link" placeholder="Project link (optional)" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="small-2 columns"> </div>
                        <div className="small-10 columns">
                            <button className="button">Submit</button>
                        </div>
                    </div>

                  </fieldset>
                </form>
            );
        }

        return (
            <div id="projects">
                <div className="row">
                    <div className="small-9 columns">
                        <h2>Projects</h2>
                        <p>Register your team for the hackathon in the table below. Please note that registration is essential so the organization team can adequately support you.</p>
                        <p>Be sure to support your favorite projects by liking them!</p>
                    </div>
                </div>

                <div className="row">
                    <div className="small-12 columns">
                        <table>
                            <tbody>
                                <tr>
                                    <th>Project name</th>
                                    <th>Link</th>
                                </tr>

                                {projects}
                            </tbody>
                        </table>
                        {extra}
                        {form}
                    </div>
                </div>
            </div>
        );
    }

    renderProject(project) {
        return (
            <tr>
                <td><b>{project.name}</b></td>
                <td><a href={project.link} target="_blank">{project.link}</a></td>
            </tr>
        );
    }
};

export default Projects;
