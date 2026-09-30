// ========== BANCO DE PERGUNTAS ==========
const perguntas = [
    {
        titulo: "1. O que mais te motiva em uma tarefa?",
        opcoes: [
            { texto: "Resolver problemas lógicos e técnicos", pontos: { tecnologia: 3, dados: 2 } },
            { texto: "Criar algo visualmente atraente", pontos: { design: 3, marketing: 1 } },
            { texto: "Ajudar e impactar a vida das pessoas", pontos: { saude: 3, educacao: 2, psicologia: 1 } },
            { texto: "Organizar, planejar e liderar", pontos: { negocios: 3, gestao: 2 } }
        ]
    },
    {
        titulo: "2. Qual ambiente de trabalho você prefere?",
        opcoes: [
            { texto: "Tecnológico, com gadgets e inovação", pontos: { tecnologia: 3, dados: 1 } },
            { texto: "Criativo, com designers e artistas", pontos: { design: 3, marketing: 2 } },
            { texto: "Hospitalar ou de cuidado humano", pontos: { saude: 3, psicologia: 1 } },
            { texto: "Corporativo ou acadêmico", pontos: { negocios: 2, educacao: 2, gestao: 1 } }
        ]
    },
    {
        titulo: "3. Como você gasta seu tempo livre?",
        opcoes: [
            { texto: "Aprendendo programação ou tecnologia", pontos: { tecnologia: 3, dados: 2 } },
            { texto: "Criando arte, design ou conteúdo visual", pontos: { design: 3, marketing: 1 } },
            { texto: "Lendo sobre comportamento humano e psicologia", pontos: { psicologia: 3, educacao: 1 } },
            { texto: "Estudando negócios, economia ou estratégia", pontos: { negocios: 3, dados: 1 } }
        ]
    },
    {
        titulo: "4. Qual tipo de desafio te atrai mais?",
        opcoes: [
            { texto: "Codificar e desenvolver sistemas complexos", pontos: { tecnologia: 3, dados: 1 } },
            { texto: "Desenhar interfaces e experiências", pontos: { design: 3, marketing: 2 } },
            { texto: "Atender e acolher pessoas em situações difíceis", pontos: { saude: 3, psicologia: 2 } },
            { texto: "Analisar dados e definir estratégias", pontos: { dados: 3, negocios: 1 } }
        ]
    },
    {
        titulo: "5. O que você acha importante em uma carreira?",
        opcoes: [
            { texto: "Inovação e estar na frente da tecnologia", pontos: { tecnologia: 3, dados: 1 } },
            { texto: "Expressão criativa e liberdade artística", pontos: { design: 3, marketing: 2 } },
            { texto: "Fazer diferença na vida das pessoas", pontos: { saude: 3, psicologia: 2, educacao: 1 } },
            { texto: "Crescimento financeiro e reconhecimento", pontos: { negocios: 3, gestao: 1 } }
        ]
    },
    {
        titulo: "6. Como você toma decisões?",
        opcoes: [
            { texto: "Baseado em lógica e dados", pontos: { dados: 3, tecnologia: 1 } },
            { texto: "Seguindo meu instinto e intuição", pontos: { design: 3, psicologia: 1 } },
            { texto: "Pensando no impacto emocional nas pessoas", pontos: { psicologia: 3, saude: 2, educacao: 1 } },
            { texto: "Analisando riscos e benefícios estratégicos", pontos: { negocios: 3, gestao: 1 } }
        ]
    },
    {
        titulo: "7. Se você pudesse ensinar algo, o quê seria?",
        opcoes: [
            { texto: "Programação e desenvolvimento de software", pontos: { tecnologia: 3, educacao: 1 } },
            { texto: "Design, criatividade e comunicação visual", pontos: { design: 3, marketing: 2 } },
            { texto: "Inteligência emocional e autoconhecimento", pontos: { psicologia: 3, educacao: 2 } },
            { texto: "Negócios, liderança e administração", pontos: { negocios: 3, gestao: 2 } }
        ]
    },
    {
        titulo: "8. Qual tipo de feedback você gosta de receber?",
        opcoes: [
            { texto: "Feedback técnico e construtivo", pontos: { tecnologia: 2, dados: 2 } },
            { texto: "Feedback sobre criatividade e estética", pontos: { design: 3, marketing: 1 } },
            { texto: "Feedback sobre impacto emocional e humano", pontos: { psicologia: 3, saude: 1, educacao: 1 } },
            { texto: "Feedback sobre resultados e performance", pontos: { negocios: 3, gestao: 1 } }
        ]
    },
    {
        titulo: "9. Qual produto/serviço você gostaria de criar?",
        opcoes: [
            { texto: "Um aplicativo ou software inovador", pontos: { tecnologia: 3, dados: 1 } },
            { texto: "Uma marca ou identidade visual de impacto", pontos: { design: 3, marketing: 2 } },
            { texto: "Um programa para melhorar saúde mental", pontos: { psicologia: 3, saude: 2 } },
            { texto: "Uma empresa de sucesso e rentável", pontos: { negocios: 3, gestao: 1 } }
        ]
    },
    {
        titulo: "10. Como você lida com pessoas?",
        opcoes: [
            { texto: "Prefiro trabalhar sozinho ou com máquinas", pontos: { tecnologia: 3, dados: 1 } },
            { texto: "Gosto de trabalhar com pessoas criativas", pontos: { design: 2, marketing: 2 } },
            { texto: "Adoro entender e ajudar as pessoas", pontos: { psicologia: 3, saude: 3, educacao: 1 } },
            { texto: "Prefiro liderar e orientar equipes", pontos: { gestao: 3, negocios: 1 } }
        ]
    },
    {
        titulo: "11. Qual é seu maior ponto forte?",
        opcoes: [
            { texto: "Pensamento analítico e resolução de problemas", pontos: { dados: 3, tecnologia: 2 } },
            { texto: "Criatividade e visão estética", pontos: { design: 3, marketing: 2 } },
            { texto: "Empatia e comunicação empática", pontos: { psicologia: 3, saude: 2, educacao: 1 } },
            { texto: "Organização e gestão de recursos", pontos: { gestao: 3, negocios: 2 } }
        ]
    },
    {
        titulo: "12. O que te faz sentir realizado profissionalmente?",
        opcoes: [
            { texto: "Criar algo que funciona perfeitamente", pontos: { tecnologia: 3, dados: 1 } },
            { texto: "Ver meu trabalho criativo sendo apreciado", pontos: { design: 3, marketing: 2 } },
            { texto: "Ver pessoas felizes e transformadas", pontos: { psicologia: 3, saude: 3, educacao: 1 } },
            { texto: "Alcançar metas e crescer profissionalmente", pontos: { negocios: 3, gestao: 2 } }
        ]
    },
    {
        titulo: "13. Qual tendência te interessa mais?",
        opcoes: [
            { texto: "Inteligência Artificial e Machine Learning", pontos: { tecnologia: 3, dados: 2 } },
            { texto: "Tendências de design e comunicação visual", pontos: { design: 3, marketing: 2 } },
            { texto: "Bem-estar mental e desenvolvimento pessoal", pontos: { psicologia: 3, saude: 2 } },
            { texto: "Inovação em modelos de negócio", pontos: { negocios: 3, gestao: 1 } }
        ]
    },
    {
        titulo: "14. Em que contexto você é mais produtivo?",
        opcoes: [
            { texto: "Trabalhando com código e ferramentas técnicas", pontos: { tecnologia: 3, dados: 1 } },
            { texto: "Em um ambiente inspirador e colaborativo", pontos: { design: 3, marketing: 2 } },
            { texto: "Em conversas e interações significativas", pontos: { psicologia: 3, saude: 1, educacao: 2 } },
            { texto: "Planejando e executando estratégias", pontos: { negocios: 3, gestao: 2 } }
        ]
    },
    {
        titulo: "15. Qual seria seu cenário ideal daqui a 10 anos?",
        opcoes: [
            { texto: "Ser um especialista/expert em tecnologia", pontos: { tecnologia: 3, dados: 2 } },
            { texto: "Ser reconhecido por trabalhos criativos", pontos: { design: 3, marketing: 2 } },
            { texto: "Ter transformado a vida de muitas pessoas", pontos: { psicologia: 3, saude: 3, educacao: 2 } },
            { texto: "Ser líder de uma empresa ou projeto", pontos: { negocios: 3, gestao: 3 } }
        ]
    }
];

