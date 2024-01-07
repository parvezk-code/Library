#include <stdio.h>
#include <stdlib.h>

struct node 
{
	int				data;
	struct node* 	next;
};


int main() 
{
	int size_n		=	sizeof(struct node);

	struct node *s2 = 	(struct node*) calloc(10, size_n);
	
	free(s2);
	  
	return 0;
}


