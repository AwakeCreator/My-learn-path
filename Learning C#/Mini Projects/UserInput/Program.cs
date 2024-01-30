namespace UserInput
{
  class Program
  {
    static void Main(string[] args)
    {
      // Calculate();
      Console.WriteLine(Calculate());
      Console.Read();
    }

    public static int Calculate()
    {
      Console.WriteLine("Please enter the first number.");
      string number1Input = Console.ReadLine();
      Console.WriteLine("Please enter the second number.");
      string number2Input = Console.ReadLine(); 

      int num1 = int.Parse(number1Input);
      int num2 = int.Parse(number2Input); 

      int result = num1 + num2;
      return result;

      // you can also change the "static int" in "static void" but then you must remove "return result" and type Console.WriteLine(result); now you can just call the Method in void Main(string[] args)

      // Console.WriteLine(result);
    }
  }
}
