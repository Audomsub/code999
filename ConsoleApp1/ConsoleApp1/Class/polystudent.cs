using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1.Class
{
    internal class polystudent : Encapstudent
    {
        public virtual void info()
        {
            Console.WriteLine("hello" + name);
            Console.WriteLine("id" + id);
        }
    }
}
