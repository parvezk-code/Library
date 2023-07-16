//// Copyright (c) 2019, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

import 'package:flutter/material.dart';
import 'package:flutter/foundation.dart';
import 'package:provider/provider.dart';

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


void main() => runApp(
          MultiProvider(
              providers: [ ChangeNotifierProvider(create: (context) => StoreCN()) ],
              child:  MyApp(),
          ) 
      );

class MyApp extends StatelessWidget 
{
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class CounterText extends StatelessWidget {
  
   @override
  Widget build(BuildContext context) {
    final counter = context.select<StoreCN, int>((StoreCN c) => c.count);
    print('counter');
    return Text(
              '$counter',
              style: Theme.of(context).textTheme.headline4,
            );
  }
}

class CounterBtn extends StatelessWidget {
  
   @override
  Widget build(BuildContext context) {
    print('btn');
    return FloatingActionButton(
        //onPressed: _incrementCounter,
        onPressed: () => context.read<StoreCN>().increment(),
        tooltip: 'Increment',
        child: const Icon(Icons.add),
      );
  }
}


class MyHomePage extends StatelessWidget 
{
  final String title;
  const MyHomePage({
    Key? key,
    required this.title,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    print('main');
    return Scaffold(
      appBar: AppBar(
        title: const Text(" Sample App"),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Text(
              'You have pushed the button this many times:',
            ),
            CounterText(),
          ],
        ),
      ),
      floatingActionButton: CounterBtn(),
    );
  }
  
}
