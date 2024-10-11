const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');


const perguntas = [//abre a lista de objetos (itens)
    {//abre o item
        enunciado: "Você tem em média 8 horas de sono?",
        alternativas: [{
            texto: "Sim, eu tenho",
            afirmação: "durmo em média 8 horas por dia,"
        },
        {
            texto: "Não, eu não tenho",
            afirmação: "durmo menos que 8 horas por dia,"
        }
        ]
    },
    {
        enunciado: "Você bebe 2 litros de água por dia?",
        alternativas: [{
            texto: "Sim, eu bebo",
            afirmação: "bebo 2 litros ou mais de água por dia,"
        },
        {
            texto:"Não, eu não bebo",
            afirmação:"bebo menos de 2 litros de água por dia,"
        }
        ]
    },
    {
        enunciado: "Você faz exercícios fisicos??",
        alternativas: [{
            texto: "Sim, eu faço",
            afirmação: "pratico exercícios regularmente"
        },
        {
            texto: "Não, eu não faço",
            afirmação: "sou sedentario"
        }
        ]
    }
]
let posicao = 0;
let perguntaAtual;
let respostas = "";


function mostraPergunta() {
    if (posicao>=perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    caixaAlternativa.textContent = " ";
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",  () => respostasSelecionadas(alternativa));
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}
function respostasSelecionadas(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmação;
    respostas += afirmacoes + " ";
    posicao++;
    mostraPergunta();
}
function mostraResultado(){
    caixaPergunta.textContent = "Confira suas respostas: ";
    textoResultado.textContent = respostas; 
    caixaAlternativa.textContent = "";
}
mostraPergunta();
