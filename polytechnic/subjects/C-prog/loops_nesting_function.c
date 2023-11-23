
#include<stdio.h>

void printTable(int a)
{
	int multi;
	
	for(int i=1;i<11;i++)
    {
		    multi = a*i;
        printf("%d ", multi);
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


