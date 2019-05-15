import axios from 'axios'
import qs from 'qs'
axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : 'https:www.baidu.com'
axios.defaults.withCredentials = true;
// axios.defaults.timeout = 6000;
// axios.defaults.retry = 2;
// axios.defaults.retryDelay = 1000;
// axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8';

// axios 封装请求
export let $axios = {
    post: function (url,params) {
      params=params || "";
      return axios({
        url:url,
        method: 'post',
        data: qs.stringify(params),
      });
    },
    get: function (url,params) {
      params=params || "";
      return axios({
        url:url,
        method: 'get',
        params: params,
      });
    }
  };

  axios.interceptors.response.use(
    function (response) {
      return response
    },
    function (error) {
      if (error.response) {
        if (error.response.status === 401 || error.response.status === 404) {
          return console.log('状态码...' , error.response.status)
        }
        console.log('a:', error.response.data)
        return console(error.response.data.message)
        console.log('b:', error.response.status)
        console.log('c:', error.response.headers)
      } else if (error.request) {
        console.log('d:', error.request)
      } else {
        console.log('e:', error.message)
        // return Toast.open(error.message)
      }
      console.log('f:', error.config)
      return Promise.reject(error)
    }
  )

  export let ws = new WebSocket("ws://localhost:8180")

        // ws.onopen = function (e) {
        //     console.log('Connection to server opened');
        // }
    
        // function sendMessage() {
        //     ws.send('12');
        // }
        // ws.onmessage = function (event) {
        //     console.log(event)
        // }
    
        // function closews() {
        //     console.log('链接已关闭')
        // }