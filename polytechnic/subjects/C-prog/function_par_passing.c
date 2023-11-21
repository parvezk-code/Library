
#include<stdio.h>
#include<math.h>

// parameter passing : call-by value
void callValue(int a)
{
	a = 10;
	printf("%d", a);
}

// parameter passing : call-by refrence
void callRefrence(int* a)
{
	*a = 10;
	printf("%d", *a);
}



int main()
{
	int p = 5;
	
	callValue(p);			// call-by value	
	callRefrence(&p);		// call-by refrence
	
	printf("%d", p);	
	return(0);
}
