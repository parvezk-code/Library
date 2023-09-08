-------------------------------- 4 to 9 --------------------------------------------


        struct data
        {
            int     marks [100];
            char    grade;
            int     cnumber;
        } student;


------------------------------------ 16 to 27-------------------------------------------------



    MOV B, # 0    ;   B <- 0
    MOV C, # 8    ;   C <- 8
Z:  CMP C, # 0    ;   compare C with 0
    JZ  X         ;   jump to X if(zeroFlag=1)
    SUB C, # 1    ;   C <- C - 1
    RRC A, # 1    ;   Circular RightRotate(A_CB)
                  ;   Carry_Bit(CB) = 1
    JC Y          ;   jump to Y if(carryFlag=1)
    JMP Z         ;   jump to Z
Y:  ADD B, # 1    ;   B <- B + 1
    JMP Z         ;   jump to Z
X:



-------------------------------------- 33 to 43 -----------------------------------------------

b=0; c=8;
while(C != 0)
{
    C = C - 1;
    CB = 1   //CB = CarryBit
    CircularRightRotate(A_CB)
    if(CB == 1)
    {
        B = B + 1
    }
}



---------------------------------- 50 to 55---------------------------------------------------


    Instruction         Operation               Instruction Size(in words)
    MOV R1,5000;        R1 <- Memory[5000]           2
    MOV R2, (R1);       R2 <- Memory[(R1)]           1
    ADD R2, R3;         R2 <- R2 + R3                1
    MOV 6000, R2;       Memory[6000] <- R2           2
    HALT                Machine halts                1



-------------------------------------------------------------------------------------





-------------------------------------------------------------------------------------





-------------------------------------------------------------------------------------
