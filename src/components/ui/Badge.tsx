interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning';
}

export default function Badge({ children, variant = 'primary' }: BadgeProps) {
  const variants = {
    primary: "bg-premium-primary/10 text-premium-primary border-premium-primary/20",
    secondary: "bg-premium-secondary/10 text-premium-secondary border-premium-secondary/20",
    success: "bg-identity-secure/10 text-identity-secure border-identity-secure/20",
    warning: "bg-identity-warning/10 text-identity-warning border-identity-warning/20",
  };
  
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${variants[variant]}`}>
      {children}
    </span>
  );
}