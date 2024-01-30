namespace Esercizi_Operatori_Logici
{
  internal class Program
  {
    static void Main(string[] args)
    { // Esercizio 1
      bool valore1 = 5 < 10; // VERO
      bool valore2 = 8 > 10; // FALSO
      bool risultato = valore1 && valore2;
      Console.WriteLine("Sono entrambi veri ? " + risultato);

      // Esercizio 2
      risultato = valore1 || valore2;
      Console.WriteLine("Almeno uno e' valore1 ? " + risultato);

      // Esercizio 3
      risultato = !valore1;
      Console.WriteLine("Il contrario del risultato: " + risultato);

      // Esercizio 4
      risultato = (valore1 && valore2) || (valore1 && valore1) || (valore2 && valore2);
      Console.WriteLine("Verifica se almeno una e' vera: " + risultato);

      // Esercizio 5
      risultato = !valore2 && !valore2;
      Console.WriteLine("Entrambi i valori sono falsi ?" + risultato);

      // Esercizio 6
      risultato = (valore1 && !valore2) || (!valore1 && valore2);
      Console.WriteLine("Uno dei valori e' vero e l'altro e' falso ? " + risultato);

      // Esercizio 7


      // Esercizio 8


      // Esercizio 9


      // Esercizio 10


      Console.ReadLine();

    }
  }
}