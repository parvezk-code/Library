

#include <stdio.h>

int main() 
{
	  int  a = 10;		// variable  
	  int* p = &a;		// pointer variable
			
	  *p = 20;  
	  printf("%d", a);
	  
	  return 0;
}


