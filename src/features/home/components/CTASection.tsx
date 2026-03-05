import Button from '../../../components/ui/Button';
import Section from '../../../components/ui/Section';
import { typography } from '../../../styles/typography';
import DemoModal from '../../../components/ui/DemoModal';
import { useState } from 'react';

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
}

export default function CTASection({ title, subtitle, buttonText }: CTASectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Section className='bg-gray-300'>
        <div className="text-center">
          <h2 className={`${typography.h2} text-black mb-4`}>
            {title}
          </h2>
          <p className={`${typography.bodyLarge} text-gray-300 mb-8`}>
            {subtitle}
          </p>
          <Button variant="primary" size="lg" onClick={() => setIsModalOpen(true)}>
            {buttonText}
          </Button>
        </div>
        <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </Section>
    </>
  );
}