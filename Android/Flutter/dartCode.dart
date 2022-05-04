class Student {
  String roll;
  int age;

  // constructor taking names parameters {...} in any order
  Student({this.roll, this.age});
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