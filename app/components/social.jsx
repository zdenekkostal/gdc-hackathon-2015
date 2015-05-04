import { Component } from 'react';

let Social = class Social extends Component {
    displayName: 'Social'

    render() {
        const socialFeed = {};

        return (
            <div id="social">
                <div className="row">
                    <div className="columns small-12 medium-9">
                        <h2>Get social</h2>
                        <p>Include the official hashtag <a href="https://twitter.com/search?q=AllDataHack&src=typd">#AllDataHack</a> in your social posts.</p>
                        <p>We will be rewarding the most liked photos on Instagram. The only requirement is including the hashtag so others can find it easily, duh!</p>
                    </div>
                </div>

                <div className="row">
                    <div className="columns small-6 medium-4 large-3 social-links">
                        <h3>See more</h3>

                        <dl className="social-instagram">
                            <dt>Instagram</dt>
                            <dd><a href="https://instagram.com/explore/tags/${this.props.tag}/" target="_blank">#{this.props.tag}</a></dd>
                        </dl>

                        <dl className="social-twitter">
                            <dt>Twitter</dt>
                            <dd><a href="https://twitter.com/search?q=${this.props.tag}&src=typd" target="_blank">#{this.props.tag}</a></dd>
                        </dl>
                    </div>

                    {socialFeed}
                </div>
            </div>
        );
    }

    renderTweet(tweet) {
        return (
            <div className="columns small-6 medium-4 large-3 tweet">
                <p className="tweet-text">{tweet.text}</p>

                <div className="tweet-meta">
                    <a href={tweet.authorUri} className="tweet-author" target="_blank">@{tweet.author}</a>
                    <a href={tweet.url} target="_blank"><small className="tweet-date">{tweet.date}</small></a>
                </div>
            </div>
        );
    }

    renderPhoto(photo) {
        return (
            <a href={photo.url} title={photo.description} target="_blank" className="columns small-6 medium-4 large-3 photo">
                <img src={photo.image} />
            </a>
        );
    }
};

Social.defaultProps = {
    tag: 'AllDataHack',
    tweets: [],
    photos: []
};

export default Social;
