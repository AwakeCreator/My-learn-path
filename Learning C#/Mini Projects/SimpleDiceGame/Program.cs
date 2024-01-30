int playerNum;
int enemyNum;

int playerScore = 0;
int enemyScore = 0;

Random rand = new Random();

for (int i = 0; i < 10; i++)
{

  Console.WriteLine("Apasa orice buton pentru a da cu zarul.");

  Console.ReadKey();

  playerNum = rand.Next(1, 7);

  Console.WriteLine("Ai dat un " + playerNum);

  Console.WriteLine("...");

  System.Threading.Thread.Sleep(1000);

  enemyNum = rand.Next(1, 7);

  Console.WriteLine("Inamicul a dat un " + enemyNum);

  if (playerNum < enemyNum)
  {
    Console.WriteLine("Inamicul castiga.");
    enemyScore++;
  }
  else if (playerNum > enemyNum)
  {
    Console.WriteLine("Jucatorul castiga.");
    playerScore++;
  }
  else
  {
    Console.WriteLine("Este egalitate");
  }

  Console.WriteLine("Scorul este acum - Jucator : " + playerScore + ". Inamicul : " + enemyScore + "." + "\n");
}

if (enemyScore < playerScore)
{
    Console.WriteLine("Jucatorul a castigat");
} else
{
  Console.WriteLine("Inamicul a castigat");
}


Console.ReadLine(); 



