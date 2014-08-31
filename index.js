module.exports = proxi;

function proxi (proxy, obj, keys) {
  for (var key in obj) {
    if (typeof obj[key] == 'function' && (!keys || keys.indexOf(key) != -1)) {
      proxy[key] = obj[key].bind(obj);
    }
  }
  return proxy;
}