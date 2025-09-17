'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
  Leaf,
} from 'lucide-react';

export default function Footer() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  // ACTION_PLACEHOLDER_START
  const handleNewsletterSignup = () => {
    // In a real app, this would handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };
  const handleContactAction = () => {
    router.push('/');
  };
  // ACTION_PLACEHOLDER_END

  const footerSections = [
    {
      title: 'Platform',
      links: [
        { name: 'Dashboard Analytics', href: '#features' },
        { name: 'Team Collaboration', href: '#pricing' },
        { name: 'Workflow Automation', href: '/templates' },
        { name: 'API Integration', href: '/integrations' },
        { name: 'Developer Tools', href: '/api' },
        { name: 'Technical Docs', href: '/docs' },
      ],
    },
    {
      title: 'GreenSuite',
      links: [
        { name: 'Our Mission', href: '#about' },
        { name: 'Sustainability Blog', href: '/blog' },
        { name: 'Join Our Team', href: '/careers' },
        { name: 'Press Kit', href: '/press' },
        { name: 'Partner Program', href: '/partners' },
        { name: 'Contact Support', href: '#contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Knowledge Base', href: '/help' },
        { name: 'User Community', href: '/community' },
        { name: 'Video Tutorials', href: '/tutorials' },
        { name: 'Live Webinars', href: '/webinars' },
        { name: 'Success Stories', href: '/case-studies' },
        { name: 'System Status', href: '/status' },
      ],
    },
    {
      title: 'Compliance',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Service Terms', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
        { name: 'GDPR Compliance', href: '/gdpr' },
        { name: 'Security Center', href: '/security' },
        { name: 'SOC 2 Certified', href: '/compliance' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/greensuite' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/greensuite' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/greensuite' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/greensuite' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/greensuite' },
  ];

  return (
    <footer className="bg-background border-t border-primary/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <Leaf className="size-6 text-primary-foreground" />
                </div>
                <span className="font-bold text-xl text-primary">GreenSuite</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Empowering small to medium businesses with sustainable, productivity-focused SaaS
                solutions. Join over 15,000+ teams building a greener, more efficient future
                together.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">support@greensuite.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+1 (555) 847-3920</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">2847 Innovation Drive, Austin, TX</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-primary">Weekly Green Tech Insights</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your.email@company.com"
                  className="flex-1 px-3 py-2 text-sm border border-primary/30 rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button
                  size="sm"
                  className="px-3 bg-primary hover:bg-primary/90"
                  onClick={handleNewsletterSignup}
                >
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Get productivity tips and sustainability insights. 14,000+ subscribers, zero spam.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm text-primary">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary/20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 GreenSuite. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Built with <Heart className="size-3 text-primary fill-current" /> for sustainable
                business
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2">Connect with us:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-primary/10">
            <Link
              href="/sitemap"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Site Map
            </Link>
            <Link
              href="/accessibility"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Accessibility
            </Link>
            <Link
              href="/cookies"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Cookie Preferences
            </Link>
            <Link
              href="/support"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              24/7 Support
            </Link>
            <span className="text-xs text-primary font-medium">🌱 Carbon Neutral Hosting</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
