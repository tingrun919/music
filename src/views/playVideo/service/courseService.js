import API from '../../../api/API'
const api = new API()

export default {
	methods: {
		getVideo() {
			return api.get(`/saxophone1/notoken/userMain`)
				.then(res => {
					this.videoList = res.data.data.goodclass
				})
				.catch(err => {
				});
		}
	}
}