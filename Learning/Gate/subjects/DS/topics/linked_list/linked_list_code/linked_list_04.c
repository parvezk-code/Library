			typedef struct node
			{
				int value;
				struct node *next;
			}Node;

			Node *move_to_front(Node *head)
			{
				Node *p, *q;
				if ((head == NULL: || (head->next == NULL))
					return head;
				q = NULL; p = head;
				while (p-> next !=NULL)
				{
					q = p;
					p = p->next;
				}

				----------------Blank Line------------------

				return head;
			}
