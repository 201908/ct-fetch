# mr-fetch polyfill

`fetch()` 函数用于请求接口,其中包含 fetch.get() / fetch.post() / fetch.push() / fetch.delete()。

## Installation

```
npm install ms-fetch --save

const fetch = require('ms-fetch');
```

## Usage

For a more comprehensive API reference that this polyfill supports, refer to
https://github.com/hemiahwu/mr-fetch

### Importing

Importing will automatically polyfill `window.fetch` and related APIs:

```javascript
import 'ms-fetch';
```

### GET JSON

```javascript
fetch.get('http://jsonplaceholder.typicode.com/users').then(users => {
  console.log(users);
});
```

### Post JSON

```javascript
var users = {
  name: 'name',
  age: 'age'
};

fetch.post('/users', users).then(res => console.log(res));
```

### PUT JSON

```javascript
var users = {
  name: 'name',
  age: 'age'
};

fetch.put('/users/:id', users).then(res => console.log(res));
```

### DELETE JSON

```javascript
var users = {
  name: 'name',
  age: 'age'
};

fetch.delete('/users/:id').then(res => console.log(res));
```
