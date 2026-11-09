import { AreaAtuacao, PerguntaFrequente, DepoimentoOuValor } from '../types';

export const DADOS_CLINICA = {
  nome: 'Claudia Amaral Ferreira',
  tituloProfissional: 'Psicóloga Clínica & Neuropsicóloga',
  registroCRP: 'CRP 06/142.890',
  slogan: 'Acolher o que você sente para transformar o modo como você vive.',
  subtitulo: 'Um espaço confidencial, ético e empático que une a sensibilidade da escuta clínica à precisão científica da neuropsicologia.',
  whatsappNumero: '5511998765432', // Link de contato direto
  whatsappTextoPadrao: 'Olá, Claudia! Gostaria de informações sobre agendamento de consulta psicológica.',
  email: 'contato@claudiaamaralpsicologia.com.br',
  modalidades: ['Atendimento Online (Brasil e Exterior)', 'Atendimento Presencial'],
  publico: 'Adultos, Jovens e Casais',
  resumoAbordagem: 'Terapia Cognitivo-Comportamental (TCC), Terapia do Esquema e Neurociência Clínica'
};

export const ESTATISTICAS = [
  { valor: 12, sufixo: '+', label: 'Anos de experiência clínica e pesquisa', descricao: 'Prática contínua pautada nas diretrizes do CFP' },
  { valor: 2800, sufixo: '+', label: 'Sessões realizadas com acolhimento', descricao: 'Histórias transformadas com empatia e método' },
  { valor: 680, sufixo: '+', label: 'Laudos neuropsicológicos emitidos', descricao: 'Investigações de alta precisão diagnóstica' },
  { valor: 99, sufixo: '%', label: 'Índice de acolhimento e recomendação', descricao: 'Espaço seguro livre de julgamentos' }
];

