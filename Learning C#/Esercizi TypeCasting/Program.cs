namespace Esercizi_TypeCasting
{
  internal class Program
  {
    static void Main(string[] args)
    {
      // Esercizio 1
      int numIntero = 1043;
      float numFloat = numIntero;
      Console.WriteLine(numFloat);

      // Esercizio 2
      double numDouble = 32145.54234;
      int numInt = (int)numDouble;
      Console.WriteLine(numInt);

      // Esercizio 3
      string numero = "423";
      int numeroInt = Convert.ToInt32(numero);
      Console.WriteLine(numeroInt);

      // Esercizio 4
      Console.WriteLine("Inserisci un numero intero: ");
      string inputUtent = Console.ReadLine();
      int stringToNumber = int.Parse(inputUtent);
      Console.WriteLine("Il valore intero e': " + stringToNumber);

      // Esercizio 5
      int numeroIntero = 123213;
      double numeroDouble = (double)numeroIntero;
      double risultato = numeroDouble * 2.5;
      Console.WriteLine("Il numero intero 123213 per il numero double 2,5 diventa: " + risultato);

      // Esercizio 6
      double doppioNumero = 23123.52342;
      int interoNumero = (int)doppioNumero;
      Console.WriteLine("Il numero doppio 23123,52342 diventa: " + interoNumero + " intero");

      // Esercizio 7
      float numeroFloat = 42342.23423f;
      int intNumero = (int)numeroFloat;
      Console.WriteLine("Il numero 42342.23423 float convertito in numero int e': " + intNumero);

      // Esercizio 8
      bool vero = true;
      string verissimo = vero.ToString(); 
      Console.WriteLine(verissimo);

      // Esercizio 9
      char uno2tre = 'a';
      int maComesifa = (int)uno2tre;
      Console.WriteLine(maComesifa);

      // Esercizio 10
      

      Console.ReadLine();
    }
  }
}