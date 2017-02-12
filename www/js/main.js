/*

var lazyDictionary = [
"Alpha",
"Bravo",
"Charlie",
"Delta",
"Echo",
"Foxtrot",
"Golf",
"Hotel",
"India",
"Juliett",
"Kilo",
"Lima",
"Mike",
"November",
"Oscar",
"Papa",
"Quebec",
"Romeo",
"Sierra",
"Tango",
"Uniform",
"Victor",
"Whiskey",
"X-Ray",
"Yankee",
"Zulu",
"[NOT A LETTER]",
];

*/

document.getElementById("output").innerHTML = "failure";

document.getElementById("translate").onclick = function(){print_translation()};

function print_translation() {
     
    document.getElementById("output").innerHTML = "success";

};


/* ACTUAL CODE I WANT BUT WILL BUILD TOWARDS IT INSTEAD

function translate_word() {
  
  var codewords = [];
  
  var input = document.getElementById("input");

  var word = input.val();
  
  var codewords = [];
  
  for (var i = 0; i < word.length; i++) {
      var letterIndex = word.charCodeAt(i);
      console.log("input letter " + i + " is " +letterIndex);
      if (letterIndex >= 65 && letterIndex <= 90)
        letterIndex -= 65;
      else if (letterIndex >= 97 && letterIndex <= 122)
        letterIndex -= 97;
      else
        letterIndex = 26;
      console.log("processed letter " + i + " is " +letterIndex);
    codewords[i] = lazyDictionary[letterIndex];
  };

  return codewords.join("<br />");
};

function print_translation() {
    var output = document.getElementById("output");
    output.innerHTML = translate_word();
};

*/