export const AREAS_ATUACAO: AreaAtuacao[] = [
  {
    id: 'ansiedade-burnout',
    titulo: 'Ansiedade, Pânico & Burnout',
    categoria: 'clinica',
    subtitulo: 'Regulação do sistema nervoso e desaceleração mental',
    descricaoCurta: 'Técnicas baseadas em evidências para interromper a ruminação mental, crises de angústia e a sobrecarga profissional crônica.',
    descricaoCompleta: 'A ansiedade excessiva atua como um alarme que nunca desliga, drenando sua energia e clareza mental. Em nosso espaço, mapeamos os gatilhos fisiológicos e comportamentais, desenvolvendo estratégias práticas de autorregulação, reestruturação cognitiva e limites saudáveis no trabalho e na rotina.',
    sintomasOuDemandas: [
      'Preocupação constante e sensação de urgência',
      'Taquicardia, aperto no peito e tensão física',
      'Incapacidade de relaxar mesmo no tempo livre',
      'Exaustão emocional pelo trabalho (Síndrome de Burnout)'
    ],
    beneficios: [
      'Controle efetivo de crises e redução do cortisol crônico',
      'Ferramentas personalizadas de desativação da ansiedade',
      'Retomada do sono restaurador e da qualidade de vida'
    ],
    duracaoEstimada: 'Sessões semanais de 50 minutos',
    icone: 'Activity',
    tagDestaque: 'Alta Procura',
    imagem: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'avaliacao-neuropsicologica',
    titulo: 'Avaliação Neuropsicológica',
    categoria: 'neuropsicologia',
    subtitulo: 'Mapeamento cognitivo detalhado com laudo completo',
    descricaoCurta: 'Investigação aprofundada de funções como atenção, memória, raciocínio e funções executivas para TDAH, TEA e diagnósticos diferenciais.',
    descricaoCompleta: 'A avaliação neuropsicológica é um processo minucioso com testes padronizados e validados pelo SATEPSI. Permite identificar potencialidades e fragilidades cognitivas, auxiliando no diagnóstico médico de TDAH em adultos, espectro autista leve, declínio de memória e elaboração de planos de reabilitação personalizados.',
    sintomasOuDemandas: [
      'Dificuldade severa de foco, procrastinação e desorganização (Suspeita de TDAH)',
      'Lapsos de memória frequentes e desatenção no cotidiano',
      'Dificuldades crônicas de planejamento e tomada de decisões',
      'Necessidade de laudo para concursos, neurologistas ou psiquiatras'
    ],
    beneficios: [
      'Laudo técnico robusto e elucidativo para suporte médico',
      'Entendimento claro do seu padrão único de funcionamento cerebral',
      'Diretrizes assertivas para adaptações no trabalho e estudos'
    ],
    duracaoEstimada: 'Protocolo completo de 6 a 8 encontros com devolutiva',
    icone: 'Brain',
    tagDestaque: 'Especialidade de Referência',
    imagem: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'depressao-autoestima',
    titulo: 'Depressão & Reconstrução Emocional',
    categoria: 'clinica',
    subtitulo: 'Resgate da vitalidade, sentido e autocompaixão',
    descricaoCurta: 'Cuidado compassivo para romper o isolamento, a autocrítica destrutiva e a perda de interesse pelas atividades diárias.',
    descricaoCompleta: 'A depressão silencia nossos projetos e nos desconecta de quem somos. Através de um vínculo terapêutico seguro e da ativação comportamental progressiva, reconstruímos o senso de merecimento, ressignificamos crenças nucleares de desvalia e restauramos a conexão com o que traz brilho aos seus dias.',
    sintomasOuDemandas: [
      'Sensação persistente de vazio, tristeza ou desânimo',
      'Perda de prazer nas coisas que antes gostava (anedonia)',
      'Autocrítica implacável e culpa desproporcional',
      'Dificuldade de iniciar tarefas simples e autocuidado'
    ],
    beneficios: [
      'Reconstrução gradual da motivação interna',
      'Fortalecimento da autoestima e autoaceitação',
      'Compreensão profunda das origens da dor emocional'
    ],
    duracaoEstimada: 'Sessões semanais de 50 minutos',
    icone: 'HeartHandshake',
    imagem: 'https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'terapia-casal',
    titulo: 'Terapia de Casal & Relacionamentos',
    categoria: 'relacionamentos',
    subtitulo: 'Comunicação não-violenta e reconexão de intimidade',
    descricaoCurta: 'Espaço neutro para mediar conversas difíceis, romper padrões de mágoa e reencontrar a parceria na relação.',
    descricaoCompleta: 'Relacionamentos duradouros passam por transformações que nem sempre o casal consegue navegar sozinho. Na terapia de casal, ofereço uma mediação estruturada e empática para que ambos possam falar e ser ouvidos de verdade, reconstruindo a confiança, o afeto e os combinados do dia a dia.',
    sintomasOuDemandas: [
      'Discussões frequentes pelos mesmos motivos sem solução',
      'Distanciamento emocional e perda da intimidade afetiva',
      'Dificuldade de expressar necessidades sem gerar ataques',
      'Crises após transições (nascimento de filhos, mudanças, traição)'
    ],
    beneficios: [
      'Diálogos construtivos e seguros sem agressividade',
      'Restauração do afeto mútuo e parceria diária',
      'Clareza para tomar decisões maduras sobre o futuro'
    ],
    duracaoEstimada: 'Sessões quinzenais ou semanais de 70 minutos',
    icone: 'Users',
    imagem: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'reabilitacao-cognitiva',
    titulo: 'Estimulação & Treino Cognitivo',
    categoria: 'neuropsicologia',
    subtitulo: 'Fortalecimento de foco, memória e autonomia funcional',
    descricaoCurta: 'Intervenções práticas pós-diagnóstico ou para queixas de lentidão mental, sobrecarga de trabalho e desatenção cotidiana.',
    descricaoCompleta: 'Após mapear o perfil cognitivo, desenvolvemos exercícios e rotinas de compensação para maximizar o desempenho no trabalho e na vida pessoal. Uma abordagem pragmática para quem precisa organizar prioridades, vencer a distração e proteger o cérebro do desgaste acelerado.',
    sintomasOuDemandas: [
      'Sensação de "névoa mental" e desorganização executiva',
      'Dificuldade em gerenciar tempo e concluir projetos longos',
      'Necessidade de estratégias compensatórias para TDAH',
      'Envelhecimento saudável e prevenção de declínio cognitivo'
    ],
    beneficios: [
      'Aumento tangível na capacidade de foco e produtividade consciente',
      'Criação de rotinas externas de apoio cognitivo sustentáveis',
      'Maior autonomia e segurança nas decisões diárias'
    ],
    duracaoEstimada: 'Encontros semanais de 50 minutos',
    icone: 'Sparkles',
    imagem: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'desenvolvimento-pessoal',
    titulo: 'Transições de Vida & Autoconhecimento',
    categoria: 'clinica',
    subtitulo: 'Navegue mudanças profundas com clareza e firmeza',
    descricaoCurta: 'Apoio psicoterapêutico para momentos de virada: novas carreiras, luto, separações e busca por autenticidade existencial.',
    descricaoCompleta: 'Grandes transformações desafiam nossa identidade. Trabalhamos a flexibilidade psicológica para que você tome decisões alinhadas aos seus valores mais verdadeiros, superando medos paralisantes e construindo um novo capítulo de vida com dignidade e paz interior.',
    sintomasOuDemandas: [
      'Sensação de estagnação e questionamentos existenciais',
      'Dificuldade de dizer "não" e estabelecer limites saudáveis',
      'Elaboração de lutos (términos de ciclos, perdas ou mudanças)',
      'Síndrome do impostor e insegurança nas tomadas de decisão'
    ],
    beneficios: [
      'Alinhamento genuíno entre suas escolhas e valores centrais',
      'Habilidade de sustentar limites e respeitar seu próprio ritmo',
      'Paz interior e maior coragem diante do desconhecido'
    ],
    duracaoEstimada: 'Sessões semanais de 50 minutos',
    icone: 'Compass',
    imagem: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=800&q=80'
  }
];

