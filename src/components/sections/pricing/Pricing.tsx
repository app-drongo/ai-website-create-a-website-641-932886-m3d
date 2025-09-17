'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap, Leaf, Users, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Pricing() {
  const router = useRouter();
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  // ACTION_PLACEHOLDER_START
  const handleStarterPlan = () => {
    router.push('/');
  };

  const handleProfessionalPlan = () => {
    router.push('/');
  };

  const handleEnterprisePlan = () => {
    router.push('/');
  };

  const handleScheduleDemo = () => {
    router.push('/');
  };
  // ACTION_PLACEHOLDER_END

  const plans = [
    {
      name: 'EcoStarter',
      description: 'Perfect for small teams starting their sustainability journey',
      price: billingPeriod === 'monthly' ? '$19' : '$15',
      period: billingPeriod === 'monthly' ? '/month' : '/month',
      badge: null,
      features: [
        'Up to 5 team members',
        'Carbon footprint tracking',
        'Basic sustainability reports',
        '10GB eco-friendly storage',
        'Email support',
        'Mobile app access',
      ],
      cta: 'Start Green Journey',
      popular: false,
      icon: Leaf,
    },
    {
      name: 'EcoProfessional',
      description: 'Comprehensive solution for growing sustainable businesses',
      price: billingPeriod === 'monthly' ? '$49' : '$39',
      period: billingPeriod === 'monthly' ? '/month' : '/month',
      badge: 'Most Popular',
      features: [
        'Up to 50 team members',
        'Advanced carbon analytics',
        'Automated sustainability reporting',
        '100GB green cloud storage',
        'Priority support & training',
        'Custom sustainability goals',
        'Third-party integrations',
        'ESG compliance tools',
        'Real-time collaboration',
      ],
      cta: 'Boost Sustainability',
      popular: true,
      icon: Users,
    },
    {
      name: 'EcoEnterprise',
      description: 'Enterprise-grade platform for large sustainable organizations',
      price: 'Custom',
      period: '',
      badge: 'Contact Sales',
      features: [
        'Unlimited team members',
        'Enterprise carbon management',
        'White-label sustainability portal',
        'Unlimited secure storage',
        '24/7 dedicated support',
        'Advanced API access',
        'Custom integrations',
        'Compliance automation',
        'Multi-location tracking',
        'Executive dashboards',
      ],
      cta: 'Scale Sustainability',
      popular: false,
      icon: Shield,
    },
  ];

  const handlePlanAction = (planName: string) => {
    if (planName === 'EcoStarter') {
      handleStarterPlan();
    } else if (planName === 'EcoProfessional') {
      handleProfessionalPlan();
    } else {
      handleEnterprisePlan();
    }
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/20">
            <Leaf className="size-3 mr-2 text-primary" />
            Sustainable Pricing
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Invest in Your
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Sustainable Future
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Choose the perfect GreenSuite plan to transform your business operations. Transparent
            pricing with no hidden costs, powered by renewable energy.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center p-1 bg-muted rounded-lg">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={cn(
                'px-4 py-2 text-sm font-medium rounded-md transition-all',
                billingPeriod === 'monthly'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('annual')}
              className={cn(
                'px-4 py-2 text-sm font-medium rounded-md transition-all',
                billingPeriod === 'annual'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              Annual
              <Badge variant="secondary" className="ml-2 text-xs bg-primary/10 text-primary">
                Save 20%
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={cn(
                'relative overflow-hidden transition-all duration-300 hover:shadow-lg',
                plan.popular
                  ? 'border-primary/50 shadow-lg shadow-primary/10 scale-105'
                  : 'border-border/50 hover:border-primary/20'
              )}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Star className="size-3 mr-1" />
                    {plan.badge}
                  </Badge>
                </div>
              )}

              {/* Background Gradient */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              )}

              <CardHeader className="relative text-center pb-8">
                {plan.badge && !plan.popular && (
                  <Badge variant="outline" className="mb-4 mx-auto w-fit border-primary/20">
                    {plan.badge}
                  </Badge>
                )}

                <div className="mb-4">
                  <plan.icon className="size-8 mx-auto text-primary" />
                </div>

                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base mb-6">{plan.description}</CardDescription>

                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground mb-1">{plan.period}</span>}
                </div>
                {billingPeriod === 'annual' && plan.price !== 'Custom' && (
                  <p className="text-sm text-primary mt-2">Billed annually • 2 months free</p>
                )}
              </CardHeader>

              <CardContent className="relative space-y-6">
                {/* Features List */}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="size-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  onClick={() => handlePlanAction(plan.name)}
                  className={cn(
                    'w-full text-base py-6',
                    plan.popular ? 'bg-primary hover:bg-primary/90' : ''
                  )}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.popular && <Zap className="size-4 mr-2" />}
                  {plan.cta}
                </Button>

                {plan.name === 'EcoProfessional' && (
                  <p className="text-center text-sm text-muted-foreground">
                    30-day free trial • Carbon-neutral hosting included
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <div className="bg-card/50 rounded-2xl p-8 border border-primary/10">
            <Leaf className="size-12 mx-auto text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-4">Need a Custom Sustainability Solution?</h3>
            <p className="text-muted-foreground mb-6">
              We create tailored environmental management systems for enterprises with unique
              sustainability goals. Let's build your carbon-neutral future together.
            </p>
            <Button
              onClick={handleScheduleDemo}
              variant="outline"
              size="lg"
              className="border-primary/20 hover:bg-primary/5"
            >
              <Users className="size-4 mr-2" />
              Schedule Sustainability Consultation
            </Button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Trusted by 500+ sustainable businesses worldwide
          </p>
          <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="size-4 text-primary" />
              SOC 2 Compliant
            </div>
            <div className="flex items-center gap-2">
              <Leaf className="size-4 text-primary" />
              Carbon Neutral
            </div>
            <div className="flex items-center gap-2">
              <Check className="size-4 text-primary" />
              99.9% Uptime
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
