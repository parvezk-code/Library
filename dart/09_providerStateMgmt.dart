// https://pub.dev/packages/provider
// https://medium.com/flutter-community/making-sense-all-of-those-flutter-providers-e842e18f45dd


/*
 Riverpod is from same author as Provider.
 Riverpod is inspired by Provider but solves some of it's key issues such as 
 supporting multiple providers of the same type; awaiting asynchronous providers; 
 adding providers from anywhere. 
 https://riverpod.dev/
*/

import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:flutter/foundation.dart';

// ChangeNotifier widget, Consumer widget, Selector widget 
// context.select, context.watch, context.read

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
      // old way
      Provider.of<StoreCN>(context).count;
      Provider.of<StoreCN>(context, listen: false).increment()
    */
}

// App without any Provider(state)
class MyApp extends StatelessWidget 
{
  @override
  Widget build(BuildContext context) {
    return Text('Flutter Demo');
  }
}


// ChangeNotifierProvider widget
class CnProvider extends StatelessWidget 
{
  @override
  Widget build(BuildContext context) 
  {
    return ChangeNotifierProvider(
      create: (_) => StoreCN(),
      child: MyApp()
    );
  }
}

// ChangeNotifierProvider.value widget
class CnProvider1 extends StatelessWidget 
{
  @override
  Widget build(BuildContext context) 
  {
    var store = StoreCN();

    return ChangeNotifierProvider.value(
      value: store,
      child: MyApp()
    );
  }
}

// MultiProvider widget
class MProvider extends StatelessWidget 
{
  @override
  Widget build(BuildContext context) 
  {
    return MultiProvider(
              providers: [ ChangeNotifierProvider(create: (context) => StoreCN()) ],
              child:  MyApp()
          );
  }
}

// calling function from Store
class AddBtn extends StatelessWidget 
{
  @override
  Widget build(BuildContext context) 
  {
    return FloatingActionButton(
        onPressed: () => context.read<StoreCN>().increment(),
        tooltip: 'Increment',
        child: const Icon(Icons.add),
      );
  }
}

// consuming state : context.select
class TextStateFull extends StatelessWidget 
{  
  @override
  Widget build(BuildContext context) 
  {
    final counter = context.select<StoreCN, int>((StoreCN c) => c.count);

    return Text(
              '$counter',
               style: Theme.of(context).textTheme.headline4,
            );
  }
}

// Selector widget and Provider widget
class TextStateFull2 extends StatelessWidget 
{  
  @override
  Widget build(BuildContext context) 
  {
    return Selector<StoreCN, int>( 
                          selector: (context, storeCnObj) => storeCnObj.count,
                          builder:  (context, int count, t){
                            return Text(
                                        '$count',
                                        style: Theme.of(context).textTheme.headline4,
                                  );
                          }
                        );
  }
}

// FutureProvider widget
class TextSample3 extends StatelessWidget 
{
  final address = Future.delayed(const Duration(seconds: 2), () {
      return 'Label';
    });

  @override
  Widget build(BuildContext context) 
  {
    return FutureProvider<String>(
              create: (context) => address,
              initialData: "fetching address...", 
              child: Text(
                            '101',
                             style: Theme.of(context).textTheme.headline4,
                      ),
      );
  }
}

// StreamProvider widget, ProxyProvider widgets