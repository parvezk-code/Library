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