		int MyX(int *E, unsigned int size)
		{
			int Y = 0;
			int Z;
			int i, j, k;
			for(i = 0; i < size; i++)
				Y = Y + E[i];
			for(i = 0; i < size; i++)
				for(j = i; j < size; j++)
				{
					Z = 0;
					for(k = i; k <= j; k++)
						Z = Z + E[k];
					if (Z > Y)
						Y = Z;
				}
			return Y;
		}






-------------------------------------- 28 - 46 -------------------------------------------


		int ProcessArray(int *listA, int x, int n)
		{
			int i, j, k;
			i = 0;
			j = n-1;
			do
			{
				k = (i+j)/2;
				if (x <= listA[k])
					j = k-1;
				if (listA[k] <= x)
					i = k+1;
			}
			while (i <= j);
			if (listA[k] == x)
				return(k);
			else
				return -1;
		}





---------------------------------------------------------------------------------






