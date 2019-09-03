// HTTP Request file
import axios from 'axios'
import {DeviceEventEmitter} from 'react-native'
import User from '../component/store/user'

const httpConfig = {
  baseURL: '',
  headers: {},
  responseType: 'json',
}

const Request = axios.create(httpConfig)

/* eslint-disable no-underscore-dangle */

function InterceptorsRequest(config) {
  config.headers['Content-Type'] = 'application/json'
  config.headers['Accept'] = 'application/json'
  if(User.token != ''){
    config.headers['Authorization'] = User.token
  }
 
  console.log('API_REQUEST:', config)
  return config
}


const _handleCommonError = (errorResponse) => {
  // TODO: Handle Error
  if (errorResponse.message) {
  }
}

const _interceptorsResponseError = (error) => {
  switch (error.status) {
    case 401:
        DeviceEventEmitter.emit('callLogoutMethod',  {})  
        break
    default:
        _handleCommonError(error)
        break
  }
}

// Add a request interceptor
Request.interceptors.request.use(
  (config) => {
    return InterceptorsRequest(config)
  },
  (error) => {
    console.log('API_REQUEST_ERROR:', error)
    return Promise.reject(error.response)
  },
)

// Add a response interceptor
Request.interceptors.response.use(
  (response) => {
    console.log('API_RESPONSE:', response)
    return response
  },
  (error) => {
    console.log('API_RESPONSE_ERROR', JSON.stringify(error.response.data))
    _interceptorsResponseError(error.response)
    return Promise.reject(error)
  },
)

export const uploadImage = (api_url,params) => {

    console.log('user profile update', params)

    const instance = axios.create({
        baseURL: api_url,
        timeout: 10000,
        headers: {
            'Authorization': User.token,
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
        },
    });

    let formdata = new FormData();
    if (params.image.uri != null) {
        formdata.append("user_image", {
            uri: params.image.uri,
            type: "image/png",
            name: params.image.name,
        });
    }
    // Object.keys(params).forEach(e => formdata.append(e,params[e] || ''));
    return instance.post(api_url,formdata);
}

export const Submit = (api_url,params) => {
    console.log("params",params)
    const instance = axios.create({
        baseURL: api_url,
        timeout: 20000,
        headers: {
            'Authorization': User.token,
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
        },
    });

    // Object.keys(params).forEach(e => formdata.append(e,params[e] || ''));
    return instance.post(api_url,params);
}


export default Request
