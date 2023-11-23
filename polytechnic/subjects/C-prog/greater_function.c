
#include<stdio.h>


int max3(int a, int b, int c)
{
	int max;
		
	if(a>b && a>c)		
	{
		max=a;
	}
	else if(b>c)		
	{
		max=b;
	}
	else 				
	{
		max = c;
	}
		
	return(max);	
}


int main()
{
			
	int d = max3(10, 30, 20);
	
	printf("%d \n", d);
	
	return(0);
}