// ========== BANCO DE CARREIRAS ==========
const carreiras = {
    tecnologia: {
        nome: "Desenvolvedor de Software",
        descricao: "Você é apaixonado por lógica, resolução de problemas e inovação tecnológica. Como desenvolvedor, você criará aplicações, sites e sistemas que impactam a vida das pessoas. Você gosta de aprender novas linguagens e tecnologias.",
        cores: "#7c3aed"
    },
    design: {
        nome: "Designer UX/UI",
        descricao: "Você possui excelente senso estético e compreensão profunda de experiência do usuário. Como designer, criará interfaces intuitivas e visualmente atraentes. Você equilibra criatividade com funcionalidade.",
        cores: "#ec4899"
    },
    psicologia: {
        nome: "Psicólogo / Terapeuta",
        descricao: "Você tem forte empatia e interesse genuíno em compreender o comportamento humano. Como psicólogo, ajudará pessoas a superar desafios emocionais e desenvolver seu potencial. Você é um excelente ouvinte.",
        cores: "#10b981"
    },
    dados: {
        nome: "Analista de Dados / Cientista de Dados",
        descricao: "Você adora trabalhar com números, padrões e insights. Como analista de dados, transformará informações brutos em decisões estratégicas. Você vê o mundo através de dados e estatísticas.",
        cores: "#0ea5e9"
    },
    negocios: {
        nome: "Consultor de Negócios / Empreendedor",
        descricao: "Você tem visão estratégica e espírito de liderança. Como consultor ou empreendedor, identificará oportunidades e criará valor. Você é orientado a resultados e pensamento estratégico.",
        cores: "#f59e0b"
    },
    saude: {
        nome: "Profissional de Saúde",
        descricao: "Você se preocupa genuinamente com o bem-estar das pessoas. Como profissional de saúde, fará diferença direta na vida dos pacientes. Você combina ciência com compaixão.",
        cores: "#ef4444"
    },
    educacao: {
        nome: "Educador / Professor",
        descricao: "Você tem paixão por ensinar e desenvolver potencial em outras pessoas. Como educador, inspirará gerações e fará diferença transformadora. Você acredita no poder da educação.",
        cores: "#f97316"
    },
    marketing: {
        nome: "Profissional de Marketing",
        descricao: "Você entende como comunicar e conectar com audiências. Como profissional de marketing, criará campanhas impactantes que geram engajamento. Você combina dados com criatividade.",
        cores: "#14b8a6"
    },
    gestao: {
        nome: "Gestor / Gerente de Projetos",
        descricao: "Você excela em organizar pessoas e recursos. Como gestor, liderará equipes e garantirá o sucesso de projetos. Você tem foco em eficiência e excelência.",
        cores: "#84cc16"
    }
};

