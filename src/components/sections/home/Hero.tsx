'use client';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Star, Users, Leaf, Zap, Shield, TrendingUp } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Hero() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/pricing');
  };

  const handleSecondaryAction = () => {
    setIsModalOpen(true);
  };

  const handleBadgeAction = () => {
    router.push('/');
  };
  // ACTION_PLACEHOLDER_END

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-20 left-20 size-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 size-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-28">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <button
              onClick={handleBadgeAction}
              className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary hover:bg-primary/20 transition-colors cursor-pointer"
              data-action-type="badge-link"
            >
              <Leaf className="size-4 mr-2" />
              Carbon-Neutral Business Operations Made Simple
              <ArrowRight className="ml-2 size-4" />
            </button>
          </div>

          {/* Main Content */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              Transform Your Business Into
              <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Sustainable Success
              </span>
              With GreenSuite
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              The all-in-one productivity platform that helps SMBs reduce environmental impact while
              boosting collaboration, streamlining workflows, and driving measurable growth.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="group text-base px-8 bg-primary hover:bg-primary/90"
                onClick={handlePrimaryAction}
                data-action-type="primary-cta"
              >
                Start Your Green Journey
                <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group text-base px-8 border-primary/20 hover:bg-primary/5"
                onClick={handleSecondaryAction}
                data-action-type="secondary-cta"
              >
                <Play className="mr-2 size-5 transition-transform group-hover:scale-110" />
                Watch Platform Demo
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="size-8 rounded-full bg-gradient-to-br from-primary to-primary/60 border-2 border-background flex items-center justify-center">
                    <Leaf className="size-4 text-background" />
                  </div>
                  <div className="size-8 rounded-full bg-gradient-to-br from-primary/80 to-primary/40 border-2 border-background flex items-center justify-center">
                    <TrendingUp className="size-4 text-background" />
                  </div>
                  <div className="size-8 rounded-full bg-gradient-to-br from-primary/60 to-primary/30 border-2 border-background flex items-center justify-center">
                    <Shield className="size-4 text-background" />
                  </div>
                </div>
                <span className="ml-2">
                  <Users className="inline size-4 mr-1" />
                  2,500+ sustainable businesses
                </span>
              </div>

              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4 fill-primary text-primary" />
                ))}
                <span className="ml-2">4.8/5 eco-rating</span>
              </div>
            </div>
          </div>

          {/* Hero Image/Mockup */}
          <div className="mt-16 relative">
            <div className="relative mx-auto max-w-4xl">
              <div className="rounded-2xl border border-primary/10 bg-card p-2 shadow-2xl">
                <div className="rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <div className="size-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <Leaf className="size-8 text-primary" />
                    </div>
                    <p className="text-muted-foreground font-medium">GreenSuite Dashboard</p>
                    <p className="text-sm text-muted-foreground/80">
                      Real-time sustainability metrics
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 size-8 bg-primary rounded-full animate-pulse flex items-center justify-center">
                <Zap className="size-4 text-background" />
              </div>
              <div className="absolute -bottom-4 -right-4 size-6 bg-primary/80 rounded-full animate-pulse delay-1000" />
              <div className="absolute top-1/2 -right-8 size-4 bg-primary/60 rounded-full animate-pulse delay-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
