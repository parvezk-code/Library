import 'dart:async';

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

/*
    Future.delayed(const Duration(seconds: 1), () {
      print('One second has passed.'); // Prints after 1 second.
    });
*/



void getData() async {
  // String v = await getNetworkResource1();
  // String t = await getNetworkResource2();
}

class Validator{
  
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


class Bloc extends Object with Validator{
  // _ makes the variable private to the class
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