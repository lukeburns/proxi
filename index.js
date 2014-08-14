var util = require('util');

module.exports = proxi

function proxi (proxy, obj, keys) {
  for (var key in obj) {
    if (util.isFunction(obj[key]) && (!keys || keys.indexOf(key) != -1)) {
      proxy[key] = obj[key].bind(obj);
    }
  }
  return proxy;
}