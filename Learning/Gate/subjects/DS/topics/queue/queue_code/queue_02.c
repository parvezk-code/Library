void f(queue Q)
{
	int i ;
	if(!isEmpty(Q))
	{
		i = delete(Q);
		f(Q);
		insert(Q, i);
	}
}
