import axios from 'axios'

axios.defaults.baseURL = 'http://192.168.10.196:80/';//公司 
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
class API {

	get(url, params) {
		return axios.get(url, params);
	}

	post(url, params) {
		return axios.post(url, params);
	}

}
export default API;
