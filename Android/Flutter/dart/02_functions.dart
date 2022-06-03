void main() 
{
    //Function arguments: named , optional, default
    void fun1(int lineNum) { }

    //Named parameters: a is optional, b is compulsary
    void fun2(String name, {String? roll, required int dob}) { 
      fun1(4); 
    }
    fun2("ravi", dob:4, roll:'cat'); // named parameter can be in any order
    fun2("amit", dob:5);             // parameter(a) is optional so can be ignored

    // A function can’t have both optional positional and named parameters.
    // Positional optional parameters
    int fun3(int x, int y, [int? z, int? p]) {
      var sum = x + y ;
      sum += z ?? 0;
      return(sum);
    }
    fun3(1,2,3);
    fun3(1,2);

    // default parameters : only work with optional parameters. 
    // my understanding : default parameters also work with constructors with named params
    int fun4(int x, int y, [int z=5]) {
      var sum = x + y + z ;
      return(sum);
    }
    fun4(1,2,3);
    fun4(1,2);
}