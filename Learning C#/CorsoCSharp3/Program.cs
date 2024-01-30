namespace CorsoCSharp3
{
  internal class Program
  {
    static void Main(string[] args)
    {
      // OPERATORI DI COMPARAZIONE E LOGICI
      Console.WriteLine(5 < 6); // true e' minore di 6

      Console.WriteLine(5 > 6); // false e' maggiore di 6

      Console.WriteLine(5 == 6); // false e' uguale a 6

      Console.WriteLine(5 != 6); // true non e' uguale a 6

      Console.WriteLine(5 < 3 && 5 > 6); // false, con && entrambe le  condizioni devono essere vere

      Console.WriteLine(5 < 3 || 5 > 2); // vero, con || almeno una deve essere vera

      bool isOnline = true;
      Console.WriteLine(isOnline); // true 
      Console.WriteLine(!isOnline); // false

      





      Console.ReadLine();
    }
  }
}