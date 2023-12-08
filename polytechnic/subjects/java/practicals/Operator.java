public class Operator
{
	void arithmatic()
	{
		int		sum		=	10 + 5;
		int 	diff 	=	10 - 3;
		int	 	mult	=	10 * 2;
		int		div		=	10 / 2;
		int		mod		=	10 % 4;
		int		a		=	5;

		a++;
		a--;
	}

	void comparative()
	{
		int x = 5;
        int y = 3;

        System.out.println(x == y);
        System.out.println(x > y);
        System.out.println(x < y);
	}

	void logical()
	{
		int x = 5;
        int y = 3;

        System.out.println(  (x > 3) && (y < 10)  );
        System.out.println(  (x > 3) || (y < 10)  );
        System.out.println(  !(x > 3)  );
	}

	public static void main(String arg[])
	{

	}
}
