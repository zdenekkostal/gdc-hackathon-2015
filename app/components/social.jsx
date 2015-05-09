import { Component } from 'react';

import SocialFeed from './socialFeed';

let Social = class Social extends Component {
    displayName: 'Social'

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

                <SocialFeed tag={this.props.tag} photos={this.props.photos} tweets={this.props.tweets} />

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
    tag: 'AllDataHack2015',
    tweets: [
        // {text: 'The only requirement is to include the hashtag so others can find it easily, duh!', author: 'Kristy', date: 'Nov 1 2014'},
        // {text: 'Whether it is Twitter, Facebook, Yelp or just a post to co-workers or business officials, the number of actual characters matters. What you say.', author: 'Kristy', date: 'Oct 3 2014'},
        // {text: 'Include the official hashtag #AllDataHack2015 in your social posts.', author: 'Kristy', date: 'Dec 1 2014'},
        // {text: 'Secondly, you have to create a new CSS class that uses Socicon icons font. Here, a small example:', author: 'Kristy', date: 'jan 15 2015'},
        // {text: 'ertert ert erter tertert et e', author: 'Kristy', date: 'Dec 1 2014'},
        // {text: 'Yelp or just a post to co-workers or business officials, the number of actual characters matters. ', author: 'Kristy', date: 'jan 15 2015'}
    ],
    photos: [
        // {url: '//instagram.com/p/x', image: './app/images/bear.jpg'},
        // {url: '//instagram.com/p/x', image: './app/images/bill.jpg'},
        // {url: '//instagram.com/p/x', image: './app/images/jarda.jpg'},
        // {url: '//instagram.com/p/x', image: './app/images/kristy.png'},
        // {url: '//instagram.com/p/x', image: './app/images/bill.jpg'},
        // {url: '//instagram.com/p/x', image: './app/images/jarda.jpg'},
        // {url: '//instagram.com/p/x', image: './app/images/kristy.png'},
        // {url: '//instagram.com/p/x', image: './app/images/jarda.jpg'}
    ]
};

export default Social;
