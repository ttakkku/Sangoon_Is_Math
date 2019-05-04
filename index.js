/**
* @developers cy8er, ttakkku
* @github https://github.com/ttakkku/Sangoon_Is_Math
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
   return result; //ㅎㅇ <-- 본후에 지우셈
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
/**
* official
*/
exports.tag = function () {
   return "Sangoon_Is_Noob#0972";
};

exports.official = function () {
	return "Official Guild, Github";
};

/** 
*  exports.official.guild = function () {
*	return "https://discord.gg/cbbHdTy";
*  };
*/

exports.official.github = function () {
	return "https://github.com/ttakkku/Sangoon_Is_Math";
};

/**
* Other
*/
exports.discord = function () {
	return "as";
};
exports.discord.webhook = function (){
	return "asdadad";
};

exports.discord.sirutoken = function(){
	return "none";
};

