typedef struct node
{
    int data;
    node* next ;
} node;

void join(node* m, node* n)
{
    node* p = n;
    while (p->next != NULL)
    {
        p = p->next;
    }
    p->next = m;
}
