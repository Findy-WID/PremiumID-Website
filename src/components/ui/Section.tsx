import type{ ReactNode } from 'react';
import { sectionStyles } from '../../styles/section';

interface SectionProps {
  variant?: 'base' | 'withBackground' | 'dark' | 'narrow';
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

export default function Section({
  variant = 'base',
  children,
  className = '',
  containerClassName = '',
}: SectionProps) {
  const isNarrow = variant === 'narrow';
  
  return (
    <section className={`${sectionStyles[variant]} ${className}`}>
      <div className={`${isNarrow ? sectionStyles.narrowContainer : sectionStyles.container} ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}