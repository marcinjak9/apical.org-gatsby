import React, { Component } from 'react';
import styled from '@emotion/styled';
import { debounce } from 'lodash';
import Slider from 'react-slick';
import Dots from './Dots';
import Slide from './Slide';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
  -webkit-overflow-scrolling: touch;
  width: '100%';
  &::-webkit-scrollbar {
    display: none;
  }
`;

const SlickSlider = styled(Slider)`
  .slick-next,
  .slick-prev {
    color: var(--darkblue) !important;
  }
  .slick-next:before,
  .slick-prev:before {
    color: var(--darkblue) !important;
  }
`;

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.wrapper = React.createRef();
    this.state = {
      slides: this.props.slides,
      currentIndex: 0,
    };
  }

  nextSlide = () => {
    const { currentIndex, slides } = this.state;
    if (currentIndex < slides.length - 1) {
      this.setState(ps => ({ currentIndex: ps.currentIndex + 1 }));
    }
    this.setState({ currentIndex: 0 });
  };

  prevSlide = () => {
    const { currentIndex, slides } = this.state;
    if (currentIndex > 0) {
      this.setState(ps => ({ currentIndex: ps.currentIndex - 1 }));
    }
    this.setState({ currentIndex: slides.length - 1 });
  };

  goToSlide = (index) => {
    const { slides } = this.state;
    if (index >= 0 && index < slides.length) {
      this.setState({ currentIndex: index });
    }
  };

  getWidth = () => {
    if (this.wrapper && this.wrapper.current) {
      return this.wrapper.current.offsetWidth;
    }
    return 0;
  };

  onDotClick = (e, index) => {
    const { slides } = this.state;
    e.preventDefault();
    // this.goToSlide(index);
    const width = this.getWidth();
    this.wrapper.current.scrollTo({
      left: Math.floor(width * index),
      behavior: 'smooth',
    });
  };

  onScroll = () => {
    console.log('hei');
    if (this.wrapper && this.wrapper.current) {
      const index = (this.wrapper.current.scrollLeft / this.wrapper.current.scrollWidth)
        * this.state.slides.length;
      console.log(index);
      if (this.state.currentIndex !== index) {
        this.setState({ currentIndex: index });
      }
    }
  };

  render() {
    const { slides, currentIndex } = this.state;
    const settings = {
      dots: true,
      infinite: false,
      // speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      adaptiveHeight: true,
    };
    return (
      <div style={{ width: '100%', marginTop: '2rem' }}>
        <SlickSlider {...settings}>
          {slides.map((slide, index) => (
            <div key={index}>{slide}</div>
          ))}
        </SlickSlider>
      </div>
    );
    return (
      <div style={{ width: '100%' }}>
        <Wrapper ref={this.wrapper} onScroll={debounce(this.onScroll, 100)}>
          {slides.map((slide, index) => (
            <Slide
              key={index}
              slide={slide}
              currentIndex={currentIndex}
              index={index}
              width={this.getWidth()}
            />
          ))}
        </Wrapper>
        <Dots
          active={currentIndex}
          slides={slides}
          onDotClick={(e, index) => this.onDotClick(e, index)}
        />
      </div>
    );
  }
}

Carousel.defaultProps = {
  slides: [],
};
