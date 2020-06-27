import React from "react"
import { InView } from "react-intersection-observer"
import ReactBreakpoints, { Media } from "react-breakpoints"
import { CaseStudy_Casestudyfields } from "wjhm"

import { Devices } from "./case.styles"

import CaseBreak from "./parts/break"
import CaseGallery from "./parts/gallery"
import CaseRow from "./parts/row"
import CaseYouTube from "./parts/youtube"

import Base from "templates/base"

import Intro from "organisms/intro"
import Related from "organisms/related"
import Testimonials from "organisms/testimonials"

const breakpoints = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1440,
  xxl: 1800,
}

const CaseTemplate = (props) => {
  const { pageContext } = props
  const { CaseStudyFields } = pageContext
  const {
    blocks,
    devices,
    devicePreviews,
    gallery,
    intro,
    related,
    siteUrl,
    testimonials,
  }: CaseStudy_Casestudyfields = CaseStudyFields

  const mapTestimonials = testimonials.map(({ testimonial }) => {
    return { ...testimonial }
  })

  let gallery_one = []
  let gallery_two = []
  let gallery_three = []
  let gallery_four
  if (gallery[7]) gallery_four = gallery[7]
  let gallery_five = []
  let gallery_six = []

  for (var i = 0; i < 2; i++) {
    if (gallery[i]) gallery_one.push(gallery[i])
  }

  for (i = 2; i < 4; i++) {
    if (gallery[i]) gallery_two.push(gallery[i])
  }

  for (i = 4; i < 6; i++) {
    if (gallery[i]) gallery_three.push(gallery[i])
  }

  for (i = 8; i < 10; i++) {
    if (gallery[i]) gallery_five.push(gallery[i])
  }

  for (i = 10; i < gallery.length; i++) {
    if (gallery[i]) gallery_six.push(gallery[i])
  }

  return (
    <ReactBreakpoints breakpoints={breakpoints}>
      <Base context={pageContext}>
        <Intro
          content={intro.description}
          heading={intro.title}
          subheading={intro.subtitle}
          maxWidth={`906px`}
        />
        {devicePreviews && (
          <Media>
            {({ breakpoints, currentBreakpoint }) =>
              breakpoints[currentBreakpoint] > breakpoints.lg ? (
                <InView threshold={0} triggerOnce={true}>
                  {({ inView, ref }) => (
                    <Devices
                      className={inView ? `devices devices--show` : `devices`}
                      ref={ref}
                    >
                      <a
                        href={siteUrl}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <div className="device-wrapper macbook">
                          <div
                            className="device"
                            data-color="white"
                            data-device="Macbook2015"
                            data-orientation="portrait"
                          >
                            <div className="screen">
                              <CaseYouTube url={devices.desktop} />
                            </div>
                          </div>
                        </div>
                        <div className="device-wrapper iphone">
                          <div
                            className="device"
                            data-device="iPhone7"
                            data-orientation="portrait"
                            data-color="white"
                          >
                            <div className="screen">
                              <CaseYouTube url={devices.mobile} />
                            </div>
                          </div>
                        </div>
                      </a>
                    </Devices>
                  )}
                </InView>
              ) : (
                <a
                  href={siteUrl}
                  className="button"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  View The {intro.subtitle} Website
                </a>
              )
            }
          </Media>
        )}

        {blocks && (
          <>
            {blocks.length > 0 && <CaseRow data={blocks[0].fields} />}
            {gallery_one[0] && <CaseGallery images={gallery_one} />}
            {blocks.length > 1 && <CaseRow data={blocks[1].fields} />}
            {gallery_two[0] && <CaseGallery images={gallery_two} />}
            {blocks.length > 2 && <CaseRow data={blocks[2].fields} />}
            {gallery_three[0] && <CaseGallery images={gallery_three} />}
            {blocks.length > 3 && <CaseRow data={blocks[3].fields} />}
            {gallery_four && <CaseBreak image={gallery_four} />}
            {blocks.length > 4 && <CaseRow data={blocks[4].fields} />}
            {gallery_five[0] && <CaseGallery images={gallery_five} />}
            {blocks.length > 5 && <CaseRow data={blocks[5].fields} />}
            {gallery_six[0] && (
              <CaseGallery images={gallery_six} small={true} />
            )}
            {blocks.length > 6 && <CaseRow data={blocks[6].fields} />}
          </>
        )}
        {/* {testimonials[0] && <Testimonials testimonials={mapTestimonials} />} */}
        {related[0] && (
          <Related data={related} title="Continue Viewing My Case Studies" />
        )}
      </Base>
    </ReactBreakpoints>
  )
}

export default CaseTemplate
