// https://codesinsider.com/category/flutter/

import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {  //StatefullWidget
  @override
  Widget build(BuildContext context) {
    return MaterialApp( title: 't',  home: Text('Hello world') );
  }
}

// hover mouse ove a widget to see its properties

// MaterialApp is a root widget for most of the Flutter Apps
MaterialApp( 
  title: 'Hello',  
  home: Text('Hello world'), // call a fun(constructor) that returns a widget.
  routes:{'/': (context)=>Home(), '/login':(context)=> Login()}, // map[route-->function]
  initialRoute: '/login'
);

// pubspec.yaml file, contain configurations for fultter app
// include directories containing fonts, images etc..

// TextStyle widget to style text inside Text Widget,
// copy custom fonts inside a project directory to use inside flutter app.
TextStyle(
  fontSize: 20.0,
  fontFamily: 'google-font-name' // this font should exist inside pubspec.yaml
  fontWeight: FontWeight.bold,
  letterSpacing:2,
  color:Colors.red[600]
);

// Text widget to dispaly string/text 
Text(
  "My App",
  style: TextStyle(..)
);

// AppBar inside Scaffold widget 
AppBar(
  title: Text(" My App"), 
  centerTitle:true,
  backgroundColor:Colors.red[600],
  elevation: 0.0
);

Scaffold( 
  appBar:AppBar(), 
  body: Text('Hello world'), 
  floatingActionButton:FloatingActionButton(...),
  backgroundColor:Colors.red[600]
);

// Center widget to center its child inside the parent widget
Center(child: Text('Hello world'))

// Icon widget
Icon(
  icons.add_call,  // flutter provides inbult icons library
  color: Colors.red[600],
  size: 50.0
);

// FloatingActionButton widget inside Scaffold widget
FloatingActionButton(
  child: Text('Click Me'),
  onPressed: () { print('hello'); },
  backgroundColor:Colors.red[600]
);

// Button widgets --> RaisedButton, FlatButton 
RaisedButton(
  child: Text('Click Me'),
  onPressed:() { print('hello'); },
  color: Colors.red[600]
); 

// icon button, icon-button, IconButton, iconbutton
RaisedButton.icon(
  onPressed:() { print('hello'); },
  icon: Icon(Icon.mail),  // icon.mail is provided by flutter library
  label: Text("Hello"),
  color:Colors.red[600]
); 

// IconButton, icon-button, icon button, iconbutton
IconButton(
  onPressed:() { print('hello'); },
  icon: Icon(Icon.mail),  // icon.mail is provided by flutter library
  color:Colors.red[600]
); 

// Material design colore
Colors.red[600]  // blue[600]  green[600]

// Image widget
Image(
  image: NetworkImage('url'),
  image: AssertImage('path-inside-app-directory') //path should exist inside pubspec.yaml
);

Image.asset('path-inside-app-directory');
Image.network('url');

// CircleAvatar widget to display rounded images
CircleAvatar(
  backgroundImage:AssertImage('img_path'),
  radius: 40.0
);

// BoxDecoration widget for docoration of widget such as background image
BoxDecoration(
  image: DecorationImage( image:AssetImage('path'), fit:Boxfit.cover)
);

// EdgeInsets object properties controls padding and margine for Container widget.
// EdgeInsets.symmetric(horizontral:20.0, vertical:10.0)
// EdgeInsets.all(20.0)
// EdgeInsets.fromTRB(left:10.0, top:5.0, right:20.0, bottom:7.0 ) etc

// Container widget to provide margine, padding, border to its child 
// Container widget takes the size of the child widget.
Container(
  padding: EdgeInsets.all(20.0),
  margin:  EdgeInsets.fromTRB(left:10.0, top:5.0, right:20.0, bottom:7.0 ), 
  color: Colors.red[600],  // background color
  decoration: BoxDecoration(),
  child: Text(" hello")
);

// Padding widget to provide padding to its child. We can't apply margin and color
Padding(
  padding: EdgeInsets.all(20.0),
  child: Text(" hello")
);

// Row widget to display list of child widgets in a row
Row(
  mainAxisAlignment: MainAxixAlignment.center //spaceEvenly, spaceAround, end, start, etc.. 
  crossAxixAlignment:CrossAxixAlignment.stretch //start, baseline, center, end, etc.. 
  children: [Text("Hellow"), Icon(), Button(), Container(), Center(), Row()]
);


// Column widget to display list of child widgets in a column 
Column(
  mainAxisAlignment: MainAxixAlignment.center //spaceEvenly, spaceAround, end, start, etc.. 
  crossAxixAlignment:CrossAxixAlignment.stretch //start, baseline, center, end, etc.. 
  children: [Text("Hellow"), Icon(), Button(), Container(), Center(), Row()]
);


// Expanded widget occupies free  space available of its parent, based on flex property.
// It controls  
Expanded(
  flex: 2  
  child: Text(" hello")
);

// SizedBox widget to display a box of certain width and height
// It can also provide vertical and horizontal spacing between widgets
SizedBox(
  height: 10.0,
  width: 5.0
);

// Divider widget draws a line
Divider(
  height: 60.0, // space above and below the line
  color: Colors.red[600]
);

// child,children property of every widget can specify a function that returns a widget.
// child,children property of every widget can specify a constructor of a widget class.

// Card widget 
Card(
  margin: EdgeInsets.fromTRB(left:10.0, top:5.0, right:20.0, bottom:7.0 ),
  child: col()  // a widget constructor or a function that returns a widget
);

// stateless widget class can have only final instance variables(props) inside it.
// stateful  widget class can have any instance variables inside it.

// SafeArea widget, moves the widget down to avoid overlapping from android Appbar
SafeArea( child: c ) 

// Navigator object to pop current route
Navigator.pop(context, {'key':val})
// Navigator object to display a route on top of current 
Navigator.pushNamed(context, '/route')
dynamic retValue = await Navigator.pushNamed(context, '/route')
// Navigator object to display a route but replace current route 
Navigator.pushReplcementNamed(context, '/route', arguments:{'key':val})
// receive navigation arguments inside a widget
argMap = ModalRoute.of(context).settings.arguments;

//Lifecycle methods of stateful widget
initState(){ super.initState() }   // called only once when widget is created
Build()       // builds widget tree, called on every call to setState()
Dispose()     // when widget/state object is removed

// flutter packages : https://pub.dev/


// library for making HTTP requests. https://pub.dev/packages/http
// add following line to your package's pubspec.yaml 
dependencies:
  http: ^0.13.4

// json data
import 'dart:convert';
jsonDecode(response.body); //convert json_string to a map

//async function can return void but return type shuld be Future<void>
Future<void> fun() async{
  // body
}

// async-await exception handling
try{
      res = await networkRequest();
}
catch(e){

}

// date formating package : https://pub.dev/packages/intl
// loading animation package : https://pub.dev/packages/flutter_spinkit 
SpinKitRotatingCircle(
  color: Colors.white,
  size: 50.0,
); 

// ListView.builder constructor to create list of items
ListView.builder(
  itemCount: 10,
  itemBuilder: (context, index){ return Card(...); }
)

// ListTile widget to crete list item.
ListTile(
  onTap: (){ },   // function to call when we click on the contents
  leading: CircleAvatar(),
  title: 'Description',
  subtitle: "message"

)

// CircleAvatar widget to display rounded images
CircleAvatar(
  backgroundImage:AssertImage('img_path'),
  radius: 40.0
);