			struct item
			{
				int data;
				struct item * next;
			};
			int f(struct item *p)
			{
				return ((p == NULL) ||
						(p->next == NULL) ||
						((P->data <= p->next->data) && f(p->next)));
			}
