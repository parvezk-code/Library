
class Parent
{
		void show()
		{
			System.out.println(" inside parent class");
		}
}


public class Overriding extends Parent
{
		void show()
		{
			System.out.println(" inside Child class");
		}

		public static void main(String arg[])
		{
			Parent  	p1  =	new Parent();
			Overriding  c1  =	new Child();

			p1.show();
			c1.show();

		}
}
