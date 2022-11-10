var alternateCase = function (s) {
    var chars = s.toLowerCase().split("");
    for (var i = 0; i < chars.length; i += 2) {
      chars[i] = chars[i].toUpperCase();
    }    
    return chars.join("");
  };

  console.log(alternateCase("abc"));
  console.log(alternateCase("ABC"));
  console.log(alternateCase("hello world"));