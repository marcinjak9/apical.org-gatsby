import React, { Component } from 'react'
import styled from '@emotion/styled'
import Slider from 'react-slick'

// const Wrapper = styled.div`
//   position: relative;
//   display: flex;
//   flex-direction: row;
//   flex-wrap: nowrap;
//   overflow-x: scroll;
//   scroll-snap-type: x mandatory;
//   -ms-overflow-style: none;
//   overflow: -moz-scrollbars-none;
//   -webkit-overflow-scrolling: touch;
//   width: "100%";
//   &::-webkit-scrollbar {
//     display: none;
//   }
// `

const SlickSlider = styled(Slider)`
  .slick-next,
  .slick-prev {
    color: var(--darkblue) !important;
  }
  .slick-next:before,
  .slick-prev:before {
    color: var(--darkblue) !important;
  }
`

export default class Carousel extends Component {
  constructor(props) {
    super(props)
    this.wrapper = React.createRef()
    const { slides } = props
    this.state = {
      slides,
      currentIndex: 0,
    }
  }

  nextSlide = () => {
    const { currentIndex, slides } = this.state
    if (currentIndex < slides.length - 1) {
      this.setState(ps => ({ currentIndex: ps.currentIndex + 1 }))
    }
    this.setState({ currentIndex: 0 })
  }

  prevSlide = () => {
    const { currentIndex, slides } = this.state
    if (currentIndex > 0) {
      this.setState(ps => ({ currentIndex: ps.currentIndex - 1 }))
    }
    this.setState({ currentIndex: slides.length - 1 })
  }

  goToSlide = (index) => {
    const { slides } = this.state
    if (index >= 0 && index < slides.length) {
      this.setState({ currentIndex: index })
    }
  }

  getWidth = () => {
    if (this.wrapper && this.wrapper.current) {
      return this.wrapper.current.offsetWidth
    }
    return 0
  }

  onDotClick = (e, index) => {
    e.preventDefault()
    const width = this.getWidth()
    this.wrapper.current.scrollTo({
      left: Math.floor(width * index),
      behavior: 'smooth',
    })
  }

  onScroll = () => {
    const { slides, currentIndex } = this.state
    if (this.wrapper && this.wrapper.current) {
      const index = (this.wrapper.current.scrollLeft / this.wrapper.current.scrollWidth)
        * slides.length
      if (currentIndex !== index) {
        this.setState({ currentIndex: index })
      }
    }
  }

  render() {
    const { slides } = this.state
    const settings = {
      dots: true,
      infinite: false,
      // speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      adaptiveHeight: true,
    }
    return (
      <div style={{ width: '100%', marginTop: '2rem' }}>
        <SlickSlider {...settings}>
          {slides.map((slide, index) => (
            <div key={index}>{slide}</div>
          ))}
        </SlickSlider>
      </div>
    )
  }
}

Carousel.defaultProps = {
  slides: [],
}
