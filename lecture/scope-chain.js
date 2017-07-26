function first() {
  var a = "Hello from first"
  // var b = "Hello from b in first"
  second()
  function second() {
    var a = "Hello from second"
    third()
    function third(){
      console.log("Third", a)

      // When we write a line like this, javascript will move the
      // declaration (var a;) to the top of the code that's why
      // the above console.log says that a is still not defined
      //  because it is declared but not defined before the console.log

      var a = "hello from third after "
    }
    console.log(b)
  }
}


var b = "Hello Global"
first ();