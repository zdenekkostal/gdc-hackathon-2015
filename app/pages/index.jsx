import { Component } from 'react';

import Menu from '../components/menu';

import Hello from '../components/hello';
import About from '../components/about';
import Schedule from '../components/schedule';
import Social from '../components/social';
import Projects from '../components/projects';
import Awards from '../components/awards';

import Triangles from '../components/triangles';

// TODO: fix this shit
import ReactIntl from 'react-intl';
window.ReactIntl = ReactIntl;

import { cs } from 'react-intl/dist/locale-data/cs';

let Index = class Index extends Component {
    displayName: 'Index'

    constructor(props) {
        var loc = window.location.href;

        var now = new Date().getTime();
        var end = props.end.getTime();
        var start = props.start.getTime();

        var progressVisible = now > start && now < end;

        this.state = {
            menu: [
                { title: 'Hello', id: 'hello'},
                { title: 'About', id: 'about'},
                { title: 'Schedule', id: 'schedule'},
                { title: 'Social', id: 'social'},
                { title: 'Projects', id: 'projects'},
                { title: 'Awards', id: 'awards'}
            ],

            signupVisible: loc.search('goodhack') !== -1,

            progressVisible: progressVisible,

            progress: 0,

            locales: this.getLocales()
        };
    }

    componentDidMount () {
        window.setInterval(this.updateProgress.bind(this), 2000);
    }

    updateProgress () {
        this.setState({
            progress: this._getProgress()
        });
    }

    _getProgress() {
        var now = new Date().getTime()/1000;
        var end = this.props.end.getTime()/1000;
        var start = this.props.start.getTime()/1000;
        var onePct = (end - start)/100;
        var pct = 0;

        if (now > end) pct = 100;

        if (now > start && now < end) {
            var fromStart = now - start;
            pct = Math.round(fromStart/onePct);
        }

        return pct;
    }

    submitHandler () {
        this.setState({
            formVisible: false
        });
    }

    showForm () {
        this.setState({
            formVisible: true
        });
    }
    signupHandler () {
        this.setState({
            formVisible: !this.state.formVisible
        });
    }

    render() {
        return (
            <div>
                <Menu items={this.state.menu} />

                <Triangles />

                <Hello
                    signupVisible={this.state.signupVisible}
                    signupHandler={this.showForm.bind(this)}
                    progressVisible={this.state.progressVisible}
                    progress={this.state.progress} />

                <About />

                <Schedule locales={this.state.locales} />

                <Social locales={this.state.locales} />

                <Projects
                    signupVisible={this.state.signupVisible}
                    formVisible={this.state.formVisible}
                    signupHandler={this.signupHandler.bind(this)}
                    submitHandler={this.submitHandler.bind(this)} />
                <Awards />
            </div>
        );
    }

    getLocales() {
        return this.isCz() ? ['cs-CZ'] : ['en-US'];
    }

    isCz() {
        return this.currentTimeZoneOffset() === -120;
    }

    currentTimeZoneOffset() {
        return (new Date()).getTimezoneOffset();
    }
};

Index.defaultProps = {
    start: new Date(2015, 4, 14, 9),
    end: new Date(2015, 4, 15, 18)
};

export default Index;
