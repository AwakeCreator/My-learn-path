namespace Esercizi_con_Tipi_di_Dati
{
  internal class Program
  {
    static void Main(string[] args)
    { // Esercizio 1
      int num, num2, num3;
      num = 10;
      num2 = 20;
      num3 = 30;

      // Esercizio 2
      string saluto = "ciao a tutti";
      Console.WriteLine(saluto);

      // Esercizio 3
      decimal decimale = 22.22m;
      Console.WriteLine(decimale * 2);

      // Esercizio 4
      char speciale = '§';
      Console.WriteLine(speciale);

      // Esercizio 5
      bool vero = true;
      Console.WriteLine(vero);

      // Esercizio 6
      int numero = 24;
      numero *= 2;
      Console.WriteLine(numero);

      // Esercizio 7
      float numeroFloat = 23.32f;
      numeroFloat *= 2;
      Console.WriteLine(numeroFloat);

      // Esercizio 8
      double numeroDoppio = 32.4354323;
      double risultato = numeroDoppio * 23;
      Console.WriteLine(risultato);

      // Esercizio 9
      DateTime dataCorrente = DateTime.Now;
      Console.WriteLine(dataCorrente);

      // Esercizio 10
      /*enum GiorniSettimana
      {
      Lunedi,
      Martedi,
      Mercoledi,
      Giovedi,
      Venerdi,
      Sabato,
      Domenica
      }

      GiorniSettimana giorno = GiorniSettimana.Mercoledi;
      Console.WriteLine("Il giorno selezionato è: " + giorno);*/

      Console.ReadLine();
    }
  }
}