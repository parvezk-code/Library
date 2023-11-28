public class Max
{
		public static void main(String arg[])
		{
				int a, b, c, max;
				a   =   35;
				b   =   40;
				c   =   15;

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

				System.out.println(max);

		}
}
