import 'package:flutter/foundation.dart';

class StoreCN with ChangeNotifier, DiagnosticableTreeMixin 
{
    int _count = 0;
    String _color= "red";

    //context.select<StoreCN, int>((StoreCN c) => c.counter);
    //context.watch<StoreCN>().count
    int get count => _count;
    String get color => _color;

    //context.read<StoreCN>().increment()
    void increment() 
    {
      _count++;
      notifyListeners();
    }

    void changeColor() 
    {
      _color = "blue";
      notifyListeners();
    }

    // Makes `Counter` readable inside the devtools by listing all
    // of its properties.
    @override
    void debugFillProperties(DiagnosticPropertiesBuilder properties) 
    {
      super.debugFillProperties(properties);
      properties.add(IntProperty('count', count));
    }
}