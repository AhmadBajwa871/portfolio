import React, { useState, useRef } from 'react'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { testimonials } from '../../data/testimonials'
import FadeIn from '../animations/FadeIn'

const testimonialStats = [
  { value: '3x', label: 'Faster Delivery' },
  { value: '95%', label: 'Client Satisfaction' },
  { value: '100%', label: 'On-Time Delivery' },
  { value: '5★', label: 'Average Rating' },
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef(null)

  const scrollToIndex = (index) => {
    setCurrentIndex(index)
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.offsetWidth
      scrollContainerRef.current.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth',
      })
    }
  }

  const nextTestimonial = () => {
    const newIndex = (currentIndex + 1) % testimonials.length
    scrollToIndex(newIndex)
  }

  const prevTestimonial = () => {
    const newIndex = (currentIndex - 1 + testimonials.length) % testimonials.length
    scrollToIndex(newIndex)
  }

  return (
    <section id="testimonials" className="relative py-12 sm:py-16 lg:py-20 bg-black overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <FadeIn delay={0}>
          <div className="text-center mb-10 sm:mb-14 lg:mb-16">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/10 border border-primary/30 rounded-full mb-4 sm:mb-6">
              <Quote className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
              <span className="text-xs sm:text-sm text-primary font-medium tracking-wider uppercase">
                Testimonials
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white mb-3 sm:mb-4 max-w-xs sm:max-w-xl mx-auto leading-tight">
              Trusted by forward-thinking teams
            </h2>
            <p className="text-base sm:text-lg text-white/60 max-w-xs sm:max-w-xl mx-auto">
              Empowering clients with design-driven, high-quality solutions built for success.
            </p>
          </div>
        </FadeIn>

        {/* Carousel */}
        <FadeIn delay={100}>
          {/* px padding on mobile/tablet so nav arrows fit inside; removed on lg where arrows go outside */}
          <div className="relative px-8 sm:px-10 lg:px-0">

            {/* Scroll container */}
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-hidden rounded-xl sm:rounded-2xl"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="min-w-full flex"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  {/* Card: stacks vertically on mobile, side-by-side on md+ */}
                  <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl sm:rounded-2xl overflow-hidden flex flex-col md:flex-row w-full">

                    {/* Image Section */}
                    {/* Fixed height on mobile, auto (fills card) on md+ */}
                    <div className="relative flex-shrink-0 w-full h-96 sm:h-[420px] md:w-56 lg:w-72 xl:w-[300px] md:h-auto">
                      <img
                        src={`/images/testimonials/person${index + 1}.png`}
                        alt={testimonial.name}
                        className="w-full h-full object-cover object-top grayscale"
                      />

                      {/* Stat Badge Overlay */}
                      <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 bg-black/70 backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-xl px-3 py-2 sm:px-4 sm:py-2.5">
                        <div className="text-base sm:text-xl font-bold text-primary leading-none">
                          {testimonialStats[index]?.value}
                        </div>
                        <div className="text-[10px] sm:text-xs text-white/75 mt-0.5 font-normal">
                          {testimonialStats[index]?.label}
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 px-5 py-6 sm:px-8 sm:py-8 lg:px-14 lg:py-12 flex flex-col justify-between gap-6 md:gap-0">

                      {/* Quote block */}
                      <div>
                        <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-primary mb-3 sm:mb-5" />
                        <p className="text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed font-light">
                          "{testimonial.quote}"
                        </p>
                      </div>

                      {/* Author + Stars */}
                      <div className="flex items-end justify-between">
                        <div>
                          <div className="text-sm sm:text-base font-semibold text-white mb-0.5 sm:mb-1">
                            {testimonial.name}
                          </div>
                          <div className="text-xs sm:text-sm text-white/50">
                            {testimonial.role}, {testimonial.company}
                          </div>
                        </div>
                        <div className="flex gap-0.5 sm:gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-3.5 h-3.5 sm:w-[18px] sm:h-[18px] text-primary fill-primary"
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>

            {/* Prev Button — sits inside padding on mobile, floats outside on lg+ */}
            <button
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              className="absolute left-0 lg:-left-14 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/[0.08] border border-white/15 flex items-center justify-center text-white hover:bg-white/15 transition-colors duration-200"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Next Button */}
            <button
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="absolute right-0 lg:-right-14 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/[0.08] border border-white/15 flex items-center justify-center text-white hover:bg-white/15 transition-colors duration-200"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Dot Indicators */}
            <div className="flex justify-center items-center gap-2 mt-6 sm:mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className={`rounded-full h-2 transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-white w-6'
                      : 'bg-white/30 w-2 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  )
}

export default Testimonials