/*!
 * name: next-size2byte
 * link: https://github.com/afeiship/next-size2byte
 * version: 1.0.0
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var SIZE_LIST = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  var DEFAULT_OPTIONS = { decimal: 4 };

  nx.size2byte = function(inSize, inOptions) {
    if (inSize === 0) return [0, 'B'];
    var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
    var k = 1024;
    // Math.log() 返回数字的自然对数 log(b)/log(a)=loga(b)) 换底公式 log以a为底b的对数
    // Math.floor(x) -- 向下取整，返回小于或等于x的值
    // Math.pow(x,y) -- 返回以x的y次幂，等同于x^y的数值表达式
    var i = Math.floor(Math.log(inSize) / Math.log(k));
    var num = (inSize / Math.pow(k, i)).toFixed(options.decimal);
    var unit = SIZE_LIST[i];
    return [num * 1, unit];
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.size2byte;
  }
})();
