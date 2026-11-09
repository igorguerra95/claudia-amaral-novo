import React from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  Award, 
  ShieldCheck, 
  Heart, 
  BookOpen, 
  CheckCircle2, 
  Calendar,
  Globe,
  Sparkles
} from 'lucide-react';
import { DADOS_CLINICA, PILARES_ATENDIMENTO } from '../data/content';

interface AboutProps {
  onOpenBooking: () => void;
}

const iconPillarMap: Record<string, React.ElementType> = {
  ShieldCheck,
  CheckCircle2,
  Heart,
  Globe
};

export const AboutSection: React.FC<AboutProps> = ({ onOpenBooking }) => {
  return (
    <section id="sobre" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      
      {/* Detalhes de iluminação sutil de fundo */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-[#FDF2F8] rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#FCE7F3]/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bloco Superior: História & Fotografia Editorial */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20 sm:mb-28">
          
          {/* Coluna Visual (5 Colunas) */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Moldura elegante com sombra suave */}
              <div className="rounded-3xl overflow-hidden border border-[#FBCFE8] shadow-elevation-2 relative bg-[#FAF7F6]">
                <img
                  src="https://images.unsplash.com/photo-1594824813572-c5dfeb2f28d8?auto=format&fit=crop&w=1000&q=85"
                  alt="Claudia Amaral Ferreira em ambiente de acolhimento clínico"
                  className="w-full h-[520px] object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#231C19]/70 via-transparent to-transparent"></div>

                {/* Card Inferior com CRP e Título */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl glass-effect border border-white/50 shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F472B6] to-[#BE185D] flex items-center justify-center text-white">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-serif text-lg font-bold text-[#231C19]">
                        Claudia Amaral Ferreira
                      </p>
                      <p className="text-xs text-[#BE185D] font-medium">
                        {DADOS_CLINICA.registroCRP} • Especialista em Neuropsicologia
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Selo Flutuante de Humanização */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white p-4 rounded-2xl border border-[#FBCFE8] shadow-elevation-2 max-w-[220px] hidden sm:block">
                <div className="flex items-center gap-2 mb-1 text-[#BE185D]">
                  <Heart className="w-4 h-4 fill-[#F472B6]/40" />
                  <span className="text-xs font-bold">Cuidado Centrado em Você</span>
                </div>
                <p className="text-[11px] text-[#5A504A] leading-tight">
                  Toda intervenção é planejada respeitando a sua individualidade.
                </p>
              </div>

            </div>
          </motion.div>

          {/* Coluna Textual: Trajetória, Abordagem e Compromisso (7 Colunas) */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#FDF2F8] text-[#BE185D] border border-[#FBCFE8] mb-4 w-fit">
              <Sparkles className="w-3.5 h-3.5 text-[#F472B6]" />
              Sobre a Profissional
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#231C19] tracking-tight leading-[1.15] mb-6">
              Acolher a história singular de cada paciente com empatia e precisão
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#5A504A] leading-relaxed mb-8">
              <p>
                Acredito profundamente que a psicoterapia não se resume a técnicas frias ou diagnósticos estanques. O processo terapêutico é, antes de tudo, um <strong className="text-[#231C19] font-semibold">encontro humano genuíno</strong> — onde suas dores, medos e aspirações encontram um solo fértil de aceitação incondicional e confidencialidade.
              </p>
              <p>
                Com mais de uma década de prática clínica, alio a sensibilidade acolhedora da psicoterapia à profundidade investigativa da <strong className="text-[#231C19] font-semibold">neuropsicologia contemporânea</strong>. Meu compromisso é ajudá-lo(a) a desatar nós emocionais, compreender o funcionamento único do seu cérebro e construir ferramentas duradouras para viver com mais paz, clareza e autonomia.
              </p>
            </div>

            {/* Formação e Credenciais */}
            <div className="bg-[#FAF7F6] p-6 rounded-2xl border border-[#FBCFE8]/60 mb-8 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#BE185D] flex items-center gap-2">
                <Award className="w-4 h-4" />
                Formação Acadêmica & Títulos de Excelência
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#231C19]">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#BE185D] mt-2 shrink-0"></span>
                  <span><strong>Graduação em Psicologia</strong> — Pontifícia Universidade Católica de São Paulo (PUC-SP).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#BE185D] mt-2 shrink-0"></span>
                  <span><strong>Especialização em Neuropsicologia Clínica</strong> — Instituto de Psiquiatria do Hospital das Clínicas da FMUSP (IPq-HCFMUSP).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#BE185D] mt-2 shrink-0"></span>
                  <span><strong>Formação em Terapia Cognitivo-Comportamental (TCC)</strong> e <strong>Terapia do Esquema</strong>.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#BE185D] mt-2 shrink-0"></span>
                  <span>Membro habilitado pelo Cadastro Nacional de Psicólogos que Prestam Serviços Online (e-Psi / CFP).</span>
                </li>
              </ul>
            </div>

            <div>
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-semibold text-white bg-gradient-to-r from-[#DB2777] to-[#BE185D] shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <Calendar className="w-5 h-5" />
                <span>Entrar em contato</span>
              </button>
            </div>

          </motion.div>
        </div>

        {/* Bloco Inferior: Os 4 Pilares Inegociáveis do Atendimento */}
        <div className="pt-12 border-t border-gray-100">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#BE185D]">
              Código de Ética & Prática
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#231C19] mt-2">
              Pilares que fundamentam cada sessão
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILARES_ATENDIMENTO.map((pilar, idx) => {
              const Icon = iconPillarMap[pilar.icone || ''] || ShieldCheck;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-[#FAF7F6] p-6 rounded-2xl border border-[#FBCFE8]/60 hover:border-[#BE185D] transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#FBCFE8] flex items-center justify-center text-[#BE185D] mb-4 shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-semibold text-base text-[#231C19] mb-1">
                      {pilar.autor}
                    </h4>
                    <p className="text-[11px] font-medium text-[#BE185D] mb-3">
                      {pilar.detalhe}
                    </p>
                    <p className="text-xs text-[#5A504A] leading-relaxed">
                      {pilar.texto}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
