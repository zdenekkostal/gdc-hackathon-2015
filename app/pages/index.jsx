import { Component } from 'react';

import Menu from '../components/menu';

import Hello from '../components/hello';
import About from '../components/about';
import Schedule from '../components/schedule';
import Social from '../components/social';
import Projects from '../components/projects';
import Awards from '../components/awards';

export default class Index extends Component {
    displayName: 'Index'

    constructor () {
        this.state = {
            menu: [
                'Hello',
                'About',
                'Schedule',
                'Social',
                'Projects',
                'Awards'
            ]
        }
    }

    render() {
        return (
            <div>
                <Menu items={this.state.menu} />

                <Hello />
                <About />
                <Schedule />
                <Social />
                <Projects />
                <Awards />
            </div>
        );
    }
};