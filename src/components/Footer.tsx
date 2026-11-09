import React from 'react';
import { Heart, ShieldCheck, PhoneCall, ExternalLink } from 'lucide-react';
import { DADOS_CLINICA } from '../data/content';

export const Footer: React.FC = () => {
  const anoAtual = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1E1916] text-[#A89F99] pt-16 pb-12 border-t border-[#382E29]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bloco de Alerta Ético / CVV */}
        <div className="mb-14 p-5 sm:p-6 rounded-2xl bg-[#2A231F] border border-[#3E342F] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-[#BE185D]/20 border border-[#BE185D]/40 flex items-center justify-center text-[#F472B6] shrink-0">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">
                Atenção para situações de crise ou urgência emocional imediata
              </p>
              <p className="text-xs text-[#C4BDB8] mt-0.5">
                Este site não presta atendimento de emergência. Em caso de sofrimento agudo, ligue gratuitamente para o <strong>CVV (188)</strong> ou procure a UPA/Pronto-Socorro mais próximo.
              </p>
            </div>
          </div>
          <a
            href="https://cvv.org.br"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-xs font-semibold text-[#F472B6] hover:text-[#FBCFE8] inline-flex items-center gap-1 underline underline-offset-4"
          >
            <span>Conhecer o CVV</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Colunas Principais do Rodapé */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#382E29]">
          
          {/* Coluna 1: Identidade e CRP (5 Colunas) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F472B6] to-[#BE185D] flex items-center justify-center text-white">
                <Heart className="w-5 h-5 fill-white/20 stroke-white" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-white tracking-tight block">
                  {DADOS_CLINICA.nome}
                </span>
                <span className="text-xs text-[#F472B6] font-medium">
                  {DADOS_CLINICA.tituloProfissional} • {DADOS_CLINICA.registroCRP}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#A89F99] leading-relaxed max-w-sm mb-6">
              Prática clínica humanizada e avaliação neuropsicológica baseada em evidências científicas. Consultas online com autorização e-Psi para todo o Brasil e exterior, além de atendimento presencial.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#2A231F] text-xs text-[#D8D0CB] border border-[#3E342F]">
              <ShieldCheck className="w-4 h-4 text-[#10B981]" />
              <span>Em conformidade com o Código de Ética do CFP</span>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida (3 Colunas) */}
          <div className="lg:col-span-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Navegação
            </p>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a 
                  href="#inicio" 
                  onClick={(e) => handleLinkClick(e, '#inicio')}
                  className="hover:text-white transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a 
                  href="#areas" 
                  onClick={(e) => handleLinkClick(e, '#areas')}
                  className="hover:text-white transition-colors"
                >
                  Áreas de Atuação
                </a>
              </li>
              <li>
                <a 
                  href="#sobre" 
                  onClick={(e) => handleLinkClick(e, '#sobre')}
                  className="hover:text-white transition-colors"
                >
                  Sobre a Psicóloga
                </a>
              </li>
              <li>
                <a 
                  href="#reembolso" 
                  onClick={(e) => handleLinkClick(e, '#reembolso')}
                  className="hover:text-white transition-colors"
                >
                  Reembolso de Convênios
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  onClick={(e) => handleLinkClick(e, '#faq')}
                  className="hover:text-white transition-colors"
                >
                  Dúvidas Frequentes
                </a>
              </li>
              <li>
                <a 
                  href="#contato" 
                  onClick={(e) => handleLinkClick(e, '#contato')}
                  className="hover:text-white transition-colors"
                >
                  Agendamento & Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Especialidades em Destaque (4 Colunas) */}
          <div className="lg:col-span-4">
            <p className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Especialidades Clínicas
            </p>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>Ansiedade, Crises de Pânico & Síndrome de Burnout</li>
              <li>Avaliação Neuropsicológica (TDAH & Funções Executivas)</li>
              <li>Depressão, Luto & Reconstrução Emocional</li>
              <li>Terapia de Casal e Mediação de Relacionamentos</li>
              <li>Estimulação e Treino Cognitivo</li>
              <li>Autoconhecimento & Transições de Carreira</li>
            </ul>
          </div>

        </div>

        {/* Rodapé Inferior */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#877C75]">
          <p>
            © {anoAtual} {DADOS_CLINICA.nome}. Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-1.5">
            <span>Desenvolvido com carinho e excelência institucional</span>
            <Heart className="w-3.5 h-3.5 text-[#F472B6] fill-[#F472B6]" />
          </p>
        </div>

      </div>
    </footer>
  );
};
