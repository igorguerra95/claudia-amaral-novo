import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Calendar, 
  CheckCircle2, 
  MessageCircle, 
  ShieldCheck, 
  Sparkles,
  Heart
} from 'lucide-react';
import { DADOS_CLINICA, AREAS_ATUACAO } from '../data/content';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
  defaultModalidade?: 'online' | 'presencial';
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  defaultService = '',
  defaultModalidade = 'online'
}) => {
  const [modalidade, setModalidade] = useState<'online' | 'presencial'>(defaultModalidade);
  const [area, setArea] = useState(defaultService || 'Ansiedade, Pânico & Burnout');
  const [nome, setNome] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [periodo, setPeriodo] = useState('Qualquer horário');
  const [mensagem, setMensagem] = useState('');
  const [sucesso, setSucesso] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome || !whatsapp) return;
    setSucesso(true);
  };

  const handleOpenWhatsApp = () => {
    const texto = encodeURIComponent(
      `Olá, Claudia! Meu nome é ${nome || 'Paciente'}.\n` +
      `Gostaria de agendar minha consulta.\n` +
      `• Modalidade: ${modalidade === 'online' ? 'Online' : 'Presencial'}\n` +
      `• Especialidade: ${area}\n` +
      `• Preferência de Horário: ${periodo}`
    );
    window.open(`https://wa.me/${DADOS_CLINICA.whatsappNumero}?text=${texto}`, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 16 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="bg-white rounded-3xl max-w-xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 border border-[#FBCFE8] shadow-elevation-2 relative"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#877C75] hover:bg-gray-100 transition-colors cursor-pointer"
          aria-label="Fechar janela"
        >
          <X className="w-5 h-5" />
        </button>

        {sucesso ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] flex items-center justify-center text-[#10B981] mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#231C19] mb-2">
              Pedido de contato registrado!
            </h3>
            <p className="text-sm text-[#5A504A] leading-relaxed mb-6">
              Obrigada, <strong>{nome}</strong>. Entrarei em contato pelo seu WhatsApp ({whatsapp}) para confirmarmos o melhor dia e horário para sua primeira sessão.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={handleOpenWhatsApp}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20BA5C] shadow-sm transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Conversar agora no WhatsApp</span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className="text-xs font-semibold text-[#877C75] hover:text-[#BE185D] px-4 py-2 cursor-pointer"
              >
                Fechar janela
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="border-b border-gray-100 pb-3">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-[#BE185D]"></span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#BE185D]">
                  {DADOS_CLINICA.registroCRP} • Atendimento Confidencial
                </span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#231C19]">
                Agendar Consulta com Claudia Amaral
              </h3>
              <p className="text-xs text-[#5A504A]">
                Preencha os dados abaixo para receber os horários disponíveis.
              </p>
            </div>

            {/* Modalidade */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#231C19] mb-1.5">
                Formato de Atendimento:
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setModalidade('online')}
                  className={`py-2.5 px-3 rounded-xl text-xs font-semibold border cursor-pointer transition-all ${
                    modalidade === 'online'
                      ? 'bg-[#FDF2F8] border-[#BE185D] text-[#BE185D]'
                      : 'bg-[#FAF7F6] border-gray-200 text-[#5A504A]'
                  }`}
                >
                  Online (Brasil e Exterior)
                </button>
                <button
                  type="button"
                  onClick={() => setModalidade('presencial')}
                  className={`py-2.5 px-3 rounded-xl text-xs font-semibold border cursor-pointer transition-all ${
                    modalidade === 'presencial'
                      ? 'bg-[#FDF2F8] border-[#BE185D] text-[#BE185D]'
                      : 'bg-[#FAF7F6] border-gray-200 text-[#5A504A]'
                  }`}
                >
                  Presencial em Consultório
                </button>
              </div>
            </div>

            {/* Nome e WhatsApp */}
            <div>
              <label className="block text-xs font-medium text-[#231C19] mb-1">
                Seu Nome Completo <span className="text-[#BE185D]">*</span>
              </label>
              <input
                type="text"
                required
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Como prefere ser chamado(a)?"
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-[#FAF7F6] text-xs text-[#231C19] focus:bg-white focus:outline-none focus:border-[#BE185D]"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#231C19] mb-1">
                WhatsApp com DDD <span className="text-[#BE185D]">*</span>
              </label>
              <input
                type="tel"
                required
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                placeholder="(11) 99999-9999"
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-[#FAF7F6] text-xs text-[#231C19] focus:bg-white focus:outline-none focus:border-[#BE185D]"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#231C19] mb-1">
                Área de Interesse Principal
              </label>
              <select
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-[#FAF7F6] text-xs text-[#231C19] focus:bg-white focus:outline-none focus:border-[#BE185D]"
              >
                {AREAS_ATUACAO.map((a) => (
                  <option key={a.id} value={a.titulo}>
                    {a.titulo}
                  </option>
                ))}
                <option value="Outro assunto">Outro assunto ou primeira orientação</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#231C19] mb-1">
                Melhor período para as sessões:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['Manhã', 'Tarde', 'Noite'].map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setPeriodo(p)}
                    className={`py-2 px-2 rounded-lg text-xs font-medium border cursor-pointer ${
                      periodo === p
                        ? 'bg-[#BE185D] text-white border-[#BE185D]'
                        : 'bg-[#FAF7F6] text-[#5A504A] border-gray-200'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#DB2777] to-[#BE185D] shadow-md hover:shadow-lg transition-all cursor-pointer mt-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Entrar em contato</span>
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#877C75] pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
              <span>Sigilo absoluto conforme Resolução CFP nº 010/05</span>
            </div>
          </form>
        )}
      </motion.div>
    </div>
  );
};
