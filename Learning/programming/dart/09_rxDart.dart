// https://codewithandrea.com/videos/rx-dart-by-example-combine-latest/
// https://medium.com/mindful-engineering/reactive-programming-using-rxdart-for-flutter-applications-part-1-a0b70e99a6e2
// https://medium.com/mindful-engineering/reactive-programming-using-rxdart-for-flutter-applications-part-2-9bfc8a7ac5b5

import 'dart:async';

import 'package:rxdart/rxdart.dart';

/*  
    00. rx_subjects library

    01. Subject Class == StreamController(broadcast)

    02. BehaviorSubject : new listeners will receive last item added to the stream and those
        added after listener creation.

    03. PublishSubject : new listeners will recieve only those item which was added
        after listner creation. 

    04. ReplaySubject({maxSize}) : listeners will recieve all items added before and after 
        listener creation. Optional argument maxSize, specify no of previous items to listen. 
    
    05. Notification class,  kind enum
*/

// BehaviorSubject stream-controller: captures the latest item that has 
// been added to the controller, and emits that as the first item to any new listener.
dynamic stmController = BehaviorSubject<int>() ..add(1) ..add(2) ..add(3)
                        ..stream.listen(print)    // prints 3
                        ..stream.listen(print)    // prints 3
                        ..stream.listen(print);   // prints 3

/*  BehaviorSubject properties: 

    stream: stream for this controller
    error : Returns last emitted error, failing if there is no error. 
    first : The first element of this stream. 
    last  : The last element of this stream.
    value : last emitted value, failing if there is no value. 
    hasError, hasListener, hasValue, isEmpty, isBroadcast, isPaused, isClosed, 

    Methods
    asBroadcastStream : Returns a multi-subscription stream
    add         : Sends a data event
    adderror    : Sends an error event.
    close       : close the stream
    distinct    : skip similar(equal) data events
    transform   : Applies streamTransformer to this stream.
    where       : Creates a new stream that discards elements based on condition. 
    elementAt   : Returns the value of the data event at a given index.
    listen      : Adds a subscription to this stream.
    skip        : Skips the first count data events from this stream. 
    skipWhile   : Skip data events from this stream while they are matched the condition
    take        : Provides at most the first count data events of this stream.
    takeWhile   : Forwards data events while condition is successful. 
    

    any, every, firstWhere, lastWhere, forEach, toList, toSet, toString
    expand, asyncExpand, map, asyncMap, drain, fold, join, reduce

*/



Stream<int> s1 = Rx.range(1, 6); // Returns a Stream that emits a sequence of Integers

Stream<List<int>> s2 = s1.bufferCount(2)  // creates a stream of list(size == 2)
                         ..listen(print); // prints [1, 2], [3, 4] [5, 6] done!


// s1.buffer(s2) : creates a stream of list from s1.
//                 List is emitted  every time stream(s2) emits an event.          
Stream<List<int>> s3 = s1.buffer(s2);

/*  transformers

    transform() : creats new stream(s3)  by applying StreamTransformer to stream s1 
    Stream<int> s3 = s1.transform(streamTransformer)

    BufferCountStreamTransformer: buffers n-events into a List and emits this List 
    BufferStreamTransformer     : buffers events into a List and emits it whenever 
                                  src stream(window) emits a new data(event)
    BufferTestStreamTransformer : buffers events into a List and emits it whenever
                                  test function return true for src stream data(event).
    DebounceStreamTransformer   :
    DelayStreamTransformer      : pause for duration of time, before submitting next event
    DistinctUniqueStreamTransformer: emit event, only if that event is not emitted in past 
    IgnoreElementsStreamTransformer:  error/completed notifications are passed
    OnErrorResumeStreamTransformer :  intercepts error events and switches to a recovery stm
    TakeWhileInclusiveStreamTransformer: forwards data events while test is successful
    TimeIntervalStreamTransformer : Records the time interval between consecutive values
    ExhaustMapStreamTransformer : transform events to stream using specified map
    SwitchMapStreamTransformer  : transform events to stream using specified mapper function
    MapNotNullStreamTransformer : emits non-null elements
    TakeLastStreamTransformer   : emits only last-n items
    TakeUntilStreamTransformer  : emits events from the src Stream, until otherStream fires
    
    
    
    
*/

