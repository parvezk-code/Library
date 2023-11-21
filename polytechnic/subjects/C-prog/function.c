
#include<stdio.h>
#include<math.h>

/*
	Built-in function		: scanf, printf, sqrt
	User defined function
*/

int cat(int a, int b)
{
    int c = a+b;
    return(c);
}


int main()
{
			
	int p;
	
	p = cat(2, 4);
	p = cat(1, 3);
	p = cat(5, 5);
	
	printf("%d", p);
	
	float e = sqrt(25);
	
	printf("%f", e);
			
	return(0);
}
