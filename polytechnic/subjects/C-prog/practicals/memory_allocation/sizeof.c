

#include <stdio.h>

struct node 
{
	int		p;
	float 	q;
	char	r;
};


int main() 
{
	int size_i		=	sizeof(int);
	int size_f		=	sizeof(float);
	int size_c		=	sizeof(char);
	int size_n		=	sizeof(struct node);

	printf("%d\n", size_i);
	printf("%d\n", size_f);
	printf("%d\n", size_c);
	printf("%d\n", size_n);

	  
	return 0;
}


