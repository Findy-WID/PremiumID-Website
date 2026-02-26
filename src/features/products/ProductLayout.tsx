import PageHeader from '../../components/ui/PageHeader';
import Section from '../../components/ui/Section';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';
import { typography } from '../../styles/typography';
import { gridStyles } from '../../styles/section';
import type { Product } from './data';

interface ProductLayoutProps {
  product: Product;
}

export default function ProductLayout({ product }: ProductLayoutProps) {
  return (
    <div>
      <PageHeader
        title={product.title}
        subtitle={product.subtitle}
        variant="dark"
        buttons={
          <>
            <Button variant="primary" size="lg">Get Started</Button>
            <Button variant="outline" size="lg">Schedule Demo</Button>
          </>
        }
      />

      {/* Description */}
      <Section>
        <p className={`${typography.lead} text-center max-w-4xl mx-auto`}>
          {product.description}
        </p>
      </Section>

      {/* Features */}
      <Section variant="withBackground">
        <h2 className={`${typography.h2} text-center text-gray-900 mb-12`}>
          Key Features
        </h2>
        <div className={gridStyles.threeColumn}>
          {product.features.map((feature, index) => (
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

      {/* Benefits */}
      <Section>
        <h2 className={`${typography.h2} text-center text-gray-900 mb-12`}>
          Business Benefits
        </h2>
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
          {product.benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="text-identity-secure text-2xl">✓</span>
              <span className="text-lg text-gray-700">{benefit}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Protocols (if available) */}
      {product.protocols && (
        <Section variant="withBackground">
          <h2 className={`${typography.h3} text-center text-gray-900 mb-8`}>
            Supported Protocols
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {product.protocols.map((protocol) => (
              <Badge key={protocol} variant="primary">
                {protocol}
              </Badge>
            ))}
          </div>
        </Section>
      )}

      {/* CTA */}
      <Section variant="dark">
        <div className="text-center">
          <h2 className={`${typography.h2} text-white mb-4`}>
            Ready to Get Started?
          </h2>
          <p className={`${typography.bodyLarge} text-gray-300 mb-8`}>
            See how {product.title} can transform your security posture
          </p>
          <Button variant="primary" size="lg">
            Book a Demo
          </Button>
        </div>
      </Section>
    </div>
  );
}