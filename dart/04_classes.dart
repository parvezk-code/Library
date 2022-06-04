// Mixin(with) : a class without a constructor. for usability
mixin m1 {
  void f1(){ print('hello'); }
}

mixin m2 {
  void f2(){ print('hello'); }
}

class Point with m1, m2{
  double x, y;    // non-nullable fileds should be initialized in constructors.
  double? z;      // nullable  fileds  need not be initialized in constructors.

  // constructor taking named parameters {...} in any order
  // required keyword not needed if defaul values are provided
  Point({required this.x, this.y=10, this.z});

  // named constructors: to allow multiple constructors
  Point.blue(this.x, this.y);

  // initializer list
  Point.origin() 
    : x=0,
      y=0{
        // constructor body
      }

  // Redirecting constructors
  // my understanding : can not have body
  Point.red() : this.origin();
}

// params can in any order, since constructor takes named parameters {this.x, this.y, this.z}
final myPoint = Point(z:20, x:40);
final nyPoint = Point.origin();

// initializer list is also a handy place to put asserts, which run only during development:
/*
  Point(this.x, this.y)
      : assert(x >= 0),
        assert(y >= 0) {
    print('I just made a NonNegativePoint: ($x, $y)');
  }
*/

class Rectangle {

    // final fields can never be re-assigned. assign them a value in the constructor. 
    final int len, wid;

    Rectangle(this.len, this.wid);

    @override
    String toString() => "${this.len}, ${this.wid}";

    //static members

    // private members : start with under-score(_) 
    void _privateMethod() {} // starts with undescore(_)

    void publicMethod()   {_privateMethod();}

    // getters methods are treated as properties
    int get perimeter => (len + wid)*2;  
}


// Const constructors :
// define a const constructor and make sure that all instance variables are final.
class Pt 
{
  final int x;
  final int y;
  static const Pt origin = Pt(0, 0);

  const Pt(this.x, this.y);
}

// Singleton classes : have only one instance variable.
class Store 
{
    static final Store _instance = Store._internal();
  
    // factory promises to return _an_ object of this type not necessary a new one.
    factory Store() { return _instance; }
    
    // private named constructor, so it can only be called in this class
    Store._internal() { /* initialization logic */ }
}

// Factory methods and 
// factory constructors : return instance of sub-class or null.
    







