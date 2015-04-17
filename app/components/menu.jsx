import { Component } from 'react';

export default class Menu extends Component {
    displayName: 'Menu'

    render() {
        return (
            <div>
            {this.props.items.map(function (item, i) {
                return (
                    <a href="#">{item}</a>
                )
            })}
            </div>
        );
    }
};
