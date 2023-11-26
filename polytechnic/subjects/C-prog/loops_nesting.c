
// Nesting of loops.

#include<stdio.h>


int main()
{
    int a=7,i=1, multi;        

    for(a=1;a<8;a++)
    {
        for(i=1;i<11;i++)
        {
            multi = a*i;
            printf("%d ", multi);
        }
        
        printf("\n");
    }

    return(0);
}
