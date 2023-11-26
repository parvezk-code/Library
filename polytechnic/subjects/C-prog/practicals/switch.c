
#include<stdio.h>
#include<math.h>

int max(int a, int b, int c)
{
    
    int max;
    
    if(a>b && a>c)
    {
		max = a;
	}
    else if(b>c)
    {
		max = b;
	}
	else
	{
		max = c;
	}
	
	return(max);	
}

void printTable(int a)
{
	int i, multi;
	
	for(i=1;i<11;i++)
	{
		multi = a * i;
		printf("%d ", multi);
	}
}

int add(int a, int b)
{
	int c = a + b;
	return(c);
}

void addR(int a, int b, int* c)
{
	*c = a + b;
}

int main()
{
	int i;
	
	i = add(3,4);
	
	addR(5, 6, &i);
	
	printf("%d", i);
	
			
	return(0);
}
