// Process-1
while(1)
{
    flag[1] = T;
    turn = 0;
    while(turn==0 && flag[0]==T);
    # Critical Section
    flag[1] = F;
    # Remainder Section
}
