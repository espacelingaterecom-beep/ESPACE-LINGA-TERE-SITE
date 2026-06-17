import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Phone, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/programs', label: t('nav.formations') },
    { path: '/radio', label: t('nav.radio') },
    { path: '/news', label: t('nav.news') },
    { path: '/donate', label: t('nav.donate') },
    { path: '/contact', label: t('nav.contact') }
  ];

  const socialLinks = [
    { id: 'facebook', icon: Facebook, href: 'https://facebook.com/espacelinga', label: 'Facebook' },
    { id: 'instagram', icon: Instagram, href: 'https://instagram.com/espacelinga', label: 'Instagram' },
    { id: 'youtube', icon: Youtube, href: 'https://youtube.com/@espacelinga', label: 'YouTube' }
  ];

  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex flex-col space-y-3">
              <Link to="/">
                <img 
                  src="https://horizons-cdn.hostinger.com/09c951e7-3780-4cbb-b319-1263b936e067/50a65f79504e7559e90f176b8bc29b64.png" 
                  alt="ESPACE LINGA TERE - Art et Développement" 
                  className="h-20 w-auto object-contain drop-shadow-sm bg-white/10 p-2 rounded-xl"
                />
              </Link>
              <span className="text-sm font-bold tracking-widest text-primary/90 uppercase">
                {t('hero.tag')}
              </span>
            </div>
            <p className="text-sm leading-relaxed opacity-90">
              {t('footer.desc')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <span className="text-sm font-semibold tracking-widest uppercase text-primary">{t('footer.quick')}</span>
            <nav className="flex flex-col space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm opacity-90 hover:opacity-100 hover:text-primary transition-all duration-200 w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <span className="text-sm font-semibold tracking-widest uppercase text-primary">{t('footer.contact')}</span>
            <div className="flex flex-col space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 opacity-80" />
                <span className="text-sm opacity-90 leading-relaxed">
                  Avenu Mbaîkoua<br />
                  rue école Galabadja 2<br />
                  Bangui RCA
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0 opacity-80" />
                <div className="flex flex-col space-y-1">
                  <a href="tel:+23675000579" className="text-sm opacity-90 hover:opacity-100 hover:text-primary transition-colors">
                    +236 75 00 05 79
                  </a>
                  <a href="tel:+23670508193" className="text-sm opacity-90 hover:opacity-100 hover:text-primary transition-colors">
                    +236 70 50 81 93
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 mt-0.5 flex-shrink-0 opacity-80" />
                <span className="text-sm opacity-90 leading-relaxed">
                  Lundi - Samedi<br />
                  08:00 - 16:00
                </span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-6">
            <span className="text-sm font-semibold tracking-widest uppercase text-primary">{t('footer.follow')}</span>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2.5 rounded-lg bg-accent-foreground/10 hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-accent-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm opacity-70">
              © {currentYear} ESPACE LINGA TERE. {t('footer.rights')}
            </p>
            <div className="flex space-x-8">
              <Link to="/privacy" className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all duration-200">
                {t('footer.privacy')}
              </Link>
              <Link to="/terms" className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all duration-200">
                {t('footer.terms')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;