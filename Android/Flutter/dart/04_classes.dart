class Rectangle {

    // final fields can never be re-assigned. assign them a value in the constructor. 
    final int len, wid;
    int? area;
    String? color;

    // Initializer Lists inside constructors
    Rectangle(this.len, this.wid, this.color)
      : area = len*wid {
        // constructor body
      }

    // Named constructors
    Rectangle.red(this.len, this.wid);

    @override
    String toString() => "${this.len}, ${this.wid}";

    void _privateMethod() {} // starts with undescore(_)

    void publicMethod()   {_privateMethod();}

    int get perimeter => (len + wid)*2;  // getters methods are treated as properties

}

void main() 
{
  Rectangle a = new Rectangle(4, 5, 20);
  Rectangle b = new Rectangle.red(a.len, 9);
  print(b);
  // class can have private(_) and static members
  // Factory methods and factory constructors : return instance of class

  // Singleton classes : have only one instance variable.
  // Mixins : are like classes, for usability 
}

