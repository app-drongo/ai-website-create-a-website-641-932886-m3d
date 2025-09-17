'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { Leaf, Recycle, BarChart3, Users, Cloud, Zap, Shield, Globe, Target } from 'lucide-react';

export default function Features() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/pricing');
  };
  const handleSecondaryAction = () => {
    router.push('/');
  };
  // ACTION_PLACEHOLDER_END

  const features = [
    {
      icon: Leaf,
      title: 'Carbon Footprint Tracking',
      description:
        "Monitor and reduce your business's environmental impact with real-time carbon tracking and sustainability metrics.",
      badge: 'Sustainability',
    },
    {
      icon: Recycle,
      title: 'Waste Management Analytics',
      description:
        'Optimize resource usage and minimize waste with intelligent analytics and automated reporting systems.',
      badge: 'Efficiency',
    },
    {
      icon: BarChart3,
      title: 'ESG Reporting Dashboard',
      description:
        'Generate comprehensive Environmental, Social, and Governance reports with automated compliance tracking.',
      badge: 'Reporting',
    },
    {
      icon: Users,
      title: 'Team Collaboration Hub',
      description:
        'Unite your sustainability teams with shared goals, progress tracking, and collaborative project management.',
      badge: 'Collaboration',
    },
    {
      icon: Cloud,
      title: 'Green Cloud Infrastructure',
      description:
        'Powered by 100% renewable energy data centers with carbon-neutral hosting and storage solutions.',
      badge: 'Infrastructure',
    },
    {
      icon: Zap,
      title: 'Energy Optimization AI',
      description:
        'Smart algorithms analyze usage patterns and recommend energy-saving strategies for maximum efficiency.',
      badge: 'AI-Powered',
    },
    {
      icon: Shield,
      title: 'Compliance Automation',
      description:
        'Stay ahead of environmental regulations with automated compliance monitoring and alert systems.',
      badge: 'Compliance',
    },
    {
      icon: Globe,
      title: 'Supply Chain Transparency',
      description:
        'Track sustainability metrics across your entire supply chain with vendor scorecards and impact assessments.',
      badge: 'Transparency',
    },
    {
      icon: Target,
      title: 'Goal Setting & Tracking',
      description:
        'Set ambitious sustainability targets and track progress with milestone celebrations and achievement badges.',
      badge: 'Goals',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/30 text-primary">
            Sustainable Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Build a Greener Future with
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Smart Sustainability Tools
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive sustainability management platform designed to help businesses reduce
            environmental impact while boosting operational efficiency and compliance.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge
                      variant="secondary"
                      className="text-xs bg-primary/10 text-primary border-primary/20"
                    >
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to transform your sustainability strategy?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handlePrimaryAction}
              className="px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              View Pricing Plans
            </Button>
            <Button
              onClick={handleSecondaryAction}
              variant="outline"
              className="px-8 py-3 border-primary/30 text-primary hover:bg-primary/10 transition-colors"
            >
              Explore Platform
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
