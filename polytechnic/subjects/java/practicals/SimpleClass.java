public class Student
{
		String	name;
		int		age;
		char	grade;

		student( String n, int a, char g)
		{
			name 	= 	n;
			age		=	a;
			grade	=	g;
		}

		public void show()
		{
			System.out.println(name);
			System.out.println(age);
			System.out.println(grade);

		}


		public static void main(String arg[])
		{
			Student s1 =  new Student("Amit", 21, 'B');

			Student s2 =  new Student("Ravi", 19, 'A');

			s1.show();

		}
}
