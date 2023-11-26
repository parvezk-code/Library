
#include<stdio.h>

int main()
{
		
	
	// 2-D array
	int matrix[2][3]= { {1, 4, 2}, {3, 6, 8} };
	matrix[1][1]	= 7;	
		
	for(int row=0; row<2; row++)
	{
		for(int i=0; i<3; i++)
		{
			printf("%d ", matrix[row][i]);
		}
		printf("\n");
	}
	

	return(0);
}



