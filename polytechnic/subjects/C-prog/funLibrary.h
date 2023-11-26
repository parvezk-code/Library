
// syntax : #include "funLibrary.h"

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

