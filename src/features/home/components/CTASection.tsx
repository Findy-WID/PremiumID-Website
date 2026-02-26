import Button from '../../../components/ui/Button';
import Section from '../../../components/ui/Section';
import { typography } from '../../../styles/typography';

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
}

export default function CTASection({ title, subtitle, buttonText }: CTASectionProps) {
  return (
    <Section className='bg-gray-300'>
      <div className="text-center">
        <h2 className={`${typography.h2} text-black mb-4`}>
          {title}
        </h2>
        <p className={`${typography.bodyLarge} text-gray-300 mb-8`}>
          {subtitle}
        </p>
        <Button variant="primary" size="lg">
          {buttonText}
        </Button>
      </div>
    </Section>
  );
}