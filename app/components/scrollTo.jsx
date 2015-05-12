import { Component } from 'react';
import ViewportMetrics from 'react/lib/ViewportMetrics';

var ScrollTo = class ScrollTo extends Component {
    displayName: 'ScrollTo'

    componentWillUnmount() {
        if (this._scrollAnimation) {
            window.cancelAnimationFrame(this._scrollAnimation);
        }
    }

    handleClick() {
        this.scrollTo(this.props.target);
    }

    scrollTo(id) {
        var doc = document.body;
        var targetElement = document.getElementById(id);

        if (targetElement) {
            this._scrollTo(doc, targetElement, this.props.scrollDuration);
        }
    }

    _scrollTo(scrollElement, targetElement, duration) {
        var currentScrollTop = this._getElementScrollTop(scrollElement);
        var elementTop = this._getAbsoluteOffset(targetElement);

        var scrollDifference = elementTop - currentScrollTop;

        var start = 0;

        function step(timestamp) {
            if (!start) {
                start = timestamp;
            }

            var timeDifference = timestamp - start;
            var progress = timeDifference / duration;
            var increment = progress * scrollDifference;

            if (!scrollElement) {
                return;
            }

            var scrollTop = currentScrollTop + increment;
            window.scrollTo(0, scrollTop > elementTop ? elementTop : scrollTop);

            if (timeDifference < duration) {
                this._scrollAnimation = window.requestAnimationFrame(step.bind(this));
            }
        }

        this._scrollAnimation = window.requestAnimationFrame(step.bind(this));
    }

    _getAbsoluteOffset(element) {
        return element.getBoundingClientRect().top + ViewportMetrics.currentScrollTop;
    }

    _getElementScrollTop(element) {
        return element === window ? ViewportMetrics.currentScrollTop : element.scrollTop;
    }

    render() {
        return (
            <div onClick={this.handleClick.bind(this)}>
                {this.props.children}
            </div>
        );
    }
};

ScrollTo.defaultProps = {
    target: 'body',
    scrollDuration: 700
};

export default ScrollTo;
