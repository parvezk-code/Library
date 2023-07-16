#1 file path, mode, open(), read(), file object

#1.1 open() - file-path, mode
#  open() ko call karne k liye 2 cheeje deni padti hai.
#  open() ek file object ko return karta hai. 
#  file Object ki sahayta se file me pravesh kiya jaiaga
#  fObject	= open(filePath, mode)
 
#2 read() - fObject.read()
# read() ko file object ki sahayta se call karte hai.
# read() file ko pad kar data ko return kar deta hai.
# data = fObject.read()

filePath= "/home/newuser/Desktop/python/dog.txt" 	#3.1
mode	= "r" 										#3.2
fObject	= open(filePath, mode) 						#3.3
data = fObject.read()  								#3.4
print(data)   										#3.5


filePath= "/home/newuser/Desktop/python/dog.txt"	#4.1
mode	= "w" 										#4.2
fObject	= open(filePath, mode) 						#4.3
line1   = "i live in sehore"   						#4.4
fObject.write(line1)           						#4.5
fObject.close()				   						#4.6


filePath = "/home/newuser/Desktop/python/dog.txt"	#5.1
mode	 = "w" 										#5.2
fObject	 = open(filePath, mode)  					#5.3
line1    = "i live in sehore \n"     				#5.4
line2    = "i eat apple \n"         				#5.5
line3    = "i study python \n"      				#5.6
lineList = [line1, line2, line3]    				#5.7
fObject.writelines(lineList)        				#5.8
fObject.close()					    				#5.9


import os

filePath = "/home/newuser/Desktop/python/dog.txt"
os.remove(filePath)

dirPath = "/home/newuser/Desktop/python"
os.rmdir(dirPath) 





