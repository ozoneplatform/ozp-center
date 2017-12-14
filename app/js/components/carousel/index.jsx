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

var Carousel = React.createClass({

    propTypes: {
        slides: React.PropTypes.array
    },

    getInitialState: function() {
        // Leaving this for if Featured ever becomes a chronological array
        // if (this._currentElement.ref==="featured"){
        //     return {slides: this.props.slides.reverse()  };
        // }
        return {slides: this.props.slides, showArrows : true};
    },

    goToPrevSlide: function (e) {
        e.preventDefault();
        var me = this;
        var img_width = ((this.refs.slides.getDOMNode()).getBoundingClientRect()).width + 30;
        let { slides } = me.state;
        let slidesLength = slides.length;
        var temp = slides.splice(0, slidesLength-1);
        me.setState({slides: slides.concat(temp)});
        $(this.refs.slideList.getDOMNode()).animate({
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
        var img_width = ((this.refs.slides.getDOMNode()).getBoundingClientRect()).width + 30;
        $(this.refs.slideList.getDOMNode()).animate({
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

    checkArrows: function() {
    //This will make arrows go away if there are fewer listings than screen size.
        var space = ((this.refs.slideList.getDOMNode()).getBoundingClientRect()).width;
        var slide = ((this.refs.slides.getDOMNode()).getBoundingClientRect()).width + 30;
        slide = slide * this.state.slides.length;
        if(slide < space){
            this.setState({
                showArrows : false
            })
        }else{
            this.setState({
                showArrows : true
            })
        }
    },

    componentDidMount: function() {
        var me = this;
        $( window ).resize(function(){
            me.checkArrows()
        });
        this.checkArrows();
    },

    render: function() {
        var items;
        var showArrows = this.state.showArrows;
        var classes = "carousel__slide" + (this.state.slides[0].type.displayName==="FeaturedListingTile" ? " carousel__slide--featured" : "");

        items = this.state.slides.map((slide, index) =>
            <div className={classes} ref="slides">
                {slide}
            </div>
        );

        return (
            <div className="carousel" onResize={() => console.log('resized!')}>
                {showArrows ?
                    <div>
                        {items.length === 1 ?
                            null : <CarouselLeftArrow onClick={e => this.goToPrevSlide(e)} /> }
                        {items.length === 1 ?
                            null : <CarouselRightArrow onClick={e => this.goToNextSlide(e)} /> }
                    </div> : null
                }

                <ul className="carousel__slides" ref="slideList">
                    {items}
                </ul>

            </div>
        );
    }
});

module.exports = Carousel;
