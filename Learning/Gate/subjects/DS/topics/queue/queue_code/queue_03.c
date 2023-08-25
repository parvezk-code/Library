while Q is not Empty do
  if S is Empty OR Top(S) <= Head(Q) then
     x:= Dequeue(Q);
     Push (S, x);
  else
     x:= Pop(S);
     Enqueue(Q, x);
  end
 end
