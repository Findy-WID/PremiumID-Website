import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  fullWidth?: boolean;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = "font-semibold rounded-full transition-all duration-200 inline-flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-premium-primary hover:bg-blue-700 text-white shadow-lg hover:shadow-xl",
    secondary: "bg-premium-secondary hover:bg-purple-700 text-white shadow-lg hover:shadow-xl",
    outline: "border-2 border-premium-primary text-premium-primary hover:bg-premium-primary hover:text-white",
    ghost: "text-premium-primary hover:bg-premium-light",
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  
  const widthClass = fullWidth ? "w-full" : "";
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}