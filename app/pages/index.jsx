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

    constructor() {
        this.state = {
            menu: [
                { title: 'Hello', id: 'hello'},
                { title: 'About', id: 'about'},
                { title: 'Schedule', id: 'schedule'},
                { title: 'Social', id: 'social'},
                { title: 'Projects', id: 'projects'},
                { title: 'Awards', id: 'awards'}
            ],

            locales: this.getLocales()
        };
    }

    signupHandler (e) {
        this.setState({
            formVisible: !this.state.formVisible
        });
    }

    render() {
        return (
            <div>
                <Menu items={this.state.menu} />

                <Triangles />

                <Hello signupHandler={this.signupHandler.bind(this)} />
                <About />
                <Schedule locales={this.state.locales} />
                <Social />
                <Projects formVisible={this.state.formVisible}  signupHandler={this.signupHandler.bind(this)} />
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

export default Index;
