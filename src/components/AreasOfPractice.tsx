import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Activity, 
  Brain, 
  HeartHandshake, 
  Users, 
  Sparkles, 
  Compass, 
  ArrowRight, 
  Check, 
  Clock, 
  X, 
  Calendar,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { AREAS_ATUACAO } from '../data/content';
import { AreaAtuacao } from '../types';

interface AreasProps {
  onSelectService: (serviceName: string) => void;
}

const iconMap: Record<string, React.ElementType> = {
  Activity,
  Brain,
  HeartHandshake,
  Users,
  Sparkles,
  Compass
};

export const AreasOfPractice: React.FC<AreasProps> = ({ onSelectService }) => {
  const [categoriaAtiva, setCategoriaAtiva] = useState<string>('todos');
  const [modalDetalhes, setModalDetalhes] = useState<AreaAtuacao | null>(null);

  const categorias = [
    { id: 'todos', label: 'Todas as Áreas' },
    { id: 'clinica', label: 'Psicoterapia Clínica' },
    { id: 'neuropsicologia', label: 'Neuropsicologia & Cognição' },
    { id: 'relacionamentos', label: 'Casal & Relacionamentos' }
  ];

  const servicosFiltrados = categoriaAtiva === 'todos'
    ? AREAS_ATUACAO
    : AREAS_ATUACAO.filter((s) => s.categoria === categoriaAtiva);

  return (
    <section id="areas" className="py-20 sm:py-28 bg-[#FAF7F6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#FDF2F8] text-[#BE185D] border border-[#FBCFE8] mb-3">
              Áreas de Atuação & Metodologia
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#231C19] tracking-tight">
              Apoio especializado para cada etapa do seu desenvolvimento mental
            </h2>
          </div>
          <p className="text-base text-[#5A504A] max-w-md leading-relaxed">
            Atendimento clínico integrativo estruturado para aliviar sintomas urgentes e construir transformações duradouras no seu modo de ser e pensar.
          </p>
        </div>

        {/* Abas de Filtro de Categoria */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          {categorias.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategoriaAtiva(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                categoriaAtiva === cat.id
                  ? 'bg-[#BE185D] text-white shadow-md shadow-[#BE185D]/20'
                  : 'bg-white text-[#5A504A] hover:bg-[#FDF2F8] hover:text-[#BE185D] border border-[#FBCFE8]/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid dos Cards de Áreas de Atuação */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicosFiltrados.map((area, idx) => {
            const Icon = iconMap[area.icone] || Sparkles;
            return (
              <motion.div
                key={area.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white rounded-3xl p-7 border border-[#FBCFE8]/70 shadow-sm hover:shadow-elevation-2 shadow-elevation-hover flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Imagem de Capa Sutil */}
                <div className="h-44 -mx-7 -mt-7 mb-6 relative overflow-hidden bg-gray-100">
                  <img
                    src={area.imagem}
                    alt={area.titulo}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
                  
                  {/* Tag de Destaque */}
                  {area.tagDestaque && (
                    <span className="absolute top-4 left-4 text-[11px] font-bold text-[#BE185D] bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#FBCFE8] shadow-xs">
                      {area.tagDestaque}
                    </span>
                  )}

                  {/* Ícone Flutuante */}
                  <div className="absolute bottom-2 right-4 w-12 h-12 rounded-2xl bg-white border border-[#FBCFE8] shadow-md flex items-center justify-center text-[#BE185D]">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-serif font-bold text-[#231C19] mb-1 group-hover:text-[#BE185D] transition-colors">
                    {area.titulo}
                  </h3>
                  <p className="text-xs font-medium text-[#877C75] mb-3">
                    {area.subtitulo}
                  </p>
                  <p className="text-sm text-[#5A504A] leading-relaxed mb-5">
                    {area.descricaoCurta}
                  </p>

                  {/* Lista de Sintomas/Demandas */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-[#FBCFE8]/40">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#877C75]">
                      Sinais frequentes acolhidos:
                    </p>
                    {area.sintomasOuDemandas.slice(0, 3).map((sintoma, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2 text-xs text-[#5A504A]">
                        <Check className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                        <span>{sintoma}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ações do Card */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setModalDetalhes(area)}
                    className="text-xs font-semibold text-[#877C75] hover:text-[#BE185D] transition-colors cursor-pointer"
                  >
                    Ver detalhes completos
                  </button>

                  <button
                    type="button"
                    onClick={() => onSelectService(area.titulo)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white bg-[#BE185D] hover:bg-[#9D174D] shadow-sm transition-all cursor-pointer"
                  >
                    <span>Agendar</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Modal de Detalhes da Área */}
      <AnimatePresence>
        {modalDetalhes && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 border border-[#FBCFE8] shadow-elevation-2 relative"
            >
              <button
                type="button"
                onClick={() => setModalDetalhes(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-[#877C75] hover:bg-gray-100 transition-colors cursor-pointer"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold text-[#BE185D] bg-[#FDF2F8] px-2.5 py-1 rounded-full border border-[#FBCFE8]">
                  {modalDetalhes.subtitulo}
                </span>
                <span className="text-xs text-[#877C75] flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {modalDetalhes.duracaoEstimada}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#231C19] mb-4">
                {modalDetalhes.titulo}
              </h3>

              <p className="text-sm sm:text-base text-[#5A504A] leading-relaxed mb-6">
                {modalDetalhes.descricaoCompleta}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 pt-4 border-t border-gray-100">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#231C19] mb-3">
                    Demandas Frequentes
                  </h4>
                  <ul className="space-y-2">
                    {modalDetalhes.sintomasOuDemandas.map((s, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#5A504A]">
                        <Check className="w-3.5 h-3.5 text-[#BE185D] shrink-0 mt-0.5" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#231C19] mb-3">
                    Benefícios do Acompanhamento
                  </h4>
                  <ul className="space-y-2">
                    {modalDetalhes.beneficios.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#5A504A]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-xs text-[#877C75]">
                  <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                  <span>Sigilo garantido pelo Conselho Federal de Psicologia</span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const nome = modalDetalhes.titulo;
                    setModalDetalhes(null);
                    onSelectService(nome);
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#DB2777] to-[#BE185D] shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Entrar em contato sobre esta área</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
