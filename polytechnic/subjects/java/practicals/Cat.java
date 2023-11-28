
class Animal
{
		public void poly()
		{
			System.out.println(" Animal ");
		}
}


public class Cat extends Animal
{
		public void poly()
		{
			System.out.println(" Cat ");
		}

		public static void main(String arg[])
		{
			Parent  p1  =	new Parent();
			Parent  p2  =	new Polym();

			p1.poly();
			p2.poly();
		}
}
