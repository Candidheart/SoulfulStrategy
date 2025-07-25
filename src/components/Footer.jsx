import { Link } from 'react-router-dom';
import { Heart, Feather, Mail, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center space-x-1">
                <Heart className="h-6 w-6 text-primary" />
                <Feather className="h-6 w-6 text-accent" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-semibold text-foreground">
                  Samantha Josette
                </span>
                <span className="font-sans text-xs text-muted-foreground -mt-1">
                  Soulful Strategy
                </span>
              </div>
            </div>
            <p className="font-sans text-muted-foreground mb-6 max-w-md leading-relaxed">
              Where strategy meets self-worth. Healing is a system. So is growth. 
              Structure for your soul-led story.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:hello@samanthajosette.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/work-with-me" 
                  className="font-sans text-muted-foreground hover:text-primary transition-colors"
                >
                  Work With Me
                </Link>
              </li>
              <li>
                <Link 
                  to="/poetry" 
                  className="font-sans text-muted-foreground hover:text-primary transition-colors"
                >
                  Poetry & Devotionals
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="font-sans text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="font-sans text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <span className="font-sans text-muted-foreground">
                  Betrayal Trauma Coaching
                </span>
              </li>
              <li>
                <span className="font-sans text-muted-foreground">
                  Strategic Copywriting
                </span>
              </li>
              <li>
                <span className="font-sans text-muted-foreground">
                  AI Automation
                </span>
              </li>
              <li>
                <span className="font-sans text-muted-foreground">
                  Clarity Mapping
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="font-sans text-muted-foreground">
            © 2025 Samantha Josette. All rights reserved. 
            <span className="block sm:inline sm:ml-2 mt-2 sm:mt-0 italic">
              Let it feel like home. Let it move like breath. Let it convert, but never coerce.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

