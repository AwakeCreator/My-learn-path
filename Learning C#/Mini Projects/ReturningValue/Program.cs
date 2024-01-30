namespace ReturningValue
{
  class Program
  {
    static void Main(string[] args)
    { // Add()
      Console.WriteLine("Add() Method");
      int result = Add(5, 10);
      Console.WriteLine(result);

      Console.WriteLine(Add(43, 4233));
      Console.WriteLine(Add(Add(3, 4), Add(5, 2)));
      Console.WriteLine();

      // Mol()
      Console.WriteLine("Mol() Method");
      int resultMol = Mol(4, 10);
      Console.WriteLine(resultMol);

      Console.WriteLine(Mol(40, 10));
      Console.WriteLine(Mol(Mol(10, 5), Mol(20, 2)));
      Console.WriteLine();

      // Devide()
      Console.WriteLine("Devide() Method");

      double resultDevide = Devide(4, 10);
      Console.WriteLine(resultDevide);

      Console.WriteLine(Devide(40, 35));
      Console.WriteLine(Devide(Devide(10, 3), Devide(20, 3)));
      Console.WriteLine();

      Console.ReadLine();
    }

    public static int Add(int num1, int num2)
    {
      return num1 + num2;
    }

    public static int Mol(int num1, int num2)
    {
      return num1 * num2; 
    }

    public static double Devide(double num1 , double num2)
    {
      return num1 / num2;
    }

  }
}
