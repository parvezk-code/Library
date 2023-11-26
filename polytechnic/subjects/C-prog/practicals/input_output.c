/*
    input  : scanf()
    output : printf()
    format specifiers : %d %f %c %s %p
*/

#include<stdio.h>

int main()
{
	int a = 10;

    scanf("%d", &a);

    printf("%d ",a);
    
    printf("%p ", &a);
				
	return(0);
}





