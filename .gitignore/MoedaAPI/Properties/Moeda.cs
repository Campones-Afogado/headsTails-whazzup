using System;

namespace MoedaAPI
{
    public enum LadoMoeda
    {
        Cara = 0,
        Coroa = 1
    }

    public class Moeda
    {
        private double _probability = 35;
        private Random _random = new Random();

        public double Probability
        {
            get { return _probability; }
        }

        public LadoMoeda Flip(LadoMoeda escolhaJogador)
        {
            int raffle = _random.Next(0, 100);
            if (raffle < _probability)
            {
                return escolhaJogador;
            }
            else
            {
                return escolhaJogador == LadoMoeda.Cara
                    ? LadoMoeda.Coroa
                    : LadoMoeda.Cara;
            }
        }
    }
}
