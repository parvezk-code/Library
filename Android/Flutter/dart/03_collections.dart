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
    var l1        = [1, 2, 3];
    List<int> l2  = [1, 2, 3];

    l2.add(4);
    l2.addAll([5, 6]);

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

    // indexOf(e), contains(e)
    
    // insert operations: add(e), addAll([..]), insert(index, e), insertAll(index, [..])                                       

    // deletion operations : clear(), remove(e), removeWhere(call-back)
    //                     : removeLast(), removeAt(ind), removeRange(i,j)

    // create your own Iterators

    
    // Iterable class : list and set are its child
    Iterable<int> nList = [ 1, 2, 3 ]; // Lists, Sets are Iterable 
    Iterable<String> cList = [ "red", "blue", "green"]; 
    
    // Iterable.first, Iterable.last

    // for : iterating over an iterator
    for (final e in cList) {print(e);}
    
    // for-each() : iterating over an iterator
    cList.forEach( (item) => print(item) );

    // firstWhere(): returns first item which match the condition
    String element = cList.firstWhere((element) => element.length > 5);
    print(element);

    // every() : returns true is all elements satisfy a condition.
    bool flag = cList.every((item) => item.length >= 5);

    // any() : returns true is atlest one element satisfy a condition.
    flag =  cList.any((item) => item.length >= 5);
    print(flag);


    // where() filter : returns new list of items which satisfy a condition
    var newList = nList.where((number) => number.isEven);
    
    // filters(return new Iterable) : takeWhile(call-bk), skipWhile(cl-bk)


    // filters : map(call-back), expand(call-back)
    // map() : returns new list by applying a function over each element
    nList = newList.map((number) => number * 10);

    // reduce( (total, item) => {..} )
    // fold(call-back)

    // Type casting collections: cast, as, retype, toSet, toList
}