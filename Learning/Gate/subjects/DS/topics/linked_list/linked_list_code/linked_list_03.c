		struct node
		{
			int value;
			struct node *next;
		};
		void rearrange(struct node *list)
		{
			struct node *p, * q;
			int temp;
			if ((!list) || !list->next)
				return;
			p = list;
			q = list->next;
			while(q)
			{
				temp = p->value;
				p->value = q->value;
				q->value = temp;
				p = q->next;
				q = p?p->next:0;
			}
		}
