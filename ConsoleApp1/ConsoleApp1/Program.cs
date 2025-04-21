
using System.ComponentModel;
//using ConsoleApp1.Class;



//polystudent Polystudent = new polystudent();
//Polystudent.name = "dew2";
//Polystudent.id = 5555;
//Polystudent.age = 23;
//Polystudent.info();

//Abstudent abstudent = new MasterStudent();
//abstudent.Name = "dewxx";
//abstudent.Learn();

//Abstudent abstudent2 = new BachelorStudent();
//abstudent2.Name = "dewxxxxx";
//abstudent2.Learn();



//int score = 102;

//if (score >= 80 || score <= 100)
//{
//    Console.WriteLine("A");
//}
//else if (score >= 70)
//{
//    Console.WriteLine("B");
//}
//else if (score >= 60)
//{
//    Console.WriteLine("C");
//}
//else if (score >= 50)
//{
//    Console.WriteLine("D");
//}
//else
//{
//    Console.WriteLine("F");
//}

//Console.WriteLine("===================================================================");


//int day = 7;
//switch (day) {
//    case 1: 
//        Console.WriteLine("Sunday");
//        break;
//    case 2:
//        Console.WriteLine("Monday");
//        break;
//    case 3:
//        Console.WriteLine("Tuesday");
//        break;
//    case 4:
//        Console.WriteLine("Wensday");
//        break;
//    case 5:
//        Console.WriteLine("Tursday");
//        break;
//    case 6:
//        Console.WriteLine("Friday");
//        break;
//    case 7:
//        Console.WriteLine("Sadterday");
//        break;
//    default:
//        Console.WriteLine("error is not day");
//        break;
//}

//Console.WriteLine("===================================================================");



//int[] array = new int[] { 10, 20, 30 };
//int count = array.Length;

//for(int i = 0; i <= count; i++)
//{
//    Console.WriteLine(array[i]);
//}


//Console.WriteLine("===================================================================");

//internal class program
//{
//    static void my_hello()
//    {
//        Console.WriteLine("halooooooooo");
//    }
//    static void Main(string[] args)
//    {
//        my_hello();
//    }
//}


using ConsoleApp1.Class;

//Encapstudent student = new Encapstudent();
//student.name = "dew";
//student.id = 666666;
//student.age = 21;
//student.info();
workshop1 work = new workshop1();
work.my_func();

static void Main(string[] args)
{
    Console.WriteLine("Give the hight of the pyramid");
    string _spatie = " ";
    string _ster = "*";
    int _aantal = Convert.ToInt32(Console.ReadLine());

    for (int i = 1; i <= _aantal; i++) // loop for height
    {

        for (int d = i; d < _aantal; d++) // loop for spaces
        {
            Console.Write(_spatie);
        }

        for (int e = 1; e <= i; e++) // loop for stars
        {
            Console.Write(_ster);
        }

        Console.WriteLine();
    }

    Console.ReadKey();
}