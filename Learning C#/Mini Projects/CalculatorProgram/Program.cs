int primulNumar;
int doileaNumar;
int rezultat;

string raspuns = "";


Console.WriteLine("Buna tututor, va voi prezenta un calculator simplu");



while (raspuns != "e")
{
  Console.WriteLine("Te rog introdu primul numar care va face parte din calcul");
  primulNumar = Convert.ToInt32(Console.ReadLine());

  Console.WriteLine("Te rog introdu al doilea numar.");
  doileaNumar = Convert.ToInt32(Console.ReadLine());

  Console.WriteLine("Ce tip de calculare vrei sa faci ? Apasa p sau + pentru adunare, - sau m pentru scadere, * sau o pentru multiplicare sau orice alt buton pentru impartire");

  raspuns = Console.ReadLine();

  if (raspuns == "p" || raspuns == "+")
  {
    rezultat = primulNumar + doileaNumar;
    Console.WriteLine("Rezultatul este " + rezultat);
  }
  else if (raspuns == "-" || raspuns == "m")
  {
    Console.WriteLine("Rezultatul este " + (primulNumar - doileaNumar));
  }
  else if (raspuns == "*" || raspuns == "o")
  {
    Console.WriteLine("Rezultatul este " + (primulNumar * doileaNumar));
  } 
  else
  {
    Console.WriteLine("Rezultatul este " + (primulNumar / doileaNumar));
  }

  Console.WriteLine("apasa enter pentru a continua sau e pentru a iesi.");

  raspuns = Console.ReadLine();

  if (raspuns == "e")
  {
    Console.WriteLine("Iesire din program...\nApasa orice buton pentru a iesi.");
  }
}


Console.ReadLine();