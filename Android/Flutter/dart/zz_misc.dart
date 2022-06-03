// https://dart.dev/codelabs/dart-cheatsheet
// https://dart.dev/samples

// data types --> var(dynamic), num(int, double), String
// var are data containers that can store values of any type. 
// Dart has a feature called "type inference", which inferring data-types of values.

// EVERY value in Dart is an object. Even a simple number.


import 'dart:convert';
import 'dart:core';



// json data

dynamic str_Json;
var mapData = jsonDecode(str_Json); //convert json_string to a map
var mapValu = json.decode(str_Json);



// https://dart.dev/codelabs/async-await

// https://github.com/dart-lang/http
// https://pub.dev/packages/http
// https://pub.dev/documentation/http/latest/


// https://api.flutter.dev/flutter/dart-async/Stream-class.html
// streams are source of events : https://dart.dev/tutorials/language/streams
// dart,flutter provides us many built in streams to interact with the events
// htmlButton.onClick is a stream of events when-ever a button is clicked.
// htmlinput.onInput is a stream of events when-ever we type in text field.




// https://pub.dev/packages/rxdart
// https://pub.dev/documentation/rxdart/latest/rx/rx-library.html
// Observable class corrosponds to Stream  class
// Subject class corrosponds to StreamController class
// BehaviourSubjects class corrosponds to StreamController class























