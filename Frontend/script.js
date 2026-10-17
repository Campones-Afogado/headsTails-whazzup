
const PROBABILIDADE_ANUNCIADA = 0.50;
const PROBABILIDADE_REAL = 0.20;

let acertos = 0;
let erros = 0;
let tentativas = 0;

const imagemResultado = document.getElementById("imagem-resultado");
const mensagemResultado = document.getElementById("mensagem-resultado");

const moeda = document.getElementById("moeda");
const botaoCara = document.getElementById("cara");
const botaoCoroa = document.getElementById("coroa");
const botaoReiniciar = document.getElementById("reiniciar");

const elementoAcertos = document.getElementById("acertos");
const elementoErros = document.getElementById("erros");
const elementoTentativas = document.getElementById("tentativas");

const barraAcertos = document.getElementById("barra-acertos");
const barraErros = document.getElementById("barra-erros");

const percentualAcertos = document.getElementById("percentual-acertos");
const percentualErros = document.getElementById("percentual-erros");

const contagemAcertos = document.getElementById("contagem-acertos");
const contagemErros = document.getElementById("contagem-erros");

const trilhoAcertos = document.getElementById("trilho-acertos");
const trilhoErros = document.getElementById("trilho-erros");

const notaGrafico = document.getElementById("nota-grafico");

function jogar(escolha) {
    // Sorteio com probabilidade real de acerto de 20%.
    const sorteio = Math.random();
    const venceu = sorteio < PROBABILIDADE_REAL;

    const ladoOposto = escolha === "Cara" ? "Coroa" : "Cara";
    const ladoResultado = venceu ? escolha : ladoOposto;

    tentativas++;

    if (venceu) {
        acertos++;
    } else {
        erros++;
    }

    moeda.textContent = ladoResultado;

    if (venceu) {
        imagemResultado.src = "./archives/muse-image_b_Gere_um_card_de_vit%C3%B3.png";
        imagemResultado.alt = "Pessoa comemorando o acerto";

        mensagemResultado.textContent =
            `Resultado: ${ladoResultado}. Você acertou!`;
    } else {
        imagemResultado.src = "./archives/gpt-image-2.5-sunburst_b_Gere_um_card_de_derr.png";
        imagemResultado.alt = "Pessoa refletindo sobre o resultado";

        mensagemResultado.textContent =
            `Resultado: ${ladoResultado}. Você não acertou desta vez.`;
    }

    imagemResultado.hidden = false;
    atualizarEstatisticas();
}

function atualizarEstatisticas() {
    elementoAcertos.textContent = acertos;
    elementoErros.textContent = erros;
    elementoTentativas.textContent = tentativas;

    const taxaAcertos = tentativas === 0
        ? 0
        : (acertos / tentativas) * 100;

    const taxaErros = tentativas === 0
        ? 0
        : (erros / tentativas) * 100;

    barraAcertos.style.width = `${taxaAcertos}%`;
    barraErros.style.width = `${taxaErros}%`;

    percentualAcertos.textContent = `${taxaAcertos.toFixed(1)}%`;
    percentualErros.textContent = `${taxaErros.toFixed(1)}%`;

    contagemAcertos.textContent =
        `${acertos} ${acertos === 1 ? "ocorrência" : "ocorrências"}`;

    contagemErros.textContent =
        `${erros} ${erros === 1 ? "ocorrência" : "ocorrências"}`;

    trilhoAcertos.setAttribute("aria-valuenow", taxaAcertos.toFixed(1));
    trilhoErros.setAttribute("aria-valuenow", taxaErros.toFixed(1));

    if (tentativas === 0) {
        notaGrafico.textContent =
            "Realize algumas tentativas para comparar os resultados.";
        return;
    }

    notaGrafico.textContent =
        `Após ${tentativas} ${tentativas === 1 ? "tentativa" : "tentativas"}, ` +
        `você observou ${acertos} ${acertos === 1 ? "acerto" : "acertos"} ` +
        `e ${erros} ${erros === 1 ? "erro" : "erros"}. ` +
        "Uma amostra pequena pode variar bastante.";
}

function reiniciarExperimento() {
    acertos = 0;
    erros = 0;
    tentativas = 0;

    moeda.textContent = "?";
    imagemResultado.hidden = true;
    imagemResultado.removeAttribute("src");
    imagemResultado.alt = "";
    mensagemResultado.textContent = "Faça sua escolha para começar.";

    atualizarEstatisticas();
}

botaoCara.addEventListener("click", () => jogar("Cara"));
botaoCoroa.addEventListener("click", () => jogar("Coroa"));
botaoReiniciar.addEventListener("click", reiniciarExperimento);

atualizarEstatisticas();
