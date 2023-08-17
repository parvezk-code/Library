// Process-0
while(1)
{
    flag[0] = T;
    turn = 1;
    while(turn==1 && flag[1]==T);
    # Critical Section
    flag[0] = F;
    # Remainder Section
}
