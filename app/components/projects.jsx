import { Component } from 'react';

let Projects = class Projects extends Component {
    displayName: 'Projects'

    onSubmit (){
        var url = '/repo';

        if ($("#p-name").val().length < 1) {
            $("#p-name").focus();
            return false;
        }

        $.ajax({
            type: "POST",
            url: url,
            data: $("#newProjectForm").serialize(),
            success: function(data){
                console.log('Form-success: ', data);
            },
            failure: function(data){
                console.log('Form-failure: ', data);
            }
        });

        return false;
    }

    render() {
        const projects = this.props.projects.map(this.renderProject.bind(this));

        var form;

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
                                    <th>Link</th>
                                </tr>

                                {projects}
                            </tbody>
                        </table>
                        <p>
                            <button className="button"
                            onClick={this.props.signupHandler} id="newProject">Add your own!</button>
                        </p>

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
                <td><a href={project.uri} target="_blank">{project.uri}</a></td>
            </tr>
        );
    }
};

Projects.defaultProps = {
    projects: [{
        name: 'GoodCraft',
        uri: 'https://github.com/gooddata/gdc-client'
    }, {
        name: 'GoodCraft 2',
        uri: 'https://github.com/gooddata/gdc-client'
    },{
        name: 'GoodCraft',
        uri: 'https://github.com/gooddata/gdc-client'
    }, {
        name: 'GoodCraft 2',
        uri: 'https://github.com/gooddata/gdc-client'
    }]
};

export default Projects;
