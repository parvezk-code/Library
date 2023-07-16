def apple(p, q):	#1.1
	
	r = p + q		#1.2
	return(r)		#1.3
	
a = apple(10, 20)			#1.4
b = apple(1.1, 2.2)			#1.5
c = apple("sun-", "cat")	#1.6
d = apple( [1,2], [3,4])	#1.7

'''
class Stack:
	
	def __init__(self):
		# एक खाली list और top नाम का variable बनाओ 

	def push(self, item):
		# top variable की value को एक से बढ़ाओ
		# list में item को जोड़ो /insert करो (append)
 
	def pop(self):
		# top variable की value को एक से घटाओ
		# item = list के top का data 
		# list में item को delete करो (remove)
'''

class Stack:                        #2.1

    def __init__(self):             #2.2
        self.list = []              #2.3
        self.top  = -1              #2.4
    
    def push(self, item):           #2.5
        self.top = self.top + 1     #2.6
        self.list.append(item)      #2.7

    def pop(self):                  #2.8
        index = self.top            #2.9
        item = self.list[index]     #2.10
        self.list.remove(item)      #2.11
        self.top = self.top - 1     #2.12
        
s1 = Stack()	#2.13
s1.push(15)		#2.14
s1.push(30)		#2.15
s1.push(56)		#2.16
s1.pop()		#2.17
s1.pop()		#2.18
