
#include<stdio.h>

// char array is string 

int main()
{
	char name[] = 	"Cat Dog";
	//   name[] = 	['C', 'a', 't', ' ', 'D','o','g'];
				
	printf("%s ", name);
				
	name[0] = 'B';
				
	printf("%c", name[0]);

	return(0);
}




