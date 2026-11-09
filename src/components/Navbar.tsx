import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  Menu, 
  X, 
  Calendar, 
  ShieldCheck, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { DADOS_CLINICA } from '../data/content';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Áreas de Atuação', href: '#areas' },
    { label: 'Sobre a Psicóloga', href: '#sobre' },
    { label: 'Reembolso & Convênios', href: '#reembolso' },
    { label: 'Dúvidas Frequentes', href: '#faq' },
    { label: 'Contato', href: '#contato' }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-effect shadow-elevation-1 py-3 border-b border-[#F472B6]/20'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo e Identificação Profissional */}
            <a 
              href="#inicio" 
              onClick={(e) => handleLinkClick(e, '#inicio')}
              className="group flex items-center gap-3 transition-opacity hover:opacity-90"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F472B6] to-[#BE185D] flex items-center justify-center text-white shadow-sm ring-2 ring-[#FCE7F3]">
                <Heart className="w-5 h-5 fill-white/20 stroke-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#231C19] group-hover:text-[#BE185D] transition-colors leading-none">
                  {DADOS_CLINICA.nome}
                </span>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs uppercase tracking-wider text-[#877C75] font-medium">
                    Psicologia & Neuropsicologia
                  </span>
                  <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-[#F472B6]"></span>
                  <span className="hidden sm:inline-block text-[11px] font-semibold text-[#BE185D] bg-[#FDF2F8] px-1.5 py-0.5 rounded border border-[#FBCFE8]">
                    {DADOS_CLINICA.registroCRP}
                  </span>
                </div>
              </div>
            </a>

            {/* Links Desktop */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-sm font-medium text-[#5A504A] hover:text-[#BE185D] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#F472B6] hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Ação Primária Desktop */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#DB2777] to-[#BE185D] shadow-md hover:shadow-lg hover:from-[#BE185D] hover:to-[#9D174D] active:scale-[0.98] transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Entrar em contato</span>
              </button>
            </div>

            {/* Botão Mobile Hamburger */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={onOpenBooking}
                className="sm:hidden px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-[#BE185D] shadow-sm"
              >
                Contato
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
                className="p-2 rounded-xl text-[#231C19] hover:bg-[#FDF2F8] transition-colors cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Drawer Mobile com Animação */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[68px] z-30 bg-white/95 backdrop-blur-xl border-b border-[#FBCFE8] shadow-elevation-2 px-6 py-6 lg:hidden"
          >
            <div className="flex flex-col gap-4">
              <div className="pb-3 border-b border-gray-100 flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-[#877C75]">Navegação</span>
                <span className="text-[11px] font-semibold text-[#BE185D] bg-[#FDF2F8] px-2 py-0.5 rounded border border-[#FBCFE8]">
                  {DADOS_CLINICA.registroCRP}
                </span>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-base font-medium text-[#231C19] hover:text-[#BE185D] py-2 transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-[#F472B6]" />
                </a>
              ))}

              <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full text-base font-semibold text-white bg-gradient-to-r from-[#DB2777] to-[#BE185D] shadow-md"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Entrar em contato</span>
                </button>
                <div className="flex items-center justify-center gap-2 text-xs text-[#877C75]">
                  <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                  <span>Ambiente sigiloso e acolhedor</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
