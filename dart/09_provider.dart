// https://pub.dev/packages/flutter_bloc

import 'package:flutter/foundation.dart';

// ChangeNotifier widget, Consumer widget, Selector widget 
// context.select, context.watch, context.read

class Store_CN with ChangeNotifier, DiagnosticableTreeMixin 
{
    int _count = 0;
    String _color= "red";

    //context.select<Store_CN, int>((Store_CN c) => c.counter);
    //context.watch<Store_CN>().count
    int get count => _count;
    String get color => _color;

    //context.read<Store_CN>().increment()
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

    /*
      runApp(
          MultiProvider(
              providers: [ ChangeNotifierProvider(create: (context) => Store_CN()) ],
              child: const MyApp(),
          ) 
      )
      // new way : context extensions technique
      context.read<Store_CN>().increment()
      context.watch<Store_CN>().count
      final color   = context.select<Store_CN, String>((Store_CN c) => c.color);
      final counter = context.select<Store_CN, int>((Store_CN c) => c.counter);

      runApp(
          ChangeNotifierProvider(
              create: (_) => Store_CN(),
              child: MyApp(),
          )
      )
      // old way
      Provider.of<Store_CN>(context).count;
      Provider.of<Store_CN>(context, listen: false).increment()
      
      // old way : Consumer Widget
      Consumer<Store_CN>( builder: (context, storeCN_Obj, t){} )

      // old way : Selector Widget
      Selector<Store_CN, int>( 
                          selector: (context, storeCN_Obj) => storeCN_Obj.counter,
                          builder:  (context, int counter, t){}
                        )

    */
}


// Store: Singleton classes, have only one instance variable.
class Store 
{
    static final Store _instance = Store._internal();

    factory Store() 
    { 
      return _instance; 
    }

    Store._internal();
}
