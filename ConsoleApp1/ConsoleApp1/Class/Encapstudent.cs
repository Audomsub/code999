using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1.Class
{
    public class Encapstudent
    {
        public string name { get;  set; }

        public int id { get; set; }

        public int age { get; set; }
        public virtual void info()
        {
            Console.WriteLine("name: " + name + "id: " + id + " age: " + age);
        }

    }
}
