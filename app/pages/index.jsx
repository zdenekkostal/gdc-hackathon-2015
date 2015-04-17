import { Component } from 'react';

import { Menu } from '../components/menu';

import { Hello } from '../components/hello';
import { About } from '../components/about';
import { Schedule } from '../components/schedule';
import { Social } from '../components/social';
import { Projects } from '../components/projects';
import { Awards } from '../components/awards';

export default class Index extends Component {
    displayName: 'Index'

    render() {
        return (
            <div>
                <Menu />

                <!-- pages -->

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
