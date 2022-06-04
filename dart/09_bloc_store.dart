

// Store: Singleton classes, have only one instance variable.
class Store 
{
    static final Store _instance = Store._internal();

    factory Store() 
    { 
      return _instance; 
    }

    Store._internal();
}

