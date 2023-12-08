public class Table
{

	static void printTable(int num)
	{
		int i, multi;

		for( i=1; i<11; i++)
		{
			multi	=	num * i;
			System.out.println(multi);
		}
	}

	public static void main(String arg[])
	{
		printTable(7);
	}
}
