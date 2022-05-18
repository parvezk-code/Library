// https://dart.dev/codelabs/dart-cheatsheet
// https://dart.dev/samples

// data types --> var(dynamic), num(int, double), String
// var are data containers that can store values of any type. 
// Dart has a feature called "type inference", which inferring data-types of values.

// EVERY value in Dart is an object. Even a simple number.


class Student {
  String roll;
  int age;

  // constructor taking names parameters {...} in any order
  Student({this.roll, this.age=30});
}

// params can in any order, since constructor takes named parameters {this.roll, this.age}
Student ravi = Student(roll: 'cs102', age: 18);
Student amit = Student(age: 19, roll: 'cs103');

Map details = {'name': 'ravi', 'age': 25};
print(details['name']);

// async-await in dart
Future.delayed( 
  Duratioin(seconds:3), // delay by 3 secponds
  () {..}               // call back function
);

void getData() async {
  String v = await getNetworkResource1();
  String t = await getNetworkResource2();
}

List<String> names = ["amit","gaurav", "ravi"]

// new feature in dart -- null safty 

// list methods ---> shuffel, where(filter in JS), subList, sort

// iterable

// json data
import 'dart:convert';

var mapData = jsonDecode(str_Json); //convert json_string to a map
var mapValu = json.decode(str_Json);

Map<String, dynamic> studentMap = {'id': 101, 'name':'ravi'};

// https://dart.dev/codelabs/async-await

// https://github.com/dart-lang/http
// https://pub.dev/packages/http
// https://pub.dev/documentation/http/latest/

import 'package:http/http.dart' show get;


// Mixin(with) : a class without a constructor. 
mixin m1 {
  void f1(){ print('hello'); }
}

mixin m2 {
  void f2(){ print('hello'); }
}

Class Stu with m1, m2 {...}



int  a = null;  // INVALID in null-safe Dart.
int? a = null;  // Valid   in null-safe Dart.
int? a;         // initial value is null.



print(1 ?? 3);      // Prints 1.
print(null ?? 12);  // Prints 12.

// ?? operator
b = a ?? 3      // if(a==null) then { b=3 } else { b=a }
a ??= 3;        // if(a==null) then { a=3 }


// ?. operator
obj?.property         // evaluate the property only if(obj!=null) else returns null.
obj?.property?.fun()  // chain multiple uses of ?.

final list = ['one', 'two', 'three'];
final set  = {'one', 'two', 'three'};
final map  = {'a':1, 'b':2, 'c':3  };

// specify the type
final list = <int>[];
final set  = <int>{};
final map  = <int, double>{};

// cascades (..)
obj.fun()       // invokes fun() on obj, return value from fun()
obj..fun()      // invokes fun() on obj, return reference to obj
obj..f1()..f2() // calls obj.f1() then obj.f2()

// optional positional parameters
int sum(int a, [int? b, int? c]){...}

// Named parameters
void set(String name, {int roll, String? dob}) {...}

// A function can’t have both optional positional and named parameters.

// Dart’s exceptions are unchecked exceptions. 
// Methods don’t declare which exceptions they might throw
// it is not necessary to catch any exceptions.



throw Exception('Something bad happened.');
throw 'Waaaaaaah!';



try 
{
  // CODE HERE
} 
on OutOfLlamasException 
{
  // A specific exception
} 
on Exception catch (e) 
{
  // Anything else that is an exception
  print('Unknown exception: $e');
} 
catch (e) 
{
  // No specified type, handles all
  print('Something really unknown: $e');
}

class MyColor {
  int red, green, blue;

  // int values can’t be null so add required keyword
  MyColor({required this.red, required this.green, required this.blue});

  //omit required by adding defaul values
  MyColor({this.red = 0, this.green = 0, this.blue = 0}); 
}

// initializer list is also a handy place to put asserts, which run only during development:


NonNegativePoint(this.x, this.y)
    : assert(x >= 0),
      assert(y >= 0) {
  print('I just made a NonNegativePoint: ($x, $y)');
}


// To allow classes to have multiple constructors, Dart supports named constructors:
class Point {
  double x, y;

  Point(this.x, this.y);

  Point.origin()
      : x = 0,
        y = 0;

  // Redirecting constructors
  Point() : this.origin()
}

final myPoint = Point.origin();

// Const constructors :
// To produces objects that never change,make these objects compile-time constants.
// define a const constructor and make sure that all instance variables are final.

// Factory constructors: can return subtypes(child class obj) or even null.

// Iterable : a collection of elements that can be accessed sequentially.

Iterable<int> iterable = [1, 2, 3]; // Lists/Sets are Iterable 
for (final e in iterable) {..}


// first string in the iterable whose length>5
String element = iterable.firstWhere((element) => element.length > 5);


// verify that all elements satisfy a condition. (true/false)
return items.every((item) => item.length >= 5);

// verify that atlest one element satisfy a condition. (true/false)
return items.any((item) => item.length >= 5);


// where() filter
var listOfEvenNumbers = numbers.where((number) => number.isEven);


// map() : apply a function over each of the element
Iterable<int> output = numbers.map((number) => number * 10);



// takeWhile()  skipWhile()
 

























