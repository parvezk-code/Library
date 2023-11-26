
// Author 	: Ravi Kumar
// Date		: 03-11-23
// Place	: Nasrullaganj


#include<stdio.h>

int main()
{
			
	int a, b, c, max;

	a=10; 
	b=15; 
	c=20;
			
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


