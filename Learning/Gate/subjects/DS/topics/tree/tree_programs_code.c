--------------------------------- 4 - 22 ---------------------------------------------------------


        struct CellNode
        {
            struct CelINode *leftchild;
            int element;
            struct CelINode *rightChild;
        }

        int Dosomething(struct CelINode *ptr)
        {
            int value = 0;
            if (ptr != NULL)
            {
                if (ptr->leftChild != NULL)
                    value = 1 + DoSomething(ptr->leftChild);
                if (ptr->rightChild != NULL)
                    value = max(value, 1 + DoSomething(ptr->rightChild));
            }
            return (value);
        }




----------------------------------------- 30 - 48 -------------------------------------------------


        struct CellNode
        {
            struct CellNOde *leftChild;
            int element;
            struct CellNode *rightChild;
        };

        int GetValue(struct CellNode *ptr)
        {
            int value = 0;
            if (ptr != NULL)
            {
                if ((ptr->leftChild == NULL) && (ptr->rightChild == NULL))
                    value = 1;
                else
                    value = value + GetValue(ptr->leftChild) + GetValue(ptr->rightChild);
            }
            return(value);
        }




---------------------------------------- 57 - 73 --------------------------------------------------



    int height(treeptr n)
    {
        if(n == NULL) return -1;
        if(n -> left == NULL)
            if(n -> right == NULL) return 0;
            else return B1; // Box 1
        else
        {
            h1 = height(n -> left);
            if(n -> right == NULL) return (1+h1);
            else
            {
                h2 = height(n -> right);
                return B2; // Box 2
            }
        }
    }





--------------------------------------- 83 - 100 ---------------------------------------------------



typedef struct treeNode* treeptr;
struct treeNode
{
	treeptr leftMostChild, rightSibling;
};
int DoSomething (treeptr tree)
{
	int value=0;
	if (tree != NULL)
	{
		if (tree->leftMostChild == NULL)
			value = 1;
		else
			value = DoSomething(tree->leftMostChild);

		value = value + DoSomething(tree->rightSibling);
	}
	return(value);
}




------------------------------------------------------------------------------------------








