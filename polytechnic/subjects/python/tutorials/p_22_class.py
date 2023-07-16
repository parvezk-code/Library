# class(variables, functions) objects

# Student1 naam ki class banaya gaya hai, Student1 class kyo hai?
# Student1 class me ek fun hai __init__(). init fun kyo hai?

class Student1:				#1.1
    def __init__(self):		#1.2
        self.roll = 101		#1.3

#t1 = Student1.init()		#1.4
t1 = Student1()				#1.5
t2 = Student1()				#1.6

''' t1 ek variable hai  aur Student1 class ka object hai.
t1 ko value/type Stu1 class ka init() dega. init me ek object hai self.
t1 aur self object ki value aur type ek samaan hongi.
Student1() se matlab Student.init() hai, jisse init() call ho jai ga.'''

'''Student3 naam ki class banaya gaya hai, jisme ek function hai init().
init() ko call karne k liye 3 cheeje deni padengi.
pahli value(self) khud pass ho jaigi. isliye bracket() me 2 value denge.
'''

class Student3:
    def __init__(self, a, b):	#3.1
        self.age  = a			#3.2
        self.roll = b			#3.3

ravi = Student3(15, 101)		#3.4
amit = Student3(16, 102)		#3.5

''' Student3(15,101) karne par init() function call ho jaiaga.
self ki value hogi ravi, a ki 15 aur b ki 101. '''


class Result:
		
	def __init_(self, a, b, c):
		self.maths   = a
		self.science = b
		self.hindi   = c
		self.total   = a+b+c

	def show(self):
        print(self.total)

gunjan = Result(67, 75, 59)
kanchan= Result(68, 70, 65)

gunjan.show()
kanchan.show()

'''
class Gadi(tyre, engine, seat, window)
class Janvar(leg, sing, pankh, pooch)
class Book(page, lekhak, price)
class Subject(teacher, unit, lecture)
class Student(roll, age, marks)
class TV(price, size, color)
class Imarat( kamre, darwaje, khidki, manjil)
class Registration(year, college, branch, roll)  19066c04012
'''
