gen    = [2, "cat", 5.1, "dog"]		#1.1
# index -							#1.2

# gen[1]  gen[2]  gen[5]  gen[1:3]   gen[3:4]        
#  1.2      1.3    1.4      1.5         1.6

gen    = [2, "cat", 5.1, "dog"]		#1.7
gen[2] =  "sun"						#1.8
i1 = gen.index("cat")				#1.9

roll = ["a", "b", "c", "d"]	#3.1
roll.remove("b")			#3.2
roll.remove("c")			#3.3
roll.append("e")			#3.4

lt1 = [30, 40, 10, 20]		#4.1
lt2 = lt1.copy()			#4.2
lt2.reverse()				#4.3  
lt2.sort()					#4.4
 
lt1 = [30, 40, 10, 20]		#5.1
lt3 = lt1 + [50, 60]		#5.2

gen = ["a", "b", "c", "d"]	#6.1
"a" in gen					#6.2
"k" in gen					#6.3

msg  =  "AB+P+X"			#7.1
#index -					#7.2
l = len(msg)				#7.3
i1= msg.find("+")			#7.4
p1= msg.split("+")			#7.5

#        012345678910
msg  =  "cat dog sun"       #8.1

# msg[1]  msg[2]  msg[4:5]  msg[4:9]
#  8.2     8.3      8.4       8.5

msg = "one+god+great"      #9.1
list2 =                    #9.2 [one, god, great]
