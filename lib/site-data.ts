export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' }
] as const;

export const heroStats = [
  { value: '95%', label: 'faster lead response' },
  { value: '30-50%', label: 'lift in conversions' },
  { value: '80%', label: 'manual sales tasks automated' }
] as const;

export const services = [
  {
    title: 'AI Lead Follow-Up Automation',
    description:
      'Capture inbound leads instantly, qualify them automatically, and keep every opportunity engaged with fast, personalized follow-up.',
    benefit: 'Reduce lead leakage and respond while intent is highest.',
    outcome: 'Higher booked-call rates and more revenue from existing traffic.'
  },
  {
    title: 'CRM & Workflow Automation',
    description:
      'Connect your forms, inbox, pipeline, and internal tools into a seamless operating system that removes repetitive admin work.',
    benefit: 'Keep your team focused on decisions, not data entry.',
    outcome: 'Cleaner operations, faster handoffs, and fewer process errors.'
  },
  {
    title: 'AI Appointment Booking Systems',
    description:
      'Turn conversations into calendar events with intelligent scheduling, reminders, routing, and no-show reduction workflows.',
    benefit: 'Increase booked meetings without increasing headcount.',
    outcome: 'More qualified calls and less time spent coordinating schedules.'
  },
  {
    title: 'Custom AI Business Automation Systems',
    description:
      'Design bespoke systems around your sales, support, operations, and reporting workflows for a true competitive advantage.',
    benefit: 'Build a scalable operating layer tailored to how you work.',
    outcome: 'A more resilient business that grows without compounding overhead.'
  }
] as const;

export const processSteps = [
  {
    title: 'Analyze Business',
    description:
      'We map your current funnel, internal bottlenecks, and revenue-critical workflows to identify the fastest wins.',
    detail: 'Typical discovery timeline: 1-2 days.'
  },
  {
    title: 'Build Automation System',
    description:
      'We design and implement the automation stack, connecting your tools, lead sources, and AI logic into production.',
    detail: 'Typical implementation timeline: 5-10 days.'
  },
  {
    title: 'Optimize & Scale',
    description:
      'We monitor performance, refine logic, and expand the system across more workflows as volume increases.',
    detail: 'Ongoing optimization keeps the ROI compounding.'
  }
] as const;

export const whyChooseUs = [
  'Fast Setup (7-14 days typical)',
  'ROI-Focused Systems',
  'Modern AI Integrations',
  'Reliable Support',
  'Scalable Architecture',
  'International Client Experience'
] as const;

export const caseStudies = [
  {
    metric: '95% faster',
    title: 'Lead response time reduced dramatically',
    description:
      'Automated qualification and follow-up sequences turned manual response delays into near-instant engagement across inbound channels.'
  },
  {
    metric: '30-50% lift',
    title: 'Conversion rates improved across campaigns',
    description:
      'By routing leads through smarter nurture logic and appointment booking, the client captured significantly more revenue from the same traffic.'
  },
  {
    metric: '80% automated',
    title: 'Manual sales tasks removed from the team',
    description:
      'Routine follow-ups, CRM updates, and reminder workflows were automated so the sales team could focus on closing instead of admin.'
  }
] as const;

export const testimonials = [
  {
    name: 'Emma Caldwell',
    role: 'Managing Director',
    company: 'Northstar Advisory, UK',
    review:
      'Abacore gave us a streamlined follow-up system that felt immediately operational. Our team now spends far less time on manual coordination and more time closing qualified opportunities.'
  },
  {
    name: 'Jason Patel',
    role: 'Founder',
    company: 'Summit Health Systems, Canada',
    review:
      'The automation architecture was thoughtful, fast to deploy, and easy for the team to adopt. We saw a measurable improvement in speed-to-lead within the first week.'
  },
  {
    name: 'Olivia Chen',
    role: 'Operations Director',
    company: 'Harbor Growth Studio, Australia',
    review:
      'What impressed us most was the commercial thinking. Abacore did not just automate tasks; they built systems that supported growth without adding complexity.'
  }
] as const;

export type PricingPlan = {
  name: string;
  setup: string;
  monthly: string;
  bestFor: string;
  leadVolume: string;
  features: readonly string[];
  featured?: boolean;
};

export const pricingPlans = [
  {
    name: 'Starter',
    setup: '$500',
    monthly: '$200',
    bestFor: 'Solo entrepreneurs, small businesses, and startups',
    leadVolume: 'Up to 200 leads/month',
    features: [
      '1 automation workflow',
      'CRM integration',
      'AI lead response system',
      'Email automation',
      'Basic support'
    ]
  },
  {
    name: 'Growth',
    setup: '$800',
    monthly: '$500',
    bestFor: 'Businesses ready to scale predictable lead handling',
    leadVolume: '200-2000 leads/month',
    features: [
      'Multiple automation workflows',
      'Advanced AI logic',
      'CRM pipeline automation',
      'Appointment booking system',
      'Slack/Discord notifications',
      'Analytics & reporting dashboard'
    ],
    featured: true
  },
  {
    name: 'Scale',
    setup: '$3000+',
    monthly: '$1000+',
    bestFor: 'High-volume teams and enterprise operations',
    leadVolume: 'High-volume businesses',
    features: [
      'Fully custom automation systems',
      'Advanced API integrations',
      'Multi-team workflows',
      'Enterprise CRM integration',
      'Priority support',
      'Continuous optimization',
      'Consulting'
    ]
  }
] satisfies readonly PricingPlan[];

export const contactChannels = [
  {
    title: 'Book a consultation',
    detail: 'We typically respond within one business day and can align on scope quickly.'
  },
  {
    title: 'Email automation support',
    detail: 'Your form submission can trigger a workflow that routes the message to the right team automatically.'
  },
  {
    title: 'Calendly integration placeholder',
    detail: 'Replace this section with your live scheduling link when the booking flow is ready.'
  }
] as const;
