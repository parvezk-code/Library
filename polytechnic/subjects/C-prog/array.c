
#include<stdio.h>
#include<math.h>


int main()
{
	// array index
	int roll[]	= 	{105, 106, 107, 108, 109};
	roll[0]		=	104;
	
	for(int i=0; i<5; i++)
	{
		printf("%d ", roll[i]);
	}

	return(0);
}


