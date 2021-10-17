import axios from 'axios';
// import getOptions from 'utils/services.ultils';

const backendUrl = 'http://52.221.245.187:90';

export async function getDataByPath(path) {
  try {
    let endpoint = `${backendUrl}`;
    if (path !== '') {
      endpoint = `${backendUrl}/${path}`;
    }
    const res = await axios.get(endpoint);
    return res;
  } catch (error) {
    return error.response;
  }
}

export async function updateDataAccount(path, data) {
  try {
    let endpoint = `${backendUrl}`;
    let body = {};
    if (path !== '') {
      endpoint = `${backendUrl}/${path}`;
    }
    if (data !== '') {
      body = data;
    }
    const res = await axios.put(endpoint, body);
    return res;
  } catch (error) {
    return error.response;
  }
}

export async function deleteDataAccount(path) {
  try {
    let endpoint = `${backendUrl}`;
    if (path !== '') {
      endpoint = `${backendUrl}/${path}`;
    }
    const res = await axios.delete(endpoint);
    return res;
  } catch (error) {
    return error.response;
  }
}


//#region CRUD endpoint use Promise

export function getItems(url) {
  return new Promise(function(resolve) {
    let endpoint = `${backendUrl}/${url}`;
    axios.get(endpoint).then(result => {
      resolve(result);
    }).catch(err => {
      resolve(err);
    })
  });
}

export function getItem(url, id) {
  return new Promise(function(resolve) {
    let endpoint = `${backendUrl}/${url}/${id}`;
    axios.get(endpoint).then(result => {
      resolve(result);
    }).catch(err => {
      resolve(err);
    })
  });
}

export function addItem(url, data) {
  return new Promise(function(resolve) {
    let endpoint = `${backendUrl}/${url}`;
    let dataPost = JSON.stringify(data);
    axios.post(endpoint, dataPost).then(result => {
      resolve(result);
    }).catch(err => {
      resolve(err);
    })
  });
}

export function updateItem(url, id, data) {
  // update item thì data post không chứa id, id sẽ ở trên endpoint
  return new Promise(function(resolve) {
    let endpoint = `${backendUrl}/${url}/${id}`;
    let dataPost = JSON.stringify(data);
    axios.put(endpoint, dataPost).then(result => {
      resolve(result);
    }).catch(err => {
      resolve(err);
    })
  });
}

//#endregion
