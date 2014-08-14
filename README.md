proxi
=====

create a proxy from an object.

usage
=====

proxi mutates a given `proxy` object, adding bound methods from `obj`. The optional `keys` argument specifies which methods to be proxied.

```
proxi(proxy, obj, [keys]);
```

example
=======
```
var proxyStream = proxy({}, writable, ['write', 'end']);
proxyStream.write(data) // writable.write(data);
proxyStream.end(); // writable.end();
```

installation
============

```
npm install proxi
```