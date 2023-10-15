greet = hw => "hello world!"

(function () {
   var prev = 22915696;
   var modulus = Math.pow(2,32);
   var multiplier = 1664525;
   var increment = 1013904223;

   function setRandSeed(s) {
      prev = s;
   }
   function random() {
      prev = (multiplier * prev + increment) % modulus;
      return prev/Math.pow(2,32);
   }
   Math.random = random;
   Math.setRandSeed = setRandSeed;
})();

function generateChar() {
   return String.fromCharCode(Math.floor(Math.random() * (91-65)) + 65);
}

function generateWord(length)
{
   var res = "";
   for(var i = 0; i < length; i++)
      res += generateChar();
   return res.toLowerCase();
}

function greet() {
   var greetings = generateWord(5);
   Math.setRandSeed(18337180);
   var someone = generateWord(5);

   return greetings + " " + someone + "!";
}