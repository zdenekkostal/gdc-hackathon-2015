import { Component } from 'react';

export default class SocialFeed extends Component {
    displayName: 'SocialFeeed'

    render() {
        const instagramLink = `https://instagram.com/explore/tags/${this.props.tag}/`;
        const twitterLink = `https://twitter.com/search?q=${this.props.tag}&src=typd`;

        var tweets = this.props.tweets;
        var photos = this.props.photos;

        // alternate photos with tweets
        // var items = $.map(tweets, function(v, i) {
        //      return [v, photos[i]];
        // }).slice(0, 11);

        // var items = [];
        // for (var i = 0; i < 6; i++) {
        //     items.push(photos[i] || {}, tweets[i] || {});
        // }

        var items = [];
        items.push(
            photos[1] || {},
                tweets[1] || {},
            photos[2] || {},
            photos[3] || {},
                tweets[2] || {},
            photos[4] || {},
                tweets[3] || {},
                tweets[4] || {},
            photos[5] || {},
                tweets[5] || {},
            photos[6] || {}
        );

        return (
            <div className="row socialFeed">
                <div className="columns small-6 medium-4 large-3 social-links">
                    <h3>See more</h3>

                    <dl className="social-instagram">
                        <dt><span className="socicon">x</span> Instagram</dt>
                        <dd><a href={instagramLink} target="_blank" className="color-green">#{this.props.tag}</a></dd>
                    </dl>

                    <dl className="social-twitter">
                        <dt><span className="socicon">a</span> Twitter</dt>
                        <dd><a href={twitterLink} target="_blank" className="color-green">#{this.props.tag}</a></dd>
                    </dl>
                </div>

                {items.map(this.renderItem.bind(this))}
            </div>
        );
    }

    renderItem(item) {
        if (!item) return;
        if (item.text) {
            return this.renderTweet(item);
        } else {
            return this.renderPhoto(item);
        }
    }

    renderTweet(tweet) {
        return (
            <div className="columns small-6 medium-4 large-3 tweet">
                <p className="tweet-text" dangerouslySetInnerHTML={{__html: tweet.text}}></p>

                <div className="tweet-meta row">
                    <div className="columns small-2">
                        <span className="socicon">a</span>
                    </div>
                    <div className="columns small-10">
                        <a href={tweet.authorUri} className="tweet-author" target="_blank">@{tweet.author}</a>
                        <a href={tweet.url} target="_blank"><small className="tweet-date">{tweet.date}</small></a>
                    </div>
                </div>
            </div>
        );
    }

    renderPhoto(photo) {
        return (
            <div className="columns small-6 medium-4 large-3 photo">
                <a href={photo.url} title={photo.description} target="_blank">
                    <img src={photo.image} />
                </a>
            </div>
        );
    }
};
