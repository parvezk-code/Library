// https://pub.dev/packages/provider
// https://medium.com/flutter-community/making-sense-all-of-those-flutter-providers-e842e18f45dd


import 'package:flutter/foundation.dart';

// ChangeNotifier widget, Consumer widget, Selector widget 
// context.select, context.watch, context.read

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

    /*
      runApp(
          MultiProvider(
              providers: [ ChangeNotifierProvider(create: (context) => StoreCN()) ],
              child: MyApp(),
          ) 
      );

      // new way : context extensions technique
      context.read<StoreCN>().increment()
      context.watch<StoreCN>().count
      final color   = context.select<StoreCN, String>((StoreCN c) => c.color);
      final counter = context.select<StoreCN, int>((StoreCN c) => c.count);

      runApp(
          ChangeNotifierProvider(
              create: (_) => StoreCN(),
              child: MyApp(),
          )
      )
      // old way
      Provider.of<StoreCN>(context).count;
      Provider.of<StoreCN>(context, listen: false).increment()
      
      // old way : Consumer Widget
      Consumer<StoreCN>( builder: (context, storeCN_Obj, t){} )

      // old way : Selector Widget
      Selector<StoreCN, int>( 
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
