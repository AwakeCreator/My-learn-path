namespace Esercizi_Operatori_di_Comparazione
{
  internal class Program
  {
    static void Main(string[] args)
    { // Esercizio 1
      int numero1 = 123; int numero2 = 321;
      bool risultato = numero1 == numero2;
      Console.WriteLine("Il numero1 e' uguale al numero2 ? " + risultato);

      // Esercizio 2
      string parola1 = "ciao"; string parola2 = "Ciao";
      risultato = parola1 == parola2; 
      Console.WriteLine("La parola1 e uguale alla parola2 ? " + risultato);

      // Esercizio 3
      risultato = numero1 > numero2;
      Console.WriteLine("Il numero1 e' maggiore al numero2 ? " + risultato);

      // Esercizio 4
      risultato = numero1 < numero2;
      Console.WriteLine("Il numero1 e' minore al numero2 ? " + risultato);

      // Esercizio 5
      string stringa1 = "Bellissimo";
      string stringa2 = "Bello";
      risultato = stringa1.Length > stringa2.Length;
      Console.WriteLine("La stringa1 e' maggiore della stringa2 ? " + risultato);

      // Esercizio 6
      bool variabile1 = 5 < 6;
      bool variabile2 = 6 < 7;
      risultato = variabile1 && variabile2;
      Console.WriteLine("Esercizio numero 6: " + risultato);

      // Esercizio 7
      numero1 = 10; numero2 = 5;
      risultato = numero1 != numero2;
      Console.WriteLine("Esercizio numero 7: " + risultato);

      // Esercizio 8
      stringa1 = "vajo";
      stringa2 = "che dici vajo";
      risultato = stringa1 != stringa2;
      Console.WriteLine("La stringa1 e' diversa dalla stringa2 ? " + risultato);

      // Esercizio 9
      risultato = numero1 >= numero2;
      Console.WriteLine("Il numero1 e' maggiore o uguale del numero2 ? " + risultato);

      // Esercizio 10
      risultato = numero1 < numero2;
      Console.WriteLine("Il numero1 e' minore di numero2 ? " + risultato);

      Console.ReadLine();
    }
  }
}