// ========== VARIÁVEIS GLOBAIS ==========
let perguntaAtual = 0;
let respostas = Array(perguntas.length).fill(null);
let respostaSelecionada = null;

// ========== FUNÇÕES PRINCIPAIS ==========
function iniciarQuestionario() {
    perguntaAtual = 0;
    respostas = Array(perguntas.length).fill(null);
    respostaSelecionada = null;
    
    mudarSecao('questionario');
    renderizarPergunta();
}

function mudarSecao(novaSecao) {
    // Remover classe 'ativa' de todas as seções
    document.querySelectorAll('.secao').forEach(secao => {
        secao.classList.remove('ativa');
    });
    
    // Adicionar classe 'ativa' à nova seção
    document.getElementById(novaSecao).classList.add('ativa');
}

function renderizarPergunta() {
    const pergunta = perguntas[perguntaAtual];
    const progressPercent = ((perguntaAtual + 1) / perguntas.length) * 100;
    
    // Atualizar títulos
    document.getElementById('pergunta-titulo').textContent = pergunta.titulo;
    document.getElementById('pergunta-atual').textContent = perguntaAtual + 1;
    
    // Atualizar barra de progresso
    document.getElementById('progress').style.width = progressPercent + '%';
    
    // Renderizar opções
    const container = document.getElementById('opcoes-container');
    container.innerHTML = '';
    
    pergunta.opcoes.forEach((opcao, index) => {
        const botao = document.createElement('button');
        botao.className = 'opcao';
        botao.textContent = opcao.texto;
        
        if (respostas[perguntaAtual] === index) {
            botao.classList.add('selecionada');
        }
        
        botao.addEventListener('click', () => selecionarOpcao(index));
        container.appendChild(botao);
    });
    
    // Atualizar botões de navegação
    const btnVoltar = document.getElementById('btn-voltar');
    const btnProximo = document.getElementById('btn-proximo');
    
    if (perguntaAtual === 0) {
        btnVoltar.style.display = 'none';
    } else {
        btnVoltar.style.display = 'block';
    }
    
    if (perguntaAtual === perguntas.length - 1) {
        btnProximo.textContent = '✓ Ver Resultados';
    } else {
        btnProximo.textContent = 'Próximo →';
    }
}

