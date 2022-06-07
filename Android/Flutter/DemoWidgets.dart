import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'DemoStore.dart';

void main() => runApp(MyApp());

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

// FloatingActionButton widget
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

// Text widget, Provider widget and ChangeNotifier widget
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

