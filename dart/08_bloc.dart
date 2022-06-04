import 'dart:async';

class Bloc 
{ 
  final StreamController<int> _streamController = StreamController.broadcast();
  Stream<int> get stream => _streamController.stream;

  Bloc(int initVal) 
  {
    _streamController.add(initVal);
  }

  set addNewValue(int val)
  {
    _streamController.add(val);
  }
  
  dispose() 
  {
    _streamController.close();
  }
}