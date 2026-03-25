import React from 'react';
import { ExternalLink, Github, TrendingUp } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const { title, description, image, technologies, metrics, demoUrl, githubUrl, category } = project;

  return (
    <div
      className="group"
      style={{
        background: '#0f0f0f',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '16px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        transition: 'border-color 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        willChange: 'transform',
      }}
    >
      {/* Image Section */}
      <div style={{ position: 'relative', height: '220px', overflow: 'hidden', flexShrink: 0 }}>
        <img
          src={image}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: 'scale(1)',
            transition: 'transform 1.8s cubic-bezier(0.16, 1, 0.3, 1)',
            willChange: 'transform',
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.07)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        />

        {/* Dark overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.25)', pointerEvents: 'none' }} />

        {/* Category Badge */}
        <div style={{ position: 'absolute', top: '12px', left: '12px' }}>
          <span style={{
            padding: '4px 12px',
            fontSize: '11px',
            fontWeight: 500,
            color: '#ffffff',
            background: 'rgba(0,0,0,0.55)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: '999px',
          }}>
            {category}
          </span>
        </div>

        {/* Action Buttons */}
        <div style={{ position: 'absolute', bottom: '12px', right: '12px', display: 'flex', gap: '8px' }}>
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="View Demo"
              style={{
                padding: '8px',
                background: 'rgba(0,0,0,0.55)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'background 0.3s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(168,255,141,0.2)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.55)'}
            >
              <ExternalLink size={15} color="#ffffff" />
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="View Code"
              style={{
                padding: '8px',
                background: 'rgba(0,0,0,0.55)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'background 0.3s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(168,255,141,0.2)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.55)'}
            >
              <Github size={15} color="#ffffff" />
            </a>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1, gap: '16px' }}>

        {/* Title & Description */}
        <div>
          <h3
            className="group-hover:text-[#A8FF8D]"
            style={{ fontSize: '18px', fontWeight: 600, color: '#ffffff', marginBottom: '8px', transition: 'color 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
          >
            {title}
          </h3>
          <p style={{
            fontSize: '13px',
            color: 'rgba(255,255,255,0.45)',
            lineHeight: '1.6',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}>
            {description}
          </p>
        </div>

        {/* Tech Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {technologies.map((tech, index) => (
            <span key={index} style={{
              padding: '4px 12px',
              fontSize: '11px',
              fontWeight: 500,
              color: '#A8FF8D',
              background: 'rgba(168,255,141,0.08)',
              border: '1px solid rgba(168,255,141,0.2)',
              borderRadius: '6px',
            }}>
              {tech}
            </span>
          ))}
        </div>

        {/* Metrics - pinned to bottom */}
        {metrics && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            paddingTop: '12px',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            marginTop: 'auto',
          }}>
            <TrendingUp size={15} color="#A8FF8D" />
            <span style={{ fontSize: '13px', fontWeight: 500, color: '#A8FF8D' }}>{metrics}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;