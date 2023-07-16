class Stack:						#5.1

    def __init__(self):				#5.2
        self.list = []				#5.3
        self.top  = -1				#5.4

    def pop(self):					#5.5

        if(self.top == -1):			#5.6
            pass					#5.7
        else:						#5.8
            x = self.list[self.top] #5.9
            self.list.remove(x)     #5.10
            self.top = self.top - 1 #5.11
            return(x)				#5.12

    def push(self, item):			#5.13

        self.top = self.top + 1		#5.14
        self.list.append(item)		#5.15

s1 = Stack()		#5.16 []
s2 = Stack()		#5.17 []
s1.push("a")		#5.18 ["a"]
s1.push("b")		#5.19 ["a", "b"]
s1.push("c")		#5.20 ["a", "b", "c"]
p1 = s1.pop()		#5.21 ["a", "b"]
p2 = s1.pop()		#5.22 ["a"]
print(p1, p2)		#5.23 c  b
s2.push(1)			#5.24 [1]
s2.push(2)			#5.25 [1, 2]
s2.push(3)			#5.26 [1,2,3]
p1 = s2.pop()		#5.27 [1, 2]
p2 = s2.pop()		#5.28 [1]
print(p1, p2)		#5.29 3 2
