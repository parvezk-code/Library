public class Arrays
{
		public static void main(String arg[])
		{
				int i;

				String[] color = {"Red", "Blue", "Green", "Pink"};

				System.out.println(color[2]);

				System.out.println(color.length);

				for ( i=0; i < color.length; i++ )
				{
					System.out.println(color[i]);
				}


				int[][] myNumbers = { {1, 2, 3, 4}, {5, 6, 7} };
				System.out.println(myNumbers[1][2]);
		}
}
