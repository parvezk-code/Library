
public class Overloading
{
		void add(int a, int b)
		{
			int c = a + b;
		}

		void add(int a, int b, int c)
		{
			int c = a + b + c;
		}


		public static void main(String arg[])
		{
			Overloading obj	=	new Overloading();

			obj.add(10, 3);

			obj.add(10, 3, 1);

		}
}
