namespace Esercizi_Lavorare_con_Stringhe
{
  internal class Program
  {
    static void Main(string[] args)
    { 

      // Esercizio 8
      Console.WriteLine("Inserisci un testo: ");
      string input = Console.ReadLine();
      Console.WriteLine("Inserisci la parte del testo che vuoi sostituire: ");
      string input2 = Console.ReadLine();
      Console.WriteLine("Inserisci il nuovo testo: ");
      string nuovoTesto = Console.ReadLine();
      string testoSostituito = input.Replace(input2, nuovoTesto);
      Console.WriteLine("Il nuovo testo e': " +  testoSostituito);

      // Esercizio 9


      // Esercizio 10


      Console.ReadLine();

    }
  }
}