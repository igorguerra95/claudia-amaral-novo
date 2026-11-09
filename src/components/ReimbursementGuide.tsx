import React from 'react';
import { motion } from 'motion/react';
import { 
  FileText, 
  CheckCircle2, 
  HelpCircle, 
  Calendar, 
  ArrowRight,
  ShieldAlert,
  Sparkles
} from 'lucide-react';

interface ReimbursementProps {
  onOpenBooking: () => void;
}

export const ReimbursementGuide: React.FC<ReimbursementProps> = ({ onOpenBooking }) => {
  const passos = [
    {
      num: '01',
      titulo: 'Agende e realize a sessão',
      descricao: 'O atendimento ocorre de forma particular e individualizada, sem a limitação de tempo imposta pelas operadoras de convênio.'
    },
    {
      num: '02',
      titulo: 'Emissão da Nota Fiscal & Relatório',
      descricao: 'Ao final do ciclo ou da consulta, emitimos Nota Fiscal Eletrônica detalhada com CRP ativo, dados cadastrais e recibo de quitação.'
    },
    {
      num: '03',
      titulo: 'Envio pelo aplicativo do convênio',
      descricao: 'Você anexa a nota fiscal e o pedido médico/encaminhamento no aplicativo do seu plano de saúde em menos de 3 minutos.'
    },
    {
      num: '04',
      titulo: 'Reembolso direto na sua conta',
      descricao: 'Conforme normas da ANS, a operadora realiza o depósito do valor de reembolso diretamente na sua conta bancária cadastrada.'
    }
  ];

  const conveniosFrequentes = [
    'Bradesco Saúde',
    'SulAmérica',
    'Amil',
    'Care Plus',
    'Porto Seguro Saúde',
    'Allianz',
    'Omint',
    'Unimed',
    'Seguros Unimed',
    'Golden Cross'
  ];

  return (
    <section id="reembolso" className="py-20 sm:py-24 bg-[#FAF7F6] border-t border-[#FBCFE8]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Informativo Superior */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#FBCFE8] shadow-elevation-1 relative overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#FDF2F8] text-[#BE185D] border border-[#FBCFE8] mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#F472B6]" />
                Livre Escolha de Profissional (Direito ANS)
              </span>

              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#231C19] mb-4">
                Você tem convênio de saúde? Utilize o sistema de reembolso
              </h2>

              <p className="text-base text-[#5A504A] leading-relaxed mb-6">
                Para garantir um atendimento com tempo suficiente, profundidade e sem as restrições burocráticas de planos convencionais, realizamos atendimentos na modalidade particular e fornecemos toda a documentação legal necessária para que você solicite o <strong className="text-[#231C19]">reembolso de 50% a 100%</strong> dos valores pagos junto à sua operadora.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {conveniosFrequentes.map((conv, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium text-[#5A504A] bg-[#FAF7F6] px-3 py-1.5 rounded-full border border-gray-200"
                  >
                    {conv}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#DB2777] to-[#BE185D] shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Entrar em contato</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#FAF7F6] rounded-2xl p-6 sm:p-7 border border-[#FBCFE8]/60">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#FBCFE8] flex items-center justify-center text-[#BE185D]">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-[#231C19]">
                      Documentação Completa Fornecida
                    </h3>
                    <p className="text-xs text-[#877C75]">
                      Pronta para anexar no aplicativo da operadora
                    </p>
                  </div>
                </div>

                <ul className="space-y-3 text-xs text-[#5A504A]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span><strong>Nota Fiscal Eletrônica de Serviços (NFS-e)</strong> emitida com discriminação dos atendimentos.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span><strong>Recibo com identificação do profissional</strong> e número do registro CRP ativo.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span><strong>Relatório de encaminhamento</strong> ou justificativa técnica quando exigido pelo seu plano de saúde.</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        {/* Passo a Passo Visual do Reembolso */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#BE185D]">
              Passo a Passo Simples
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#231C19] mt-1">
              Como solicitar o reembolso em 4 etapas
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {passos.map((passo, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-[#FBCFE8]/60 shadow-xs relative"
              >
                <span className="text-3xl font-serif font-bold text-[#F472B6]/40 mb-2 block">
                  {passo.num}
                </span>
                <h4 className="text-base font-semibold text-[#231C19] mb-2">
                  {passo.titulo}
                </h4>
                <p className="text-xs text-[#5A504A] leading-relaxed">
                  {passo.descricao}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
