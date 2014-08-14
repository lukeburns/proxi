var test = require('tape');
var proxy = require('./');

test('proxies all prototype methods of a given object', function (t) {
  t.plan(3);

  var name = 'object!',
      prox = {},
      obj = new Obj('object!');

  prox = proxy(prox, obj);
  for (var key in obj) {
      console.log(key)
    if (typeof obj[key] === 'function' && typeof obj[key] === 'function') {
      t.ok(prox[key]() === name, key + ' proxied!');
    }
  }
});

function Obj (name) {
  this.name = name;
}
Obj.prototype.a = function () { return this.name; }
Obj.prototype.b = function () { return this.name; }
Obj.prototype.c = function () { return this.name; }