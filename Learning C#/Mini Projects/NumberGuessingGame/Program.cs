bool esteCorectRaspunsul = false;

Random random = new Random();

int numarul = random.Next(1, 11);

Console.WriteLine("Bun venit la ghicitorul de numar.");
Console.WriteLine("Un numar intre 1 si 10 va fi generat.");
Console.WriteLine("Daca ghicesti numarul castigi.");

while (!esteCorectRaspunsul)
{
  Console.WriteLine("Te rog introdu numarul care crezi ca este corect.");

  int numJucator = Convert.ToInt32(Console.ReadLine());

  if (numJucator < numarul)
  {
    Console.WriteLine("Numarul este prea mic, mai incearca.");
  }
  else if (numJucator > numarul)
  {
    Console.WriteLine("Numarul este prea mare, mai incearca.");
  }
  else
  {
    Console.WriteLine("Corect :).");
    esteCorectRaspunsul = true;
  }
}

Console.WriteLine("Felicitari, ai castigat jocul.");


Console.ReadLine();