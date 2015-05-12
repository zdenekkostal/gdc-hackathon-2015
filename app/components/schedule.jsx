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
        const localeSwitcher = ['en-US', 'cs-CZ'].map(this.renderLocaleSwitch.bind(this));

        return (
            <div id="schedule" className="row">
                <div className="columns show-for-large-up large-4"> </div>

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
                <td className="event-desc">{event.description}</td>
            </tr>
        );
    }
};

export default Schedule;
