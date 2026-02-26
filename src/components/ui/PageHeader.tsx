import type { ReactNode } from 'react';
import { typography } from '../../styles/typography';
import { sectionStyles } from '../../styles/section';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  variant?: 'light' | 'dark';
  buttons?: ReactNode;
  className?: string;
}

export default function PageHeader({
  title,
  subtitle,
  variant = 'dark',
  buttons,
  className = '',
}: PageHeaderProps) {
  const isDark = variant === 'dark';
  const bgClass = isDark ? sectionStyles.dark : 'py-16 md:py-20 lg:py-24 px-6 bg-premium-light';
  const textColor = isDark ? 'text-white' : 'text-gray-900';
  const subtitleColor = isDark ? 'text-gray-300' : 'text-gray-600';
  
  return (
    <section className={`${bgClass} ${className}`}>
      <div className={`${sectionStyles.container} text-center`}>
        <h1 className={`${typography.h1} ${textColor} mb-4`}>
          {title}
        </h1>
        {subtitle && (
          <p className={`${typography.lead} ${subtitleColor} mb-8 max-w-3xl mx-auto`}>
            {subtitle}
          </p>
        )}
        {buttons && (
          <div className="flex flex-wrap gap-4 justify-center">
            {buttons}
          </div>
        )}
      </div>
    </section>
  );
}