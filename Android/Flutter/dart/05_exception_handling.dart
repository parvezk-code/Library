// Dart’s exceptions are unchecked exceptions. 
// Methods don’t declare which exceptions they might throw
// it is not necessary to catch any exceptions.
/* Built-in Exceptions in Dart: 
      DeferredLoadException :  Thrown when a deferred library fails to load.
      FormatException       :   data has un-expected format and cannot be parsed or processed.
      IOException           :   Base class for all Inupt-Output related exceptions.
      Timeout               :   on a scheduled timeout, while waiting for an async result.
      IsolateSpawnException :   Thrown when an isolate cannot be created.

*/

void main(){

    try 
    { 
        throw FormatException('Something bad happened.');
        // throw 'Waaaaaaah!';
    }  
    on FormatException catch(e) 
    { 
      print(e); 
    } 
    on Exception catch(e)
    {
      print(e);
    }
    catch(e){
      print(e);
    }
    finally 
    {
      // Always clean up, even if an exception is thrown.
    }

}