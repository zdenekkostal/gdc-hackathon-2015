import { Component } from 'react';

import SocialFeed from './socialFeed';

let Social = class Social extends Component {
    displayName: 'Social'

    constructor () {
        this.state = {
            tweets: [],
            photos: []
        };
    }

    componentWillMount() {
        this.loadInstagram();
    }

    loadInstagram() {
        $.get('/instagram').then((insta) => {
            if (!insta.data) return;

            var photos = insta.data.map(function(item) {
               return {url: item.link, image: item.images.low_resolution.url};
            })
            // get first 10
            .slice(0, 10);

            this.setState({
                photos: photos
            });
        });
    }

    render() {
        return (
            <div id="social">
                <div className="row">
                    <div className="columns small-12 large-9">
                        <h2>Get social</h2>
                        <p>Include the official hashtag <a href="https://twitter.com/search?q=AllDataHack2015&src=typd" className="color-green">#AllDataHack2015</a> in your social posts.</p>
                        <p>We will be rewarding the most liked photos on Instagram. The only requirement is to include the hashtag so others can find it easily, duh!</p>
                    </div>
                </div>

                <SocialFeed tag={this.props.tag} photos={this.state.photos} tweets={this.state.tweets} />

                <div className="row">
                    <div className="columns text-right">
                        We will also be updating our <a href="https://plus.google.com/u/0/104029022504534058490/posts" target="_blank" className="color-pink">Google+ Event</a><br /> page with photos from the event.
                    </div>
                </div>
            </div>
        );
    }
};

Social.defaultProps = {
    tag: 'AllDataHack2015'
};

export default Social;
