import React, { useState } from 'react'
import { Download, Code2, Sparkles, Key } from 'lucide-react'
import {
    SiReact,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiBootstrap,
    SiJquery,
    SiPhp,
    SiMysql,
    SiWordpress,
    SiWoocommerce,
    SiFigma,
    SiGit
} from "react-icons/si";
import { ABOUT_STATS, PERSONAL_INFO, STATS } from "../../utils/constants";
import { scrollToSection } from "../../hooks/useScrollSpy";
import FadeIn from "../animations/FadeIn";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";


const About = () => {

    //skills
    const skills = [
        { name: 'React.js', icon: SiReact, color: '#61DAFB' },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
        { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
        { name: 'jQuery', icon: SiJquery, color: '#0769AD' },
        { name: 'PHP', icon: SiPhp, color: '#777BB4' },
        { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
        { name: 'WordPress', icon: SiWordpress, color: '#21759B' },
        { name: 'WooCommerce', icon: SiWoocommerce, color: '#96588A' },
        { name: 'Git', icon: SiGit, color: '#F05032' },
        { name: 'Figma', icon: SiFigma, color: '#F24E1E' }
    ];


    return <section id='about' className='relative py-20 bg-black overflow-hidden'>
        <RadialGradientBackground variant='about' />
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            {/*Main Grid */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20'>
                {/*Left Column - Content */}
                <div className='flex flex-col gap-12'>
                    <div className='flex flex-col gap-8'>
                        <FadeIn delay={60}>
                            <div className='inline-flex items-center gap-2.5 px-5 py-2.5 border border-primary/30 bg-primary/10 rounded-full w-fit'>
                                <Code2 className='w-4 h-4 text-primary' />
                                <span className='text-sm text-primary'>
                                    Full-Stack Developer
                                </span>
                                <Sparkles className='w-4 h-4 text-primary'></Sparkles>
                            </div>
                        </FadeIn>

                        <FadeIn delay={100}>
                            <h2 className='text-4xl lg:text-5xl font-normal text-white leading-tight'>
                                Crafting Digital Ecperiences That Matter
                            </h2>
                        </FadeIn>

                        <FadeIn delay={200}>
                            <div className='flex flex-col gap-4'>
                                {PERSONAL_INFO.bio.map((paragraph, index) => (
                                    <p Key={index} className="text-base text-white/70 leading-relaxed">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </FadeIn>
                    </div>
                    <FadeIn delay={300}>
                        <div className='grid grid-cols-3 gap-8'>
                            {ABOUT_STATS.map((stat, index) => (
                                <div key={index} className='relative'>
                                    <div className='absolute -left-4 top-0 w-1 h-full bg-linear-to-b from-primary via-primary/50 to-primary/20 rounded-full '></div>
                                    <div className='text-3xl font-normal text-white mb-2 font-mono'></div>
                                    {stat.value}
                                    <p className='text-sm text-white/60 leading-sung'>
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                    <FadeIn delay={400}>
                        <a href={PERSONAL_INFO.resume}
                            download="Muhammad_Ahmad_Bajwa_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-white hover:bg-white/90 text-black rounded-full px-8 py-4 text-base font-medium transition-all duration-300 w-fit group"
                        >
                            <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300" />
                            Download Resume
                        </a></FadeIn>
                </div>

                {/*right Column - Info Grid */}
                <FadeIn delay={200}>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='col-span-2 relative group'>
                            <div className='absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300'></div>
                            <div className='relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300'>
                                <div className='flex items-start gap-4'>
                                    <div className='p-3 bg-primary/10 rounded-xl'>
                                        <Code2 className='w-6 h-6 text-primary' />
                                    </div>
                                    <div className='flex-1'>
                                        <h3 className='text-lg font-semibold text-white mb-2'>Expertise</h3>
                                        <p className='text-sm text-white/70 leading-relaxed'>Spacialized in building scalable web applications with modern texhnologies and best practices.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='relative group'>
                            <div className='absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300'></div>
                            <div className='relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300'>
                                <div className='p-3 bg-primary/10 rounded-xl w-fit mb-4'>
                                    <Sparkles className='w-6 h-6 text-primary' />
                                </div>
                                <h3 className='text-base font-semibold text-white mb-2'>Clean Code</h3>
                                <p className='text-sm text-white/70 leading-relaxed'>Writing maintainable, well-documented code that scales</p>
                            </div>
                        </div>

                        <div className='relative group'>
                            <div className='absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300'></div>
                            <div className='relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300'>
                                <div className='p-3 bg-primary/10 rounded-xl w-fit mb-4'>
                                    <Download className='w-6 h-6 text-primary' />
                                </div>
                                <h3 className='text-base font-semibold text-white mb-2'>Performance</h3>
                                <p className='text-sm text-white/70 leading-relaxed'>Optimizing for speed and efficiency in every project</p>
                            </div>
                        </div>

                        <div className='col-span-2 relative group'>
                            <div className='absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300'></div>
                            <div className='relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300'>
                                <div className='grid grid-cols-3 gap-6 text-center'>
                                    <div>
                                        <div className='text-2xl font-bold text-primary mb-1'>100%</div>
                                        <div className='text-xs text-white/60'>Client Satisfaction</div>
                                    </div>
                                    <div>
                                        <div className='text-2xl font-bold text-primary mb-1'>24/7</div>
                                        <div className='text-xs text-white/60'>Support Avaliable</div>
                                    </div>
                                    <div>
                                        <div className='text-2xl font-bold text-primary mb-1'>Fast</div>
                                        <div className='text-xs text-white/60'>Delivery Time</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>

{/* Skills Marquee */}
<FadeIn delay={500}>
  <div className="flex flex-col items-center gap-10 w-full overflow-hidden">

    <div className="text-center">
      <h3 className="text-3xl font-semibold text-white mb-2">
        Tech Stack & Expertise
      </h3>
      <p className="text-white/60 text-sm">
        Technologies I work with to build amazing products
      </p>
    </div>

    <div className="relative w-full overflow-hidden marquee-mask">

      {/* Marquee Track */}
      <div className="flex gap-6 marquee-track">

        {[...skills, ...skills].map((skill, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center gap-3 min-w-[140px] hover:-translate-y-2 transition-all duration-300"
          >
            <skill.icon
              className="text-4xl"
              style={{ color: skill.color }}
            />

            <span className="text-sm text-white/80 font-medium">
              {skill.name}
            </span>
          </div>
        ))}

      </div>

    </div>

  </div>
</FadeIn>

        </div>
    </section>
}

export default About