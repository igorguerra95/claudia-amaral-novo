import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  ArrowRight, 
  RotateCcw, 
  Brain, 
  Heart, 
  Users, 
  Activity, 
  CheckCircle2,
  Calendar,
  MessageCircle
} from 'lucide-react';

interface AssessmentProps {
  onSelectRecommendation: (area: string, modalidade: 'online' | 'presencial') => void;
}

export const InteractiveAssessment: React.FC<AssessmentProps> = ({ onSelectRecommendation }) => {
  const [etapa, setEtapa] = useState<number>(1);
  const [sintomaSelecionado, setSintomaSelecionado] = useState<string>('');
  const [duracaoSelecionada, setDuracaoSelecionada] = useState<string>('');
  const [modalidade, setModalidade] = useState<'online' | 'presencial'>('online');

  const opcoesSintomas = [
    {
      id: 'ansiedade',
      titulo: 'Ansiedade & Sobrecarga',
      descricao: 'Preocupação excessiva, tensão física, noites mal dormidas ou pânico.',
      icone: Activity,
      recomendacao: 'Psicoterapia Cognitivo-Comportamental com foco em Ansiedade & Burnout',
      servicoId: 'ansiedade-burnout'
    },
    {
      id: 'foco-tdah',
      titulo: 'Atenção, Memória & Foco',
      descricao: 'Dificuldade crônica de concentração, procrastinação, suspeita de TDAH.',
      icone: Brain,
      recomendacao: 'Avaliação Neuropsicológica Clínica Completa',
      servicoId: 'avaliacao-neuropsicologica'
    },
    {
      id: 'desanimo',
      titulo: 'Desânimo & Apatia',
      descricao: 'Tristeza prolongada, vazio existencial, autocrítica e perda de prazer.',
      icone: Heart,
      recomendacao: 'Psicoterapia com Ativação Comportamental e Reestruturação',
      servicoId: 'depressao-autoestima'
    },
    {
      id: 'relacionamento',
      titulo: 'Casal & Conflitos Afetivos',
      descricao: 'Desconexão com o parceiro, falhas de diálogo ou crises na relação.',
      icone: Users,
      recomendacao: 'Terapia de Casal & Mediação de Vínculos Afetivos',
      servicoId: 'terapia-casal'
    }
  ];

  const duracoes = [
    'Recentemente (últimas semanas)',
    'Há alguns meses (3 a 6 meses)',
    'Padrão crônico (há mais de 1 ano)'
  ];

  const sintomaObj = opcoesSintomas.find((s) => s.id === sintomaSelecionado);

  const resetar = () => {
    setEtapa(1);
    setSintomaSelecionado('');
    setDuracaoSelecionada('');
  };

  const concluirEAgendar = () => {
    if (sintomaObj) {
      onSelectRecommendation(sintomaObj.recomendacao, modalidade);
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-[#FAF7F6] to-[#FDF2F8]/40 border-y border-[#FBCFE8]/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Cabeçalho do Guia */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white text-[#BE185D] border border-[#FBCFE8] shadow-sm mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#F472B6]" />
            Orientação Prévia Personalizada
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#231C19] mb-3">
            Não sabe exatamente por onde começar?
          </h2>
          <p className="text-base text-[#5A504A]">
            Em apenas 3 passos rápidos e anônimos, identifique qual abordagem terapêutica é a mais indicada para o momento da sua vida.
          </p>
        </div>

        {/* Card Interativo Principal */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#FBCFE8] shadow-elevation-2 relative overflow-hidden">
          
          {/* Barra de Progresso */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#BE185D]">
              Passo {etapa} de 3
            </span>
            <div className="flex gap-1.5">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`w-8 h-1.5 rounded-full transition-all duration-300 ${
                    step <= etapa ? 'bg-[#BE185D]' : 'bg-[#FCE7F3]'
                  }`}
                />
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {/* ETAPA 1: O que você mais tem sentido? */}
            {etapa === 1 && (
              <motion.div
                key="etapa-1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#231C19] mb-2">
                  Qual é o principal desafio que você gostaria de acolher hoje?
                </h3>
                <p className="text-sm text-[#5A504A] mb-6">
                  Selecione a situação que mais se aproxima do seu dia a dia atual:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {opcoesSintomas.map((item) => {
                    const Icon = item.icone;
                    const isSelected = sintomaSelecionado === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => {
                          setSintomaSelecionado(item.id);
                          setEtapa(2);
                        }}
                        className={`text-left p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between group ${
                          isSelected
                            ? 'bg-[#FDF2F8] border-[#BE185D] ring-2 ring-[#BE185D]/20 shadow-sm'
                            : 'bg-[#FAF7F6]/60 border-gray-200 hover:border-[#F472B6] hover:bg-[#FDF2F8]/30'
                        }`}
                      >
                        <div className="flex items-start gap-3.5 mb-3">
                          <div className="w-10 h-10 rounded-xl bg-white border border-[#FBCFE8] flex items-center justify-center text-[#BE185D] group-hover:scale-105 transition-transform shadow-xs">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-base text-[#231C19]">
                              {item.titulo}
                            </h4>
                          </div>
                        </div>
                        <p className="text-xs text-[#5A504A] leading-relaxed">
                          {item.descricao}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* ETAPA 2: Duração & Frequência */}
            {etapa === 2 && (
              <motion.div
                key="etapa-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  onClick={() => setEtapa(1)}
                  className="text-xs font-semibold text-[#877C75] hover:text-[#BE185D] mb-4 inline-flex items-center gap-1 cursor-pointer"
                >
                  ← Voltar para a pergunta anterior
                </button>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#231C19] mb-2">
                  Há quanto tempo você percebe essa sobrecarga ou incômodo?
                </h3>
                <p className="text-sm text-[#5A504A] mb-6">
                  Isso nos ajuda a calibrar a profundidade e o formato do acompanhamento:
                </p>

                <div className="flex flex-col gap-3">
                  {duracoes.map((duracao, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setDuracaoSelecionada(duracao);
                        setEtapa(3);
                      }}
                      className="text-left p-4 sm:p-5 rounded-2xl border border-gray-200 bg-[#FAF7F6]/60 hover:bg-[#FDF2F8] hover:border-[#BE185D] transition-all cursor-pointer flex items-center justify-between group"
                    >
                      <span className="text-sm sm:text-base font-medium text-[#231C19] group-hover:text-[#BE185D]">
                        {duracao}
                      </span>
                      <ArrowRight className="w-4 h-4 text-[#877C75] group-hover:text-[#BE185D] group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ETAPA 3: Formato e Resultado */}
            {etapa === 3 && sintomaObj && (
              <motion.div
                key="etapa-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-gradient-to-br from-[#FDF2F8] to-[#FFF5F8] p-6 sm:p-8 rounded-2xl border border-[#FBCFE8] mb-6">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#BE185D] uppercase tracking-wider mb-2">
                    <CheckCircle2 className="w-4 h-4" />
                    Orientação Terapêutica Sugerida
                  </div>
                  <h4 className="text-2xl font-serif font-bold text-[#231C19] mb-3">
                    {sintomaObj.recomendacao}
                  </h4>
                  <p className="text-sm text-[#5A504A] leading-relaxed mb-4">
                    Com base no que você compartilhou ({duracaoSelecionada.toLowerCase()}), o protocolo clínico mais eficaz é estruturar um plano personalizado para compreender a dinâmica desse sintoma e criar recursos de alívio e clareza.
                  </p>

                  <div className="pt-4 border-t border-[#FBCFE8]/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <span className="text-xs font-semibold text-[#877C75]">
                      Modalidade de sua preferência:
                    </span>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setModalidade('online')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                          modalidade === 'online'
                            ? 'bg-[#BE185D] text-white shadow-xs'
                            : 'bg-white text-[#5A504A] border border-[#FBCFE8]'
                        }`}
                      >
                        Online (Videoconferência Segura)
                      </button>
                      <button
                        type="button"
                        onClick={() => setModalidade('presencial')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                          modalidade === 'presencial'
                            ? 'bg-[#BE185D] text-white shadow-xs'
                            : 'bg-white text-[#5A504A] border border-[#FBCFE8]'
                        }`}
                      >
                        Presencial em Consultório
                      </button>
                    </div>
                  </div>
                </div>

                {/* Botões de Ação */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <button
                    onClick={resetar}
                    className="inline-flex items-center gap-2 text-xs font-medium text-[#877C75] hover:text-[#BE185D] cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Refazer autoavaliação
                  </button>

                  <button
                    onClick={concluirEAgendar}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#DB2777] to-[#BE185D] shadow-md hover:shadow-lg transition-all cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Agendar Consulta com esta Indicação</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
};
