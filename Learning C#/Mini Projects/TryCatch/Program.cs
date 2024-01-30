namespace TryCatch
{
  internal class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine("Please enter a number!");
      string userInput = Console.ReadLine();

      int num1 = 5;
      int num2 = 0;
      int result;

      try
      {
        result = num1 / num2;
      }
      catch (DivideByZeroException)
      {
        Console.WriteLine("Can't divide by zero!");
      }

      try
      {
        int userInputAsInt = int.Parse(userInput);
      }
      catch (FormatException)
      {
        Console.WriteLine("Format exception, please enter the correct type next time.");
      } catch (OverflowException)
      {
        Console.WriteLine("Overflow exception, the number was to short or to long for a int32.");
      } catch (Exception)
      {
        Console.WriteLine("General exception.");
      } finally
      {
        Console.WriteLine("This is called anyways!");
      }

      

      Console.ReadKey();

    }
  }
}
