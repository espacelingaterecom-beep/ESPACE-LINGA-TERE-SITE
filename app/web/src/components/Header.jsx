import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Phone, ChevronDown, Radio, GraduationCap, Globe, Newspaper, Heart, Image as ImageIcon } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/LanguageContext';
import { useAuth } from '@/lib/AuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, LogOut, Settings } from 'lucide-react';

function Header() {
  const { language, setLanguage, t } = useLanguage();
  const { user, logout, isAdmin } = useAuth();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const userName = user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'Utilisateur';
  const userInitial = userName.charAt(0).toUpperCase();

  const isActive = (path) => location.pathname === path;

  const actionsLinks = [
    { path: '/programs', label: t('nav.formations'), icon: GraduationCap },
    { path: '/radio', label: t('nav.radio'), icon: Radio },
    { path: '/ge-so-beafrika', label: t('nav.geSo'), icon: Globe },
  ];

  const mainLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
  ];

  const otherLinks = [
    { path: '/news', label: t('nav.news'), icon: Newspaper },
    { path: '/gallery', label: t('nav.gallery'), icon: ImageIcon },
    { path: '/donate', label: t('nav.donate'), icon: Heart },
    { path: '/contact', label: t('nav.contact') },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group shrink-0">
            <img 
              src="https://horizons-cdn.hostinger.com/09c951e7-3780-4cbb-b319-1263b936e067/50a65f79504e7559e90f176b8bc29b64.png" 
              alt="ESPACE LINGA TERE - Art et Développement" 
              className="h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 ml-4">
            <nav className="flex items-center space-x-1">
              {mainLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-200 rounded-lg ${
                    isActive(link.path)
                      ? 'text-primary bg-primary/10'
                      : 'text-foreground hover:text-primary hover:bg-muted'
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className={`px-3 py-2 text-sm font-medium h-auto rounded-lg ${
                    actionsLinks.some(l => isActive(l.path)) ? 'text-primary bg-primary/10' : ''
                  }`}>
                    {t('nav.actions')} <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56">
                  {actionsLinks.map((link) => (
                    <DropdownMenuItem key={link.path} asChild>
                      <Link to={link.path} className="flex items-center cursor-pointer">
                        <link.icon className="mr-2 h-4 w-4" />
                        <span>{link.label}</span>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {otherLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-200 rounded-lg ${
                    isActive(link.path)
                      ? 'text-primary bg-primary/10'
                      : 'text-foreground hover:text-primary hover:bg-muted'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            
            <div className="h-6 w-px bg-border mx-4"></div>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                  <Globe className="h-4 w-4" />
                  <span>{language}</span>
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage('FR')} className={`cursor-pointer ${language === 'FR' ? 'font-bold' : ''}`}>Français</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('SG')} className={`cursor-pointer ${language === 'SG' ? 'font-bold' : ''}`}>Sango</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('EN')} className={`cursor-pointer ${language === 'EN' ? 'font-bold' : ''}`}>English</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="h-6 w-px bg-border mx-2"></div>

            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-2 px-3 hover:bg-primary/10 rounded-full">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                      {userInitial}
                    </div>
                    <span className="text-sm font-medium hidden xl:inline-block">{userName}</span>
                    <ChevronDown className="h-4 w-4 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  {isAdmin && (
                    <DropdownMenuItem asChild className="cursor-pointer">
                      <Link to="/admin" className="flex items-center w-full">
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Administration</span>
                      </Link>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem asChild className="cursor-pointer">
                    <Link to="/profile" className="flex items-center w-full">
                      <User className="mr-2 h-4 w-4" />
                      <span>{t('nav.profile')}</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer text-destructive focus:text-destructive" onClick={logout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>{t('nav.logout')}</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center space-x-2">
                <Button asChild variant="ghost" size="sm">
                  <Link to="/login">{t('nav.login')}</Link>
                </Button>
                <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
                  <Link to="/register">{t('nav.register')}</Link>
                </Button>
              </div>
            )}
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center space-x-2 lg:hidden">
            {!user && (
              <Button asChild size="sm" variant="outline" className="hidden sm:flex border-primary text-primary">
                <Link to="/donate">{t('nav.donate')}</Link>
              </Button>
            )}

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="shrink-0">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Basculer le menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] flex flex-col overflow-y-auto">
                <div className="mb-8 mt-4 flex items-center justify-between">
                  <img
                    src="https://horizons-cdn.hostinger.com/09c951e7-3780-4cbb-b319-1263b936e067/50a65f79504e7559e90f176b8bc29b64.png"
                    alt="ESPACE LINGA TERE - Art et Développement"
                    className="h-10 w-auto object-contain"
                  />
                  {user && (
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                      {userInitial}
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between px-4 mb-6">
                   <span className="text-sm font-bold uppercase text-muted-foreground">Menu</span>
                   <div className="flex space-x-2">
                      {['FR', 'SG', 'EN'].map(lang => (
                        <button
                          key={lang}
                          onClick={() => setLanguage(lang)}
                          className={`text-xs p-1 rounded font-bold ${language === lang ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'}`}
                        >
                          {lang}
                        </button>
                      ))}
                   </div>
                </div>

                <nav className="flex flex-col space-y-1">
                  {mainLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-3 text-base font-medium transition-all duration-200 rounded-lg ${
                        isActive(link.path)
                          ? 'text-primary bg-primary/10'
                          : 'text-foreground hover:text-primary hover:bg-muted'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}

                  <div className="py-2 px-4 text-xs font-bold uppercase text-muted-foreground mt-4">{t('nav.actions')}</div>
                  {actionsLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-3 text-base font-medium transition-all duration-200 rounded-lg flex items-center ${
                        isActive(link.path)
                          ? 'text-primary bg-primary/10'
                          : 'text-foreground hover:text-primary hover:bg-muted'
                      }`}
                    >
                      <link.icon className="mr-3 h-5 w-5" />
                      {link.label}
                    </Link>
                  ))}

                  <div className="py-2 px-4 text-xs font-bold uppercase text-muted-foreground mt-4">Plus</div>
                  {otherLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-3 text-base font-medium transition-all duration-200 rounded-lg flex items-center ${
                        isActive(link.path)
                          ? 'text-primary bg-primary/10'
                          : 'text-foreground hover:text-primary hover:bg-muted'
                      }`}
                    >
                      {link.icon && <link.icon className="mr-3 h-5 w-5" />}
                      {link.label}
                    </Link>
                  ))}

                  {user ? (
                    <div className="pt-4 mt-4 border-t border-border space-y-1">
                      {isAdmin && (
                        <Link
                          to="/admin"
                          onClick={() => setIsOpen(false)}
                          className="flex items-center px-4 py-3 text-base font-medium transition-all duration-200 rounded-lg text-foreground hover:text-primary hover:bg-muted"
                        >
                          <Settings className="mr-3 h-5 w-5" />
                          Administration
                        </Link>
                      )}
                      <Link
                        to="/profile"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center px-4 py-3 text-base font-medium transition-all duration-200 rounded-lg text-foreground hover:text-primary hover:bg-muted"
                      >
                        <User className="mr-3 h-5 w-5" />
                        {t('nav.profile')}
                      </Link>
                      <Button
                        variant="ghost"
                        onClick={() => { logout(); setIsOpen(false); }}
                        className="w-full justify-start px-4 py-6 text-destructive hover:text-destructive hover:bg-destructive/10"
                      >
                        <LogOut className="mr-3 h-5 w-5" />
                        {t('nav.logout')}
                      </Button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-2 p-4 mt-4 border-t border-border">
                      <Button asChild variant="outline" onClick={() => setIsOpen(false)}>
                        <Link to="/login">{t('nav.login')}</Link>
                      </Button>
                      <Button asChild onClick={() => setIsOpen(false)}>
                        <Link to="/register">{t('nav.register')}</Link>
                      </Button>
                    </div>
                  )}
                </nav>

                <div className="mt-8 pt-6 border-t border-border">
                  <a
                    href="tel:+23675000579"
                    className="flex items-center space-x-3 px-4 py-3 text-base font-medium text-primary bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    <span>+236 75 00 05 79</span>
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;