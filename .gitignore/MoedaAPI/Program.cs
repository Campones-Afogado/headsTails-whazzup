
using MoedaAPI;

var builder = WebApplication.CreateBuilder(args);

// Cria a aplicação web
var app = builder.Build();

// Define o endpoint que recebe a escolha do jogador
app.MapPost("/api/moeda/jogar", (JogadaRequest request) =>
{
    // Valida a escolha recebida
    if (!Enum.TryParse<LadoMoeda>(
            request.Escolha, true, out var escolha)
        || !Enum.IsDefined(typeof(LadoMoeda), escolha))
    {
        return Results.BadRequest(new
        {
            erro = "Escolha inválida. Use Cara ou Coroa."
        });
    }

    // Executa a lógica do jogo
    Moeda moeda = new Moeda();
    LadoMoeda resultado = moeda.Flip(escolha);

    // Verifica se o jogador venceu
    bool venceu = resultado == escolha;

    // Devolve os dados ao cliente em JSON
    return Results.Ok(new
    {
        escolha = escolha.ToString(),
        resultado = resultado.ToString(),
        venceu = venceu,
        probabilidadeVitoria = moeda.Probability
    });
});

app.Run();

// Modelo dos dados recebidos na requisição
public record JogadaRequest(string Escolha);
