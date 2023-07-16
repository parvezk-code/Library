#  string(wakya), character(akshar)


#1 String Indexing
line  =  "ABC PQR XYZ"       #1.1
# index - 012345678910

# variable ka naam, value, type, 
# who give it value, what len fun does   
l = len(line)    #1.2  


#2 index - 012345678910
t    =    "ABC PQR XYZ"   #2.1

#  2.2  2.3   2.4   2.5   2.6   2.7
#  t[0] t[1]  t[3]  t[6]  t[10] t[11]
#  "A"   "B"  " "    "R"  "Z"   NULL



#index - 012345678910
t   =   "ABC PQR XYZ"   #2.8
#  2.9    2.10    2.11    2.12
# t[2:5] t[7:8] t[4:9]   t[4:5]
# "C P"   " "   "PQR X"  "P"


#index - 012345678910
t   =   "ABC PQR XYZ"   #3.1
# t[0:3]       #3.2 
# t[4:7]       #3.3
# t[8:11]      #3.4


# index -  012345678910
line   =  "cat dog man"    #3.5 
# "cat"     -  line[0:3]   #3.6
# "cat dog" -              #3.7
# "dog man" -              #3.8

#4 split function
# variable ka naam, value, type, 
# who give it value, what len fun does
line = "ab.c.de"           #4.1
list1 = line.split(".")    #4.2

line = "ad,rst,g"          #4.3
list2 = line.split(",")    #4.4

line = "one+god+great"     #4.5
list2 =                    #4.6 [one, god, great]

#5 find function
# variable ka naam, value, type, 
# who give it value, what len fun does
# index-  012345678910
line  =  "cat dog sun"     # 5.1
i = line.find("cat")       #5.2
i = line.find(" ")         #5.3
i =                        #5.4 search "dog"
i =                        #5.5 search "sun"

# revision
# indexing, str[4], str[4:7], str.split("X"), str.find("X")
