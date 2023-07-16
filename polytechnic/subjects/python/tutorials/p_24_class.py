
class Janvar:
	def __init__(self, a, b, c, d ):
		self.leg = a
		self.sing = b
		self.pankh = c
		self.pooch = d

cat = Janvar(4, 0, 0, 1)
kabotar = Janvar(2, 0, 2, 0)
cow = Janvar(4, 2, 0, 1)

class Gadi:
	def __init__(self, a, b, c, d ):
		self.tyre = a
		self.engine = b
		self.seat = c
		self.window = d

	def jankari(self):
		print(self.tyre, self.engine, self.seat)

car = Gadi(4, 1, 5, 4)
cycle = Gadi(2, 0, 1, 0)
bus = Gadi(4, 1, 50, 25)
auto = Gadi(3, 1, 5, 0)



class Book:
	def __init__(self, a, b, c, d ):
		self.page = a
		self.lekhak = b
		self.keemat = c

physics = Book(4, 0, 0, 1)
maths = Book(2, 0, 2, 0)
python = Book(4, 2, 0, 1)

# Result( mat, phy, hin, yog, per)
# yog = mat + phy + hin
# per = yog/3

class Result:

    def __init__(self, a, b, c):
        self.mat = a
        self.phy = b
        self.hin = c
        self.yog = self.mat + self.phy + self.hin #180
        self.per = self.yog/3 #60

    def dikhao(self):
        print(self.yog)  #180
        print(self.per)  #60

kanchan = Result(35, 45, 100)
kanchan.dikhao()

varsha = Result(50, 50, 70)
varsha.dikhao()
#Result.dikhao()


class Calculator3:				#4.1

	def __init__(self, p, q):	#4.2
		self.a = p				#4.3
		self.b = q				#4.4

	def jodo(self):				#4.5
		c = self.a + self.b		#4.6
		return(c)				#4.7

	def ghatao(self):			#4.8
		c = self.a - self.b		#4.9
		return(c)               #4.10

	def guna(self):				#4.11
		c = self.a * self.b		#4.12
		return(c)               #4.13

	def bhag(self):				#4.14
		c = self.a / self.b		#4.15
		return(c)				#4.16

c1 = Calculator3(10,5)			#4.17
p = c1.jodo()					#4.18
q = c1.ghatao()			    	#4.19
r = c1.guna()					#4.20
s = c1.bhag()					#4.21
