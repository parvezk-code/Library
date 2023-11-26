#include<stdio.h>

int main()
{
			
		int a, b, c, max;

		a	=	10;		// scanf("%d", &a )
		b	=	15;		// scanf("%d", &b )
		c	=	20;		// scanf("%d", &c )

		if(a>b && a>c)		// a is greater
		{
			max=a;
		}
		else if(b>c)		// b is greater
		{
			max=b;
		}
		else 				// c is greater
		{
			max = c;
		}

		printf("%d", max);

		return(0);
}


