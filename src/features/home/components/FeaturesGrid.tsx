import Section from '../../../components/ui/Section';
import Card from '../../../components/ui/Card';
import { typography } from '../../../styles/typography';
import { gridStyles } from '../../../styles/section';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface FeaturesGridProps {
  features: Feature[];
}

export default function FeaturesGrid({ features }: FeaturesGridProps) {
  return (
    <Section>
      <h2 className={`${typography.h2} text-center text-gray-900 mb-12`}>
        Comprehensive Identity Security
      </h2>
      <div className={gridStyles.fourColumn}>
        {features.map((feature, index) => (
          <Card key={index} hover>
            <div className="text-5xl mb-4">{feature.icon}</div>
            <h3 className={`${typography.h4} text-gray-900 mb-3`}>
              {feature.title}
            </h3>
            <p className="text-gray-600">
              {feature.description}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}