/*
    CombineLatestStream   : Merges the given list of Streams based on function
    ConcatStream          : completes one stream before moving to next stream in list
    ForkJoinStream        : only care about the final emitted value of each stream in list
    MergeStream           : flattens all events in streams and emits them in single sequence
    RaceStream            : those items of a stream which are emited before any other stream
    ZipStream             : Merge streams into one stream sequence using  given zipper fun

    FromCallableStream    : emits the value returned from the specified function.
    RangeStream           : emits a sequence of Integers within a specified range.
    ReplayStream          : provides synchronous access to the emitted values
    SequenceEqualStream   : check if two Streams emit the same sequence of items. 
    SwitchLatestStream    : emit items of that stream that emitted most recently
    ValueStream           : provides synchronous access to the last emitted item
*/

// CombineLatestStream
var xStream = CombineLatestStream.list<int>([
    Stream.fromIterable([1]),
    Stream.fromIterable([2, 3]),
    Stream.fromIterable([4, 5]),
    ],
  ).listen(print); // prints : [1, 2, 4], [1, 3, 4], [1, 3, 4], [1, 3, 5]


// ConcatStream, ConcatEagerStream
var xStream1 = ConcatStream<int>([
    Stream.fromIterable([1]),
    Stream.fromIterable([2, 3]),
    Stream.fromIterable([4, 5, 6]),
  ]).listen(print); // prints : 1, 2, 3, 4, 5, 6

// MergeStream : merge items using their index.
var xStream2 = MergeStream([
    Stream.fromIterable([1, 2, 3]),
    Stream.fromIterable([4, 5]),
    Stream.fromIterable([6]),
  ]).listen(print); // prints : 1, 4, 6, 2, 5, 3

// ZipStream : combine items at same index using specified fun
var xStream3 = ZipStream(
    [
      Stream.fromIterable([1, 2]),
      Stream.fromIterable([3, 4]),
      Stream.fromIterable([5, 6, 7]),
    ],
    (values) => values.join(),
  ).listen(print);

// ForkJoinStream : Join only final emitted value of each stream
var xStream4 = ForkJoinStream.list<int>([
    Stream.fromIterable([1, 2, 3]),
    Stream.fromIterable([4, 5]),
    Stream.fromIterable([6]),
  ]).listen(print); // prints : [3, 5, 6]

// RaceStream: those items of a stream which are emited before any other stream
var xStream5 = RaceStream([
    TimerStream([1, 2, 3], Duration(seconds: 15)),
    TimerStream([4, 5], Duration(seconds: 10)),
    TimerStream([6, 7, 8, 9, 10], Duration(seconds: 5)),
  ]).listen(print); // prints : [6, 7, 8, 9, 10] (after 5 seconds)

// SwitchLatestStream : streams items that emitted most recently
var xstream6 = SwitchLatestStream<String>(
    Stream.fromIterable(<Stream<String>>[
      Rx.timer('1', Duration(seconds: 2)),
      Rx.timer('2', Duration(seconds: 3)),
      Stream.value('3'),
    ]),
  ).listen(print); // prints : 3 

// RangeStream
var xStream7 = RangeStream(1, 5).listen((i) => print(i)); // prints : 1, 2, 3, 4, 5

// SequenceEqualStream
var xStream8 = SequenceEqualStream(
      Stream.fromIterable([1, 2, 3, 4, 5]),
      Stream.fromIterable([1, 2, 3, 4, 5]),
  ).listen(print);

// emits single item after a some specific amount of time.
var xStream9 = TimerStream(1, Duration(seconds: 5)).listen((i) => print(i));

// DeferStream, FromCallableStream, NeverStream, RepeatStream, RetryStream, RetryWhenStream
// UsingStream