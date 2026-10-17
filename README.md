# Por Trás da Tela — Experimento de Probabilidade

Um experimento interativo desenvolvido para explorar conceitos de probabilidade, programação e cultura digital por meio de uma simulação de cara ou coroa.

## Sobre o projeto

O projeto consiste em uma página web que simula um jogo de cara ou coroa. À primeira vista, a interface apresenta uma chance de vitória de 50%. Entretanto, a lógica implementada no código estabelece uma probabilidade real de vitória de 20%.

Essa diferença é intencional: ela permite investigar a relação entre as informações apresentadas por uma interface, os resultados observados e as regras que determinam o funcionamento de um sistema digital.

O projeto foi desenvolvido com viés educativo para uma prática vinculada ao Programa Institucional de Bolsa de Iniciação à Docência (PIBID).

**Importante:** a simulação não envolve dinheiro real nem oferece prêmios. Seu propósito é exclusivamente educativo.

## Objetivos educacionais

- Compreender a diferença entre probabilidade teórica e frequência relativa.
- Calcular porcentagens a partir dos resultados de um experimento.
- Observar como o tamanho da amostra influencia os resultados obtidos.
- Desenvolver o pensamento crítico diante de informações apresentadas por interfaces digitais.
- Investigar como o código influencia o comportamento de um programa.
- Promover reflexões sobre programação, transparência e cultura digital.

## Como funciona?

O usuário escolhe entre cara e coroa. A cada tentativa, o programa gera um número pseudoaleatório por meio de `Math.random()` e o compara com a probabilidade configurada.

A lógica utilizada é:

```javascript
const PROBABILIDADE_REAL = 0.20;

const sorteio = Math.random();
const venceu = sorteio < PROBABILIDADE_REAL;
```

Se o número gerado for menor que `0.20`, a tentativa é considerada uma vitória. Caso contrário, é registrada como derrota.

A interface também apresenta:

- Contagem de acertos, erros e tentativas.
- Gráfico com as porcentagens observadas.
- Mensagens e imagens de acordo com o resultado.
- Material didático com perguntas investigativas.

## Tecnologias utilizadas

- **HTML5:** estrutura e organização do conteúdo.
- **CSS3:** estilização, identidade visual e adaptação da interface.
- **JavaScript:** lógica do experimento, geração dos resultados e atualização das estatísticas.
- **GitHub Pages:** hospedagem da aplicação.

## Como executar localmente

1. Clone este repositório ou baixe os arquivos.
2. Abra a pasta do projeto.
3. Abra o arquivo `index.html` em um navegador.

Não é necessário instalar dependências ou configurar um servidor para executar a versão estática.

## Questões investigativas

O experimento propõe perguntas como:

- Se a interface anuncia 50% de chance de vitória, qual porcentagem de vitórias é observada após 10, 20 ou 50 tentativas?
- A porcentagem observada corresponde necessariamente à probabilidade teórica?
- Uma diferença entre os valores é suficiente para provar que existe um problema?
- Como o código pode ser utilizado para investigar as regras de um sistema digital?
- Por que é importante questionar as informações apresentadas por aplicativos e plataformas?

## Considerações sobre probabilidade

A porcentagem observada em uma sequência de tentativas é uma frequência relativa, não uma garantia de que a probabilidade teórica esteja correta ou incorreta.

A variação entre os resultados esperados e os observados pode ocorrer naturalmente, especialmente em amostras pequenas. Por isso, a investigação deve considerar tanto os dados coletados quanto as regras implementadas no código.

Neste projeto, a divergência entre os 50% anunciados e os 20% configurados é intencional e pode ser verificada diretamente na implementação.

## Possibilidades de desenvolvimento futuro

- Permitir a alteração da probabilidade real para comparar diferentes cenários.
- Adicionar um histórico detalhado das tentativas.
- Comparar os resultados de vários participantes.
- Criar visualizações para diferentes tamanhos de amostra.
- Aprimorar a acessibilidade e a experiência em dispositivos móveis.

---

**Projeto educativo sobre probabilidade, programação e cultura digital.**