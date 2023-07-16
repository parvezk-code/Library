// https://pub.dev/packages/flutter_bloc

import 'dart:async';

class Bloc<T> 
{ 
    final StreamController<T> _streamController = StreamController<T>.broadcast();
    Stream<T> get stream => _streamController.stream;
    T? lastValue;

    Bloc(T initVal) 
    {
      _streamController.add(initVal);
      lastValue = initVal;
    }

    set addNewValue(T val)
    {
      _streamController.add(val);
      lastValue = val;
    }
    
    dispose() 
    {
      _streamController.close();
    }
}


// Store: Singleton classes, have only one instance variable.
class StoreBloc 
{
    static final StoreBloc _instance = StoreBloc._internal();
    factory StoreBloc() 
    { 
      return _instance; 
    }
    StoreBloc._internal();

    var _counterBloc = Bloc<int>(0);
    get counter => _counterBloc.lastValue;
    set newCounter(int val)
    {
        _counterBloc.addNewValue = val;
    }    
}