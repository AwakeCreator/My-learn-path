using System.Security.Cryptography;

namespace Esercizi_Lavorare_con_i_Numeri
{
  internal class Program
  {
    static void Main(string[] args)
    { // Esercizio 1
      int numero1 = 55;
      int numero2 = 45;
      int risultato = numero1 + numero2;
      Console.WriteLine("Il risultato del numero1 + numero2 e': " + risultato);

      // Esercizio 2
      numero1 = 55;
      numero2 = 45;
      risultato = numero1 - numero2;
      Console.WriteLine("Il risultato del numero1 - numero2 e': " + risultato);

      // Esercizio 3
      numero1 = 55;
      numero2 = 45;
      risultato = numero1 * numero2;
      Console.WriteLine("Il risultato del numero1 * numero2 e': " + risultato);

      // Esercizio 4
      numero1 = 55;
      numero2 = 45;
      decimal risultato1 = (decimal) numero1 / numero2;
      Console.WriteLine("Il risultato del numero1 / numero2 e': " + risultato1);

      // Esercizio 5
      decimal numeroDecimale1, numeroDecimale2;
      numeroDecimale1 = 423421.4213214m;
      numeroDecimale2 = 342323.4324234m;
      risultato1 = numeroDecimale1 / numeroDecimale2; 
      Console.WriteLine("Il numeroDecimale1 / numeroDecimale2 e': " + risultato1);

      // Esercizio 6
      int num1 = 26;
      int num2 = 5;
      int resto = num1 % num2;
      Console.WriteLine("Il resto tra num1 e num2 e': " + resto);

      // Esercizio 7
      numero1 = 111;
      numero1++;
      Console.WriteLine("Il numero1 cioe 111 incrementato di 1 e': " + numero1);

      // Esercizio 8
      numero1 = 111;
      numero1--;
      Console.WriteLine("Il numero1 cioe 111 decrementato di 1 e': " + numero1);

      // Esercizio 9
      double numeroRadice = 26;
      double risultato2 = Math.Sqrt(numeroRadice);
      Console.WriteLine("La radice quadrata di numeroRadice e': " + risultato2);

      // Esercizio 10
      Random random = new Random();
      int numeroCasuale = random.Next(0, 50);
      Console.WriteLine("Il numero casuale e': " + numeroCasuale);

      Console.ReadLine();
    }
  }
}