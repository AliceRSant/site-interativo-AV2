// Variáveis globais
let pontuacao = 0;
let perguntaAtual = 0;
const perguntas = [
    {
        pergunta: "Qual é o principal componente de um assistente virtual?",
        alternativas: ["Câmera", "Processador de Voz", "Sistema Operacional", "Tela Sensível ao Toque"],
        correta: 1
    },
    {
        pergunta: "O que significa IA?",
        alternativas: ["Inteligência Artificial", "Interface Adaptativa", "Internet Assistida", "Interface Antiga"],
        correta: 0
    },
    {
        pergunta: "Qual empresa desenvolveu a Siri?",
        alternativas: ["Google", "Amazon", "Apple", "Microsoft"],
        correta: 2
    },
    {
        pergunta: "Qual é a principal aplicação de aprendizado de máquina em assistentes virtuais?",
        alternativas: ["Processamento de voz", "Análise de sentimentos", "Reconhecimento facial", "Previsão do tempo"],
        correta: 0
    },
    {
        pergunta: "Em qual área os assistentes virtuais com IA têm sido mais úteis?",
        alternativas: ["Educação", "Entretenimento", "Saúde e bem-estar", "Jogos online"],
        correta: 2
    }
];

// Função para iniciar o quiz
document.getElementById('iniciarQuiz').addEventListener('click', function() {
    document.getElementById('intro').classList.add('escondido');
    document.getElementById('quiz').classList.remove('escondido');
    carregarPergunta();
});

// Função para carregar a próxima pergunta
function carregarPergunta() {
    if (perguntaAtual < perguntas.length) {
        const pergunta = perguntas[perguntaAtual];
        const perguntaContainer = document.getElementById('pergunta-container');

        // Limpar conteúdo anterior
        perguntaContainer.innerHTML = '';

        // Exibir pergunta
        const p = document.createElement('p');
        p.textContent = pergunta.pergunta;
        perguntaContainer.appendChild(p);

        // Exibir alternativas
        pergunta.alternativas.forEach((alternativa, index) => {
            const btn = document.createElement('button');
            btn.textContent = alternativa;
            btn.onclick = function() {
                verificarResposta(index);
            };
            perguntaContainer.appendChild(btn);
        });
    }
}

// Função para verificar a resposta
function verificarResposta(respostaUsuario) {
    const pergunta = perguntas[perguntaAtual];

    if (respostaUsuario === pergunta.correta) {
        alert("Resposta correta!");
        pontuacao++;
    } else {
        alert("Tente novamente!");
    }

    // Atualizar pontuação
    document.getElementById('pontuacao').textContent = `Pontuação: ${pontuacao}`;

    // Avançar para a próxima pergunta
    perguntaAtual++;

    // Se for a última pergunta, mostrar o botão de finalizar
    if (perguntaAtual === perguntas.length) {
        document.getElementById('finalizarQuiz').classList.remove('escondido');
    } else {
        carregarPergunta();
    }
}

// Função para finalizar o quiz
document.getElementById('finalizarQuiz').addEventListener('click', function() {
    alert(`Quiz finalizado! Você acertou ${pontuacao} de 5 perguntas.`);
    // Resetar o quiz
    pontuacao = 0;
    perguntaAtual = 0;
    document.getElementById('pontuacao').textContent = `Pontuação: ${pontuacao}`;
    document.getElementById('finalizarQuiz').classList.add('escondido');
    document.getElementById('intro').classList.remove('escondido');
    document.getElementById('quiz').classList.add('escondido');
});
