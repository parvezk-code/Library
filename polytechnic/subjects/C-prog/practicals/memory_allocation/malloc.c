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
	
	struct node s1;

	struct node *s2 = 	(struct node*) malloc(size_n);
	
	s1.data			=	5;
	s2->data		=	10;
	
	free(s2);
	  
	return 0;
}


