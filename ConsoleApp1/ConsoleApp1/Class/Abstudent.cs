using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1.Class
{
	public abstract class Abstudent
	{
		public string Name { get; set; }
		public abstract void Learn();
	}
	public class BachelorStudent : Abstudent
	{
		public override void Learn()
		{
			Console.WriteLine($"{Name} is a bachelor student");
		}
	}
	public class MasterStudent : Abstudent
	{
		public override void Learn()
		{
			Console.WriteLine($"{Name} is a master student");
		}
	}
}
