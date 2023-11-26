// break and continue

#include<stdio.h>

int main()
{
		int i;

		for( i=1; i<11; i++ )
		{
			break;
			printf("%d", i);
		}


		for( i=1; i<11; i++ )
		{
			continue;
			printf("%d", i);
		}

		return(0);
}


