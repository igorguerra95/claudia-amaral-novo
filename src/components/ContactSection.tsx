import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Send, 
  MessageCircle, 
  Mail, 
  ShieldCheck, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  Calendar,
  Lock,
  PhoneCall
} from 'lucide-react';
import { DADOS_CLINICA, AREAS_ATUACAO } from '../data/content';

interface ContactSectionProps {
  preselectedService?: string;
  preselectedModalidade?: 'online' | 'presencial';
}

export const ContactSection: React.FC<ContactSectionProps> = ({ 
  preselectedService = '', 
  preselectedModalidade = 'online' 
}) => {
  const [nome, setNome] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [modalidade, setModalidade] = useState<'online' | 'presencial'>(preselectedModalidade);
  const [areaInteresse, setAreaInteresse] = useState(preselectedService || 'Ansiedade, Pânico & Burnout');
  const [periodo, setPeriodo] = useState('Qualquer horário');
  const [mensagem, setMensagem] = useState('');
  const [enviado, setEnviado] = useState(false);
  const [carregando, setCarregando] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome || !whatsapp) return;

    setCarregando(true);
    setTimeout(() => {
      setCarregando(false);
      setEnviado(true);
    }, 600);
  };

  const handleEnviarDiretoWhatsApp = () => {
    const texto = encodeURIComponent(
      `Olá, Claudia! Meu nome é ${nome || 'Paciente'}.\n` +
      `Gostaria de agendar uma consulta.\n` +
      `• Modalidade: ${modalidade === 'online' ? 'Online' : 'Presencial'}\n` +
      `• Área de Interesse: ${areaInteresse}\n` +
      `• Preferência de Horário: ${periodo}\n` +
      (mensagem ? `• Mensagem: ${mensagem}` : '')
    );
    window.open(`https://wa.me/${DADOS_CLINICA.whatsappNumero}?text=${texto}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 sm:py-28 bg-[#FAF7F6] relative border-t border-[#FBCFE8]/40">
      
      {/* Luz ambiente de fundo */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#FDF2F8] rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Coluna Informativa de Acolhimento (5 Colunas) */}
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white text-[#BE185D] border border-[#FBCFE8] shadow-2xs mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#F472B6]" />
              Agendamento & Primeiro Contato
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#231C19] leading-tight mb-6">
              Dê o primeiro passo em direção ao seu cuidado emocional
            </h2>

            <p className="text-base sm:text-lg text-[#5A504A] leading-relaxed mb-8">
              Sua privacidade é prioridade absoluta. Preencha os campos ao lado com calma ou, se preferir, envie uma mensagem direta no WhatsApp. Retorno pessoalmente com discrição e carinho em poucas horas.
            </p>

            {/* Cards de Segurança & Informações de Contato */}
            <div className="space-y-4 mb-8">
              <div className="bg-white p-5 rounded-2xl border border-[#FBCFE8]/60 shadow-2xs flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#FDF2F8] border border-[#FBCFE8] flex items-center justify-center text-[#BE185D] shrink-0">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-[#231C19]">
                    Sigilo Profissional Absoluto
                  </h3>
                  <p className="text-xs text-[#5A504A] mt-0.5 leading-relaxed">
                    Todas as informações compartilhadas são estritamente confidenciais e protegidas pelas diretrizes do Conselho Federal de Psicologia (CFP).
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#FBCFE8]/60 shadow-2xs flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#FDF2F8] border border-[#FBCFE8] flex items-center justify-center text-[#BE185D] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-[#231C19]">
                    Retorno Ágil & Personalizado
                  </h3>
                  <p className="text-xs text-[#5A504A] mt-0.5 leading-relaxed">
                    Respostas normalmente em até 2 horas úteis, alinhando opções de dias e horários compatíveis com a sua rotina.
                  </p>
                </div>
              </div>
            </div>

            {/* Canal WhatsApp Imediato */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#FDF2F8] to-[#FFF5F8] border border-[#FBCFE8]">
              <div className="flex items-center gap-3 mb-2">
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#BE185D]">
                  Prefere falar agora mesmo?
                </span>
              </div>
              <p className="text-xs text-[#5A504A] mb-3 leading-relaxed">
                Você pode enviar uma mensagem diretamente no meu WhatsApp profissional para tirar dúvidas imediatas.
              </p>
              <button
                type="button"
                onClick={handleEnviarDiretoWhatsApp}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20BA5C] shadow-sm transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Conversar no WhatsApp Profissional</span>
              </button>
            </div>
          </div>

          {/* Coluna do Formulário Inteligente de Agendamento (7 Colunas) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#FBCFE8] shadow-elevation-2 relative">
              
              <AnimatePresence mode="wait">
                {enviado ? (
                  <motion.div
                    key="sucesso"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-12 px-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] flex items-center justify-center text-[#10B981] mx-auto mb-5 shadow-xs">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#231C19] mb-3">
                      Solicitação enviada com sucesso, {nome.split(' ')[0]}!
                    </h3>

                    <p className="text-sm sm:text-base text-[#5A504A] leading-relaxed max-w-md mx-auto mb-8">
                      Recebi suas informações com total confidencialidade. Entrarei em contato pelo seu WhatsApp ({whatsapp}) para apresentar as opções de horários disponíveis.
                    </p>

                    <div className="bg-[#FAF7F6] p-4 rounded-2xl border border-[#FBCFE8]/60 max-w-md mx-auto mb-6 text-left text-xs space-y-1.5">
                      <p><strong>Modalidade escolhida:</strong> {modalidade === 'online' ? 'Atendimento Online' : 'Atendimento Presencial'}</p>
                      <p><strong>Área de interesse:</strong> {areaInteresse}</p>
                      <p><strong>Preferência de horário:</strong> {periodo}</p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                      <button
                        type="button"
                        onClick={handleEnviarDiretoWhatsApp}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20BA5C] shadow-sm transition-all cursor-pointer"
                      >
                        <MessageCircle className="w-4 h-4 fill-white" />
                        <span>Abrir confirmação no WhatsApp</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setEnviado(false);
                          setNome('');
                          setWhatsapp('');
                          setEmail('');
                          setMensagem('');
                        }}
                        className="text-xs font-semibold text-[#877C75] hover:text-[#BE185D] px-4 py-2 cursor-pointer"
                      >
                        Enviar outra mensagem
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="border-b border-gray-100 pb-4 mb-6">
                      <h3 className="text-2xl font-serif font-bold text-[#231C19]">
                        Solicitar Agendamento de Consulta
                      </h3>
                      <p className="text-xs sm:text-sm text-[#5A504A] mt-1">
                        Preencha os campos abaixo. Retorno pessoalmente com as opções de data e horário.
                      </p>
                    </div>

                    {/* Seleção de Modalidade */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#231C19] mb-2">
                        Como você prefere ser atendido(a)?
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => setModalidade('online')}
                          className={`p-3.5 rounded-xl border text-left text-xs font-semibold cursor-pointer transition-all flex items-center justify-between ${
                            modalidade === 'online'
                              ? 'bg-[#FDF2F8] border-[#BE185D] ring-2 ring-[#BE185D]/20 text-[#BE185D]'
                              : 'bg-[#FAF7F6] border-gray-200 text-[#5A504A] hover:bg-gray-50'
                          }`}
                        >
                          <div>
                            <p className="font-bold">Online por Videoconferência</p>
                            <p className="text-[11px] font-normal text-[#877C75]">Para todo o Brasil e exterior</p>
                          </div>
                          {modalidade === 'online' && <CheckCircle2 className="w-4 h-4 text-[#BE185D]" />}
                        </button>

                        <button
                          type="button"
                          onClick={() => setModalidade('presencial')}
                          className={`p-3.5 rounded-xl border text-left text-xs font-semibold cursor-pointer transition-all flex items-center justify-between ${
                            modalidade === 'presencial'
                              ? 'bg-[#FDF2F8] border-[#BE185D] ring-2 ring-[#BE185D]/20 text-[#BE185D]'
                              : 'bg-[#FAF7F6] border-gray-200 text-[#5A504A] hover:bg-gray-50'
                          }`}
                        >
                          <div>
                            <p className="font-bold">Presencial em Consultório</p>
                            <p className="text-[11px] font-normal text-[#877C75]">Ambiente exclusivo e seguro</p>
                          </div>
                          {modalidade === 'presencial' && <CheckCircle2 className="w-4 h-4 text-[#BE185D]" />}
                        </button>
                      </div>
                    </div>

                    {/* Nome & WhatsApp */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="nome" className="block text-xs font-medium text-[#231C19] mb-1.5">
                          Nome Completo <span className="text-[#BE185D]">*</span>
                        </label>
                        <input
                          id="nome"
                          type="text"
                          required
                          value={nome}
                          onChange={(e) => setNome(e.target.value)}
                          placeholder="Como prefere ser chamado(a)?"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#FAF7F6] text-sm text-[#231C19] focus:bg-white focus:outline-none focus:border-[#BE185D] focus:ring-2 focus:ring-[#BE185D]/20 transition-all"
                        />
                      </div>

                      <div>
                        <label htmlFor="whatsapp" className="block text-xs font-medium text-[#231C19] mb-1.5">
                          WhatsApp / Telefone com DDD <span className="text-[#BE185D]">*</span>
                        </label>
                        <input
                          id="whatsapp"
                          type="tel"
                          required
                          value={whatsapp}
                          onChange={(e) => setWhatsapp(e.target.value)}
                          placeholder="(11) 99999-9999"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#FAF7F6] text-sm text-[#231C19] focus:bg-white focus:outline-none focus:border-[#BE185D] focus:ring-2 focus:ring-[#BE185D]/20 transition-all"
                        />
                      </div>
                    </div>

                    {/* E-mail & Área de Interesse */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-xs font-medium text-[#231C19] mb-1.5">
                          E-mail (para confirmação)
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="seuemail@exemplo.com.br"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#FAF7F6] text-sm text-[#231C19] focus:bg-white focus:outline-none focus:border-[#BE185D] focus:ring-2 focus:ring-[#BE185D]/20 transition-all"
                        />
                      </div>

                      <div>
                        <label htmlFor="area" className="block text-xs font-medium text-[#231C19] mb-1.5">
                          Principal Área de Interesse
                        </label>
                        <select
                          id="area"
                          value={areaInteresse}
                          onChange={(e) => setAreaInteresse(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#FAF7F6] text-sm text-[#231C19] focus:bg-white focus:outline-none focus:border-[#BE185D] focus:ring-2 focus:ring-[#BE185D]/20 transition-all"
                        >
                          {AREAS_ATUACAO.map((area) => (
                            <option key={area.id} value={area.titulo}>
                              {area.titulo}
                            </option>
                          ))}
                          <option value="Outro assunto ou dúvida clínica">Outro assunto ou dúvida clínica</option>
                        </select>
                      </div>
                    </div>

                    {/* Preferência de Turno */}
                    <div>
                      <label className="block text-xs font-medium text-[#231C19] mb-1.5">
                        Melhor turno para suas sessões ou contato:
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {['Manhã', 'Tarde', 'Noite', 'Qualquer horário'].map((p) => (
                          <button
                            key={p}
                            type="button"
                            onClick={() => setPeriodo(p)}
                            className={`py-2 px-3 rounded-xl text-xs font-medium border cursor-pointer transition-colors ${
                              periodo === p
                                ? 'bg-[#BE185D] text-white border-[#BE185D]'
                                : 'bg-[#FAF7F6] text-[#5A504A] border-gray-200 hover:bg-gray-100'
                            }`}
                          >
                            {p}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Mensagem Opcional */}
                    <div>
                      <label htmlFor="mensagem" className="block text-xs font-medium text-[#231C19] mb-1.5">
                        Mensagem ou contexto adicional (opcional e confidencial)
                      </label>
                      <textarea
                        id="mensagem"
                        rows={3}
                        value={mensagem}
                        onChange={(e) => setMensagem(e.target.value)}
                        placeholder="Conte brevemente o que você busca ou tire qualquer dúvida inicial..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#FAF7F6] text-sm text-[#231C19] focus:bg-white focus:outline-none focus:border-[#BE185D] focus:ring-2 focus:ring-[#BE185D]/20 transition-all resize-none"
                      />
                    </div>

                    {/* Botão de Envio com Microinteração */}
                    <button
                      type="submit"
                      disabled={carregando}
                      className="w-full inline-flex items-center justify-center gap-2 py-4 px-8 rounded-full text-base font-semibold text-white bg-gradient-to-r from-[#DB2777] via-[#BE185D] to-[#9D174D] shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer disabled:opacity-70"
                    >
                      {carregando ? (
                        <span>Enviando com segurança...</span>
                      ) : (
                        <>
                          <Calendar className="w-5 h-5" />
                          <span>Entrar em contato</span>
                        </>
                      )}
                    </button>

                    <div className="flex items-center justify-center gap-2 text-xs text-[#877C75] pt-1">
                      <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                      <span>Seus dados nunca serão compartilhados com terceiros.</span>
                    </div>
                  </form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
