/*
    Bit-wise operators : 
    && 		||  	!	
*/

#include<stdio.h>

int main()
{
	int a = 4;
	int b = 5;

    printf( "%d \n",   a&b );		// 4

	printf( "%d \n",   a|b );		// 5
	
	printf( "%d \n",   ~a );		// -5
	
	printf( "%d \n",   a<<1 );		// 8
	
	printf( "%d \n",   a>>1 );		// 2
				
	return(0);
}





