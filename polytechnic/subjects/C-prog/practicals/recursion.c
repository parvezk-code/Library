#include<stdio.h>

void show(int n)
{
	printf("%d", n);

	if(n<100)
	{
		show(n+1);
	}
}


int main()
{
	show(1);

	return(0);
}
