
#include<stdio.h>
#include<math.h>

// parameter passing : call-by value
void changeValue(int a)
{
	a = 10;
}

// parameter passing : call-by refrence
void changeRefrence(int* a)
{
	*a = 10;
}



int main()
{
	int p = 5;
	
	changeValue(p);			// call-by value
	printf("%d ", p);	
		
	changeRefrence(&p);		// call-by refrence
	printf("%d", p);	
	
	return(0);
}


