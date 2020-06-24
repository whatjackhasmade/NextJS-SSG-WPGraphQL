import React, { useRef } from "react"
import Slider from "react-slick"

import { AcfTestimonialsBlockFields } from "wjhm"
import { AcfTestimonialsBlockFieldsTestimonials } from "wjhm"

import IconAngleRight from "assets/images/icons/solid/angle-right.svg"

import TestimonialsComponent from "./testimonials.styles"

const settings = {
  draggable: false,
  infinite: true,
  lazyLoad: false,
  nextArrow: false,
  prevArrow: false,
  slidesToScroll: 1,
  slidesToShow: 1,
  speed: 1000,
  swipe: false,
  swipeToSlide: false,
}

const Testimonials = (props: AcfTestimonialsBlockFields) => {
  const { testimonials } = props
  const sliderImages = useRef(null)
  const sliderTestimonials = useRef(null)

  const hasTestimonials = testimonials && testimonials.length > 0
  if (!hasTestimonials) return null
  const hasMultiple = testimonials.length > 1

  const nextTestimonial = (e) => {
    e.preventDefault()

    const imageCurrent = sliderImages?.current
    const textCurrent = sliderTestimonials?.current
    if (!sliderImages || !imageCurrent || !textCurrent) return

    imageCurrent.slickNext()
    textCurrent.slickNext()
  }

  return (
    <TestimonialsComponent>
      <div className="testimonial__media">
        <Slider ref={sliderImages} {...settings}>
          {testimonials.map((t) => (
            <TestimonialImage {...t} />
          ))}
        </Slider>
      </div>
      {hasMultiple && (
        <button className="testimonial__next" onClick={nextTestimonial}>
          Next <IconAngleRight />
        </button>
      )}
      <div className="testimonials">
        <Slider ref={sliderTestimonials} {...settings}>
          {testimonials.map((t) => (
            <Testimonial {...t} />
          ))}
        </Slider>
      </div>
    </TestimonialsComponent>
  )
}

const TestimonialImage = (props: AcfTestimonialsBlockFieldsTestimonials) => {
  const { author, media } = props
  if (!author || !media?.mediaItemUrl) return null
  return <img src={media.mediaItemUrl} alt={author} key={author} />
}

const Testimonial = (props: AcfTestimonialsBlockFieldsTestimonials) => {
  const { author, logo, role, testimonial } = props
  const hasLogo = logo?.uri

  return (
    <div className="testimonial" key={`testimonial-${author}`}>
      <header className="testimonial__header">
        <div>
          <h3 className="testimonial__author">{author}</h3>
          <h4 className="testimonial__role">{role}</h4>
        </div>
        {hasLogo && <img className="testimonial__logo" src={logo.uri} alt="" />}
      </header>
      <p className="testimonial__quote">"{testimonial}"</p>
    </div>
  )
}

export default Testimonials
