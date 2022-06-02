void main() 
{
  print('Hello, World!');

  // data types --> num, int, double, bool, String
  int age = 10;  
  print("age= $age, next_year= ${age + 1}");

  //type of msg is String, dart does type inferencing
  var msg = 'Hello, World'; 
  // msg = 5;      error

  dynamic city = 'bhopal';
  // dynamic type can have values of differnet types assignmed to them.
  city = 5;

  // compile-time constant
  const name = "Greg";
  // name = "Sarah";      error, const variable can not change its value
  // const fname = fun()  error, const variable can be assigned val by function

  //final is similar to const, but it doesn't have to be constant at compile time.
  //The only place that a final variable is not given a value is on class properties
  final fname = "Greg";
  print(msg + city + name + fname);
  
  // Arithmetic and Comparison Operators +  -  *  / ~/  ++  -- ==  <  >  !=
  // Logical Operators &&  ||  !exp

  //Null Aware Operators  ?.  ??  ??=
  dynamic usr, v1, flag;  
  v1 = usr?.age; // this line is equivalant to below code
  if(usr!=null)
  { 
    v1 = usr.age;
  }

  // If usr.age is null then v1 = 18
  v1 = usr.age ?? 18;

  // if v1 is null then v1 = 3
  v1 ??= 3;

  // Type Test Operators -->  is  as

  //swith-case with continue and label

  v1 = flag ? 5 : 10;

  // for, for-in, while, do while, break

  //Function arguments: default, optional, named
  void fun1(int lineNum) { }

  //Named parameters: a is optional, b is compulsary
  void fun2({String? a, required int b}) { 
    fun1(4); 
  }
  fun2(b:4, a:'cat'); // named parameter can be in any order
  fun2(b:4);          // parameter(a) is optional so can be ignored

  // Positional optional parameters
  int fun3(int x, int y, [int? z]) {
    var sum = x + y ;
    sum += z ?? 0;
    return(sum);
  }
  fun3(1,2,3);
  fun3(1,2);

  // default parameters : only work with optional parameters. 
  int fun4(int x, int y, [int z=5]) {
    var sum = x + y + z ;
    return(sum);
  }
  fun4(1,2,3);
  fun4(1,2);

  // collections are Dart objects that further contain more objects
  // collections --> list, set, map
  // list and set are child of Iterable class

  var l1        = [1, 2, 3];   // l1.first, l1.last
  List<int> l2  = [1, 2, 3];

  l2.add(4);

  // Spread operator ...
  l2 = [10, ...l1];
  // use null aware spread to avoid null-pointer crashes 
  l2 = [10, ...?l1];

  bool boolexp = (4==5)? true: false;
  // Collection If, Collection For
  l2 = [
    1, 
    2, 
    if(boolexp) 3, 
    // for (var day in listOfDays) day,
    4
  ]; 

  //set
  Set<int> setItems = {1, 4, 6};
  print(setItems);

  // maps, dictionary, hash : unordered collection of key-value pairs.
  var mapItems = { 'a':1, 'b':2, 'c':3 };
  // operations : remove(key), containsKey(key), keys, values, length, isEmpty, putIfAbsent
  print(mapItems);

  // list and set are child of Iterable class
  // Iterable.first, Iterable.last
  // add(e), addAll([..]), insert(index, e), insertAll(index, [..])
  // indexOf(e), contains(e)
  // clear(), remove(e), removeWhere(call-back), removeLast(), removeAt(ind), removeRange(i,j)
  // filters(return new Iterable) : where(call-back), takeWhile(call-back), skipWhile(call-back)
  // filters : map(call-back), expand(call-back)
  // reduce( (total, item) => {..} )
  // fold(call-back)

  // Type casting collections: cast, as, retype, toSet, toList

  // itrators : for-in loop, foreach(), any(), every()
  for (var item in l2) {print(item);}

  l2.forEach( (item) => print(item) );

  flag = l2.any( (item) => item>10 );

  flag = l2.every( (item) => item>10 );

  // create your own Iterators

  /* 
    class Rectangle {

    // final fields can never be re-assigned. assign them a value in the constructor. 
    final int len, wid;
    int? area;

    Rectangle(this.len, this.wid, this.area);

    // Initializer Lists inside constructors
    Rectangle.red(this.len, this.wid)
      : area = len*wid {
        // constructor body
      }

    @override
    String toString() => "${this.len}, ${this.wid}";

    void _privateMethod() {} // starts with undescore(_)

    void publicMethod()   {_privateMethod();}

    int get perimeter => (len + wid)*2;  // getters methods are treated as properties

  }  */

  Rectangle a = new Rectangle(4, 5, 20);
  Rectangle b = new Rectangle.red(a.len, 9);
  print(b);
  // class can have private(_) and static members
  // Factory methods and factory constructors : return instance of class

  // Singleton classes : have only one instance variable.
  // Mixins : are like classes, for usability 
}

class Rectangle {

    // final fields can never be re-assigned. assign them a value in the constructor. 
    final int len, wid;
    int? area;

    Rectangle(this.len, this.wid, this.area);

    // Initializer Lists inside constructors
    Rectangle.red(this.len, this.wid)
      : area = len*wid {
        // constructor body
      }

    @override
    String toString() => "${this.len}, ${this.wid}";

    void _privateMethod() {} // starts with undescore(_)

    void publicMethod()   {_privateMethod();}

    int get perimeter => (len + wid)*2;  // getters methods are treated as properties

}