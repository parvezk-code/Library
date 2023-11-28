public class Loop
{
		public static void main(String arg[])
		{
				int i;
				
				
				for( i=1; i<11; i++)
				{
					System.out.println(i);
					break;
				}
				
				
				for( i=1; i<11; i++)
				{
					if( i > 5 )
					{
						continue;
					}
					System.out.println(i);
				}

		}
}
