import { Component } from 'react';
import { FormattedTime } from 'react-intl';

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

        return (
            <div id="schedule" className="row">
                <div className="columns show-for-medium-up medium-6">
                    <img src="app/images/schedule.png" />
                </div>

                <div className="columns small-12 medium-6">
                    <h2>Schedule
                        <div className="locale-switch" data-locale="en-US" onClick={this.switchLocale.bind(this)}>US</div>
                        <div className="locale-switch" data-locale="cs-CZ" onClick={this.switchLocale.bind(this)}>CZ</div>
                    </h2>

                    {schedule}
                </div>
            </div>
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
                <td className="day-time">{event.time && <FormattedTime value={event.time} units="hour" hour="numeric" minute="numeric" locales={this.props.locales} />}</td>
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
                time: new Date(2015, 4, 20, 17),
                description: 'Registration & Warm up'
            }, {
                time: new Date(2015, 4, 20, 18),
                description: 'Dinner'
            }, {
                time: new Date(2015, 4, 20, 18),
                description: 'All hands'
            }, {
                description: 'Hacking'
            }, {
                time: new Date(2015, 4, 20, 22),
                description: 'Late snack'
            }, {
                description: 'Hacking'
            }, {
                time: new Date(2015, 4, 21, 3),
                description: 'GoodNight'
            }]
        }, {
            day: 'Friday',

            events: [{
                time: new Date(2015, 4, 21, 8, 30),
                description: 'Breakfast'
            }, {
                time: new Date(2015, 4, 21, 12),
                description: 'Lunch'
            }, {
                description: 'Hacking'
            }, {
                time: new Date(2015, 4, 21, 18),
                description: 'Dinner'
            }, {
                time: new Date(2015, 4, 21, 19),
                description: 'Presentations'
            }, {
                time: new Date(2015, 4, 21, 20),
                description: 'Afterparty'
            }]
        }],
        'en-US': [{
            day: 'US Thursday',

            events: [{
                time: new Date(2015, 4, 20, 17),
                description: 'Registration & Warm up'
            }, {
                time: new Date(2015, 4, 20, 18),
                description: 'Dinner'
            }, {
                time: new Date(2015, 4, 20, 18),
                description: 'All hands'
            }, {
                description: 'Hacking'
            }, {
                time: new Date(2015, 4, 20, 22),
                description: 'Late snack'
            }, {
                description: 'Hacking'
            }, {
                time: new Date(2015, 4, 21, 3),
                description: 'GoodNight'
            }]
        }, {
            day: 'US Friday',

            events: [{
                time: new Date(2015, 4, 21, 8, 30),
                description: 'Breakfast'
            }, {
                time: new Date(2015, 4, 21, 12),
                description: 'Lunch'
            }, {
                description: 'Hacking'
            }, {
                time: new Date(2015, 4, 21, 18),
                description: 'Dinner'
            }, {
                time: new Date(2015, 4, 21, 19),
                description: 'Presentations'
            }, {
                time: new Date(2015, 4, 21, 20),
                description: 'Afterparty'
            }]
        }]
    }
}

export default Schedule;
