import { Component } from 'react';
import { FormattedTime } from 'react-intl';
var scheduleTri = require("../images/schedule.png");

let Schedule = class Schedule extends Component {
    displayName: 'Schedule'

    constructor (props) {
        this.state = {
            locale: props.locales[0]
        };
    }

    switchLocale (e) {
        var newLocale = $(e.target).data('locale');

        this.setState({
            locale: newLocale
        });
    }

    render() {
        const schedule = this.props.schedule[this.state.locale].map(this.renderDay.bind(this));
        const localeSwitcher = ['en-US', 'cs-CZ'].map(this.renderLocaleSwitch.bind(this));

        return (
            <div id="schedule" className="row">
                <div className="columns show-for-large-up large-4">
                    <img src={scheduleTri} />
                </div>

                <div className="columns small-12 medium-12 large-8">
                    <h2>Schedule {localeSwitcher}</h2>

                    {schedule}
                </div>
            </div>
        );
    }

    renderLocaleSwitch(item) {
        var locale = item.substr(-2, 2);
        var classes = "locale-switch";

        if (this.state.locale === item) classes += " active";

        return (
            <div className={classes} data-locale={item} onClick={this.switchLocale.bind(this)}>{locale}</div>
        );
    }

    renderDay(daySchedule) {
        const events = daySchedule.events.map(this.renderEvent.bind(this));

        return (
            <div className="schedule-day">
                <h3>{daySchedule.day}</h3>

                <table>
                    <tbody>
                        {events}
                    </tbody>
                </table>
            </div>
        );
    }

    renderEvent(event) {
        return (
            <tr>
                <td className="day-time">{event.time && <FormattedTime value={event.time} units="hour" hour="numeric" minute="numeric" locales={this.state.locale} />}</td>
                <td>{event.description}</td>
            </tr>
        );
    }
};

Schedule.defaultProps = {

    schedule: {
        'cs-CZ': [{
            day: 'Thursday',

            events: [{
                time: new Date(2015, 4, 14, 9),
                description: 'Kick Off (Breakfast)'
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
                description: 'Dinner, Sync with US'
            }, {
                description: 'Hacking'
            }, {
                time: new Date(2015, 4, 14, 21),
                description: 'Wake up activity'
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
                description: 'Morning workout'
            }, {
                time: new Date(2015, 4, 15, 9),
                description: 'Breakfast'
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
                description: 'Send the Video CZ Teams & Food, Sync with US'
            }]
        }],
        'en-US': [{
            day: 'Thursday',

            events: [{
                time: new Date(2015, 4, 14, 9),
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
        }]
    }
}

export default Schedule;
