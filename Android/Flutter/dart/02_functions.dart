void main() 
{
    //Function arguments: named , optional, default
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
}