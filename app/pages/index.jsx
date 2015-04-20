import { Component } from 'react';

import Menu from '../components/menu';

import Hello from '../components/hello';
import About from '../components/about';
import Schedule from '../components/schedule';
import Social from '../components/social';
import Projects from '../components/projects';
import Awards from '../components/awards';

import Triangles from '../components/triangles';


export default class Index extends Component {
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
            ]
        };
    }

    render() {
        return (
            <div>
                <Menu items={this.state.menu} />

                <Triangles />

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
