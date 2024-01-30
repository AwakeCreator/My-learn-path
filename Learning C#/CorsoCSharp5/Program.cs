namespace CorsoCSharp5
{
  internal class Program
  {
    static void Main(string[] args)
    { // SWITCH; SINTASSI SWITCH; IF ANNIDATI
      Console.WriteLine("Im Folgenden werden wir zwei Zahlen nach deiner Wahl berechnen");
      Console.WriteLine("Gib ein Zahl ein: ");
      int userInput = int.Parse(Console.ReadLine());

      Console.WriteLine("Super, jeztz gib den zweite Zahl ein: ");
      int userInput2 = int.Parse(Console.ReadLine());

      Console.WriteLine("Und der Operator noch: ");
      string userInput3 = Console.ReadLine();
      switch (userInput3)
      {
        case "+":
          Console.WriteLine(userInput + userInput2);
          break;

        case "-":
          Console.WriteLine(userInput - userInput2);
          break;

        case "*":
          Console.WriteLine(userInput * userInput2);
          break;

        case "/":
          Console.WriteLine(userInput / userInput2);
          break;
        default:
          Console.WriteLine("Du musst einen der folgenden Operatoren verwenden: +, -, *, /");
          break;
      }

      Console.ReadLine(); 
    }
  }
}