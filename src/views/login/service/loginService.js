import API from '../../../api/API'
const api = new API()

export default {
	methods: {
		loginAction(phone, password) {
			return api.post(`/saxophone1/saxo/login?phone=${phone}&password=${password}&apporpc=app`)
				.then(res => {
					return res.data
				})
				.catch(err => {
				});
		}
	}
}