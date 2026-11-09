import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X } from 'lucide-react';
import { DADOS_CLINICA } from '../data/content';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleClick = () => {
    const texto = encodeURIComponent(DADOS_CLINICA.whatsappTextoPadrao);
    window.open(`https://wa.me/${DADOS_CLINICA.whatsappNumero}?text=${texto}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Tooltip Convidativo */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="mb-3 max-w-xs bg-white p-3.5 rounded-2xl border border-[#FBCFE8] shadow-elevation-2 relative text-left hidden sm:block"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 p-1 cursor-pointer"
              aria-label="Fechar dica"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
              <p className="text-xs font-bold text-[#231C19]">Atendimento Online & Presencial</p>
            </div>
            <p className="text-xs text-[#5A504A] leading-tight">
              Olá! Gostaria de tirar dúvidas ou verificar os próximos horários disponíveis?
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botão Flutuante */}
      <div className="relative group">
        {/* Pulso discreto */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping duration-1000"></span>

        <button
          onClick={handleClick}
          aria-label="Abrir conversa no WhatsApp com Claudia Amaral Ferreira"
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5C] text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          <MessageCircle className="w-7 h-7 fill-white stroke-[#25D366]" />
        </button>
      </div>

    </div>
  );
};
