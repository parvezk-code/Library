void main() 
{
    // collections are Dart objects that further contain more objects
    // collections --> list, set, map
    // list and set are child of Iterable class
    // Iterable : a collection of elements that can be accessed sequentially.
    
    var list = [ 'one', 'two', 'three' ];
    var set  = { 'one', 'two', 'three' };
    var map  = { 'a':1, 'b':2, 'c':300 };

    // specify the type
    list = <String>[];
    set  = <String>{};
    map  = <String, int>{};

    print(map.length+set.length+list.length);

    // list methods ---> shuffel, where(filter in JS), subList, sort
    var l1        = [1, 2, 3];   // l1.first, l1.last
    List<int> l2  = [1, 2, 3];

    l2.add(4);

    // Spread operator ...
    l2 = [10, ...l1];
    // use null aware spread to avoid null-pointer crashes 
    l2 = [10, ...?l1];

    bool boolexp = (4==5)? true: false;
    // Collection If, Collection For
    l2 = [
      1, 
      2, 
      if(boolexp) 3, 
      // for (var day in listOfDays) day,
      4
    ]; 

    //set
    Set<int> setItems = {1, 4, 6};
    print(setItems);

    // maps, dictionary, hash : unordered collection of key-value pairs.
    Map<String, dynamic> studentMap = {'id': 101, 'name':'ravi', 'male':true};
    // operations : remove(key), containsKey(key), keys, values, 
    // operations : length, isEmpty, putIfAbsent
    print(studentMap['id']);

    // list and set are child of Iterable class
    // Iterable.first, Iterable.last

    // indexOf(e), contains(e)
    
    // insert operations: add(e), addAll([..]), insert(index, e), insertAll(index, [..])                                       

    // deletion operations : clear(), remove(e), removeWhere(call-back)
    //                     : removeLast(), removeAt(ind), removeRange(i,j)

    // create your own Iterators

    

    Iterable<int> nList = [ 1, 2, 3 ]; // Lists, Sets are Iterable 
    Iterable<String> cList = [ "red", "blue", "green"]; 
    
    // for : iterating over an iterator
    for (final e in cList) {print(e);}
    
    // for-each() : iterating over an iterator
    cList.forEach( (item) => print(item) );

    // first string in the iterable whose length>5
    String element = cList.firstWhere((element) => element.length > 5);
    print(element);

    // every() : verify that all elements satisfy a condition. (true/false)
    bool flag = cList.every((item) => item.length >= 5);

    // any() : verify that atlest one element satisfy a condition. (true/false)
    flag =  cList.any((item) => item.length >= 5);
    print(flag);


    // where() filter : returns new list which satisfy a condition
    var newList = nList.where((number) => number.isEven);

    // filters : map(call-back), expand(call-back)
    // map() : returns new list by applying a function over each element
    nList = newList.map((number) => number * 10);

    // where(), takeWhile()  skipWhile()
    // filters(return new Iterable) : where(call-back), takeWhile(call-bk), skipWhile(cl-bk)
    // reduce( (total, item) => {..} )
    // fold(call-back)

    // Type casting collections: cast, as, retype, toSet, toList
}