#1.1  List type, collection
#1.2  List items - square bracket - []

#2 List Indexing
gen    = [2, "cat", 5.1, 7, "dog"]     #2.1
#index -  0    1     2   3    4        #2.2

#3 index  0     1     2     3    
t =    [101,  102,  103,  104 ]    #3.1  
#       t[0]  t[1]  t[2]  t[3] t[4]


#index   0   1   2
gen =  [101,102,103]  #3.5 
gen[0] =  "a"   #3.6  ["a", 102, 103]
gen[1] =  "b"   #3.7  ["a", "b", 103]

#index-   0    1     2   3    4
lt1 =   ["a", "b", "c", "d", "e"]  #4

#   4.1   4.2   4.3   4.4
#   0:2   1:5   3:7   2:3

#   4.5         4.6       4.7
# lt1[0:2]   lt1[2:4]   lt1[1:5]


#8 join two list
lt1 = ["a", "b"]   #8.1
lt2 = ["c", "d"]   #8.2
lt3 = lt1 + lt2    #8.3 ["a", "b", "c", "d"]

#10 condition ==  <  >  in
roll = ["a", "b", "c", "d"] #10.1
"a" in roll   #10.1
"e" in roll   #10.2
"c" in roll   #10.3

#11 iterating looping
for t in roll:
    print(t)

# revision
# indexing, lt[4], lt[4:7]
# lt.append(item), lt.remove(item)
# lt.copy(), lt.sort(), lt.reverse()
# lt.index(),  in
