import API from '../../../api/API'
const api = new API()

export default {
	methods: {
		getVcode(phone) {
			return api.post(`/saxophone1/saxo/getPCMsgCode?phone=${phone}&apporpc=app`)
				.then(res => {
				})
				.catch(err => {
					alert('服务器异常，请稍后重试！')
				});
		},
		signupAction(phone, password, msgCode){
			return api.post(`/saxophone1/saxo/rigesterPC?phone=${phone}&apporpc=app&password=${password}&msgCode=${msgCode}`)
				.then(res => {
					return res.data
				})
				.catch(err => {
				});
		}
	}
}