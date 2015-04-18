import { Component } from 'react';

export default class Jury extends Component {
    displayName: 'Jury'

    render() {
        return (
            <div className="jury">
                {this.props.members.map(function (item, i) {
                    var image = 'jury-image bg-' + item.image;
                    return (
                        <figure>
                            <div className={image} />
                            <figcaption>{item.name}</figcaption>
                        </figure>
                    )
                })}
            </div>
        );
    }
};