function selecionarOpcao(index) {
    respostas[perguntaAtual] = index;
    renderizarPergunta();
}

function proximaPergunta() {
    if (respostas[perguntaAtual] === null || respostas[perguntaAtual] === undefined) {
        alert('Por favor, selecione uma opção antes de continuar!');
        return;
    }
    
    if (perguntaAtual < perguntas.length - 1) {
        perguntaAtual++;
        renderizarPergunta();
    } else {
        calcularResultados();
    }
}

function voltarPergunta() {
    if (perguntaAtual > 0) {
        perguntaAtual--;
        renderizarPergunta();
    }
}

function calcularResultados() {
    const pontuacoes = {};
    
    // Inicializar pontuações
    Object.keys(carreiras).forEach(carreira => {
        pontuacoes[carreira] = 0;
    });
    
    // Calcular pontuações
    respostas.forEach((respostaIndex, perguntaIndex) => {
        if (respostaIndex === null || respostaIndex === undefined) return;
        
        const opcao = perguntas[perguntaIndex].opcoes[respostaIndex];
        Object.entries(opcao.pontos).forEach(([carreira, pontos]) => {
            pontuacoes[carreira] += pontos;
        });
    });
    
    // Ordenar por pontuação
    const top3 = Object.entries(pontuacoes)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3);
    
    // Renderizar resultados
    renderizarResultados(top3);
}

function renderizarResultados(top3) {
    const container = document.getElementById('resultados-container');
    container.innerHTML = '';
    
    top3.forEach(([chave, pontos], index) => {
        const carreira = carreiras[chave];
        const compatibilidade = Math.max(55, Math.min(98, Math.round((pontos / (perguntas.length * 3)) * 100)));
        
        const card = document.createElement('div');
        card.className = 'resultado-card';
        
        if (index === 0) card.classList.add('primeiro');
        if (index === 1) card.classList.add('segundo');
        if (index === 2) card.classList.add('terceiro');
        
        const posicaoTexto = index === 0 ? '🏆 1º Lugar' : index === 1 ? '🥈 2º Lugar' : '🥉 3º Lugar';
        
        card.innerHTML = `
            <div class="posicao">${posicaoTexto}</div>
            <h3 class="resultado-titulo">${carreira.nome}</h3>
            <div class="compatibilidade">
                <div class="compatibilidade-barra">
                    <div class="compatibilidade-preenchimento" style="width: ${compatibilidade}%"></div>
                </div>
                <span class="compatibilidade-percentual">${compatibilidade}%</span>
            </div>
            <p class="resultado-descricao">${carreira.descricao}</p>
        `;
        
        container.appendChild(card);
    });
    
    mudarSecao('resultados');
}

function reiniciarQuestionario() {
    mudarSecao('inicio');
}

// ========== INICIALIZAÇÃO ==========
document.addEventListener('DOMContentLoaded', function() {
    // Verificar se o script foi carregado corretamente
    console.log('✓ Script carregado com sucesso!');
    console.log('✓ Total de perguntas:', perguntas.length);
    console.log('✓ Total de carreiras:', Object.keys(carreiras).length);
});
