/**
 * @author CY8ER, ttakkku, PMH
 * @version 0.0.3
 * @license MIT
 * @copyright (c) 2019 ttakkku
 * @github https://github.com/ttakkku/Sangoon_Is_Math
 * @see https://github.com/ttakkku/Sangoon_Is_Math/blob/master/README.md
 */

'use static' // 엄격모드 진입

/**
* @todo 삼각함수(sin, cos, tan) 추가
* @body 3일 하고 npm 에 
*/

/**
 * a에 b를 더한 값을 리턴합니다
 * @param {Number | String} a 더해질 값
 * @param {Number | String} b 더하는 값
 * 
 * @returns {Number | String} 더해진 값
 */
exports.plus = (a, b) => {
    return a + b
}

/**
 * a에 b를 뺀 값을 리턴합니다
 * @param {Number | String} a 빼질 값
 * @param {Number | String} b 빼는 값
 * 
 * @returns {Number | String} 빼진 값
 */
exports.minus = (a, b) => {
    return a - b
}

/**
 * a에 b를 곱한 값을 리턴합니다
 * @param {Number} a 곱해질 값
 * @param {Number} b 곱하는 값
 * 
 * @returns {Number} 곱해진 값 (a, b가 Number가 아니면 NaN)
 */
exports.multiply = (a, b) => {
    return a * b
}

/**
 * a에 b를 나눈 값을 리턴합니다
 * @param {Number} a 나눠질 값
 * @param {Number} b 나누는 값
 * 
 * @returns {Number} 나눠진 값 (a, b가 Number가 아니면 NaN)
 */
exports.division = (a, b) => {
    return a / b
}

/**
 * a의 b제곱을 리턴합니다
 * @deprecated pow()와 같은 기능을 합니다;;
 * @param {Number} a 밑
 * @param {Number} b 지수
 * 
 * @returns {Number} 거듭제곱된 값 (a, b가 Number가 아니면 NaN)
 */
exports.caret = (a, b) => {
    return a ^ b
}

/**
 * a에서 b를 더한뒤 b를 한번더 뺍니다
 * @deprecated 결과 값은 무조건 a로 나옵니다;;
 * @param {Number | String} a
 * @param {Number | String} b
 * 
 * @returns {Number | String}
 */
exports.plueandminus = (a, b) => {
    var plus = a + b
    var result = plus - b
   return result
}

/**
 * a에서 b를 뺀뒤 b를 한번더 더합니다
 * @deprecated 결과 값은 무조건 a로 나옵니다;;
 * @param {Number | String} a
 * @param {Number | String} b
 * 
 * @returns {Number | String}
 */
exports.minusandplue = (a, b) => {
    var minus = a - b
    var result = minus + b
   return result 
}

/**
 * a의 b제곱을 리턴합니다
 * @param {Number} a 밑
 * @param {Number} b 지수
 * 
 * @returns {Number} 거듭제곱된 값 (a, b가 Number가 아니면 NaN)
 */
exports.pow = (a, b) => {
 return Math.pow(a, b)
}

/**
 * a에 루트(√)를 씌운 값, 제곱근을 리턴합니다
 * @param {Number} a 루트(√)를 씌울 값
 * 
 * @returns {Number} a의 제곱근 (a가 음수일경우 -1을 리턴)
 */
exports.sqrt = (a) => {
    return Math.sqrt(a)	
}

/**
 * a과 b의 사이(a, b를 포함)의 난수를 리턴합니다
 * @param {Number} a 난수의 최소값
 * @param {Number} b 난수의 최대값
 * 
 * @returns {Number} a에서 b까지의 난수 (a, b가 Number가 아니면 NaN)
 */
exports.random = (a, b) => {
var ranNum = Math.floor(Math.random() * (b - a + 1)) + a;
  return ranNum
}

/**
 * a에서부터 b까지의 모든 소수(素數)들을 배열로 리턴합니다
 * @param {Number} a 소수 검색의 최소값
 * @param {Number} b 소수 검색의 최대값
 * 
 * @returns {Array.<Number>} 소수들의 배열 (b가 a보다 크거나, a부터 b까지의 소수가 없으면 빈 배열)
 */
exports.primenumbers = (a, b) => {
    let results = []
    for (let i = a; i <= b; i++) {
        let isPrimeNumber = true
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrimeNumber = false
            }
        }

        if (isPrimeNumber) {
            results.push(i)
        }
    }

    return results
}

/**
 * a의 반지름을 가진 원의 원주를 리턴합니다
 * @param {Number} a 원의 반지름
 * 
 * @returns {Number} 원의 원주 (a가 Number가 아니면 NaN)
 */
exports.pi2 = (a) => {
    return 2 * Math.PI * a
}

/**
 * 원주율을 리턴합니다
 * @returns {Number} 원주율
 */
exports.pi = Math.PI

/**
 * 소수(小數) a를 반올림 하여 정수인 값을 리턴합니다
 * @param {Number} a 반올림할 소수
 * @returns {Number} a를 반올림한 정수
 */
exports.round = (a) => {
   return Math.round(a)
}

/** Official Site & Guild */
exports.official = {
    discord: 'https://discord.gg/KNBGZU2',
    github: 'https://github.com/ttakkku/Sangoon_Is_Math'
}

/** Module Testing Bot Tag */
exports.tag = 'Sangoon_Is_Noob#0972'

/** Author Info */
exports.discord = {
    tag: 'CY8ER#5278',
    love: 'Discord Love~'
}
