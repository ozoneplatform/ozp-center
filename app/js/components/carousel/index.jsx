'use strict';

var React = require('react');

var CarouselLeftArrow = React.createClass({
    render() {
        return (
            <a
                href="#"
                className="carousel__arrow carousel__arrow--left"
                onClick={this.props.onClick}
                >
                    <i className="center__icon icon-caret-left-white"></i>
            </a>
        );
    }
});

var CarouselRightArrow = React.createClass({
    render() {
        return (
            <a
                href="#"
                className="carousel__arrow carousel__arrow--right"
                onClick={this.props.onClick}
                >
                    <i className="center__icon icon-caret-right-white"></i>
            </a>
        );
    }
});

var CarouselSlide = React.createClass({
    render() {
        return(
            <div className="carousel__slide">
                {this.props.slide}
            </div>
        );
    }
});

var FeaturedCarouselSlide = React.createClass({
    render() {
        return(
            <div className="carousel__slide carousel__slide--featured">
                {this.props.slide}
            </div>
        );
    }
});

var Carousel = React.createClass({

    propTypes: {
        slides: React.PropTypes.array
    },

    getInitialState: function() {
        // Leaving this for if Featured ever becomes a chronological array
        // if (this._currentElement.ref==="featured"){
        //     return {slides: this.props.slides.reverse()  };
        // }
        return {slides: this.props.slides  };
    },

    goToPrevSlide: function (e) {
        e.preventDefault();
        var me = this;
        var img_width = $(e.target).nextAll('ul').find('img').width() + 30;
        let { slides } = me.state;
        let slidesLength = slides.length;
        var temp = slides.splice(0, slidesLength-1);
        me.setState({slides: slides.concat(temp)});
        $(e.target).nextAll('ul').animate({
            "margin-left": '-=' + img_width
        }, 0, function() {
            $(this).animate({
                "margin-left": '+=' + img_width
            }, 500, function() {
            });
        });

    },

    goToNextSlide: function (e) {
        e.preventDefault();
        var me = this;
        var img_width = $(e.target).next('ul').find('img').width() + 30;
        $(e.target).next('ul').animate({
            "margin-left": '-=' + img_width
        }, 500, function() {
            let { slides } = me.state;
            var temp = slides.splice(0, 1);
            me.setState({slides: slides.concat(temp)});
            $(this).css({
                "margin-left": '0px'
            });
        });

    },

    getFeaturedSlideDeck: function() {
        let {slides} = this.state;
        slides.reverse();
        this.setState({slides: slides});
    },

    render: function() {
        var items;

        //is this bad practice in react?
        if (this._currentElement.ref==="featured"){
            items = this.state.slides.map((slide, index) =>
                <FeaturedCarouselSlide
                    slide={slide}
                />
            );
        }else{
            items = this.state.slides.map((slide, index) =>
                <CarouselSlide
                    slide={slide}
                />
            );
        }

        return (
            <div className="carousel">
                {items.length === 1 ?
                null : <CarouselLeftArrow onClick={e => this.goToPrevSlide(e)} /> }
                {items.length === 1 ?
                null : <CarouselRightArrow onClick={e => this.goToNextSlide(e)} /> }

                <ul className="carousel__slides">
                    {items}
                </ul>

            </div>
        );
    }

});

module.exports = Carousel;
