
class Parent
{
		String name, city;
}


public class Child extends Parent
{
		int age;

		public static void main(String arg[])
		{
			Child obj	=	new Child();
			obj.name	=	"Amit";
			obj.city	=	"Sehore";
			obj.age		=	25;

			Parent  p1  =	new Parent();
			Parent  p2  =	new Child();

		}
}
