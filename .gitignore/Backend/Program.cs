
using System;
using lab_1___simulador_de_moeda.Backend;

class Program
{
    static void Main(string[] args)
    {
        // Cria o objeto que representa a moeda
        Moeda moeda = new Moeda();

        // Define a escolha do jogador
        LadoMoeda escolha = LadoMoeda.Cara;

        // Executa o lançamento
        LadoMoeda resultado = moeda.Flip(escolha);

        // Exibe os resultados
        Console.WriteLine($"Sua escolha: {escolha}");
        Console.WriteLine($"Resultado: {resultado}");

        // Verifica se o jogador venceu
        if (escolha == resultado)
        {
            Console.WriteLine("Você venceu!");
        }
        else
        {
            Console.WriteLine("Você perdeu!");
        }
    }
}
