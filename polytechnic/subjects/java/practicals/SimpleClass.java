class Student
{
		String	name, age, grade;

		static String college;

		Student( String n, String a, String g)
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

}

public class SimpleClass
{
		public static void main(String arg[])
		{
			Student s1 =  new Student("Amit", "21", "B");
			Student s2 =  new Student("Ravi", "19", "A");
			s1.show();
		}
}
