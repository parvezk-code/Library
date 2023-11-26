
// Nesting of loops.

#include<stdio.h>

int main()
{
        int num, i, multi;

        for( num=1 ; num<8; num++ )
        {
                for( i=1; i<11; i++ )
                {
                    multi = num * i;
                    printf("%d ", multi);
                }

                printf("\n");
        }

        return(0);
}
