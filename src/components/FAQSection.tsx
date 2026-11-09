import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, MessageCircle, Calendar } from 'lucide-react';
import { PERGUNTAS_FREQUENTES, DADOS_CLINICA } from '../data/content';

interface FAQProps {
  onOpenBooking: () => void;
}

export const FAQSection: React.FC<FAQProps> = ({ onOpenBooking }) => {
  const [abertoId, setAbertoId] = useState<string | null>(PERGUNTAS_FREQUENTES[0].id);

  const toggleAccordion = (id: string) => {
    setAbertoId(abertoId === id ? null : id);
  };

  const abrirWhatsApp = () => {
    const texto = encodeURIComponent('Olá, Claudia! Li as dúvidas frequentes e gostaria de esclarecer uma questão sobre meu atendimento.');
    window.open(`https://wa.me/${DADOS_CLINICA.whatsappNumero}?text=${texto}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#FDF2F8] text-[#BE185D] border border-[#FBCFE8] mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#F472B6]" />
            Transparência & Acolhimento
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#231C19] mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-base text-[#5A504A]">
            Tire suas dúvidas sobre o processo terapêutico, horários, sigilo ético e avaliação neuropsicológica.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4 mb-14">
          {PERGUNTAS_FREQUENTES.map((faq, idx) => {
            const isAberto = abertoId === faq.id;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isAberto
                    ? 'bg-[#FDF2F8]/40 border-[#BE185D] shadow-xs'
                    : 'bg-[#FAF7F6]/60 border-gray-200 hover:border-[#F472B6]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isAberto}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-serif font-bold text-lg sm:text-xl text-[#231C19] leading-snug">
                    {faq.pergunta}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isAberto ? 'rotate-180 bg-[#BE185D] text-white' : 'bg-white text-[#877C75] border border-gray-200'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isAberto && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#5A504A] leading-relaxed border-t border-[#FBCFE8]/30">
                        {faq.resposta}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Card de Atendimento Direto ao Final do FAQ */}
        <div className="bg-[#FAF7F6] p-6 sm:p-8 rounded-3xl border border-[#FBCFE8] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h3 className="font-serif font-bold text-xl text-[#231C19] mb-1">
              Ainda tem alguma dúvida ou situação específica?
            </h3>
            <p className="text-xs sm:text-sm text-[#5A504A]">
              Estou à disposição para responder com calma e discrição.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={abrirWhatsApp}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-semibold text-[#231C19] bg-white border border-[#FBCFE8] hover:bg-[#FDF2F8] shadow-2xs transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Chamar no WhatsApp</span>
            </button>
            <button
              type="button"
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#DB2777] to-[#BE185D] shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Entrar em contato</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
