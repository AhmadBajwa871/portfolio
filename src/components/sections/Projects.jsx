import React, { useState, useRef } from 'react'
import { projects, categories } from '../../data/projects';
import { Briefcase, Target, Globe, Palette, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectCard from '../ui/ProjectCard';
import FadeIn from '../animations/FadeIn';

const Projects = () => {

    const [activeCategory, setActiveCategory] = useState('All');
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollContainerRef = useRef(null);

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(project => project.category === activeCategory);

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        setCurrentIndex(0);
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        }
    };

    const scrollToIndex = (index) => {
        setCurrentIndex(index);

        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const card = container.querySelector('[data-card]');
            if (!card) return;

            const cardWidth = card.offsetWidth + 24; // include gap
            container.scrollTo({
                left: cardWidth * index,
                behavior: 'smooth',
            });
        }
    };

    const nextSlide = () => {
        const maxIndex = filteredProjects.length - 1;
        const newIndex = Math.min(currentIndex + 1, maxIndex);
        scrollToIndex(newIndex);
    };

    const prevSlide = () => {
        const newIndex = Math.max(currentIndex - 1, 0);
        scrollToIndex(newIndex);
    };

    const categoryIcons = {
        'All': Target,
        'Web Apps': Globe,
        'UI Components': Palette,
        'Full Stack': Zap,
    };

    return (
        <section id='projects' className='relative py-20 bg-black overflow-hidden'>

            <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

                {/* Header */}
                <FadeIn delay={0}>
                    <div className='text-center mb-12'>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
                            <Briefcase className='w-4 h-4 text-primary' />
                            <span className='text-sm text-primary font-medium'>My Work</span>
                        </div>
                        <h2 className='text-4xl lg:text-5xl font-normal text-white mb-4'>
                            Featured Projects
                        </h2>
                        <p className='text-lg text-white/60 max-w-2xl mx-auto'>
                            Showcasing my best work and achievements
                        </p>
                    </div>
                </FadeIn>

                {/* Category Filter */}
                <FadeIn delay={100}>
                    <div className='flex flex-wrap justify-center gap-3 mb-16'>
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => handleCategoryChange(category)}
                                className={`group relative px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeCategory === category
                                        ? 'text-white'
                                        : 'text-white/60 hover:text-white'
                                    }`}
                            >
                                <div className={`absolute inset-0 rounded-full transition-all duration-300 ${activeCategory === category
                                        ? 'bg-primary/10 opacity-100'
                                        : 'bg-white/5 border border-white/10 group-hover:bg-white/10'
                                    }`} />
                                <div className='relative flex items-center gap-2'>
                                    {React.createElement(categoryIcons[category], { className: "w-4 h-4" })}
                                    <span className='text-sm'>{category}</span>
                                </div>
                            </button>
                        ))}
                    </div>
                </FadeIn>

                {/* Carousel */}
                <FadeIn delay={200}>
                    <div className='relative'>

                        <div
                            ref={scrollContainerRef}
                            style={{
                                overflowX: 'auto',
                                scrollBehavior: 'smooth',
                                WebkitOverflowScrolling: 'touch',
                                scrollSnapType: 'x mandatory',
                            }}
                            className='hide-scrollbar'
                        >
                            <div className='flex gap-6 pb-4'>
                                {filteredProjects.map((project) => (
                                    <div
                                        key={project.id}
                                        data-card
                                        style={{
                                            minWidth: 'clamp(280px, 85vw, 380px)',
                                            maxWidth: '380px',
                                            flexShrink: 0,
                                            scrollSnapAlign: 'start',
                                            display: 'flex',
                                            flexDirection: 'column',
                                        }}
                                    >
                                        <ProjectCard project={project} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Arrows */}
                        {filteredProjects.length > 1 && (
                            <>
                                <button
                                    onClick={prevSlide}
                                    disabled={currentIndex === 0}
                                    className='absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition disabled:opacity-50'
                                >
                                    <ChevronLeft className='w-6 h-6 text-white' />
                                </button>

                                <button
                                    onClick={nextSlide}
                                    disabled={currentIndex >= filteredProjects.length - 1}
                                    className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition disabled:opacity-50'
                                >
                                    <ChevronRight className='w-6 h-6 text-white' />
                                </button>
                            </>
                        )}

                        {/* Dots */}
                        {filteredProjects.length > 1 && (
                            <div className='flex justify-center gap-2 mt-8'>
                                {filteredProjects.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => scrollToIndex(index)}
                                        className={`transition-all duration-500 rounded-full ${index === currentIndex
                                                ? 'bg-primary w-6 h-2'
                                                : 'bg-white/30 w-2 h-2'
                                            }`}
                                    />
                                ))}
                            </div>
                        )}

                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default Projects;