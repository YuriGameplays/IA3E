const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [//abre a lista de objetos (itens)
    {//abre o item
        enunciado:"Você tem boas noites de sono?",
        alternativas:["Sim","Não"]
    },
    {
        enunciado:"Você bebe bastante água?",
        alternativas:["Sim","Não"]
    },
    {
        enunciado:"Você tem 3 refeições ao dia?",
        alternativas:["Sim","Não"]
    }
]
let posicao = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntaAtual[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
}
mostraPergunta()