import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InteractiveAssessment } from './components/InteractiveAssessment';
import { AreasOfPractice } from './components/AreasOfPractice';
import { AboutSection } from './components/AboutSection';
import { ReimbursementGuide } from './components/ReimbursementGuide';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { BookingModal } from './components/BookingModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [selectedModalidade, setSelectedModalidade] = useState<'online' | 'presencial'>('online');

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    setIsBookingOpen(true);
  };

  const handleAssessmentRecommendation = (serviceName: string, modalidade: 'online' | 'presencial') => {
    setSelectedService(serviceName);
    setSelectedModalidade(modalidade);
    // Scroll suave até a seção de contato com os dados pré-preenchidos ou abrir modal
    const contatoElement = document.querySelector('#contato');
    if (contatoElement) {
      contatoElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsBookingOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F6] text-[#231C19] flex flex-col font-sans selection:bg-[#F472B6]/30 selection:text-[#831843]">
      {/* Barra de Navegação Superior */}
      <Navbar onOpenBooking={handleOpenBooking} />

      <main className="flex-grow">
        {/* Seção 1: Início / Hero com Métricas Animadas */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* Ferramenta Interativa: Triagem e Orientação Terapêutica Rápida */}
        <InteractiveAssessment onSelectRecommendation={handleAssessmentRecommendation} />

        {/* Seção 2: Áreas de Atuação & Avaliação Neuropsicológica */}
        <AreasOfPractice onSelectService={handleSelectService} />

        {/* Seção 3: Sobre Claudia Amaral Ferreira & Credenciais */}
        <AboutSection onOpenBooking={handleOpenBooking} />

        {/* Seção de Reembolso ANS para Convênios de Saúde */}
        <ReimbursementGuide onOpenBooking={handleOpenBooking} />

        {/* Perguntas Frequentes (FAQ) */}
        <FAQSection onOpenBooking={handleOpenBooking} />

        {/* Seção 4: Contato & Agendamento Online Inteligente */}
        <ContactSection 
          preselectedService={selectedService} 
          preselectedModalidade={selectedModalidade} 
        />
      </main>

      {/* Rodapé Institucional com Diretrizes do CFP e CVV */}
      <Footer />

      {/* Modal Guiado de Agendamento Rápido */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        defaultService={selectedService}
        defaultModalidade={selectedModalidade}
      />

      {/* Botão Flutuante do WhatsApp com Pulso */}
      <FloatingWhatsApp />
    </div>
  );
}
