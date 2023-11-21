
#include<stdio.h>


int main()
{
    int a=7,i=1, pro;        

    for(a=1;a<8;a++)
    {
        for(i=1;i<11;i++)
        {
            pro = a*i;
            printf("%d ", pro);
        }
        
        printf("\n");
    }

    return(0);
}
