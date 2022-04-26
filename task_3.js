//The first feature I would add is namespace like in typescript ot C#.

//C# uses namespaces to divide a program into parts. They are declared using the namespace keyword. For example, if we want to create a set of user interface components (classes, interfaces or smth...), in C#/Typescript we'll put them all in the same namespace. JS on the other hand uses ES-modules. To use them, you should import each of them. For me, namespace looks cleaner and it's more preferable for me. That's why I love typescript:)

//Typisation, at least on the basic level. It shrinks your code making it cleaner and understandable. You always know which data you should receieve. May be it will be a good idea to make a sort of apiRequestFunctions static method that will automatically detect which data you receive and of which type it is dependent on which parameters you will enter.
//Or may be mapped types, depending on which interface/object will get as a parameter in the mapped type, the property name in this type will change. Again, typpescript resolves these cases.

//I would exclude type conversion, to avoid some confusing situations like :
//typeof NaN : "number"
//[] + [] = ""  or [] + {} = "[object Object]" BUT {} + [] = 0
//true + true + true === 3 : true
//and others...

//My be a better alternative to the Date object, like moment, but as I saw, Temporal API is at it's 3rd stage, so let's wait until summer.

//By now, typisation is the main thing I miss in JS.
