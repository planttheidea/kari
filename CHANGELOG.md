# kari CHANGELOG

### 0.5.1
* Make `has` and `omit` work with nested paths

### 0.5.0
* Add methods:
  * [findKey](#findkey)
  * [has](#has)
  * [merge](#merge)
  * [mergeDeep](#mergedeep)
* Greatly improve the performance of `filter`, `map`, and `reduce` (which are used for a number of other methods)

### 0.4.1
* Make `insert` work with objects as well as arrays

### 0.4.0
* Add function methods:
  * [always](README.md#always)
  * [apply](README.md#apply)
  * [arity](README.md#arity)
  * [bind](README.md#bind)
  * [identity](README.md#identity)
  * [instanceOf](README.md#instanceof)
  * [partialRight](README.md#partialright)
  * [tap](README.md#tap)
  * [tryCatch](README.md#trycatch)
  * [uncurry](README.md#uncurry)
* Add more math methods:
  * [gt](README.md#gt)
  * [gte](README.md#gte)
  * [lt](README.md#lt)
  * [lte](README.md#lte)
* Add equality comparison methods:
  * [equals](README.md#equals)
  * [is](README.md#is)
* Add more collection test methods:
  * [endsWith](README.md#endswith)
  * [includes](README.md#includes)
  * [startsWith](README.md#startswith)

### 0.3.1
* Fix issue where applying extra arguments to curried function would re-curry it

### 0.3.0
* Add sort methods:
  * [ascend](README.md#ascend)
  * [descend](README.md#descend)
  * [sort](README.md#sort)
  * [sortBy](README.md#sortby)
  * [sortWith](README.md#sortwith)

### 0.2.0
* Add math methods:
  * [add](README.md#add)
  * [divide](README.md#divide)
  * [modulo](README.md#modulo) (mathematical modulo)
  * [multiply](README.md#multiply)
  * [remainder](README.md#remainder) (JS modulo)
  * [subtract](README.md#subtract)

### 0.1.2
* Fix explanation of placeholders in readme

### 0.1.1
* Remove `.nyc_output` folder from publishes

### 0.1.0
* Initial release
