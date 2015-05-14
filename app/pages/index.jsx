import { Component } from 'react';

import Menu from '../components/menu';

import Hello from '../components/hello';
import About from '../components/about';
import Schedule from '../components/schedule';
import Social from '../components/social';
import Projects from '../components/projects';
import Awards from '../components/awards';

// TODO: fix this shit
import ReactIntl from 'react-intl';
window.ReactIntl = ReactIntl;

import { cs } from 'react-intl/dist/locale-data/cs';

let Index = class Index extends Component {
    displayName: 'Index'

    constructor(props) {
        var loc = window.location.href;

        this.state = {
            currentEvent: '',

            menu: [
                { title: 'Hello', id: 'hello'},
                { title: 'About', id: 'about'},
                { title: 'Schedule', id: 'schedule'},
                { title: 'Social', id: 'social'},
                { title: 'Projects', id: 'projects'},
                { title: 'Awards', id: 'awards'}
            ],

            signupVisible: loc.search('goodhack') !== -1,

            progressVisible: false,

            progress: 0,

            locales: this.getLocales(),

            schedule: {
                'cs-CZ': [{
                    day: 'Thursday',

                    events: [{
                        time: new Date(2015, 4, 14, 9),
                        description: 'Kick Off - Breakfast',
                        location: '(Erlang/Klajdovka)'
                    }, {
                        description: 'Hacking'
                    }, {
                        time: new Date(2015, 4, 14, 12),
                        description: 'Lunch',
                        location: '(Erlang/Klajdovka)'
                    }, {
                        description: 'Hacking'
                    }, {
                        time: new Date(2015, 4, 14, 15, 30),
                        description: 'Fun event: Scooter race',
                        location: '(New office/Outside)'
                    }, {
                        description: 'Hacking'
                    }, {
                        time: new Date(2015, 4, 14, 18),
                        description: 'Dinner',
                        location: '(Erlang/Klajdovka)'
                    }, {
                        description: 'Hacking'
                    }, {
                        time: new Date(2015, 4, 14, 20),
                        description: 'Sync with US',
                        location: '(Erlang/Klajdovka)'
                    }, {
                        description: 'Hacking'
                    }, {
                        time: new Date(2015, 4, 14, 21),
                        description: 'Fun Event: Ping Pong tournament',
                        location: '(Services)'
                    }]
                }, {
                    day: 'Friday',

                    events: [{
                        time: new Date(2015, 4, 15, 0, 30),
                        description: 'Night Office Run?'
                    }, {
                        description: 'Hacking'
                    }, {
                        time: new Date(2015, 4, 15, 8),
                        description: 'Morning workout',
                        location: '(New office/Outside)'
                    }, {
                        time: new Date(2015, 4, 15, 9),
                        description: 'Breakfast',
                        location: '(Erlang/Klajdovka)'
                    }, {
                        description: 'Hacking'
                    }, {
                        time: new Date(2015, 4, 15, 11),
                        description: 'Fun Event: Lazy tennis',
                        location: '(New office)'
                    }, {
                        description: 'Hacking'
                    }, {
                        time: new Date(2015, 4, 15, 12),
                        description: 'Lunch',
                        location: '(Erlang/Klajdovka)'
                    }, {
                        description: 'Hacking'
                    }, {
                        time: new Date(2015, 4, 15, 17),
                        description: 'Final',
                        location: '(Erlang/Klajdovka)'
                    }, {
                        time: new Date(2015, 4, 15, 18),
                        description: 'Send the Video CZ Teams & Food, Sync with US',
                        location: '(Erlang/Klajdovka)'
                    }]
                }, {
                    day: 'Monday',
                    events: [{
                        time: new Date(2015, 4, 18, 17, 30),
                        description: 'All Data Hackathon - final ceremony',
                        location: '(Erlang/Klajdovka)'
                    }]
                }],
                'en-US': [{
                    day: 'Thursday',

                    events: [{
                        time: new Date(2015, 4, 14, 10),
                        description: 'Kick off US (Breakfast), Sync with CZ'
                    }, {
                        description: 'Hacking'
                    }, {
                        time: new Date(2015, 4, 14, 12),
                        description: 'Lunch'
                    }, {
                        description: 'Hacking'
                    }, {
                        time: new Date(2015, 4, 14, 15, 30),
                        description: 'Fun Event'
                    }, {
                        description: 'Hacking'
                    }, {
                        time: new Date(2015, 4, 14, 18),
                        description: 'Dinner'
                    }, {
                        description: 'Hacking'
                    }, {
                        time: new Date(2015, 4, 14, 21),
                        description: 'Wake up activity'
                    }, {
                        time: new Date(2015, 4, 14, 23),
                        description: 'Night Office Run?'
                    }]
                }, {
                    day: 'Friday',

                    events: [{
                        description: 'Hacking'
                    }, {
                        time: new Date(2015, 4, 15, 8),
                        description: 'Morning workout'
                    }, {
                        time: new Date(2015, 4, 15, 9),
                        description: 'Breakfast, Sync with CZ'
                    }, {
                        description: 'Hacking'
                    }, {
                        time: new Date(2015, 4, 15, 11),
                        description: 'Fun Event'
                    }, {
                        description: 'Hacking'
                    }, {
                        time: new Date(2015, 4, 15, 12),
                        description: 'Lunch'
                    }, {
                        description: 'Hacking'
                    }, {
                        time: new Date(2015, 4, 15, 17),
                        description: 'Final'
                    }, {
                        time: new Date(2015, 4, 15, 18),
                        description: 'Send the Video US Teams & Food'
                    }]
                }, {
                    day: 'Monday',
                    events: [{
                        time: new Date(2015, 4, 18, 8, 30),
                        description: 'All Data Hackathon - final ceremony'
                    }]
                }]
            }
        };
    }

    componentDidMount () {
        this.updateProgress();
        window.setInterval(this.updateProgress.bind(this), 2000);
    }

    updateProgress () {
        this.setState({
            currentEvent: this._getCurrentEvent(),
            progressVisible: this._getProgressVisible(),
            progress: this._getProgress()
        });
    }

    _getProgressVisible () {
        var now = this.props.now.getTime();
        var end = this.props.end.getTime();
        var start = this.props.start.getTime();

        return now >= start && now < end;
    }

    _getCurrentEvent () {
        var name = '';
        var loc = '';

        var now = this.props.now.getTime();
        var locale = this.getLocales()[0];
        var schedule = this.state.schedule[locale];

        for (var i = 0; i < schedule.length; i++) {
            for (var j = 0; j < schedule[i].events.length; j++) {
                var event = schedule[i].events[j];
                var nextEvent = schedule[i].events[j+1];
                var duration = 1000 * 60 * 60; // event duration is 1 hour

                if (!event.time) continue;

                var eventEnd = event.time.getTime() + duration;

                var afterEventStarted = now >= event.time.getTime();
                var beforeEventEnd = now <= eventEnd;
                var afterEvent = now > eventEnd;

                if (afterEvent && nextEvent) {
                    loc = nextEvent.location ? nextEvent.location : '';
                    name = nextEvent.description;
                }

                if (afterEventStarted && beforeEventEnd) {
                    loc = event.location ? event.location : '';
                    name = event.description;
                }

            }
        }

        name += ' ' + loc;

        return name;
    }

    _getProgress () {
        var now = this.props.now.getTime()/1000;
        var end = this.props.end.getTime()/1000;
        var start = this.props.start.getTime()/1000;
        var onePct = (end - start)/100;
        var pct = 0;

        if (now > end) pct = 100;

        if (now >= start && now < end) {
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

                <Hello
                    signupVisible={this.state.signupVisible}
                    signupHandler={this.showForm.bind(this)}
                    progressVisible={this.state.progressVisible}
                    progress={this.state.progress}
                    event={this.state.currentEvent} />

                <About />

                <Schedule
                    schedule={this.state.schedule}
                    locales={this.state.locales} />

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
    now: new Date(),
    start: new Date(2015, 4, 14, 9),
    end: new Date(2015, 4, 15, 18)
};

export default Index;
