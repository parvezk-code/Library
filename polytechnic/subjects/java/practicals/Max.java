public class Max
{
	static int getMax(int a, int b, int c)
	{
		int max;
		
		if( a>b  &&  a>c )
		{
			max = a;
		}
		else if( b>c )
		{
			max = b;
		}
		else
		{
			max = c;
		}

		return(max);
	}

	public static void main(String arg[])
	{
		int max  =  getMax(35, 70, 15);

		System.out.println(max);
	}
}
