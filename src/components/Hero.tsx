import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Calendar, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Brain, 
  Heart, 
  Award,
  Video,
  CheckCircle2
} from 'lucide-react';
import { DADOS_CLINICA, ESTATISTICAS } from '../data/content';

interface HeroProps {
  onOpenBooking: () => void;
}

// Contador animado para estatísticas com easing suave
const AnimatedCounter: React.FC<{ target: number; suffix?: string }> = ({ target, suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 2000;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * target));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    window.requestAnimationFrame(step);
  }, [target]);

  return (
    <span className="font-serif font-bold text-3xl sm:text-4xl text-[#BE185D]">
      {count.toLocaleString('pt-BR')}{suffix}
    </span>
  );
};

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut' as const
      }
    }
  };

  const scrollToAreas = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector('#areas');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden bg-ambient-glow">
      {/* Elementos decorativos de profundidade orgânica */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-[#F472B6]/15 via-[#FCE7F3]/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#FDF2F8] rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Coluna de Texto e Call to Action (7 Colunas) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Pill de Destaque Institucional */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#FDF2F8] text-[#BE185D] border border-[#FBCFE8] shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#F472B6]" />
                Atendimento Clínico Humanizado & Avaliação Neuropsicológica
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-[#F8FAFC] text-[#5A504A] border border-[#E2E8F0]">
                <Video className="w-3.5 h-3.5 text-[#10B981]" />
                Online para todo o Brasil & Exterior
              </span>
            </motion.div>

            {/* Headline Dramático em Cormorant Garamond */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-serif font-bold text-[#231C19] leading-[1.08] tracking-tight mb-6"
            >
              Acolher o que você sente para{' '}
              <span className="relative inline-block text-[#BE185D]">
                transformar
                <span className="absolute bottom-1.5 left-0 w-full h-[6px] bg-[#F472B6]/30 -z-1 rounded-full"></span>
              </span>{' '}
              o modo como você vive.
            </motion.h1>

            {/* Subheadline Clara e Acolhedora */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-[#5A504A] leading-relaxed mb-8 max-w-2xl font-normal"
            >
              Cuidado com a sua saúde mental através da sensibilidade de uma escuta livre de julgamentos aliada à alta precisão científica da neuropsicologia e da terapia baseada em evidências.
            </motion.p>

            {/* CTAs Principais */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10"
            >
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-semibold text-white bg-gradient-to-r from-[#DB2777] via-[#BE185D] to-[#9D174D] shadow-lg shadow-[#F472B6]/25 hover:shadow-xl hover:shadow-[#F472B6]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer group"
              >
                <Calendar className="w-5 h-5 text-white/90 group-hover:scale-110 transition-transform" />
                <span>Entrar em contato</span>
                <ArrowRight className="w-4 h-4 text-white/80 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#areas"
                onClick={scrollToAreas}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base font-medium text-[#231C19] bg-white/90 hover:bg-[#FDF2F8] border border-[#FBCFE8] shadow-sm hover:shadow transition-all cursor-pointer"
              >
                <span>Conhecer Áreas Clínicas</span>
              </a>
            </motion.div>

            {/* Badges de Credibilidade e Segurança Ética */}
            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-[#FBCFE8]/40 grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              <div className="flex items-center gap-2.5 text-xs text-[#5A504A]">
                <ShieldCheck className="w-4 h-4 text-[#10B981] shrink-0" />
                <span>Sigilo profissional irrestrito pelo CFP</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#5A504A]">
                <Brain className="w-4 h-4 text-[#F472B6] shrink-0" />
                <span>Prática baseada em neurociências</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#5A504A]">
                <CheckCircle2 className="w-4 h-4 text-[#BE185D] shrink-0" />
                <span>Recibo para reembolso de convênio</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Coluna Visual e Retrato Editorial (5 Colunas) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Moldura de Fundo com Borda Quartzo */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#F472B6]/30 to-[#FCE7F3]/40 rounded-3xl blur-xl opacity-70 transform -rotate-1"></div>

              {/* Card da Imagem Principal */}
              <div className="relative rounded-2xl overflow-hidden border border-[#FBCFE8] shadow-elevation-2 bg-white">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=85"
                  alt="Claudia Amaral Ferreira - Psicóloga e Neuropsicóloga no consultório"
                  className="w-full h-[460px] sm:h-[520px] object-cover object-top filter contrast-[1.02] brightness-[0.98]"
                  loading="eager"
                />

                {/* Gradiente sutil na base da imagem */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#231C19]/70 via-transparent to-transparent"></div>

                {/* Card Flutuante Inferior Dentro da Imagem */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-effect border border-white/40 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-serif text-lg font-bold text-[#231C19] leading-tight">
                        {DADOS_CLINICA.nome}
                      </p>
                      <p className="text-xs text-[#BE185D] font-medium">
                        {DADOS_CLINICA.tituloProfissional} • {DADOS_CLINICA.registroCRP}
                      </p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-[#FDF2F8] border border-[#FBCFE8] flex items-center justify-center text-[#BE185D]">
                      <Award className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Flutuante Superior de Avaliação Neuropsicológica */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="absolute -top-5 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-[#FBCFE8] shadow-elevation-2 flex items-center gap-3 hidden sm:flex"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FDF2F8] to-[#FCE7F3] flex items-center justify-center text-[#BE185D]">
                  <Brain className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-[#231C19]">Mapeamento Cognitivo</p>
                  <p className="text-[11px] text-[#5A504A]">TDAH, TEA & Funções Executivas</p>
                </div>
              </motion.div>

              {/* Card Flutuante Lateral de Acolhimento */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="absolute -bottom-5 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-[#FBCFE8] shadow-elevation-2 flex items-center gap-3 hidden sm:flex"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FDF2F8] to-[#FCE7F3] flex items-center justify-center text-[#BE185D]">
                  <Heart className="w-5 h-5 fill-[#F472B6]/30" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-[#231C19]">Escuta Sem Julgamentos</p>
                  <p className="text-[11px] text-[#5A504A]">Espaço 100% seguro e acolhedor</p>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>

        {/* Barra de Métricas com Animação de Números */}
        <div className="mt-16 sm:mt-24 pt-10 border-t border-[#FBCFE8]/40">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {ESTATISTICAS.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white/80 p-5 rounded-2xl border border-[#FBCFE8]/60 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-baseline gap-1 mb-1">
                  <AnimatedCounter target={stat.valor} suffix={stat.sufixo} />
                </div>
                <p className="text-sm font-semibold text-[#231C19] leading-snug mb-1">
                  {stat.label}
                </p>
                <p className="text-xs text-[#877C75]">
                  {stat.descricao}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
