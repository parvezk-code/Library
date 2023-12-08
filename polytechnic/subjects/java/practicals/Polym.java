
class Parent
{
		void show()
		{
			System.out.println(" inside parent class");
		}
}


public class Polym extends Parent
{
		void show()
		{
			System.out.println(" inside Child class");
		}

		public static void main(String arg[])
		{
			Parent   p1  =	new Parent();
			Parent   p2  =	new Polym();

			p1.show();
			p2.show();

		}
}
