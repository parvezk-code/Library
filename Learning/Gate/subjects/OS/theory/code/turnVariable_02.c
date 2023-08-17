\\ Process-1
while(1)
{
    while(turn!=1);
    # Critical Section
    turn = 0;
    # Remainder Section
}
