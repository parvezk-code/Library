void main() 
{
    // collections are Dart objects that further contain more objects
    // collections --> list, set, map
    // list and set are child of Iterable class

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
    var mapItems = { 'a':1, 'b':2, 'c':3 };
    // operations : remove(key), containsKey(key), keys, values, length, isEmpty, putIfAbsent
    print(mapItems);

    // list and set are child of Iterable class
    // Iterable.first, Iterable.last
    // add(e), addAll([..]), insert(index, e), insertAll(index, [..])
    // indexOf(e), contains(e)
    // clear(), remove(e), removeWhere(call-back), removeLast(), removeAt(ind), removeRange(i,j)
    // filters(return new Iterable) : where(call-back), takeWhile(call-back), skipWhile(call-back)
    // filters : map(call-back), expand(call-back)
    // reduce( (total, item) => {..} )
    // fold(call-back)

    // Type casting collections: cast, as, retype, toSet, toList

    // itrators : for-in loop, foreach(), any(), every()
    for (var item in l2) {print(item);}

    l2.forEach( (item) => print(item) );

    bool flag = l2.any( (item) => item>10 );

    flag = l2.every( (item) => item>10 );

    // create your own Iterators
}