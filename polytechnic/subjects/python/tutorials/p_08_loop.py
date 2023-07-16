
'''
 programs using loops
'''

# string
name = "ABCDE"

for item in name:
    print(item)


for item in [1,2,3,4,5]:
    print(item)

#range(0,11,2) -> 0,2,4,6,8,10
#range(0,21,3) -> 0,3,6,9,12,15,18
#range(0,21,4) -> 0,4,8,12,16,20
#range(50,61,2)->
#range(50,61,3)->
#range(50,61,4)->

#range(101) -> 0,1,2.......100
for item in range(101):
    print(item)


#range(5,11,1) -> 5,6,7,8,9,10
for item in range(5,11,1):
    print(item)


# list
stuList = ["ravi", "amit", "rahul", "shyam"]

for item in stuList: # stu list me pratyek
    print(item)      #item k liye


# break statement
#range(1,11) -> 1,2.......10
for item in range(1,11):
    print(item)
    if(item==4):
        break


item = 1
while(item<5):     # for item in range(1,5,1)
    print(item)
    item = item + 1



for item in range(1,11):
     pass



#nested loop
for item in [1,2,3]:
    for it in ["A", "B", "C"]:
        print(item,it)