export const PILARES_ATENDIMENTO: DepoimentoOuValor[] = [
  {
    autor: 'Sigilo e Confidencialidade Absoluta',
    detalhe: 'Código de Ética do CFP (Resolução CFP nº 010/05)',
    texto: 'Tudo o que é compartilhado em sessão é rigorosamente protegido por sigilo profissional inegociável. Um santuário para você expressar suas verdades mais íntimas sem receio de vazamentos ou julgamentos morais.',
    tipo: 'pilar',
    icone: 'ShieldCheck'
  },
  {
    autor: 'Rigor Científico com Olhar Humano',
    detalhe: 'Prática Baseada em Evidências',
    texto: 'Não trabalhamos com achismos. Utilizamos técnicas cientificamente comprovadas da TCC e da Neuropsicologia moderna, sempre adaptadas com delicadeza à singularidade da sua história pessoal.',
    tipo: 'pilar',
    icone: 'CheckCircle2'
  },
  {
    autor: 'Acolhimento Ativo e Sem Julgamentos',
    detalhe: 'Relação Terapêutica Segura',
    texto: 'Você não precisa chegar com respostas prontas. Nosso primeiro compromisso é ouvir de coração aberto, proporcionando alívio imediato e sustentando o seu ritmo sem pressa artificial.',
    tipo: 'pilar',
    icone: 'Heart'
  },
  {
    autor: 'Flexibilidade e Acessibilidade Global',
    detalhe: 'Online e Presencial',
    texto: 'Sessões online criptografadas e autorizadas pelo e-Psi para brasileiros em qualquer cidade do país e residentes no exterior (EUA, Europa, Ásia), além de acolhimento presencial em consultório reservado.',
    tipo: 'pilar',
    icone: 'Globe'
  }
];

