import { Component } from 'react';
import ScrollTo from './scrollTo';

export default class Menu extends Component {
    displayName: 'Menu'

    render() {
        return (
            <div id="menu">
                {this.props.items.map((item) => {
                    return (
                        <ScrollTo target={item.id}>
                            {item.title}
                        </ScrollTo>
                    );
                })}
            </div>
        );
    }
};
