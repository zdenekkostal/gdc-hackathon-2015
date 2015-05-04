import { Component } from 'react';

let Schedule = class Schedule extends Component {
    displayName: 'Schedule'

    render() {
        const schedule = this.props.schedule.map(this.renderDay.bind(this));

        return (
            <div id="schedule" className="row">
                <div className="columns show-for-medium-up medium-6">
                    img
                </div>

                <div className="columns small-12 medium-6">
                    <h2>Schedule</h2>

                    {schedule}
                </div>
            </div>
        );
    }

    renderDay(daySchedule) {
        const events = daySchedule.events.map(this.renderEvent.bind(this));

        return (
            <div class="schedule-day">
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
                <td>{event.time && event.time.toString()}</td>
                <td>{event.description}</td>
            </tr>
        );
    }
};

Schedule.defaultProps = {
    // country: new Date().getTimezoneOffset();

    schedule: [{
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
    }]
}

export default Schedule;
