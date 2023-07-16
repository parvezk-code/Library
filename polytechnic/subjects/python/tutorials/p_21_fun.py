# functions - print(), str(), spilt(), sort(), append()
#             remove(), copy(), find(), index(), input(), len()
'''
apple naam ka fun banaya hai, jise call karne k liye 3value dena padegi.
if function me 4 line hai p1, p2, p3 aur return statement. 
4th line me function d variable ki value return kar raha hai.

def apple(a, b, c):      #1.1   
    p1                   #1.2
    p2                   #1.3
    p3                   #1.4
    return(d)            #1.5

x = apple(1, 2, 3)       #1.6
y = apple(4, 5, 6)       #1.7
z = apple(9, 4, 12)      #1.8

line  =  "cat dog sun"     # 1.9
i     =  line.find("cat")  #1.10
a = int(4.7)               #1.11

x ek variable jise value/type apple() function de raha hai. 
isme 3 value di hai 1,2,3. a ki value 1, b ki 2 aur c ki 3 ho  gaiagi.
'''

def double(a):    #1.12
	
	b = 2*a       #1.13
	return(b)     #1.14

c = double(4)     #1.15

def  cal(a, b):     #2.1
    
    c = a + b       #2.2    
    return(c)       #2.3

p = cal(4, 6)            #2.4
q = cal(4.0, 6.0)        #2.5
r = cal( "one ", "god")   #2.6
s = cal( [1,2], [3,4] )   #2.6

# p ek variable hai jise value/type cal() function de raha hai. isme 2 value di hai 4, 6
# line 2.1 me a ki value 4 aur b ki value 6 ho  gaiagi.
# line 2.2 me c ek variable hai jise value a aur b ko jodne kbaad milegi.
# line 2.3 me c ki value(10) return ho rahi hai, ye value 10 p ko mil jaiagi.

def calculator(a, b):    #3.1
	
    c  = a + b           #3.2
    d  = a - b           #3.3
    l1 = [c, d]          #3.4
    return(l1)           #3.5

t = calculator(10, 5)    #3.6
x = calculator(6, 2)     #3.7
