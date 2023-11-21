
#include<stdio.h>

void printTable(int a)
{
	int pro;
	
	for(int i=1;i<11;i++)
    {
		pro = a*i;
        printf("%d ", pro);
    }
}


int main()
{
    int a=6;  
    
    for(a=1;a<8;a++)
    {      
		printTable(a);
		printf("\n");
    }
    
    return(0);
}
