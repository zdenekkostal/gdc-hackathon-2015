import { Component } from 'react';

import SocialFeed from './socialFeed';

let Social = class Social extends Component {
    displayName: 'Social'

    constructor (props) {
        this.state = {
            tweets: [],
            photos: [],
            locale: props.locales[0]
        };
    }

    componentWillMount() {
        this.loadInstagram();
        this.loadTwitter();
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

    loadTwitter() {
        $.get('/twitter').then((response) => {
            if (!response.statuses) return;

            var base = 'https://twitter.com/';

            var tweets = response.statuses.map(function(item) {

                item.text = item.text.replace(
                    /(http:\/\/[^\s]+)/g,
                    '<a href="$1" target="_blank" target="_blank">$1</a>'
                );

                item.text = item.text.replace(
                    /#([^\s]+)/g,
                    '<a href="https://twitter.com/search?q=$1&src=typd" target="_blank" target="_blank">#$1</a>'
                );

                return {
                    url:  base + item.user.screen_name + '/status/' + item.id_str,
                    text: item.text,
                    author: item.user.screen_name,
                    authorUri: base + item.user.screen_name,
                    date: new Date(item.created_at).toLocaleString(this.state.locale),
                };
            }.bind(this))
            // get first 10
            .slice(0, 10);

            this.setState({
                tweets: tweets
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
                        Go to our <a href="https://plus.google.com/u/0/events/c97d89qhsb67hmi8jnmn3qoo6eg?authkey=CPavlrKlmbXVcw" target="_blank" className="color-pink">Google+ Event</a> page to see more<br /> photos and videos from the hackathon.
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
