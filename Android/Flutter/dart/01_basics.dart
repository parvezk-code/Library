void main() 
{
    print('Hello, World!');

    // data types --> num, int, double, bool, String
    int age = 10;  
    print(" variable   inside string $age      "); 
    print(" expression inside string ${age + 1}");

    //type inferencing
    var msg = 'Hello, World';  //type of msg is String
    // msg = 5;      error

    // dynamic type: variable can hold value of different types
    dynamic city = 'bhopal';
    city = 5;
    dynamic usr, v1, flag, obj; 

    // compile-time constant, variable can not change its value
    const name = "Greg";
    // name = "Sarah";      error

    // const variable can't be assigned val by return value of function
    // const fname = fun()  error

    //final : similar to const, but it doesn't have to be constant at compile time.
    //The only place that a final variable is not given a value is on class properties
    final fname = "Greg";
    
    print(msg + city + name + fname);
    
    // Arithmetic and Comparison Operators *  /  ~/  +  -   ++  --  ==  <  >  !=
    // Logical Operators &&  ||  !exp

    v1 = flag ? 5 : 10;  //ternary operator


    // ?.  ??  ??=  Null Aware Operators  
    v1 = usr?.age; // this line is equivalant to below code
    if(usr!=null)
    { 
      v1 = usr.age;
    }

    usr?.age?.fun();      // chain multiple uses of ?.
    
    v1 = usr.age ?? 18;   // If usr.age is null then v1 = 18
    v1 = v1 ?? 3;         // if v1 is null then v1 = 3
    v1 ??= 3;             // if v1 is null then v1 = 3

    //int a = null;     // INVALID in null-safe Dart.
    int? a  = null;     // Valid   in null-safe Dart.
    int? b;             // initial value is null.

    print(1 ?? 3);      // Prints 1.
    print(a ?? 12);     // Prints 12, since a is null.
    
    // cascades (..)
    obj.f1();          // invokes f1() on obj, return value from fun()
    obj..f2();         // invokes f2() on obj, return reference to obj
    obj..f1()..f2();    // calls obj.f1() then obj.f2()
    
    // Type Test Operators -->  is  as

    //swith-case with continue and label

    // for, for-in, while, do while, break
}