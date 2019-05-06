/**
* @Developers cy8er, ttakkku
* @Github https://github.com/ttakkku/Sangoon_Is_Math
* @README https://github.com/ttakkku/Sangoon_Is_Math/blob/master/README.md
*/

/**
* math
*/

exports.plus = function (a, b) {
   return a + b;
};

exports.Minus = function (a, b) {
    return a - b;
};

exports.multiply = function (a, b) {
    return a * b;
};

exports.division = function (a, b) {
    return a / b;
};

exports.caret = function (a, b) {
    return a ^ b;
};

exports.plueandminus = function (a, b) {
    var plus = a + b;
    var result = plus - b;
   return result;
};

exports.minusandplue = function (a, b) {
    var minus = a - b;
    var result = minus + b;
   return result; 
};

exports.pow = function(a, b){
 return Math.pow(a, b);
};

exports.sqrt = function(a){
return Math.sqrt(a);	
};

exports.random = function(a, b){
var ranNum = Math.floor((Math.random() * b) + a); 
  return ranNum;
};

exports.primenumbe = function(a, b) {
    let results = [];
    for (let i = a; i <= b; i++) {
        let isPrimeNumber = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrimeNumber = false;
            }
        }

        if (isPrimeNumber) {
            results.push(i);
        }
    }

    return results;
};

exports.pi2 = function(a) {
    return 2 * Math.PI * a;
};

exports.pi= Math.PI;

exports.round = function(a) {
   return Math.round(a);
};

/**
* official
*/

exports.official = "Official Guild, Github";

/** 
*  exports.official.guild = function () {
*	return "https://discord.gg/cbbHdTy";
*  };
*/

exports.official.github = "https://github.com/ttakkku/Sangoon_Is_Math";


/**
* Other
*/

exports.tag = "Sangoon_Is_Noob#0972";

exports.discord = "Discord";
