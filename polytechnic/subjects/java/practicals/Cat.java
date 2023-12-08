
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
			Animal  p1  =	new Animal();
			Animal  p2  =	new Cat();

			p1.poly();
			p2.poly();
		}
}
