export interface Product {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
  benefits: string[];
  protocols?: string[];
}

export const productsData: Record<string, Product> = {
  iam: {
    id: 'iam',
    title: 'Identity & Access Management',
    subtitle: 'Secure every user and device across your enterprise',
    description: 'Comprehensive IAM solution that provides complete visibility and control over who has access to what in your organization.',
    features: [
      {
        title: 'User Lifecycle Management',
        description: 'Automate provisioning and deprovisioning',
        icon: '♻️',
      },
      {
        title: 'Access Certification',
        description: 'Regular access reviews and attestation',
        icon: '✅',
      },
      {
        title: 'Role-Based Access',
        description: 'Control access based on job roles',
        icon: '👥',
      },
    ],
    benefits: [
      'Reduce security risks by 50%',
      'Onboard users 80% faster',
      'Meet compliance requirements',
      'Eliminate orphaned accounts',
    ],
    protocols: ['SAML 2.0', 'OAuth 2.0', 'OpenID Connect', 'LDAP'],
  },
  
  sso: {
    id: 'sso',
    title: 'Single Sign-On',
    subtitle: 'One login for all applications',
    description: 'Enable seamless access to all your applications with a single set of credentials.',
    features: [
      {
        title: 'Universal Login',
        description: 'One password for everything',
        icon: '🔐',
      },
      {
        title: 'Adaptive Authentication',
        description: 'Context-aware security',
        icon: '🧠',
      },
      {
        title: 'Mobile SSO',
        description: 'Secure mobile access',
        icon: '📱',
      },
    ],
    benefits: [
      'Improve user productivity',
      'Reduce password fatigue',
      'Lower help desk costs',
      'Enhance security posture',
    ],
    protocols: ['SAML 2.0', 'OAuth 2.0', 'OpenID Connect', 'WS-Federation'],
  },
  
  mfa: {
    id: 'mfa',
    title: 'Multi-Factor Authentication',
    subtitle: 'Add an extra layer of security',
    description: 'Protect accounts with multiple verification methods beyond passwords.',
    features: [
      {
        title: 'Biometric Auth',
        description: 'Fingerprint and face recognition',
        icon: '👆',
      },
      {
        title: 'Push Notifications',
        description: 'Mobile app approval',
        icon: '📲',
      },
      {
        title: 'Hardware Tokens',
        description: 'FIDO2 and YubiKey support',
        icon: '🔑',
      },
    ],
    benefits: [
      'Block 99.9% of account compromises',
      'Flexible authentication methods',
      'User-friendly experience',
      'Compliance ready',
    ],
  },
  
  governance: {
    id: 'governance',
    title: 'Identity Governance',
    subtitle: 'Complete visibility and control',
    description: 'Govern access across all systems with intelligent automation and analytics.',
    features: [
      {
        title: 'Access Analytics',
        description: 'AI-powered insights',
        icon: '📊',
      },
      {
        title: 'Separation of Duties',
        description: 'Prevent toxic combinations',
        icon: '⚖️',
      },
      {
        title: 'Policy Enforcement',
        description: 'Automated compliance',
        icon: '📜',
      },
    ],
    benefits: [
      'Pass audits with confidence',
      'Reduce manual reviews by 70%',
      'Identify risky access',
      'Streamline compliance',
    ],
  },
};