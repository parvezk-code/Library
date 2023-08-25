void insert(Q, x)
{
	push (S1, x);
}

void delete(Q)
{
	if(stack-empty(S2)) then
		if(stack-empty(S1)) then {
			print("Q is empty");
			return;
		}
		else while (!(stack-empty(S1))){
			x=pop(S1);
			push(S2,x);
		}
	x=pop(S2);
}
