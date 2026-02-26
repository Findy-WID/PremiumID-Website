import type{ ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  hover?: boolean;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
}

export default function Card({
  children,
  hover = false,
  className = '',
  padding = 'md',
}: CardProps) {
  const baseStyles = "bg-white rounded-2xl border border-gray-200 transition-all duration-300";
  const hoverStyles = hover ? "hover:shadow-xl hover:-translate-y-1 cursor-pointer" : "shadow-md";
  
  const paddingStyles = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };
  
  return (
    <div className={`${baseStyles} ${hoverStyles} ${paddingStyles[padding]} ${className}`}>
      {children}
    </div>
  );
}