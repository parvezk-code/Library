// https://dart.dev/tutorials/language/streams
// https://medium.com/dartlang/dart-asynchronous-programming-streams-dab952023ed7
// https://pub.dev/packages/stream_transform
// https://dart.dev/guides/libraries/library-tour#stream

import 'dart:async';
/*
  0.Stream
      Streams provide an asynchronous sequence of error/data events(chunks from file).
      "await for" or listen() : to process a stream
      reactive programming
      Stream is like Iterable, instead of getting the next event on-demand, the stream 
        tells you that there is an event when it is ready.

  1.single subscription stream
      allows only a single listener during the whole lifetime of the stream.
      Listening twice on a single-subscription stream is not allowed.
      doesn't start generating events until it has a listener
      They hold onto their values until someone subscribes
      stops sending events when the listener is unsubscribed
      The stream created by an async* function is a single-subscription stream
      used for streaming chunks of larger contiguous data, like file I/O.

  2.broadcast streams. 
      allows any number of listeners
      fires its events when they are ready, whether there are listeners or not.
      used for independent events/observers.
      asBroadcastStream creates a broadcast stream on top of the non-broadcast stream.

  3.Stream Controller: 
      to create streams of your own.
      providing methods for controlling a stream’s behavior
      create streams and send data, errors, and done events on them. 
      check stream’s properties, such as how many subscribers it has or if it’s paused.
      Sink : to add data into the stream pipe
      Source: listening to stream data or get the data that is been added into the stream.
      controller.sink.add(data);
      controller.addError('Error!');

      sub = stream.listen(
              (data) = {},
              onError: (err){},
              onDone : (){},
              cancelOnError: false
      );

      sub.pause(), sub.resume(), sub.cancel()

  4.async*
      Marking a function with async* turns it into a data generator function

*/

/*
  You produce a stream by calling an async* function, which then returns a stream. 
  Consuming that stream will lead the function to emit events until it ends, 
  and the stream closes. You consume a stream either using an await for loop, 
  which is available inside an async or async* function, or by forwarding its events 
  directly using yield* inside an async* function
*/


final stmCtr = StreamController<String>();            //single subscription stream ctr
final stmCtr1 = StreamController<String>.broadcast(); //broadcast stream controller
Stream<String> stm = stmCtr.stream;                   //stream
final sub = stm.listen( print, onError:print );       // listener(StreamSubscription)
// stmCtr.sink.add("Data");
// stmCtr.sink.addError("Error");


// generate stream of numbers
class NumberCreator 
{
    final _controller = StreamController<int>();
    var _count = 0;
    Stream<int> get stream => _controller.stream;

    NumberCreator() 
    {
        Timer.periodic(
                        const Duration(seconds: 1), 
                        (timer) {
                            _controller.sink.add(_count);
                            _count += 1;
                        }
        );
    } 
}

final sub1 = NumberCreator().stream.listen(
      (data) {},            // callback to handle each data
      onError: (e){},       // callback to handle each error
      onDone : (){},        // callback to handle stream close
      cancelOnError: false  // do not close stream on error 
);

final sub2 =NumberCreator().stream
            .where( (i) =>  i%2==0 )      // filter even no
            .map( (i) =>  "data = $i" )   // transform incomming data
            .distinct()                   // removes consecutive identical values
            .listen(print);

// using await with for loop
//adding numbers inside a stream 
Future<int> fun(Stream<int> list) async 
{
    int total=0;
    await for(var n in list)
    {
      total += n;
    }
    return(total);
}

// async generator function: async* allows a function to return stream
Stream<int> count(int countTo) async* 
{
    for (int i = 1; i <= countTo; i++) 
    {
        yield i;  // yield to inject values into the stream one at a time.
        await Future.delayed(const Duration(seconds: 1));
    }
}

final sub3 = count(10).listen(print);

// Creates a single-subscription stream that gets its data from Iterable
// stream starts to emit when a listener is added. stops when listner cancel subscription
Stream<int> s1 = Stream.fromIterable([1, 2, 3, 5, 6, 7]);

// stream that repeatedly emits events at period intervals.
Stream<int> s2 = Stream<int>.periodic(
                            const Duration(seconds: 1), 
                            (count) => count * count
                          )
                          .take(5)
                          ..forEach(print); // prints 0,1,4,9,16.


// transform() : creats new stream(s3)  by applying StreamTransformer to stream s1 
// Stream<int> s3 = s1.transform(streamTransformer)

/*

class MyStatelessWidget extends StatelessWidget 
{
  final Stream<String> dataStream;

  const MyStatelessWidget({Key key, this.dataStream}) : super(key: key);

  @override
  Widget build(BuildContext context) 
  {
    return StreamBuilder<ConnectionState>(
      stream: dataStream,
      builder: (BuildContext context, AsyncSnapshot<ConnectionState> snapshot) 
      {
        if (snapshot.connectionState == ConnectionState.waiting) {
          return CircularProgressIndicator();
        }

        if (snapshot.hasData) {
          return Text(snapshot.data);
        }

        return Container();
      },
    );
  }
}

*/

mixin Validator{
  
  final validateEmail =  StreamTransformer<String, String>.fromHandlers(
    handleData: (email, sink){
      if(email.contains('@')){
        sink.add(email);
      }else{
        sink.addError("invalid email");
      }
    }
  );

}

class Bloc extends Object with Validator
{
  final _emailController  = StreamController<String>();
  // broadcast stream: following stream can be listened more than once
  final _emailController1 = StreamController<String>.broadcast();

  Function(String) get changeEmail => _emailController.sink.add;

  Stream<String> get email => _emailController.stream.transform(validateEmail);

  dispose(){
    _emailController.close();
    _emailController1.close();
  }
}

final bloc = Bloc();

// https://pub.dev/packages/rxdart
// https://pub.dev/documentation/rxdart/latest/rx/rx-library.html
// Observable class corrosponds to Stream  class
// Subject class corrosponds to StreamController class
// BehaviourSubjects class corrosponds to StreamController class

// https://api.flutter.dev/flutter/dart-async/Stream-class.html
// streams are source of events : https://dart.dev/tutorials/language/streams
// dart,flutter provides us many built in streams to interact with the events
// htmlButton.onClick is a stream of events when-ever a button is clicked.
// htmlinput.onInput is a stream of events when-ever we type in text field.