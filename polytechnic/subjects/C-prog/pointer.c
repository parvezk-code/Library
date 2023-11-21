

#include <stdio.h>

int main() 
{
	  int  a = 10;		// variable  
	  int* p;			// pointer variable
	  
	  p = &a;			
	  *p = 20;
	  
	  printf("%d", a);
	  
	  
	  return 0;
}
