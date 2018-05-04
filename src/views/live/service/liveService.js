import API from '../../../api/API'
const api = new API()

export default {
	methods: {
		getLiveData() {
			return api.get(`/saxophone1/saxo/intodirect1?aid=41&webtoken=5F7642BB099510588F20FA3261C4BA82`)
				.then(res => {
					this.channel = res.data.data.channel
				})
				.catch(err => {
				});
		}
	}
}