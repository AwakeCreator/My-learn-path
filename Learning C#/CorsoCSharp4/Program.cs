namespace CorsoCSharp4
{
  internal class Program
  {
    static void Main(string[] args)
    {
      // Questo e' lo stock del negozio
      int taglia = 39;
      string coloreDisponibile = "nero";
      // Nella seguente riga vado a comprare dei pantaloni a mia moglie, lei desidera pantaloni con taglia 39 e che il colore sia nero o blu
      if (coloreDisponibile == "nero" || coloreDisponibile == "blu" && (taglia == 39))
      {
        Console.WriteLine("Hai dei pantaloni da comprare");
      } else
      {
         Console.WriteLine("Non ci sono pantaloni che rispettino le tue richieste");
      }

        // IF ELSE ELSEIF IFANNIDATO
        //  Cambia la variabile per giocare con i risultati 
        int numero = 8;
      if (numero <= 10 && numero % 2 == 1)
      {
        Console.WriteLine($"il numero e' {numero} ed e' dispari");
      } else if (numero <= 10 && numero % 2 == 0) 
      {
        Console.WriteLine($"il numero e' {numero} ed e' pari");
      } else  
      {
        Console.Write("Hai inserito un numero maggiore di 10");  
      }

      // ANNIDATI
      // Il seguente codice verifica se il numero e' pari, cambia la variabile per giocare con i risultati
      numero = 12;
      if (numero % 2 == 0) // se il numero e' pari
      {
        Console.WriteLine($"il numero e' {numero} ed e' pari");
        // Oltre a verificare se e pari di seguito si verifica se la variabile e' minore di 10
        if (numero <= 10)
        {
          Console.WriteLine("ed e' minore o uguale a 10");
        } else
        {
          Console.WriteLine("il numero e' maggiore di 10");
        }
      } else if (numero % 2 == 1 && numero <= 10) /* se il numero e' dispari */
      {
        Console.WriteLine($"il numero e' {numero} ed e' dispari ed e' minore o uguale a 10");
      } else { 
        Console.WriteLine("Il numero inserito e maggiore di 10");
      }

      // Erstellen Sie eine IF-Anweisung, in der überprüft wird, ob die Variable einen Wort oder eine Zahl ist. Wenn es sich um eine Wort handelt, wird überprüft, wie lange das Wort ist. Wenn es sich um eine Zahl handelt, wird überprüft, ob die Zahl gerade oder ungerade ist.
      /*Console.Write("Gib ein Zahl oder ein Wort ein: ");
      string inputBenutzer = Console.ReadLine();
      
      if (double.TryParse(inputBenutzer, out double zahl))
      {
        Console.WriteLine("Du hast ein Nummer eingegeben: " + zahl);
        if (zahl % 2 == 0)
        {
          Console.WriteLine("Und die Zahl ist gerade");
        }
        else
        {
          Console.WriteLine("Und die Zahl ist ungerade");
        }
      } 
      else
      {
        Console.WriteLine("Du hast ein Wort eingegeben: " +  inputBenutzer);
        Console.WriteLine("Das Wort besteht aus: " + (inputBenutzer.Length - 1) + " Buchstaben");
      }*/

      // TERNARY OPERATOR 
      // if else: condition ? caso1 : caso2
      string nome;
      if (5 < 6) nome = "Luca"; else nome = "Matteo";
      nome = 5 < 6 ? "Luca" : "Marco";
      Console.WriteLine(nome);


      Console.Write("Gib einen Zahl ein: ");
      int zahl = int.Parse(Console.ReadLine());
      string nachricht = (zahl % 2 == 0) ? "Die Zahl ist gerade" : "Die Zahl ist ungerade";
      Console.WriteLine(nachricht);


      Console.Write("Gib einen Zahl ein: ");
      int zahl1 = int.Parse(Console.ReadLine());

      Console.Write("Gib noch einen Zahl ein: ");
      int zahl2 = int.Parse(Console.ReadLine());

      Console.WriteLine($"Erste Zahl + Zweite Zahl ist: {zahl1 + zahl2} ");




      /*if (zahl1 < zahl2)
      {
        Console.WriteLine($"{zahl1} ist kleiner als {zahl2}");
      }
      else if (zahl1 > zahl2)
      {
        Console.WriteLine($"{zahl1} ist großer als {zahl2}");
      }
      else if (zahl1 == zahl2)
      {
        Console.WriteLine($"{zahl1} ist gleich mit {zahl2}");
      }*/
      //Console.WriteLine(zahl1 < zahl2 ? $"{zahl1} ist kleiner als {zahl2}" : zahl1 > zahl2 ? $"{zahl1} ist großer als {zahl2}" : $"{zahl1} ist gleich mit {zahl2}");


      /*Console.Write("Gib dein Alter ein: ");
      int userAlter = int.Parse(Console.ReadLine());
      nachricht = userAlter <= 18 ? "Du bist nicht erwachsene" : "Du bist erwachsene"; Console.WriteLine(nachricht);*/

      Console.WriteLine("Möchten Sie einen Führeschein erhalten ? Anworten Sie mit \"ja\" oder \"nein\"");
      string antwort = Console.ReadLine();  
      if (antwort == "ja")
      {
        Console.WriteLine("Wie alt sind Sie ?");
        int alter = int.Parse(Console.ReadLine()); 

        if (alter < 18)
        {
          Console.WriteLine("Sie haben nicht die erfoderliche Alter, um einen Führeschein zu erhalten");
        } 
        else
        {
          Console.WriteLine("Sie können nächste woche mit der Schule beginnen");
        }
      } 
      else if (antwort == "nein")
      {
        Console.WriteLine("Wie kann ich Ihnen weiter helfen ?");
      } 
      else if (antwort == "Keine Ahnung")
      {
        Console.WriteLine("Denken Sie darüber nach, dann, wenn Sie eine Entscheidung getroffen haben, kommen Sie wieder.");
      }
      else
      {
        Console.WriteLine("Ungültige Eingabe. Bitte antworten Sie mit \"ja\" oder \"nein\".");
      }

      Console.ReadLine(); 
    }
  }
}