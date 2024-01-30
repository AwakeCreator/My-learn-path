namespace Esercizi
{
  internal class Esercizi
  {
    static void Main(string[] args)
    {
      int numero1, numero2, numero3;
      numero1 = 10; numero2 = 20; numero3 = 30;

      const float PI = 3.14f;

      Console.Write("Inserisci un numero intero: ");
      int numeroUtente = int.Parse(Console.ReadLine());
      Console.WriteLine("Hai inserito il numero: " + numeroUtente);

      bool isTrue = true;

      Console.WriteLine(numero1 + numero2);

      float numero = 3.8f;
      int numeroIntero = (int)numero;
      Console.WriteLine(numeroIntero);

      char lettera = 'A';

      int num = 5;
      num++;
      Console.WriteLine(num);

      const string NOME_PRODOTTO = "Computer";
      Console.WriteLine("Il prodotto selezionato e': " +  NOME_PRODOTTO);

      Console.ReadLine();
    }
  }
}