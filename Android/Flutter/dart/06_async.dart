// https://dart.dev/codelabs/async-await

import 'dart:async';

import '../WidgetsExamples.dart';

// asynchronous operations:  read file, write to database, n/w request
// Future: result of asynchronous computations. 
// Stream: if result has multiple parts then async computation produces a stream.

// A future can be in one of two states: uncompleted or completed.
// A Future<T> instance produces a value of type T. 
// Future<void> when on value is produced.
// future completes with a value or with an error.
Future<void> fetchUserOrder() 
{
  // Imagine that this function is fetching user info from another service or database.
  return Future.delayed( 
          Duration(seconds: 2), 
          () => print('done')       // Future<void>
        );
}

Future<void> fetchUsrOrder() 
{
  // Imagine that this function is fetching user info from another service or database.
  return Future.delayed( 
          Duration(seconds: 2), 
          () => 'data'       // Future<String>
        );
}

// async keyword : allows to use await keyword 
// my-understanding : async function always returns a Future.
Future<void> getData() async 
{
  try
  {
    await fetchUserOrder();   // add await keyword to wait for async operation to complete
    await fetchUsrOrder();
  }
  catch(e)
  {
    print(e);
  }
}

void countSeconds(int s) 
{
  for (var i = 1; i <= s; i++) 
  {
    Future.delayed(Duration(seconds: i), () => print(i));
  }
}

Future<void> getNwData() async 
{
  try
  {
      final response = await http.get("https://example.com");
      print(response.body);
  }
  catch(e)
  {
      print(e);
  }
}

