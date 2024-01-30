namespace ConsoleApp1
{
  internal class Program
  {
    static void Main(string[] args)
    {
      // LAVORARE CON LE STRINGHE
      // escape caratteri, concat, format, interp
      // metodi: toUpper, toLower, Length, indexing, IndexOf, Substring
      string nome = "Luca";
      string cognome = "Rossi";
      // FORMATTAZIONE
      // Se cambi l'ordine nelle { } cambiera l'ordine di output
      Console.WriteLine("Buongiorno sono {0} {1}", nome, cognome);
      string stringa = string.Format("buongiorno sono {0} {1}", nome, cognome);
      Console.WriteLine(stringa + "dsjahfkasfk");

      // INTERPOLAZIONE
      Console.WriteLine($"Calcoliamo senza variabili {5 + 3}  {3}");
      Console.WriteLine($"Buongiorno sono {cognome + " " + nome} {cognome}");

      //toUpper & toLower
      Console.WriteLine(nome.ToUpper());
      Console.WriteLine(cognome.ToLower());

      //LENGTH
      Console.WriteLine(nome.Length);
      Console.WriteLine(cognome.Length);

      //INDEXING
      Console.WriteLine(nome[0]);
      Console.WriteLine(cognome[1]);

      //INDEXOF
      Console.WriteLine(nome.IndexOf("a"));
      Console.WriteLine(cognome.IndexOf("s"));

      //SUBSTRING
      cognome = "Questa parte verra eliminata, ciao a tutti amici.";
      Console.WriteLine(cognome.Substring(30));
      Console.WriteLine(cognome.Substring(cognome.Length - 19));

      //LAVORARE CON I NUMERI
      int a = 5;
      double b = 2;
      int c = a % (int)b; // 5 / 2 = 2 con resto di --> 1
      Console.WriteLine(c);

      a = 21;
      b = 7;
      c = a % (int)b; // 21 / 7 = 3 con resto di --> 0
      Console.WriteLine(c);

      a = ++a; // sarebbe a + 1 o a - 1 se si cambia ++ con --
      Console.WriteLine(a);

      a = 10;
      a = a + 5; // a diventa 15
      a += 5; // la stessa cosa come sopra ma corta
      Console.WriteLine(a); // a diventa 20

      string num = "5";
      string num1 = "10";
      int result = Int32.Parse(num) + Int32.Parse(num1);
      Console.WriteLine(result);
      //OPPURE
      int result1 = Int32.Parse(num + num1); // cosi li concatena
      Console.WriteLine(result1);

      Console.ReadLine();

      //INPUT UTENTI
      Console.WriteLine("Inserisci qualsiasi cosa: "); // scrivi nella console
      string inputUtente = Console.ReadLine(); // quello che verra scritto verra salvato nella variabile string
      Console.WriteLine("hai inserito: " + inputUtente); // stampa la variabile appena scritta

      Console.ReadLine();

      // creare una calcolatrice semplice
      Console.WriteLine("Inserisci un numero: ");
      string primoNumero = Console.ReadLine();

      Console.WriteLine("Inserisci un'altro numero: ");
      string secondoNumero = Console.ReadLine();

      int risultato = Int32.Parse(primoNumero) + Int32.Parse(secondoNumero);
      Console.WriteLine("Il risultato e': "  + risultato);

      Console.ReadLine();
    }
  }
}