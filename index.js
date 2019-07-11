const fetch = require('node-fetch');

// get
module.exports.get = async url => {
  // console.log(url);
  const response = await fetch(url);
  const resData = await response.json();
  return resData;
};

// post
module.exports.post = async (url, data) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  const resData = await response.json();
  return resData;
};

// put
module.exports.put = async (url, data) => {
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  const resData = await response.json();
  return resData;
};

// delete
module.exports.delete = async url => {
  await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json'
    }
  });
  const resData = await 'delete success';
  return resData;
};
