
/*
	Built-in function		: scanf, printf, sqrt
	User defined function
*/

#include<stdio.h>
#include<math.h>


int add(int a, int b)
{
		int c = a+b;
		return(c);
}


int main()
{
			
		int p;

		p = add(2, 4);
		p = add(1, 3);
		p = add(5, 5);

		printf("%d ", p);

		float e = sqrt(25);

		printf("%f", e);

		return(0);
}


