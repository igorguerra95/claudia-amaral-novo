export interface AreaAtuacao {
  id: string;
  titulo: string;
  categoria: 'clinica' | 'neuropsicologia' | 'relacionamentos';
  subtitulo: string;
  descricaoCurta: string;
  descricaoCompleta: string;
  sintomasOuDemandas: string[];
  beneficios: string[];
  duracaoEstimada: string;
  icone: string;
  tagDestaque?: string;
  imagem: string;
}

export interface DepoimentoOuValor {
  autor: string;
  detalhe: string;
  texto: string;
  tipo: 'depoimento' | 'pilar';
  icone?: string;
}

export interface PerguntaFrequente {
  id: string;
  pergunta: string;
  resposta: string;
  categoria: 'geral' | 'neuropsicologia' | 'reembolso';
}

export interface OpcaoAgendamento {
  modalidade: 'online' | 'presencial';
  areaInteresse: string;
  periodoPreferencia: string;
  nome: string;
  whatsapp: string;
  email: string;
  mensagemAdicional?: string;
}
