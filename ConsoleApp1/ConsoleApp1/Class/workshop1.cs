using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1.Class
{
    public class workshop1
    {
        public string namexx { get; set; }

        public string idx { get; set; }

        public int agex { get; set; }

        public virtual void my_func()
        {
            string[] namexx = ["john", "dew", "kenny", "eiei", "wookong"];
            string[] idx = ["112342", "22467657", "33534234", "4423344", "5542344"];
            int[] agex = [21, 22, 23, 24, 25];

            for (int i = 0; i <= 5; i++)
            {
                Console.WriteLine("\nstudent: " + namexx[i] + " |" + " id student: " + idx[i] + " |" + " age: " + agex[i]);
            }
        }
    }
}
