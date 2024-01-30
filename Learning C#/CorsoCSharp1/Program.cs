namespace CorsoCSharp1
{
  internal class Program
  {
    static void Main(string[] args)
    {
      // VARIABILI... NON COSTANTI
      // dichiararle 
      string nome; // dichiari che la variabile nome sara una stringa

      // assegnarle
      nome = "Alex"; // visto che si sa gia che tipo di dato metti dentro ora puoi semplicemente mettere un valore di tipo stringa dentro senza dichiararla un'altra volta 

      // inizializzarle
      string cognome = "Jula"; // qui invece viene dichiarata e assegnata direttamente quindi e' inizializzata
      int eta = 27;

      // riassegnarle
      nome = "Veronica";
      cognome = "Stoica";
      eta = 27;

      // PER CREARE LE COSTANTI BASTA AGGIUNGERE "CONST" ALL'INIZIO DEL TIPO DI VARIABILE 
      const string costante = "Questa non puoi riassegnarla";

      Console.WriteLine(nome + "\n" + cognome + "\n" + eta );
      Console.WriteLine("Ciao io sono " + nome);
      nome = "Alex";
      Console.WriteLine("Ho " + eta + " anni");
      Console.WriteLine(nome + " e' il mio primo nome");
      Console.WriteLine("Sono nato il 13 Gennaio");

      string testo = "questa e' una stringa"; // sempre con le " se no non funziona 
      char unCarattere = 's'; // sempre con le ' se no non funziona 
      int intero = 2147483647; // 10 unita fino a due milliardi anche negativi basta che sono senza virgola (punto)
      long lungo = 99999999999999999; // il massimo 18 unita sempre interi 
      float piccolo = 1.123F; // la F o f indica esplicitamente che e' un numero float, se non si aggiunge f sara preso come di default e cioe DOUBLE
      float piccolo2 = (float)1.2; // un'altro modo per dichiarare esplicitamente che il numero e' float e non DOUBLE
      double medio = 15.17; // 15 unita prima del punto e 17 dopo
      decimal grande = 28.29M; // 28 prima e 29 dopo il punto
      decimal grande2 = (decimal)28.29; // stessa cosa come con float ma con M o m 

      // BOOLEAN
      bool vero = true;
      bool falso = false;

      // CASTING O CONVERSIONE --> 3 TIPI
      // implicito, esplicito, metodi di conversione 

      /* 
    	Implicit Casting (automatically) - converting a smaller type to a larger type size
    	char -> int -> long -> float -> double

    	Explicit Casting (manually) - converting a larger type to a smaller size type
   	  double -> float -> long -> int -> char */

      // METODO IMPLICITO (AUTOMATICO)
      int intero2 = 345;
      long lungo2 = intero2; // int in long va bene 

      // Ma long in int non va bene 
      // long lungo3 = 123;
      // int intero3 = lungo3; 
      // E' come prendere una scatola grande per metterla in una piccola... non si puo fare 

      float piccolo3 = 1.123f;
      double medio3 = piccolo3;
      // double medio4 = 123.32; Ma double in float no
      // float piccolo4 = medio4; Stessa stronzata come sopra

      // Risoluzione --> METODO ESPLICITO (MANUALE)
      long lungo3 = 1233141;
      int intero3 = (int)lungo3; // Si converte in int esplicitamente
                                 // Oppure 
      double medio4 = 12312.13232;
      float piccolo4 = (float)medio4; // Si converte in float esplicitamente
                                      // Oppure 
      decimal grande5 = 123.123m;
      int intero5 = (int)grande5; // diventera solo 123 intero

      // METODO DI CONVERSIONE
      int prova = 3242;
      // string numero_a_stringa = (string) prova; non funziona
      double medio5 = 24.42;
      bool bullo = false;

      string converti_in_stringa = Convert.ToString(prova);

      Console.WriteLine(prova);
      Console.WriteLine(Convert.ToString(prova));
      Console.ReadLine();
    }
  }
}