export const PERGUNTAS_FREQUENTES: PerguntaFrequente[] = [
  {
    id: 'como-funciona-primeira-sessao',
    categoria: 'geral',
    pergunta: 'Como funciona a primeira consulta psicológica?',
    resposta: 'A primeira sessão é um momento de escuta acolhedora e alinhamento de expectativas mútuas. Você poderá relatar livremente o que motivou a busca por ajuda, suas dúvidas e angústias. Apresentarei como podemos estruturar o processo terapêutico, combinaremos detalhes práticos (horários, frequência e sigilo) e você sentirá na prática se este é o espaço seguro ideal para você.'
  },
  {
    id: 'terapia-online-funciona',
    categoria: 'geral',
    pergunta: 'A psicoterapia online possui a mesma eficácia da presencial?',
    resposta: 'Sim, comprovadamente! Diversos estudos internacionais de neurociência e psicologia clínica atestam que a psicoterapia online apresenta eficácia equivalente à presencial. O atendimento é realizado através de plataforma de videoconferência segura e criptografada (em conformidade com as diretrizes do Conselho Federal de Psicologia e do e-Psi), permitindo que você realize sua sessão no conforto e privacidade de sua casa.'
  },
  {
    id: 'o-que-e-avaliacao-neuropsicologica',
    categoria: 'neuropsicologia',
    pergunta: 'O que é a Avaliação Neuropsicológica e quantas sessões são necessárias?',
    resposta: 'Trata-se de uma investigação clínica e quantitativa que mapeia as funções cerebrais superiores (atenção concentrada e alternada, memória imediata e tardia, linguagem, funções executivas, flexibilidade cognitiva e humor). O protocolo padrão dura entre 6 e 8 sessões de 50 minutos cada, incluindo entrevista de anamnese inicial, aplicação de baterias de testes validadas pelo SATEPSI, análise estatística e uma sessão final de devolutiva com entrega de laudo detalhado e orientações práticas.'
  },
  {
    id: 'reembolso-plano-saude',
    categoria: 'reembolso',
    pergunta: 'É possível obter reembolso pelo meu plano de saúde (convênio)?',
    resposta: 'Sim! Atendemos na modalidade particular com emissão de Nota Fiscal Eletrônica e recibos médicos discriminados com CRP e CID (quando aplicável). A grande maioria dos convênios de saúde (Bradesco Saúde, SulAmérica, Amil, Care Plus, Porto Seguro, Unimed, Allianz, etc.) oferece a modalidade de livre escolha e reembolso para consultas de psicologia e avaliação neuropsicológica conforme a regulamentação da ANS. Fornecemos toda a documentação necessária para que você solicite o reembolso diretamente ao seu plano.'
  },
  {
    id: 'diferenca-psicologo-psiquiatra',
    categoria: 'geral',
    pergunta: 'Qual a diferença entre psicoterapia e consulta psiquiátrica?',
    resposta: 'O médico psiquiatra é focado no diagnóstico médico e, quando necessário, na prescrição e ajuste de medicações que equilibram neurotransmissores cerebrais. A psicóloga clínica trabalha na raiz emocional, comportamental e cognitiva dos padrões de sofrimento, desenvolvendo repertório psicológico para lidar com as adversidades. Em muitos casos, o trabalho interdisciplinar e integrado entre psicólogo e psiquiatra produz os melhores resultados.'
  },
  {
    id: 'avaliacao-tdah-adulto',
    categoria: 'neuropsicologia',
    pergunta: 'A avaliação neuropsicológica serve para diagnosticar TDAH ou Autismo em adultos?',
    resposta: 'Com certeza. O diagnóstico tardio de TDAH e TEA em adultos tem transformado vidas, trazendo alívio e compreensão para pessoas que passaram décadas se sentindo "inadequadas", "preguiçosas" ou constantemente sobrecarregadas. Nosso laudo identifica com precisão os déficits atencionais e comportamentais, descartando causas concorrentes (como ansiedade generalizada ou privação de sono) e fornecendo embasamento para o médico assistente.'
  }
];

export const ETAPAS_JORNADA = [
  {
    numero: '01',
    titulo: 'Primeiro Contato & Agendamento',
    descricao: 'Você entra em contato pelo formulário ou WhatsApp. Conversamos brevemente para tirar dúvidas iniciais e escolher o melhor dia e horário na agenda.'
  },
  {
    numero: '02',
    titulo: 'Sessão Inicial de Acolhimento',
    descricao: 'Um encontro caloroso para compreender sua demanda, suas expectativas e mapear juntos o objetivo central do seu processo terapêutico.'
  },
  {
    numero: '03',
    titulo: 'Plano Terapêutico Personalizado',
    descricao: 'Estruturação de um caminho sob medida — seja em psicoterapia semanal contínua ou no protocolo focado de avaliação neuropsicológica.'
  },
  {
    numero: '04',
    titulo: 'Evolução Consciente & Autonomia',
    descricao: 'Desenvolvimento de recursos emocionais sólidos para que você recupere o protagonismo, a serenidade e a clareza para viver plenamente.'
  }
];
