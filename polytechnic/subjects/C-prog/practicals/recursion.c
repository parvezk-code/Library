#include<stdio.h>

void print(int n)
{
	print("%d", n);

	if(n<100)
	{
		printf("%d ", n+1);
	}
}


int main()
{
	print(1);

	return(0);
}
